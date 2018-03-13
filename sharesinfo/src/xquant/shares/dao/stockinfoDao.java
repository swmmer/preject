package xquant.shares.dao;

import xquant.shares.model.stockinfo;

public interface stockinfoDao {
    int deleteByPrimaryKey(Integer id);

    int insert(stockinfo record);

    int insertSelective(stockinfo record);

    stockinfo selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(stockinfo record);

    int updateByPrimaryKey(stockinfo record);
}