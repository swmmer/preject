package xquant.shares.controller;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

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
	
	@RequestMapping("insertsharesinfo")
	public void insertsharesinfo(stockinfo record) throws ParseException{
		
//		stockinfo si = new stockinfo();
//		si.setStockCode("7000001");
//		
//		si.setStockName("民生银行");
//		si.setTradingMarket("上交所");
//		BigDecimal b = new BigDecimal("11.00000");
//		si.setOfferingPrice(b);
//		BigDecimal pe = new BigDecimal("6.76000");
//		si.setPeRatio(pe);
//		
//		DateFormat dateFormat1 = new SimpleDateFormat("yyyy-MM-dd");
//		Date d1 = dateFormat1.parse("1999-11-10");
//		si.setLaunchDate(d1);
//		DateFormat dateFormat2 = new SimpleDateFormat("yyyy-MM-dd");
//		Date d2 = dateFormat2.parse("2049-11-10");
//		si.setMaturityDate(d2);
		stockinfoService.insert(record);
		System.out.println(1);
	}
	
	@RequestMapping("deleteByStockCode")
	@ResponseBody
	public String deleteByStockCode(String stockCodeDel,String stockCodeSearch,HttpServletRequest request){
		
		String stockOfJson = stockinfoService.deleteByStockCode(stockCodeDel,stockCodeSearch);
		System.out.println(stockOfJson);
		return stockOfJson;
	}
    
	@RequestMapping("exportExcelByStockCodeSearch")
	public void exportExcelByStockCodeSearch(String stockCodeSearch,HttpServletResponse response,HttpServletRequest request){
		
		stockinfoService.exportExcel(stockCodeSearch);
		String path = "E://NewFileName.xls";
		Result.download(path,response);
	}
	
	
}
