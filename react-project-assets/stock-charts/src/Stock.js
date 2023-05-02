import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

function Stock() {
  const [stockChartXValues, setStockChartXValues] = useState([]);
  const [stockChartYValues, setStockChartYValues] = useState([]);
  const [stockSymbol, setStockSymbol] = useState('IBM');
  const [companyName, setCompanyName] = useState('');

  const symbolNames = [
    ['META', 'Meta'],
    ['AAPL', 'Apple'],
    ['AMZN', 'Amazon'],
    ['NFLX', 'Netflix'],
    ['GOOGL', 'Google'],
  ];

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const API_KEY = 'SQFHJEETBG9RZHNR';
        let StockSymbol = stockSymbol;
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;

        const response = await fetch(API_Call);
        const data = await response.json();
        console.log(data);

        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];

        for (let key in data['Time Series (Daily)']) {
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(
            // data['Time Series (Daily)'][key]['1. open']
            data['Time Series (Daily)'][key]['4. close']
          );
        }

        setStockChartXValues(stockChartXValuesFunction);
        setStockChartYValues(stockChartYValuesFunction);
        // setCompanyName(data['Meta Data']['2. Symbol']);
        setCompanyName(
          symbolNames.find(([symbol]) => symbol === stockSymbol)[1]
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchStock();
  }, [stockSymbol]);

  // text input - not used
  // const handleInputChange = event => {
  //   setStockSymbol(event.target.value);
  // };

  // dropdown
  const handleStockSymbolChange = e => {
    setStockSymbol(e.target.value);
  };

  return (
    <div>
      <h1>Stock.js</h1>
      <h1>Stock Market</h1>
      {/* 
      Limit of 5 per min means we can't use text input search...
      <label>
        Stock Symbol:
        <input type='text' value={stockSymbol} onChange={handleInputChange} />
      </label> */}
      <label htmlFor='symbol-select'>Select Symbol: </label>
      <select
        id='symbol-select'
        value={stockSymbol}
        onChange={handleStockSymbolChange}
      >
        <option key={'select'} value={''}>
          Select
        </option>
        {symbolNames.map(([symbol, name]) => (
          <option key={symbol} value={symbol}>
            {name}
          </option>
        ))}
      </select>
      <Plot
        data={[
          {
            x: stockChartXValues,
            y: stockChartYValues,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'red' },
          },
        ]}
        layout={{ width: 720, height: 440, title: companyName }}
      />
    </div>
  );
}

export default Stock;
