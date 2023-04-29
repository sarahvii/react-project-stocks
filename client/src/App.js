import { useState, useEffect } from 'react';
import HomeBox from './containers/HomeBox';
import PortfolioBox from './containers/PortfolioBox';
import StockBox from './containers/StockBox';
import PortfolioStocksService from './PortfolioStocksServices';

function App() {

  const [portfolioStocks, setPortfolioStocks] = useState([])

  useEffect(() => {
    PortfolioStocksService.getPortfolioStocks()
    .then(portfolioStocks => setPortfolioStocks(portfolioStocks))
  }, []);

  return (
    <div className="App">
      <h1>App</h1>
      <HomeBox portfolioStocks={portfolioStocks}></HomeBox>
      <PortfolioBox></PortfolioBox>
      <StockBox></StockBox>
    </div>
  );
}

export default App;
