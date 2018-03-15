/**
 * 
 */

// 日期选择器
$(function() {
	$("#date1").datepicker({
		dateFormat : "yy-mm-dd",
		changeMonth : true,
		changeYear : true
	});
	$("#date2").datepicker({
		dateFormat : "yy-mm-dd",
		changeMonth : true,
		changeyear : true
	})
});

/*
 function valdiate() {
 var stockinfo = new Object();
 stockinfo.stock_code = $("stock_code").val();
 stockinfo.stock_name = $("stock_name").val();
 stockinfo.trading_market = $("#trading_market").val();
 stockinfo.offering_price = $("#offering_price").val();
 stockinfo.pe_ratio = $("#pe_ratio").val();
 stockinfo.launch_date = $("#launch_date").val();
 stockinfo.maturity_date = $("#maturity_date").val();
=======
$("#validate_add").on("click",function(){  
    $('#shareinfo').ajaxSubmit(      //ajax方式提交表单  
         {  
             url: 'insertsharesinfo.do',  
             type: 'post',  
             dataType: 'json',  
         });  
});
function validate_add(){
	console.log($("#stock_code").val());
	var stockinfo = new Object();
	stockinfo.stockCode = $("#stock_code").val();
	stockinfo.stockName = $("#stock_name").val();
	stockinfo.tradingMarket = $("#trading_market").val();
	stockinfo.offeringPrice = $("#offering_price").val();
	stockinfo.peRatio = $("#pe_ratio").val();
	stockinfo.launchDate = $("#launch_date").val();
	stockinfo.maturityDate = $("#maturity_date").val();
	
	$.ajax({
		url : 'insertsharesinfo.do',
		type : 'post',
		data : {
			StockInfo: stockinfo
		},
		dataType : 'JSON',
		success : function(data) {
			//回调函数				
		}
	});
}

>>>>>>> 03884453ecea3829249f183171e89753fe34dec4

 $.ajax({
 url : 'insertsharesinfo.do',
 type : 'post',
 data : {
 StockInfo : stockinfo
 },
 dataType : 'JSON',
 success : function(data) {
 // 回调函数
 }
 });
 }*/

/*
 var stock_code = $("#stock_code").val(); 
 var stock_name =$("#stock_name").val(); 
 var trading_market = $("#trading_market").val(); 
 var offering_price = $("#offering_price").val(); 
 var pe_ratio = $("#pe_ratio").val(); 
 var launch_date = $("#launch_date").val(); 
 var maturity_date = $("#maturity_date").val();
 */

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
				if(data[0] == ["success"] ){
					$("#errorTip").html("");	
				}else{
					$("#errorTip").html("股票代码已存在！");
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
	if (time2 < time1 || time2 == time1 ) {
		alert("到期日必须大于上市日期");
	}
}
