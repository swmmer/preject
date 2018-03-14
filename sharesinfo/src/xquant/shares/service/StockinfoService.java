package xquant.shares.service;

import java.util.List;

import xquant.shares.model.stockinfo;

public interface StockinfoService {

	
	List<stockinfo> getSharesInfo(String stockCode);
	
	Integer updateByStockCode(stockinfo record);
	
	void insert(stockinfo record);
	
}
