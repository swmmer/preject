/**
 * 
 */

// 日期选择器
$(function() {
	$("#launch_date").datepicker({
		dateFormat : "yy-mm-dd",
		changeMonth : true,
		changeYear : true
	});
	
	$("#maturity_date").datepicker({
		dateFormat : "yy-mm-dd",
		changeMonth : true,
		changeYear : true
	})
});

// 检查股票代码是否正常
function check_stockcode() {
	var stock_code = $("#stock_code").val();
	//alert("stock_code:" + stock_code)
	if (stock_code.toString().length < 6) {
		$("#stock_code").val("");
	} else {
		$.ajax({
			url : 'checkstockcode.do',
			type : 'post',
			data : {
				stockcode : $("#stock_code").val()
			},
			dataType : 'JSON',
			success : function(data) {
				if(data.length == 1){
					$("#errorTip").html("股票代码已存在！");
					$("#stock_code").val("");
				}else{
					$("#errorTip").html("");	
				}
			}
		});
	}
}

// 比较输入的到期日是否大于上市日期
function compare_date() {
	var launch_date = $("#launch_date").val();
	var maturity_date = $("#maturity_date").val();
	var date1 = launch_date.replace(/\-/gi, "/");
	var date2 = maturity_date.replace(/\-/gi, "/");
	var time1 = new Date(date1).getTime();
	var time2 = new Date(date2).getTime();
	console.log(1);
	if (time2 < time1 || time2 == time1 ) {
	    alert("到期日必须大于上市日期");
		return false;
	}
}

//限定股票名称只能为汉字
function checkstock_name(){
	var stock_name = $("#stock_name").val();
	var reg = /^[\u4e00-\u9fa5]{0,}$/;
	if(!reg.exec(stock_name)){
		$("#stock_name").val('');
	}
}

//限定发行价格只能为整数和小数
function checkoffering_price(){
	var offering_price = $("#offering_price").val();
	var reg = /^[0-9]+\.{0,1}[0-9]{0,2}$/g;
	if(!reg.exec(offering_price)){
		$("#offering_price").val('')
	}
}

//限定发行市盈率只能为整数和小数
function checkpe_ratio(){
	var pe_ratio = $("#pe_ratio").val();
	var reg = /^[0-9]+\.{0,1}[0-9]{0,2}$/g;
	if(!reg.exec(pe_ratio)){
		$("#pe_ratio").val('')
	}
}
