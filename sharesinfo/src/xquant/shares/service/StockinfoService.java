package xquant.shares.service;


import xquant.shares.model.stockinfo;

public interface StockinfoService {

	
	String getSharesInfo(String stockCode);
	
	void insert(stockinfo record);
	
	String deleteByStockCode(String stockCodeDel);
	
	void exportExcel(String stockCodeSearch);
	
	void updateByid(stockinfo record);
}
