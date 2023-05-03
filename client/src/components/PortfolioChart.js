import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import highchartsData from 'highcharts/modules/data';
import highchartsExporting from 'highcharts/modules/exporting';
import highchartsExportData from 'highcharts/modules/export-data';
import highchartsAccessibility from 'highcharts/modules/accessibility';
import highchartsMore from 'highcharts/highcharts-more';
import solidGauge from 'highcharts/modules/solid-gauge';

// implement the modules
highchartsData(Highcharts);
highchartsExporting(Highcharts);
highchartsExportData(Highcharts);
highchartsAccessibility(Highcharts);
highchartsMore(Highcharts);
solidGauge(Highcharts);

const PortfolioChart = () => {
  const [companyName, setCompanyName] = useState('');
  const [stockSymbol, setStockSymbol] = useState('META');
  const [data, setData] = useState([]);

  // stock names for dropdown select - this eventually will come from the database
  const symbolNames = [
    ['META', 'Meta'],
    ['AAPL', 'Apple'],
    ['AMZN', 'Amazon'],
    ['NFLX', 'Netflix'],
    ['GOOGL', 'Google'],
  ];

  // useEffect(() => {
  //   const fetchDatas = async () => {
  //     const API_KEY = 'SQFHJEETBG9RZHNR';
  //     const baseUrl = 'https://www.alphavantage.co/query?function=';

  //     const data = await Promise.all(
  //       symbolNames.map(async ([symbol]) => {
  //         const API_Call = `${baseUrl}TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=compact&apikey=${API_KEY}`;
  //         const response = await fetch(API_Call);
  //         const data = await response.json();

  //         // console.log(`data: ${JSON.stringify(data)}`);

  //         const dataArray = Object.entries(data['Time Series (Daily)']).map(
  //           entry => {
  //             const timecode = new Date(entry[0]).getTime();
  //             const openValue = parseFloat(entry[1]['1. open']);
  //             return [timecode, openValue];
  //           }
  //         );

  //         return {
  //           symbol,
  //           dataArray,
  //           companyName: symbolNames.find(([s]) => s === symbol)[1],
  //         };
  //       })
  //     );

  //     data.forEach(obj => {
  //       console.log(
  //         `Symbol: ${obj.symbol}, Company Name: ${obj.companyName} Data Array: ${obj.dataArray}`
  //       );
  //     });

  //     setData(data);
  //   };

  //   fetchDatas();
  // });

  useEffect(() => {
    const fetchData = async () => {
      // api variable - coule be stored in an envinronment variable for production
      const API_KEY = 'SQFHJEETBG9RZHNR';
      // setup variable for our chosen stock in dropdown
      let StockSymbol = stockSymbol;
      // baseUrl
      let baseUrl = 'https://www.alphavantage.co/query?function=';
      // setup variable for API call - could also be an array of calls for multiple endpoints
      let API_Call = `${baseUrl}TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;

      const response = await fetch(API_Call);
      const data = await response.json();

      // wrangle data for high charts
      const dataArray = Object.entries(data['Time Series (Daily)']).map(
        entry => {
          const timecode = new Date(entry[0]).getTime();
          // const timecode = entry[0]; /* don' use this line, for reference only! */
          const openValue = parseFloat(entry[1]['1. open']);
          // const closeValue = parseFloat(entry[1]['4. close']); /* close value instead of open*/
          return [timecode, openValue];
        }
      );
      // showing company name in the chart legend
      setCompanyName(symbolNames.find(([symbol]) => symbol === stockSymbol)[1]);

      // check returned data
      // console.log(data);

      // save data
      setData(dataArray);
    };

    // call fetch function
    fetchData();

    // variable stockSymbol is used as a dependency in useEffect for each fetch
  }, [stockSymbol]);

  // construct the Interface options in HighCharts
  const options = {
    title: {
      text: companyName + ' Stock Price',
    },
    xAxis: {
      type: 'datetime',
    },
    yAxis: {
      title: {
        text: 'Price',
      },
    },
    navigator: {
      enabled: true,
      series: {
        data: data,
      },
      xAxis: {
        labels: {
          formatter: function () {
            return Highcharts.dateFormat('%d-%m-%Y', this.value);
          },
        },
      },
      rangeSelector: {
        /* 
        Could set this up as an array if needed dynamic options
        Options for selected:
        0: Shows the entire range of data
        1: Shows the last day/24 hours of data
        2: Shows the last week of data
        3: Shows the last month of data
        4: Shows the last 3 months of data
        5: Shows the last 6 months of data
        6: Shows the last year of data
        7: Shows the YTD (year to date) of data 
        */
        selected: 0,
        allButtonsEnabled: true,
        buttons: [
          {
            type: 'day',
            count: 7,
            text: '1w',
          },
          {
            type: 'month',
            count: 1,
            text: '1m',
          },
          {
            type: 'month',
            count: 3,
            text: '3m',
          },
          {
            type: 'month',
            count: 6,
            text: '6m',
          },
          {
            type: 'year',
            count: 1,
            text: '1y',
          },
          {
            type: 'all',
            text: 'All',
          },
        ],
      },
    },
    series: [
      {
        name: stockSymbol,
        data: data,
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  };

  // dropdown
  const handleStockSymbolChange = e => {
    setStockSymbol(e.target.value);
  };

  return (
    <>
      <h1>StockChart.js</h1>

      <label htmlFor='symbol-select'>Select Symbol: </label>
      <select
        id='symbol-select'
        value={stockSymbol}
        onChange={handleStockSymbolChange}
      >
        <option key={'select'} value={''} disabled={true}>
          Select
        </option>
        {symbolNames.map(([symbol, name]) => (
          <option key={symbol} value={symbol}>
            {name}
          </option>
        ))}
      </select>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={'stockChart'}
      />
    </>
  );
};

export default PortfolioChart;
