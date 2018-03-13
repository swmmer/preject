package xquant.shares.service.impl;

import java.util.List;  

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
    public String addInfo(User addInfo) {  
        if (userDao.insertSelective(addInfo) == 1) {  
            return "添加成功";  
        }  
        return "添加失败";  
    }  
    @Override  
    public List<User> getAll() {  
        return userDao.getAll();  
    }  
    @Override  
    public String delete(int id) {  
        if (userDao.deleteByPrimaryKey(id) == 1) {  
            return "删除成功";  
        }  
        return "删除失败";  
    }  
    @Override  
    public User findById(int id) {  
        return userDao.selectByPrimaryKey(id);  
    }  
    @Override  
    public String update(User addInfo) {  
        if (userDao.updateByPrimaryKeySelective(addInfo) == 1) {  
            return "更新成功";  
        }  
        return "更新失败";  
    }  
    @Override  
    public User login(User user) {  
        return userDao.selectByUsernameAndPassword(user);  
    }  
}  