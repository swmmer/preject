package xquant.shares.test;

import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import xquant.shares.model.stockinfo;
import xquant.shares.service.StockinfoService;






public class UpdateTest {

	@Autowired 
	private StockinfoService stockinfoService;
	
	
	
	@Test
	public void updateTest() throws ParseException{
		stockinfo si = new stockinfo();
		si.setStockCode("7000001");
		
		si.setStockName("民生+++银行");
		si.setTradingMarket("上交所");
		BigDecimal b = new BigDecimal("11.00000");
		si.setOfferingPrice(b);
		BigDecimal pe = new BigDecimal("6.76000");
		si.setPeRatio(pe);
		
		DateFormat dateFormat1 = new SimpleDateFormat("yyyy-MM-dd");
		Date d1 = dateFormat1.parse("1999-11-10");
		si.setLaunchDate(d1);
		DateFormat dateFormat2 = new SimpleDateFormat("yyyy-MM-dd");
		Date d2 = dateFormat1.parse("2049-11-10");
		si.setMaturityDate(d2);
		si.setId(10);
		
//		System.out.println(si.getId());
		System.out.println(si.getStockCode());
		System.out.println(si.getLaunchDate());
//		stockinfoService.updateByStockCode(si);
		stockinfoService.insert(si);
		System.out.println(si.getStockCode());
		
	}
	
	
//	@Test
//	public void user
	
}
