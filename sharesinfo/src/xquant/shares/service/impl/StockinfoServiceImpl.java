package xquant.shares.service.impl;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.List;

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

	//插入
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
	
	
	//删除
	@Override
	public String deleteByStockCode(String stockCodeDel){
		
		stockinfodao.deleteByStockCode(stockCodeDel);
		Gson gson = new Gson();
		return gson.toJson("success");	
		
	}
	
	
	//导出
	@Override
	public void exportExcel(String stockCodeSearch){
		
		List<stockinfo> stockInfoList = stockinfodao.selectBystockCode(stockCodeSearch);
		
		 String path = "E://NewFileName.xls";
		 String[] headers =  
	          {"股票代码", "股票名称", "交易市场", "发行价格(元/股)", "发行市盈率","上市日期","到期日" };  
	     
	     ExportExcel<stockinfo> ex = new ExportExcel<stockinfo>(); 
	     OutputStream out;
		try {
			out = new FileOutputStream(path);
			 ex.exportExcel(headers,stockInfoList, out);  
		      
		      try {
				out.close();
			} catch (IOException e) {
				e.printStackTrace();
			} 
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
	      
	}

//修改信息
	@Override
	public void updateByid(stockinfo record) {
		 stockinfodao.updateByPrimaryKey(record);
	}
	
	
}
