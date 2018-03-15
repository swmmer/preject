package xquant.shares.controller;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

import xquant.shares.core.Result;
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
	public String updatesharesinfo(stockinfo record,HttpServletRequest request) {
		stockinfoService.updateByid(record);
		return "main";
	}
	
	

	//插入
	@RequestMapping("insertsharesinfo")
	public String insertsharesinfo(stockinfo StockInfo,HttpServletRequest request){
		stockinfoService.insert(StockInfo);
		return "add";
	}
	
	
	//删除
	@RequestMapping(value = "deleteByStockCode",produces = "application/json;charset=utf-8")
	@ResponseBody
	public String deleteByStockCode(String stockCodeDel,HttpServletRequest request){
		
		String stockOfJson = stockinfoService.deleteByStockCode(stockCodeDel);
		return stockOfJson;
	}
    
	//导出
	@RequestMapping("exportExcelByStockCodeSearch")
	public void exportExcelByStockCodeSearch(String stockCodeSearch,HttpServletResponse response){
		
		stockinfoService.exportExcel(stockCodeSearch);
		String path = "E://NewFileName.xls";
		Result.download(path,response);
	}
	
	//异步检查股票代码是否重复
	@RequestMapping("checkstockcode")
	@ResponseBody
	public String checkstockcode(String stockcode,HttpServletRequest request){
	      
		return stockinfoService.getSharesInfo(stockcode);
		
	}
	
	
          
      
}
