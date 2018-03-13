/*
 * 查询数据
 * 
 */
function search(id) {
	// 当输入框为空的时候保证提示框为空，并且不显示
	if (id == 'content' && $('#content').val() == '') {
		$("#tbody_tips").empty();
		$("#table_tips").css({
			"display" : "none"
		});
		return;
	}

	// 向后台发起查询请求
	$.ajax({
		url : 'search.do',
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

// 对查询的结果进行表格展示
function showData(data) {
	console.log(data);
	// 清空原有表格内容
	$("#tbody_data").empty();
	var $newTr;
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
						+ ' <a id="btndelete" href="#deletetip" role="button" class="btn btn-link" data-toggle="modal">删除</a></td>'
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
				url : 'search.do',
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