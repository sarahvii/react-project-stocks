import { useState, useEffect, useCallback } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' ;

import HomeBox from './containers/HomeBox';
import PortfolioBox from './containers/PortfolioBox';
import StockBox from './containers/StockBox';
import PortfolioStocksService from './PortfolioStocksServices';

function App() {
  const [portfolioStocks, setPortfolioStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);
  const [globalSelectedStockData, setGlobalSelectedStockData] = useState(null);

  useEffect(() => {
    PortfolioStocksService.getPortfolioStocks()
      .then(portfolioStocks => setPortfolioStocks(portfolioStocks));
  }, []); 
  

  const addStock = (selectedStock, holdings, hardcodedCurrentPrice) => {
    PortfolioStocksService.addPortfolioStock({
      name: selectedStock.name,
      symbol: selectedStock.symbol,
      date_purchased: selectedStock.date_purchased,
      holdings: parseInt(holdings),
      price_purchased: hardcodedCurrentPrice,
  })
  .then(() => {
      PortfolioStocksService.getPortfolioStocks()
      .then(portfolioStocks => setPortfolioStocks(portfolioStocks));
  })

  }



//this is just a test api, to be replaced by actual api call
  const fetchGlobalSelectedStockData = useCallback((symbol) => {
    console.log(`Fetching global quote data for ${symbol}...`);
    // make an api call to get a global quote data for a selected stock
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=W4GLD4HSOZYR7CTU`)
      .then(response => response.json())
      .then(data => {
        setGlobalSelectedStockData(data);
        console.log(`Global quote data for ${symbol}:`, data);
      });
  }, []);

  return (
    <div className="App">
      <h1>App</h1>
      <Routes>
          <Route exact path="/" element={<HomeBox portfolioStocks={portfolioStocks} selectedStock={selectedStock} setSelectedStock={setSelectedStock}/>} />
          <Route path="/portfolio" element={<PortfolioBox/>} />
          <Route path="/stocks" element={<StockBox selectedStock={selectedStock} globalSelectedStockData={globalSelectedStockData} fetchGlobalSelectedStockData={fetchGlobalSelectedStockData} setGlobalSelectedStockData={setGlobalSelectedStockData} addStock={addStock}/>} />
      </Routes>
    </div>
  );
}

export default App;
