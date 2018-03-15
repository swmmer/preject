package xquant.shares.dao;

import java.util.List;

import xquant.shares.model.stockinfo;

public interface stockinfoDao {
    int deleteByPrimaryKey(Integer id);

    void insert(stockinfo record);
    
    int insertSelective(stockinfo record);

    stockinfo selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(stockinfo record);
    
    //根据id修改信息
    void updateByPrimaryKey(stockinfo record);
    
    //查询股票信息
	List<stockinfo> selectBystockCode(String stockCode);
	
	
	//根据股票代码删除股票信息
	int deleteByStockCode(String stockCodeDel);
	

    
}