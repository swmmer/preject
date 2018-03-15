<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
<script type="text/javascript" src="js/jquery-1.11.1.js"></script>
	<script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container-fluid">
	<div class="row-fluid">
		<div class="span2">
		</div>
		<div class="span8">
		 <form class="form-inline" action="<%=request.getContextPath() %>/login.do" method="post" style="margin-top: 50px;">
			<img src="img/login.png" class="img-polaroid"><br>
			
			<h3 style="display: inline;">衡泰股票查询系统</h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			 用户名:<input type="text" class="input-small" placeholder="User" name="username" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			 密码: <input type="password" class="input-small" placeholder="Password" name="password">&nbsp;&nbsp;
			
			<button type="submit" class="btn btn-primary">登陆</button>
		</form>		
		
		</div>
		<div class="span2">
		</div>
	</div>
</div>

   
</body>
</html>