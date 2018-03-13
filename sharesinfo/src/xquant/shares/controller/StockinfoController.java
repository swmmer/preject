package xquant.shares.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import xquant.shares.core.Result;
import xquant.shares.model.stockinfo;
import xquant.shares.service.StockinfoService;

@Controller
public class StockinfoController {
	
	@Autowired 
	private StockinfoService stockinfoService;
     
	
	@RequestMapping("getSharesInfo")  
    public String getInfobystockCode(String stockCode ,HttpServletRequest request){  
		Result result = new Result(Result.SUCCESS.NO.getValue(), Result.RESULT_OP_FAIL);    
            List<stockinfo> list = stockinfoService.getSharesInfo(stockCode);  
            System.out.println("------User_list-----"+list.size());  
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("pagelist", list);
            result.setBody(map);
            result.setSuccess(Result.SUCCESS.YES.getValue());
            result.setMsg(Result.RESULT_OP_SUCCESS);
            return result.toString();
            
	}
          	
}
