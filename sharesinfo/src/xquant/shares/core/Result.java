package xquant.shares.core;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;

/**
 * <p> 操作结果集
 */
public class Result {
	
	public static final String RESULT_OP_SUCCESS = "操作成功！";
	public static final String RESULT_OP_FAIL = "操作失败！";
	public static final String RESULT_OP_NOTONLINE = "未登录！";
	public static final String RESULT_OP_INVALIDPARA = "参数非法！";
	public static final String RESULT_OP_UNAUTHORITY = "未授权！";
//	重定向登录页面
	public static final String RETURN_JSP_LOGIN 	= "login.jsp";
//	重定向参数异常页面
	public static final String RETURN_JSP_PARAMERR 	= "login.jsp";
//	重定向异常页面
	public static final String RETURN_JSP_ERROR 	= "login.jsp";
	
	public static final String RETURN_JSP_EXPT_LOGIN = "login.jsp";
	/**
	 * 操作是否成功
	 */
	private int 	success;
	/**
	 * 反馈信息
	 */
	private String 	msg;
	/**
	 * 附加数据
	 */
	private Map	body = new HashMap();
	
	public Result(int success, String msg) {
		this.success = success;
		this.msg = msg;
	}
	
	public Result() {
	    this.success = Result.SUCCESS.NO.getValue();
        this.msg = Result.RESULT_OP_FAIL;
    }
	
	public String toString() {
		GsonBuilder builder = new GsonBuilder();
		Gson gson = builder.disableHtmlEscaping().create();

		JsonElement jsonobject = gson.toJsonTree(this);
		
		String json = jsonobject.toString();
		
		return json;
	}
	
	/**
	 * 请求状况代码 0、失败 1、成功 2、不在线 3、错误 4 已经完成
	 */
	public static enum SUCCESS {
		NO(0), YES(1), NOTONLINE(2), ERR(3), FIN(4);
		
		private final int value;
		
		SUCCESS(int v) {
			value = v;
		}
		
		public int getValue() {
			return value;
		}
	}
	
	
	public int getSuccess() {
		return success;
	}
	public void setSuccess(int success) {
		this.success = success;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public Map getBody() {
		return body;
	}
	public void setBody(Map body) {
		this.body = body;
	}
	
	public void addElement(String key, Object value) {
		body.put(key, value);
	}

	public Object getElement(String key) {
		return body.get(key);
	}
	
	//从本地下载excel
	public static void download(String path, HttpServletResponse response) {  
        try {  
            // path是指欲下载的文件的路径。  
            File file = new File(path);  
            // 取得文件名。  
            String filename = file.getName();  
            // 以流的形式下载文件。  
            InputStream fis = new BufferedInputStream(new FileInputStream(path));  
            byte[] buffer = new byte[fis.available()];
            
            fis.read(buffer);  
            fis.close();  
            
            // 清空response  
            response.reset();  
            // 设置response的Header  
            response.addHeader("Content-Disposition", "attachment;filename="  
                    + new String(filename.getBytes()));  
            response.addHeader("Content-Length", "" + file.length());  
            OutputStream toClient = new BufferedOutputStream(  
                    response.getOutputStream());  
            response.setContentType("application/vnd.ms-excel;charset=gb2312");  
            toClient.write(buffer);  
            toClient.flush();
            toClient.close(); 
            file.delete();
            
        } catch (IOException ex) {  
            ex.printStackTrace();  
        }  
    }  
}
