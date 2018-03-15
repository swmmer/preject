<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%if (session.getAttribute("username")==null)
		response.sendRedirect("login.jsp");%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<link rel="stylesheet" type="text/css"
	href="bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="jqueryui/jquery-ui.min.css">
<script type="text/javascript" src="js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
<script src="jqueryui/jquery-ui.min.js"></script>

<script src="js/add.js"></script>
<script type="text/javascript">
//获取修改记录的内容
$(function(){
	var stockcodeTemp = location.search;
	if(stockcodeTemp.substr(1)== -1 || stockcodeTemp.substr(1) == ""){
		return;
	}
	$.ajax({
		url : 'getSharesInfo.do',
		type : 'post',
		data : {
			stockCode : stockcodeTemp.substr(1)
		},
		dataType : 'JSON',
		success : function(data) {
			console.log(data);
			//将该条记录的字段写入到每个输入框
			$("#stock_id").val(data[0].id);
			$("#stock_code").val(data[0].stockCode);
			$("#stock_name").val(data[0].stockName);
			$("#trading_market").val(data[0].tradingMarket);
			$("#offering_price").val(data[0].offeringPrice);
			$("#pe_ratio").val(data[0].peRatio);
			$("#launch_date").val(data[0].launchDate);
			$("#maturity_date").val(data[0].maturityDate);
		}
	});
	
});
</script>

<title>衡泰股票系统-股票信息录入</title>
</head>
<body style="margin: 10px;">

	<div class="container-fluid" style="margin-top: 20px;">
		<div class="row-fluid">
			<div class="span2"></div>

			<div class="span8">
				<div class="navbar-inner" style="margin: 10px auto;">
					<p class="text-center text-info"
						style="margin: 10px; font-size: 20px;">股神巴菲特第四研究组</p>
				</div>
				<div class="span2"
					style="height: 800px; border: 1px, solid, #ccc; background-color: #fafafa">
					<div class="accordion-group">
						<div class="accordion-heading">
							<a class="accordion-toggle" data-toggle="collapse"
								href="#collapseTwo">数据查询</a>
						</div>
					</div>
					<div id="collapseTwo" class="accordion-body collapse">
						<div class="accordion-inner">
							<a href="main.jsp">股票查询</a>
						</div>
					</div>
				</div>
				<div class="span8">
					<form class="form-inline"
						action="<%=request.getContextPath() %>/updatesharesinfo.do" method="post">
						<input type="hidden" id="stock_id" name="id"/>
						<table class="table">
							<tr>
								<td><span>股票代码：</span> <input type="text"
									placeholder="请输入6位股票代码" id="stock_code" MaxLength=6
									onblur="check_stockcode();" name="stockCode" required /></td>
							</tr>
							<tr>
								<td><span>股票名称：</span> <input type="text" id="stock_name"
									name="stockName" required /></td>
								<td><span>交易市场：</span> <input type="text"
									id="trading_market" name="tradingMarket" required /></td>
							</tr>

							<tr>
								<td><span>发行价格：</span> <input type="text"
									id="offering_price" name="offeringPrice" required /></td>
								<td><span>发行市盈率：</span> <input type="text" id="pe_ratio"
									name=peRatio required /></td>
							</tr>
							<tr>
								<td><span>上市日期：</span> <input id="launch_date" type="text" name="launchDate"
									placeholder="请选择日期" /></td>
								<td><span>到期日：</span> <input id="maturity_date" type="text" name="maturityDate"
									placeholder="请选择日期" /></td>
							</tr>

							<tr>
								<td><input class="btn btn-primary" type="submit"
										style="float: right; margin-right: 58px; margin-top: 25px;"
										onclick="compare_date();" value = "提交"></td>
								<td><button class="btn btn-primary" type="button"
										style="float: left; margin-right: 58px; margin-top: 25px;"
										onclick="window.location.href='main.jsp'">取消</button></td>
							</tr>
						</table>
					</form>
				</div>
			</div>
			<div class="span2"></div>
		</div>
	</div>
</body>
</html>