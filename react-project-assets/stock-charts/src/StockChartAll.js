import React, { useState } from 'react';

const StockChartAll = () => {
  const [data, setData] = useState([]);

  const API_KEY = 'SQFHJEETBG9RZHNR';
  const baseUrl = 'https://www.alphavantage.co/query?function=';
  const symbolNames = [
    ['AAPL', 'Apple Inc.'],
    ['GOOGL', 'Alphabet Inc.'],
    ['MSFT', 'Microsoft Corporation'],
  ];

  const fetchDatas = async () => {
    const fetchedData = await Promise.all(
      symbolNames.map(async ([symbol]) => {
        const API_Call = `${baseUrl}TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=compact&apikey=${API_KEY}`;
        const response = await fetch(API_Call);
        const data = await response.json();

        const dataArray = Object.entries(data['Time Series (Daily)']).map(
          entry => {
            const timecode = new Date(entry[0]).getTime();
            const openValue = parseFloat(entry[1]['1. open']);
            return [timecode, openValue];
          }
        );

        return {
          symbol,
          dataArray,
          companyName: symbolNames.find(([s]) => s === symbol)[1],
        };
      })
    );

    setData(fetchedData);
  };

  return (
    <div>
      <h1>StockChartAll.js</h1>
      <h3>Showing text returned from fetch</h3>
      <button onClick={fetchDatas}>Fetch Data</button>
      {data.map((obj, index) => (
        <div key={index}>
          <p>Symbol: {obj.symbol}</p>
          <p>Company Name: {obj.companyName}</p>
          <p>Data Array: {obj.dataArray}</p>
        </div>
      ))}
    </div>
  );
};

export default StockChartAll;
