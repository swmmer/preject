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
			session.setAttribute("username", user);
		}
		Gson gson = new Gson();
		String json = gson.toJson(user);
		return json;
	}

}
