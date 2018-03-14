
//设置每页显示数目，展示页数
var pageItems = 5;


/*
 * 绑定回车监听给查询键
 */
$(document).keyup(function(event){
	 if(event.keyCode ==13){
		 $("#btn_search").trigger("click");
	 }	 
});

/*
 * 绑定查询功能给页码按钮
 */
$(document).on("click",".pagechoose",function(){  
    search(this);
}); 

/*
 * 绑定上一页按钮功能
 */
$(document).on("click",".beforepage",function(){
	var temp = this;
	//获取上一次点击的页码
	var beforeNum = $.cookie('page_cookie');
	if(beforeNum > 1){
		temp.innerHTML = parseInt(beforeNum)-1;
		search(temp);
	}
}); 

/*
 * 绑定下一页按钮功能
 */
$(document).on("click",".afterpage",function(){  
	var temp = this;
	//获取上一次点击的页码
	var beforeNum = $.cookie('page_cookie');
	//获取总页码
	var countPages = $.cookie('pageCount_cookie');
	if(beforeNum < countPages){
		temp.innerHTML = parseInt(beforeNum)+1;
		search(temp);
	}
    
}); 

/*
 * 查询数据
 * 
 */
function search(obj) {
	
	//如果是点击查询，则存cookie
	if(obj=="btn_search"){
		//将当前查询条件存入cookie
		$.cookie('search_cookie',$('#content').val().split(' ')[0]);
		//查询时指定页码cookie为1
		$.cookie('page_cookie',1);
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
			showData(data,1);
		}
		});
	}else{
		//点击页码时的查询
		$.cookie('page_cookie',obj.innerHTML);
		$.ajax({
			url : 'getSharesInfo.do',
			type : 'post',
			data : {
				stockCode : $.cookie('search_cookie')
			},
			dataType : 'JSON',
			success : function(data) {
				//调用展示函数
				showData(data,obj.innerHTML);
			}
			});
		
	}
}

/*
 * 对查询的结果进行表格展示(分页)
 */
function showData(data,pageNum) {
	// 清空原有表格内容
	$("#tbody_data").empty();
	//清空分页
	$("#paging").empty();
	//用来添加的行
	var $newTr;
	//用来添加的分页数字
	var $newM='';
	
	var pages = Math.ceil(data.length/pageItems);
	//将总页数存入cookie
	$.cookie('pageCount_cookie',pages);
	for(var i = 1; i <= pages ;i++){
		$newM = $newM +'<li><a class="pagechoose" href="#">'+i+'</a></li>';
	}
	$("#paging").append('<ul><li class="end"><a href="#" class="beforepage">上一页</a></li>'+$newM+'<li class="start"><a href="#" class="afterpage">下一页</a></li></ul>');
	
	//遍历数据并展示部分
	$.each(
			data,
			function(idx, obj) {
				if(idx >= ((pageNum-1)*pageItems)){
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
				}
				//第一页只显示指定条数
				if(idx==pageNum*pageItems-1){
					return false;
				}
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