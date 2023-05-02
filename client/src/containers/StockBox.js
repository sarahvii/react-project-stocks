import React, { useState } from 'react';
import Nav from '../components/Nav';
import Search from '../components/Search';
import BuyPanel from '../components/BuyPanel';
import NewsPanel from '../components/NewsPanel';
import StockChart from  '../components/StockChart'
import styled from 'styled-components';


const StockBox = ({ selectedStock, globalSelectedStockData, addStock }) => {

  const [error, setError] = useState(null);

  if (!selectedStock) {
    return (
      <>
        <Nav/>
        <p>No Stock Selected</p>
      </>
    )
  }

  return (
    <StockContainer>
      <Nav />
      <Search />

      <h2>Stock Box</h2>
      <h3>{selectedStock.name}</h3>

      <StockChart />
 
      <BuyPanel selectedStock={selectedStock} addStock={addStock}/>
      <NewsPanel />
    </StockContainer>
  );
};

const StockContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    margin: 10;
`

export default StockBox;
