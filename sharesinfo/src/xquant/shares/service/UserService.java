package xquant.shares.service;

import java.util.List;  
import xquant.shares.model.User;  
  
public interface UserService {  
    String addInfo(User addInfo);  
    List<User> getAll();  
    String delete(int id);  
    User findById(int id);  
    String update(User addInfo);  
    User login(User user);  
}  