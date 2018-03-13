package xquant.shares.service;

import java.util.List;

import xquant.shares.model.stockinfo;

public interface StockinfoService {

	
	List<stockinfo> getAll(String stockCode);
}
