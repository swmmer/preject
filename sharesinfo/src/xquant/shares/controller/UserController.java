package xquant.shares.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

import xquant.shares.model.User;
import xquant.shares.service.UserService;

@Controller
public class UserController {
	@Autowired
	private UserService userService;

	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	/**
	 * <p>接口名称: 登陆
	 * <p>主要描述：
	 * <p>访问方式(建议)：post
	 * <p>URL: login.do
	 * <p>使用对象: web
	 * <p>参数说明:
	 * <pre>
	 * |名称                                    |类型               |是否必须                     |默认值	       |说明
	 * username         string        Y             NULL           用户名
	 * password         String        Y             null           密码
	 * </pre>
	 * <p>返回数据:
	 * <pre>
		{
			  jsonObject,  用户信息
		}
	  * </pre>
	  */
	@RequestMapping("login")
	@ResponseBody
	public String login(String username,String password, HttpServletRequest request) {
		User loginUser = new User();
		User user;
		loginUser.setUsername(username);
		loginUser.setPassword(password);
		user = userService.login(loginUser);
		if (user != null) {
			HttpSession session = request.getSession();
			session.setAttribute("username",loginUser.getUsername());
		}
		Gson gson = new Gson();
		String json = gson.toJson(user);
		return json;
	}

}
