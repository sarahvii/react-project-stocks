import { useState, useEffect, useCallback } from 'react';
import HomeBox from './containers/HomeBox';
import PortfolioBox from './containers/PortfolioBox';
import StockBox from './containers/StockBox';
import PortfolioStocksService from './PortfolioStocksServices';

function App() {
  const [portfolioStocks, setPortfolioStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);
  const [globalSelectedStockData, setGlobalSelectedStockData] = useState(null);

  // useEffect(() => {
  //   PortfolioStocksService.getPortfolioStocks()
  //     .then(portfolioStocks => setPortfolioStocks(portfolioStocks));
  // }, []); 

  // useEffect(() => {
  //   PortfolioStocksService.getPortfolioStocks()
  //     .then(newPortfolioStocks => setPortfolioStocks(newPortfolioStocks));
  // }, [() => portfolioStocks]);

  const fetchPortfolioStocks = useCallback(() => {
    PortfolioStocksService.getPortfolioStocks()
      .then(newPortfolioStocks => setPortfolioStocks(newPortfolioStocks));
  }, []);
  
  useEffect(() => {
    fetchPortfolioStocks();
  }, [fetchPortfolioStocks]);

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
      <HomeBox portfolioStocks={portfolioStocks} selectedStock={selectedStock} setSelectedStock={setSelectedStock}></HomeBox>
      <PortfolioBox></PortfolioBox>
      <StockBox selectedStock={selectedStock} globalSelectedStockData={globalSelectedStockData} fetchGlobalSelectedStockData={fetchGlobalSelectedStockData} setGlobalSelectedStockData={setGlobalSelectedStockData}></StockBox>
    </div>
  );
}

export default App;
