import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const HomeChart = () => {
  const [data, setData] = useState([]);
  const [database, setDatabase] = useState([]);
  const [symbolNames, setSymbolNames] = useState([]);

  // static data
  // const symbolNames = [
  //   ['AAPL', 'Apple Inc.'],
  //   ['GOOGL', 'Alphabet Inc.'],
  //   ['MSFT', 'Microsoft Corporation'],
  //   // ['AMZN', 'Amazon'],
  //   // ['NFLX', 'Netflix'],
  // ];

  // stock names from the database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:9000/api/stocks/');
        const data = await response.json();
        setDatabase(data);
        console.log('Response:', data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // convert from object to array
    const symbols = database.map(({ symbol, name }) => [symbol, name]);
    console.log('Mapped symbols:', symbols);
    // Add the symbols to the symbolNames array
    setSymbolNames(symbols);
  }, [database]);

  console.log('symbolName', symbolNames);
  const fetchData = async () => {
    // API Keys: 06A4BPWV76NUMZUB, SQFHJEETBG9RZHNR
    const API_KEY = '06A4BPWV76NUMZUB';
    const baseUrl = 'https://www.alphavantage.co/query?function=';

    const fetchedData = await Promise.all(
      symbolNames.map(async ([symbol]) => {
        const API_Call = `${baseUrl}TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=compact&apikey=${API_KEY}`;
        const response = await fetch(API_Call);
        const data = await response.json();

        console.log('Alphavantage: ', data);

        // Check if the response contains an error message
        if (data['Error Message']) {
          console.log(
            `Error fetching data for symbol ${symbol}: ${data['Error Message']}`
          );
          return null;
        }

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

    // setData(fetchedData);
    // Filter out any null values that were returned
    setData(fetchedData.filter(data => data !== null));
    console.log(fetchedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const options =
    data.length /* checking there is data before rendering the chart */
      ? {
          // title: {
          //   text: 'Stock Prices',
          // },
          rangeSelector: {
            selected: 1,
          },
          yAxis: {
            labels: {
              formatter: function () {
                return (
                  (this.value > 0 ? ' + ' : '') + this.value.toFixed(2) + '%'
                );
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
        }
      : {};

  return (
    <>
      <h2>Market Performance</h2>

      {/* <button onClick={fetchData}>Fetch Data</button> */}
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={'stockChart'}
      />
    </>
  );
};

export default HomeChart;
