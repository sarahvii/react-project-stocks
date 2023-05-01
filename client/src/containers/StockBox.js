import React, { useEffect, useState, useCallback } from 'react';

import Nav from '../components/Nav';
import Chart from '../components/Chart';
import Search from '../components/Search';
import BuyPanel from '../components/BuyPanel';
import NewsPanel from '../components/NewsPanel';
import StockDetailsItem from '../components/StockDetailsItem';

const StockBox = ({ selectedStock, globalSelectedStockData, addStock }) => {
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   if (selectedStock) {
  //     fetchGlobalSelectedStockData(selectedStock.symbol);
  //   }
  // }, [selectedStock, fetchGlobalSelectedStockData]);

  // useEffect(() => {
  //   if (!selectedStock) {
  //     setGlobalSelectedStockData(null);
  //     setError(null);
  //   }
  // }, [selectedStock]);

  if (!selectedStock) {
    return (
      <>
        <Nav/>
        <p>No Stock Selected</p>
      </>
    )
  }

  return (
    <>
      <h3>StockBox</h3>
      {selectedStock.name}
      <Nav />
      <Search />
      <Chart />
      <BuyPanel selectedStock={selectedStock} addStock={addStock}/>
      <NewsPanel />
      {error ? (
        <p>Error: {error.message}</p>
        ) : (
        <p>
            Price:{' '}
            {globalSelectedStockData && globalSelectedStockData['Global Quote'] && globalSelectedStockData['Global Quote']['05. price']}
            Change:{' '}
            {globalSelectedStockData && globalSelectedStockData['Global Quote'] && globalSelectedStockData['Global Quote']['10. change percent']}

        </p>
      )}
      <hr />
    </>
  );
};

export default StockBox;
