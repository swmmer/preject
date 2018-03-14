$(document).keyup(function(event){
	 if(event.keyCode ==13){
		    $("#btn_search").trigger("click");
		  }	 
});
			
/*
 * 查询数据
 * 
 */
function search() {
	//将当前查询条件存入cookie
	$.cookie('search_cookie',$('#content').val().split(' ')[0]);
	// 向后台发起查询请求
	$.ajax({
		url : 'getSharesInfo.do',
		type : 'post',
		data : {
			stockCode : $('#content').val().split(' ')[0]
		},
		dataType : 'JSON',
		success : function(data) {
			//调用展示函数
			showData(data);
		}
	});
	
	
}

/*
 * 对查询的结果进行表格展示(分页)
 */
function showData(data) {
	// 清空原有表格内容
	$("#tbody_data").empty();
	//清空分页
	$("#paging").empty();
	//用来添加的行
	var $newTr;
	//用来添加的分页数字
	var $newM='';
	
	//设置每页显示数目，展示页数
	var pageItems = 5;
	var pageNum = Math.ceil(data.length/pageItems);
	for(var i = 1; i <= pageNum ;i++){
		$newM = $newM +'<li><a href="#">'+i+'</a></li>';
	}
	$("#paging").append('<ul><li class="end"><a href="#">上一页</a></li>'+$newM+'<li class="start"><a href="#">下一页</a></li></ul>');
	
	//遍历数据并展示
	$.each(
			data,
			function(idx, obj) {
				$newTr = $('<tr>' + '<td>'
						+ obj.stockCode
						+ '</td>'
						+ '<td>'
						+ obj.stockName
						+ '</td>'
						+ '<td>'
						+ obj.tradingMarket
						+ '</td>'
						+ '<td>'
						+ obj.offeringPrice
						+ '</td>'
						+ '<td>'
						+ obj.peRatio
						+ '</td>'
						+ '<td>'
						+ obj.launchDate
						+ '</td>'
						+ '<td>'
						+ obj.maturityDate
						+ '</td>'
						+ '<td><a id="btndelete" href="add.html" role="button" class="btn btn-link">修改</a>'
						+ ' <a id="btndelete" onclick="delRow(this);" href="#deletetip" role="button" class="btn btn-link" data-toggle="modal">删除</a></td>'
						+ '</tr>');
				$("#tbody_data").append($newTr);
			});
					
}

/*
 * 搜索提示
 */
$(document).ready(function() {
	$('#content').typeahead({
		source : function(query, process) {
			$.ajax({
				url : 'getSharesInfo.do',
				type : 'POST',
				dataType : 'JSON',
				data : {
					stockCode : $('#content').val()
				},
				success : function(data) {
					var tempArr = new Array();
					$.each(data, function(idx, obj) {
						//选择股票代码和股票名展示
						tempArr.push(obj.stockCode + '  ' + obj.stockName);
					});
					process(tempArr);
				}
			});
		},
		items : 10, // 设置展示10条 默认8条
	});
});