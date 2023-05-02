import { useState, useEffect, useCallback } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' ;

import HomeBox from './containers/HomeBox';
import PortfolioBox from './containers/PortfolioBox';
import StockBox from './containers/StockBox';
import PortfolioStocksService from './PortfolioStocksServices';
import styled from 'styled-components';
import './App.css';



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


  return (
    <AppContainer className="App">
      <Routes>
          <Route exact path="/" element={<HomeBox portfolioStocks={portfolioStocks} selectedStock={selectedStock} setSelectedStock={setSelectedStock}/>} />
          <Route path="/portfolio" element={<PortfolioBox portfolioStocks={portfolioStocks} selectedStock={selectedStock} setSelectedStock={setSelectedStock}/>} />
          <Route path="/stocks" element={<StockBox selectedStock={selectedStock} addStock={addStock}/>} />
      </Routes>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  margin: 0;
  padding: 0;
  font-family: Manrope;
`

export default App;
