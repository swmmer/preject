package xquant.shares.model;

import java.math.BigDecimal;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class stockinfo {
    private Integer id;

    private String stockCode;

    private String stockName;

    private String tradingMarket;

    private BigDecimal offeringPrice;

    private BigDecimal peRatio;
    
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date launchDate;
    
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date maturityDate;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getStockCode() {
        return stockCode;
    }

    public void setStockCode(String stockCode) {
        this.stockCode = stockCode == null ? null : stockCode.trim();
    }

    public String getStockName() {
        return stockName;
    }

    public void setStockName(String stockName) {
        this.stockName = stockName == null ? null : stockName.trim();
    }

    public String getTradingMarket() {
        return tradingMarket;
    }

    public void setTradingMarket(String tradingMarket) {
        this.tradingMarket = tradingMarket == null ? null : tradingMarket.trim();
    }

    public BigDecimal getOfferingPrice() {
        return offeringPrice;
    }

    public void setOfferingPrice(BigDecimal offeringPrice) {
        this.offeringPrice = offeringPrice;
    }

    public BigDecimal getPeRatio() {
        return peRatio;
    }

    public void setPeRatio(BigDecimal peRatio) {
        this.peRatio = peRatio;
    }

    public Date getLaunchDate() {
        return launchDate;
    }

    public void setLaunchDate(Date launchDate) {
        this.launchDate = launchDate;
    }

    public Date getMaturityDate() {
        return maturityDate;
    }

    public void setMaturityDate(Date maturityDate) {
        this.maturityDate = maturityDate;
    }
}