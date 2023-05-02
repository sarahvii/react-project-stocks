import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const HomeChart = () => {
  const [data, setData] = useState([]);

  const symbolNames = [
    ['AAPL', 'Apple Inc.'],
    ['GOOGL', 'Alphabet Inc.'],
    ['MSFT', 'Microsoft Corporation'],
    // ['AMZN', 'Amazon'],
    // ['NFLX', 'Netflix'],
  ];

  const fetchData = async () => {
    const API_KEY = 'SQFHJEETBG9RZHNR';
    const baseUrl = 'https://www.alphavantage.co/query?function=';

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
          data: dataArray,
          name: symbolNames.find(([s]) => s === symbol)[1],
        };
      })
    );

    setData(fetchedData);
    console.log(fetchedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const options = {
    title: {
      text: 'Stock Prices',
    },
    rangeSelector: {
      selected: 1,
    },
    yAxis: {
      labels: {
        formatter: function () {
          return (this.value > 0 ? ' + ' : '') + this.value.toFixed(2) + '%';
        },
      },
      plotLines: [
        {
          value: 0,
          width: 2,
          color: 'silver',
        },
      ],
    },
    tooltip: {
      pointFormat:
        '<span style="color:{series.color}">{series.name}</span>: <b>${point.y}</b><br/>',
      valueDecimals: 2,
      split: true,
    },
    series: data.map(({ data, name }) => ({ name, data })),
  };

  return (
    <>
      <h1>StockCombined.js</h1>

      <button onClick={fetchData}>Fetch Data</button>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={'stockChart'}
      />
    </>
  );
};

export default HomeChart;
