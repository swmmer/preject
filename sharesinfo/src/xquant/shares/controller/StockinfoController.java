package xquant.shares.controller;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


import xquant.shares.core.Result;
import xquant.shares.model.stockinfo;
import xquant.shares.service.StockinfoService;

@Controller
public class StockinfoController {
	
	@Autowired 
	private StockinfoService stockinfoService;
     
	
	
	/**
	 * <p>接口名称: 查找股票信息
	 * <p>主要描述：
	 * <p>访问方式(建议)：get
	 * <p>URL: getSharesInfo.do
	 * <p>使用对象: web
	 * <p>参数说明:
	 * <pre>
	 * |名称                      |类型               |是否必须                  |默认值	        |说明
	 * stockCode   string       Y             NULL          股票代码
	 * </pre>
	 * <p>返回数据:
	 * <pre>
		{
			       jsonobject, 股票信息
		}
	  * </pre>
	  */
	@RequestMapping(value = "getSharesInfo",produces = "application/json;charset=utf-8") 
	@ResponseBody
    public String getInfobystockCode(String stockCode ,HttpServletRequest request){  
		return stockinfoService.getSharesInfo(stockCode);  
            
	}
	
	
	/**
	 * <p>接口名称: 修改股票信息
	 * <p>主要描述：
	 * <p>访问方式(建议)：post
	 * <p>URL: updatesharesinfo.do
	 * <p>使用对象: web
	 * <p>参数说明:
	 * <pre>
	 * |名称                           |类型                |是否必须                      |默认值	       |说明
	 * id             Integer      Y             NULL           ID
	 * stockCode      String       Y             NULL          股票代码
	 * stockName      String       Y             NULL          股票名称
	 * tradingMarket  String       Y             NULL          交易市场
	 * offeringPrice  BigDecimal   Y             NULL          发行价格
	 * peRatio        BigDecimal   Y             NULL          市盈率
	 * launchDate     Date         Y             NULL          上市日期
	 * maturityDate   Date         Y             NULL          到期日期
	 * </pre>
	 * <p>返回数据:
	 * <pre>
		{
			       
		}
	  * </pre>
	  */
	@RequestMapping("updatesharesinfo")
	public String updatesharesinfo(stockinfo record,HttpServletRequest request) {
		stockinfoService.updateByid(record);
		return "main";
	}
	
	

	/**
	 * <p>接口名称: 新增股票信息
	 * <p>主要描述：
	 * <p>访问方式(建议)：post
	 * <p>URL: insertsharesinfo.do
	 * <p>使用对象: web
	 * <p>参数说明:
	 * <pre>
	 * |名称                           |类型                |是否必须                      |默认值	       |说明
	 * stockCode      String       Y             NULL          股票代码
	 * stockName      String       Y             NULL          股票名称
	 * tradingMarket  String       Y             NULL          交易市场
	 * offeringPrice  BigDecimal   Y             NULL          发行价格
	 * peRatio        BigDecimal   Y             NULL          市盈率
	 * launchDate     Date         Y             NULL          上市日期
	 * maturityDate   Date         Y             NULL          到期日期
	 * </pre>
	 * <p>返回数据:
	 * <pre>
		{
			       
		}
	  * </pre>
	  */
	@RequestMapping("insertsharesinfo")
	public String insertsharesinfo(stockinfo StockInfo,HttpServletRequest request){
		stockinfoService.insert(StockInfo);
		return "add";
	}
	
	
	/**
	 * <p>接口名称: 删除股票信息
	 * <p>主要描述：
	 * <p>访问方式(建议)：post
	 * <p>URL: deleteByStockCode.do
	 * <p>使用对象: web
	 * <p>参数说明:
	 * <pre>
	 * |名称                            |类型               |是否必须                     |默认值	       |说明
	 * stockCodeDel   string       Y             NULL          股票代码
	 * </pre>
	 * <p>返回数据:
	 * <pre>
		{
			  jsonobject, "success"
		}
	  * </pre>
	  */
	@RequestMapping(value = "deleteByStockCode",produces = "application/json;charset=utf-8")
	@ResponseBody
	public String deleteByStockCode(String stockCodeDel,HttpServletRequest request){
		
		String stockOfJson = stockinfoService.deleteByStockCode(stockCodeDel);
		return stockOfJson;
	}
    

	/**
	 * <p>接口名称: 导出股票信息
	 * <p>主要描述：
	 * <p>访问方式(建议)：post
	 * <p>URL: exportExcelByStockCodeSearch.do
	 * <p>使用对象: web
	 * <p>参数说明:
	 * <pre>
	 * |名称                                    |类型               |是否必须                     |默认值	       |说明
	 * stockCodeSearch   string       Y             NULL          股票代码
	 * </pre>
	 * <p>返回数据:
	 * <pre>
		{
			  path  ，  下载路径
		}
	  * </pre>
	  */
	@RequestMapping("exportExcelByStockCodeSearch")
	public void exportExcelByStockCodeSearch(String stockCodeSearch,HttpServletResponse response){
		
		stockinfoService.exportExcel(stockCodeSearch);
		String path = "E://NewFileName.xls";
		Result.download(path,response);
	}
	        
      
}
