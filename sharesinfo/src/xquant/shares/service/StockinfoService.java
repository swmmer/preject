package xquant.shares.service;


import java.util.List;

import xquant.shares.model.stockinfo;

public interface StockinfoService {

	
	String getSharesInfo(String stockCode);
	
	void insert(stockinfo record);
	
	String deleteByStockCode(String stockCodeDel,String stockCodeSearch);
	
	void exportExcel(String stockCodeSearch);
	
	void updateByid(stockinfo record);
}
