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
				stockCodeDel : stockCodeTemp 
			},
			dataType : 'JSON',
			success : function(data) {
				search(this);
			}
		});
	}