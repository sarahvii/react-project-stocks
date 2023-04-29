import { useState, useEffect } from 'react';
import HomeBox from './containers/HomeBox';
import PortfolioBox from './containers/PortfolioBox';
import StockBox from './containers/StockBox';
import PortfolioStocksService from './PortfolioStocksServices';

function App() {

  const [portfolioStocks, setPortfolioStocks] = useState([])
  const [selectedStock, setSelectedStock] = useState(null)

  useEffect(() => {
    PortfolioStocksService.getPortfolioStocks()
    .then(portfolioStocks => setPortfolioStocks(portfolioStocks))
  }, []);

  return (
    <div className="App">
      <h1>App</h1>
      <HomeBox portfolioStocks={portfolioStocks} selectedStock={selectedStock} setSelectedStock={setSelectedStock}></HomeBox>
      <PortfolioBox></PortfolioBox>
      <StockBox selectedStock={selectedStock}></StockBox>
    </div>
  );
}

export default App;
