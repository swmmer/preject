package xquant.shares.controller;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;  
import org.springframework.stereotype.Controller;  
import org.springframework.web.bind.annotation.RequestMapping;  
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
    public String login(User user,HttpServletRequest request){   
    	
            User loginUser = null;  
            loginUser=userService.login(user);  
            if(loginUser!=null){ 
            	 HttpSession session = request.getSession();
            	 session.setAttribute("username", loginUser);
                return "index";  
            }else{  
                return "out";  
            }  
    }  
  
}  
