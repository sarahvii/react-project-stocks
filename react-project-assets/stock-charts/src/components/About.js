import React from 'react';

const About = () => {
  return (
    <>
      <h1>Info about the links</h1>
      <h2>
        Limit of 5 requests per min means if you don't see data, that's probably
        why...
      </h2>
      <h3>News</h3>
      <p>
        Currently set to a limit of the first five articles - read the Url
        enpoint to explore options
      </p>
      <h3>Stock</h3>
      <p>
        This was my first attemtp with getting data from Alaphvantage using
        Plotly.js
      </p>
      <h3>StockChart</h3>
      <p>
        This is a dropdown option to choose a single company - currently using
        static array of names and symbols
      </p>
      <h3>StockChartAll</h3>
      <p>
        This is my first attempt at a fetch that returns multipe API calls with
        Promise.All and renders the text from the response to the commponent
      </p>
      <h3>StockMultiAxis</h3>
      <p>
        This is my first attempt at converting a mutli-axis example from the
        HighCharts docs to a React component
      </p>
      <h3>HighChartsStock</h3>
      <p>
        This is my exploration of different types of charts - some inline
        styling to adjust the size of the chart using a wrapper div - also
        explored docs for styling width and height
      </p>
      <h3>StockCombined</h3>
      <p>
        This is moving beyond the multi-axis with predefined json data to
        actually making multiple calls with Promis.All
      </p>
      <p>
        <strong>Important Notes: </strong> It only loads on the initial page
        mount, so I've added a button to rerun the fetch. Also, the data will
        not show untill the zoom bar is fully across the x-axis. You can do this
        also by clicking the 'All' button on the chart.
      </p>
    </>
  );
};

export default About;
