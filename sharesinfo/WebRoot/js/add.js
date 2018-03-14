/**
 * 
 */

//日期选择器
$(function() {
	$("#launch_date").datepicker({
		dateFormat : "yy-mm-dd",
		changeMonth : true,
		changeYear : true
	});
	$("#maturity_date").datepicker({
		dateFormat : "yy-mm-dd",
		changeMonth : true,
		changeyear : true
	})
});

function valdiate_add(){
	var stockinfo = new Object();
	stockinfo.stock_code = $("stock_code").val();
	stockinfo.stock_name = $("stock_name").val();
	stockinfo.trading_market = $("#trading_market").val();
	stockinfo.offering_price = $("#offering_price").val();
	stockinfo.pe_ratio = $("#pe_ratio").val();
	stockinfo.launch_date = $("#launch_date").val();
	stockinfo.maturity_date = $("#maturity_date").val();
	
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



var stock_code = $("stock_code").val();
var stock_name = $("stock_name").val();
var trading_market = $("#trading_market").val();
var offering_price = $("#offering_price").val();
var pe_ratio = $("#pe_ratio").val();
var launch_date = $("#launch_date").val();
var maturity_date = $("#maturity_date").val();

//检查股票代码是否正常
function check_stockcode() {
	var stock_code = $("stock_code").val();
	if ((stock_code.toString).length < 6) {
		$("#stock_code").val("");
	}
	else{
		//---------用ajax进行判断股票代码是否重复。
		$.ajax({
			url : 'validatestockcode.do',
			type : 'post',
			date : {
				stockCode : stockcode
			},
		    dataType : 'JSON',
			success : function(data) {
				//回调函数
				aletr("没有重复");				
			}
		
		})
	}
}

//比较输入的到期日是否大于上市日期
function compare_date() {
	var date1 = launch_date.replace(/\-/gi, "/");
	var date2 = maturity_date.replace(/\-/gi, "/");
	var time1 = new Date(date1).getTime();
	var time2 = new Date(date2).getTime();
	if (time2 < time1 || time2 == time1) {
		alert("到期日必须大于上市日期");
	} else {
		$.ajax({
			url : 'insertsharesinfo.do',
			type : 'post',
			data : {
				stockCode : stock_code,
				stockName : stock_name,
				tradingMarket : trading_market,
				offeringPrice : offering_price,
				peRatio : pe_ratio,
				launchDate : launch_date,
				maturityDate : maturity_date				
			},
			dataType : 'JSON',
			success : function(data) {
				//回调函数
				aletr("插入数据成功");				
			}
		});
	}
}

//检查字段是否为空
function check_isempty() {
	if ( stock_name == "" && trading_market == "" && offering_price == "" && pe_ratio == ""){
		alert("所有字段均不能为空");
	} else {
		compare_date();
	}
}

