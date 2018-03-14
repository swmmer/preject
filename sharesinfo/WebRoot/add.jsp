<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
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
<!--
onblur="check_stockcode();"
-->

<title>录入信息</title>
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
							<a href="stock.html">股票查询</a>
						</div>
					</div>
				</div>
				<div class="span8">
					<form class="form-inline" action="<%=request.getContextPath() %>/insertsharesinfo.do" method="post">
						<table class="table">
							<tr>
								<td><span>股票代码：</span> <input type="text"
									placeholder="请输入6位股票代码" name="stockCode" MaxLength=6 required /></td>
							</tr>
							<tr>
								<td><span>股票名称：</span> <input type="text" name="stockName"
									required /></td>
								<td><span>交易市场：</span> <input type="text"
									name="tradingMarket" required /></td>
							</tr>

							<tr>
								<td><span>发行价格：</span> <input type="text"
									name="offeringPrice" required /></td>
								<td><span>发行市盈率：</span> <input type="text" name="peRatio"
									required /></td>
							</tr>

							<tr>
								<td><span>上市日期：</span> <input type="text" name="launchDate"
									placeholder="请选择日期" /></td>
								<td><span>到期日：</span> <input type="text" name="maturityDate"
									placeholder="请选择日期" /></td>
							</tr>

							<tr>
								<td><input class="btn btn-primary" type="submit"
										style="float: right; margin-right: 58px; margin-top: 25px;"
										value="录入"></td>
								<td><button class="btn btn-primary" type="button"
										style="float: left; margin-right: 58px; margin-top: 25px;"
										onclick=";">取消</button></td>
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