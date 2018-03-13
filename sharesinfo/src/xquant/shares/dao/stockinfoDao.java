package xquant.shares.dao;

import java.util.List;

import xquant.shares.model.stockinfo;

public interface stockinfoDao {
    int deleteByPrimaryKey(Integer id);

    int insert(stockinfo record);

    int insertSelective(stockinfo record);

    stockinfo selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(stockinfo record);

    int updateByPrimaryKey(stockinfo record);
    
    //查询所有股票信息
    List<stockinfo> selectAll();
    
    
}