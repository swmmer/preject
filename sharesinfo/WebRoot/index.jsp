<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%if (session.getAttribute("username")==null)
		response.sendRedirect("login.jsp");%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>衡泰股票系统</title>
	<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
	<script type="text/javascript" src="js/jquery-1.11.1.js"></script>
	<script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
</head>
<body style="margin:10px;">
<div class="container-fluid" style="margin-top:20px;">
	<div class="row-fluid">
		<div class="span2"></div>
		
		<div class="span8">
			<div class="navbar-inner" style=" margin: 10px auto ;">
				<p class="text-center text-info" style="margin:10px;font-size: 20px;">衡泰股票系统</p>
			</div>
			<div class="span2" style="height: 800px; border:1px,solid,#ccc;background-color: #fafafa ">
				<div class="accordion-group">
    				<div class="accordion-heading">
      					<a class="accordion-toggle" data-toggle="collapse" href="#collapseTwo">数据查询</a>
    				</div>
    			</div>	
    			<div id="collapseTwo" class="accordion-body collapse">
      				<div class="accordion-inner">
        			<a href="main.jsp">股票查询</a>
      				</div>
    			</div>
  			</div>
  			<div class="span8"></div>
		</div>

		<div class="span2"></div>
	</div>
</div>
</body>

</html>