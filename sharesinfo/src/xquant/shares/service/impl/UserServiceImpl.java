package xquant.shares.service.impl;


import org.springframework.beans.factory.annotation.Autowired;  
import org.springframework.stereotype.Service;  
  
import xquant.shares.dao.UserDao;  
import xquant.shares.model.User;  
import xquant.shares.service.UserService;  
  
@Service("userService")  
public class UserServiceImpl implements UserService{  
    @Autowired  
    private UserDao userDao;  
    public UserDao getUserDao() {  
        return userDao;  
    }  
    public void setUserDao(UserDao userDao) {  
        this.userDao = userDao;  
    }
	@Override
	public User login(User user) {
		
		return userDao.selectByUsernameAndPassword(user);
	}  
    
    
    
    
	
}  