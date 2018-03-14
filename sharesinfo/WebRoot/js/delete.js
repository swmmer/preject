var stockCodeTemp;
/*
 * 获取点击行的股票代码
 */
function delRow(obj){
	var $tds = $(obj).parent().siblings();
	stockCodeTemp = $tds.eq(0).html();
}
function delData(){
	console.log("进入删除");
	$.ajax({
		url : 'deleteByStockCode.do',
		type : 'post',
		data : {
			stockCodeDel : stockCodeTemp ,
			stockCodeSearch : $.cookie('search_cookie')
		},
		dataType : 'JSON',
		success : function(data) {
			showData(data, $.cookie('page_cookie'));
		}
	});
}		