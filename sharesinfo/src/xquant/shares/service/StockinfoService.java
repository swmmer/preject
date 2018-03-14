package xquant.shares.service;


import xquant.shares.model.stockinfo;

public interface StockinfoService {

	
	String getSharesInfo(String stockCode);
	
	Integer updateByStockCode(stockinfo record);
	
	void insert(stockinfo record);
	
	String deleteByStockCode(String stockCodeDel,String stockCodeSel);
}
