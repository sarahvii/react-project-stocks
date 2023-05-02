import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Stock from './Stock';
import StockChart from './StockChart';
import StockChartAll from './StockChartAll';
import StockMultiAxis from './StockMultiAxis';
import HighChartsStock from './HighChartsStock';
import StockCombined from './StockCombined';
import ErrorPage from './components/Error';
import News from './News';
import NavBar from './NavBar';
import './App.css';

/*
To see the Ploty chart uncomment <Stock /> component
To see the HightChart  uncomment <StockChart /> component
To see the different chart types  uncomment <HighChartsStock />  component
*/

function App() {
  return (
    // <div className='App'>
    //   <Home />
    //   {/* <Stock /> */}
    //   {/* <StockChart /> */}
    //   {/* <StockChartAll /> */}
    //   {/* <StockMultiAxis /> */}
    //   {/* <HighChartsStock /> */}
    //   {/* <StockCombined /> */}
    // </div>

    <Router>
      <NavBar />

      <Routes>
        <Route exact path='/' element={<About />} />
        <Route exact path='/news' element={<News />} />
        <Route path='/stock' element={<Stock />} />
        <Route path='/stock-chart' element={<StockChart />} />
        <Route path='/stock-chart-all' element={<StockChartAll />} />
        <Route path='/stock-multi-axis' element={<StockMultiAxis />} />
        <Route path='/highcharts-stock' element={<HighChartsStock />} />
        <Route path='/stock-combined' element={<StockCombined />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
