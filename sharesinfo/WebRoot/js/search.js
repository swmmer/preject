//设置每页显示数目，展示页数
var pageItems = 5;

/*
 * 绑定回车监听给查询键
 */
$(document).keyup(function(event) {
	if (event.keyCode == 13) {
		$("#btn_search").trigger("click");
	}
});

/*
 * 绑定上一页按钮功能
 */
$(document).on("click", ".beforepage", function() {
	if ($("#currPageNum").val() > 1) {
		var num = parseInt($("#currPageNum").val()) - 1;
		$("#currPageNum").val(num);
		search(this);
	} else {
		return;
	}
});

/*
 * 绑定下一页按钮功能
 */
$(document).on("click", ".afterpage", function() {
	if ($("#currPageNum").val() < $.cookie('pageCount_cookie')) {
		var num = parseInt($("#currPageNum").val()) + 1;
		$("#currPageNum").val(num);
		search(this);
	} else {
		return;
	}
});

/*
 * 绑定转到按钮功能
 */
$(document).on("click", ".goto", function() {
	search(this);
});

/*
 * 查询数据
 * 
 */
function search(obj) {

	// 如果是点击查询，则存cookie
	if (obj == "btn_search") {
		// 将当前查询条件存入cookie
		$.cookie('search_cookie', $('#content').val().split(' ')[0]);
		// 向后台发起查询请求
		$.ajax({
			url : 'getSharesInfo.do',
			type : 'post',
			data : {
				stockCode : $('#content').val().split(' ')[0]
			},
			dataType : 'JSON',
			success : function(data) {
				// 调用展示函数，当前页码指定为1
				showData(data, 1);
			}
		});
	} else {
		// 点击 转到 或者 上一页 下一页 的查询
		$.ajax({
			url : 'getSharesInfo.do',
			type : 'post',
			data : {
				//根据之前的查询条件查
				stockCode : $.cookie('search_cookie')
			},
			dataType : 'JSON',
			success : function(data) {
				// 调用展示函数，传入当前页码
				showData(data, $("#currPageNum").val());
			}
		});

	}
}

/*
 * 对查询的结果进行表格展示(分页)
 */
function showData(data, pageNum) {
	// 清空原有表格内容
	$("#tbody_data").empty();
	// 用来添加的行
	var $newTr;
	//获取到本次查询的总页数
	var pages = Math.ceil(data.length / pageItems);
	$("#showPageCounts").text('共  ' + pages + ' 页');
	// 将总页数存入cookie
	$.cookie('pageCount_cookie', pages);
	// 显示当前页码
	$("#currPageNum").val(pageNum);
	if($("#currPageNum").val() > pages){
		$("#currPageNum").val(pages);
		pageNum = pages;
	}
	// 遍历数据并展示当前页
	$.each(data,function(idx, obj) {
						if (idx >= ((pageNum - 1) * pageItems)) {
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
									+ '<td><a id="btnmodify" onclick="toModify(this);" role="button" class="btn btn-link">修改</a>'
									+ ' <a id="btndelete" onclick="delRow(this);" href="#deletetip" role="button" class="btn btn-link" data-toggle="modal">删除</a></td>'
									+ '</tr>');
							$("#tbody_data").append($newTr);
						}
						//每页只显示指定条数
						if (idx == pageNum * pageItems - 1) {
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
						// 选择股票代码和股票名展示
						tempArr.push(obj.stockCode + '  ' + obj.stockName);
					});
					process(tempArr);
				}
			});
		},
		items : 10, // 设置展示10条 默认8条
	});
});

/*
 * 检查搜索的 页码是否小于总页数
 */
function checkSearchNum() {
	if(isNaN($("#currPageNum").val())||$("#currPageNum").val()==0){
		$("#currPageNum").val("1");
		return;
	}
	var input = parseInt($("#currPageNum").val());
	if (input > $.cookie('pageCount_cookie')) {
		$("#currPageNum").val($.cookie('pageCount_cookie'));
	}
}