import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';

const Chart = () => {
  const [seriesOptions, setSeriesOptions] = useState([]);
  const names = ['MSFT', 'AAPL', 'GOOG'];

  useEffect(() => {
    const createChart = () => {
      Highcharts.stockChart('container', {
        rangeSelector: {
          selected: 4,
        },
        yAxis: {
          labels: {
            formatter() {
              return (this.value > 0 ? ' + ' : '') + this.value + '%';
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
        plotOptions: {
          series: {
            compare: 'percent',
            showInNavigator: true,
          },
        },
        tooltip: {
          pointFormat:
            '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
          valueDecimals: 2,
          split: true,
        },
        series: seriesOptions,
      });
    };

    const success = function (data) {
      const name = this.url.match(/(msft|aapl|goog)/)[0].toUpperCase();
      const i = names.indexOf(name);
      setSeriesOptions(prevOptions => [
        ...prevOptions,
        {
          name: name,
          data: data,
        },
      ]);
    };

    Highcharts.getJSON(
      'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/msft-c.json',
      success
    );
    Highcharts.getJSON(
      'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/aapl-c.json',
      success
    );
    Highcharts.getJSON(
      'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/goog-c.json',
      success
    );

    if (seriesOptions.length === names.length) {
      createChart();
    }
  }, [seriesOptions]);

  return (
    <>
      <div id='container' />
    </>
  );
};

export default Chart;

// Old version below, only runs on initial page load
// import React, { useEffect, useState } from 'react';
// import Highcharts from 'highcharts/highstock';

// const Chart = () => {
//   const [seriesOptions, setSeriesOptions] = useState([]);
//   const [seriesCounter, setSeriesCounter] = useState(0);
//   const names = ['MSFT', 'AAPL', 'GOOG'];

//   useEffect(() => {
//     const createChart = () => {
//       Highcharts.stockChart('container', {
//         rangeSelector: {
//           selected: 4,
//         },
//         yAxis: {
//           labels: {
//             formatter() {
//               return (this.value > 0 ? ' + ' : '') + this.value + '%';
//             },
//           },
//           plotLines: [
//             {
//               value: 0,
//               width: 2,
//               color: 'silver',
//             },
//           ],
//         },
//         plotOptions: {
//           series: {
//             compare: 'percent',
//             showInNavigator: true,
//           },
//         },
//         tooltip: {
//           pointFormat:
//             '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
//           valueDecimals: 2,
//           split: true,
//         },
//         series: seriesOptions,
//       });
//     };

//     const success = function (data) {
//       const name = this.url.match(/(msft|aapl|goog)/)[0].toUpperCase();
//       const i = names.indexOf(name);
//       seriesOptions[i] = {
//         name: name,
//         data: data,
//       };
//       setSeriesOptions(seriesOptions);
//       setSeriesCounter(prevCounter => prevCounter + 1);

//       if (seriesCounter === names.length) {
//         createChart();
//       }
//     };

//     Highcharts.getJSON(
//       'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/msft-c.json',
//       success
//     );
//     Highcharts.getJSON(
//       'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/aapl-c.json',
//       success
//     );
//     Highcharts.getJSON(
//       'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/goog-c.json',
//       success
//     );
//   }, [seriesCounter, seriesOptions]);

//   return (
//     <>
//       <div id='container' />
//     </>
//   );
// };

// export default Chart;
