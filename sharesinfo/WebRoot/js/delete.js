var stockCodeTemp;
function delRow(obj){
	var $tds = $(obj).parent().siblings();
	stockCodeTemp = $tds.eq(0).html();
}
function delData(){
	console.log("进入删除");
	$.ajax({
		url : 'toDelData.do',
		type : 'post',
		data : {
			stockCodeDel : stockCodeTemp ,
			stockCodeSearch : $.cookie('search_cookie')
		},
		dataType : 'JSON',
		success : function(data) {
			console.log("已经删除");
			showData(data);
		}
	}); 	
}		