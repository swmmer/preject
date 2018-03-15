<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>衡泰股票系统</title>
<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
<script type="text/javascript" src="js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript">
function check_admin() {
	// 异步地向服务器发送请求
	// 服务器返回 json 字符串,更新数据
	$.ajax({
		url : 'login.do',
		type : 'post',
		data : {
				username : $('#adminCode').val(),
				password : $('#adminPwd').val()
		},
		dataType : 'JSON',
		success : function(data) {
			console.log(data);
			// data 是服务器返回的数据,如果返回的是 json 字符串,会自动转换成相应的 js 对象
			if (data == null) {
				$('#adminTip').text("账号或密码错误!")
			} else {
				// 登录成功跳转到后台页面
				location.href = 'index.jsp';
			}
		}
	});
}

</script>
</head>
<body>
<%-- action="<%=request.getContextPath() %>/login.do" method="post" --%>
<div class="container-fluid">
	<div class="row-fluid">
		<div class="span2">
		</div>
		<div class="span8">
		 
			<img src="img/login.png" class="img-polaroid"><br>
			
			<h3 style="display: inline;">衡泰股票系统</h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			 用户名:<input id="adminCode" type="text" class="input-small" placeholder="User">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			 密码: <input id="adminPwd" type="password" class="input-small" placeholder="Password">&nbsp;&nbsp;
			<button class="btn btn-primary" onclick="check_admin();">登陆</button>
			<span id="adminTip"></span>
			
		
		</div>
		<div class="span2">
		</div>
	</div>
</div>

   
</body>
</html>