package xquant.shares.service.impl;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import xquant.shares.core.ExportExcel;
import xquant.shares.dao.stockinfoDao;
import xquant.shares.model.stockinfo;
import xquant.shares.service.StockinfoService;

@Service("stockinService")
public class StockinfoServiceImpl implements StockinfoService{
	@Autowired  
    private stockinfoDao stockinfodao;

	
		

	//根据股票代码更新股票信息
	@Override
	public Integer updateByStockCode(stockinfo record){
		return stockinfodao.updateByStockCode(record);
	}

	@Override
	public void insert(stockinfo record) {
			 stockinfodao.insert(record);
	}

	
	//查询股票信息
	@Override
	public String getSharesInfo(String stockCode) {
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		return gson.toJson(stockinfodao.selectBystockCode(stockCode));
	}
	
	@Override
	public String deleteByStockCode(String stockCodeDel,String stockCodeSearch){
		
		stockinfodao.deleteByStockCode(stockCodeDel);
		List<stockinfo> sfList = stockinfodao.selectBystockCode(stockCodeSearch);
		
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		String stockOfJson =gson.toJson(sfList);
		return stockOfJson;	
		
	}
	
	@Override
	public void exportExcel(String stockCodeSearch){
		
		List<stockinfo> stockInfoList = stockinfodao.selectBystockCode(stockCodeSearch);
		
		 String path = "E://NewFileName.xls";
		 String[] headers =  
	          { "股票代码", "股票名称", "交易市场", "发行价格(元/股)", "发行市盈率","上市日期","到期日" };  
	     
	     ExportExcel<stockinfo> ex = new ExportExcel<stockinfo>(); 
	     OutputStream out;
		try {
			out = new FileOutputStream(path);
			 ex.exportExcel(headers,stockInfoList, out);  
		      
		      try {
				out.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} 
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	      
	}
	
	
}
