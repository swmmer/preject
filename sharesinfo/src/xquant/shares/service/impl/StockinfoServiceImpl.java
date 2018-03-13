package xquant.shares.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import xquant.shares.dao.stockinfoDao;
import xquant.shares.model.stockinfo;
import xquant.shares.service.StockinfoService;

@Service("stockinService")
public class StockinfoServiceImpl implements StockinfoService{
	@Autowired  
    private stockinfoDao stockinfodao;

	
	//查询所有股票
	@Override
	public List<stockinfo> getSharesInfo(String stockCode) {
		  return stockinfodao.selectBystockCode(stockCode);
	}

	
	
}
