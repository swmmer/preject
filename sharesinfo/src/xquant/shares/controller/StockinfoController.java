package xquant.shares.controller;

import xquant.shares.core.Result;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import xquant.shares.model.stockinfo;
import xquant.shares.service.StockinfoService;

@Controller
public class StockinfoController {
	
	@Autowired 
	private StockinfoService stockinfoService;
     
	
	@RequestMapping(value = "getSharesInfo",produces = "application/json;charset=utf-8") 
	@ResponseBody
    public String getInfobystockCode(String stockCode ,HttpServletRequest request){  
            return stockinfoService.getSharesInfo(stockCode);  
            
	}
	
	//修改
	@RequestMapping("updatesharesinfo")
	public void updatesharesinfo(stockinfo record) {
		stockinfoService.updateByid(record);
		System.out.println(1);
	}
	
	
	
	//插入
	@RequestMapping("insertsharesinfo")
	public void insertsharesinfo(stockinfo record){
		stockinfoService.insert(record);
		System.out.println(1);
	}
	
	
	//删除
	@RequestMapping("deleteByStockCode")
	@ResponseBody
	public String deleteByStockCode(String stockCodeDel,String stockCodeSearch,HttpServletRequest request){
		
		String stockOfJson = stockinfoService.deleteByStockCode(stockCodeDel,stockCodeSearch);
		System.out.println(stockOfJson);
		return stockOfJson;
	}
    
	@RequestMapping("exportExcelByStockCodeSearch")
	public void exportExcelByStockCodeSearch(String stockCodeSearch,HttpServletResponse response){
		
		stockinfoService.exportExcel(stockCodeSearch);
		String path = "E://NewFileName.xls";
		Result.download(path,response);
	}
	
	
          
      
}
