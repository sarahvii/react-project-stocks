import './App.css';
import HomeBox from './containers/HomeBox';
import PortfolioBox from './containers/PortfolioBox';
import StockBox from './containers/StockBox';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <HomeBox></HomeBox>
      <PortfolioBox></PortfolioBox>
      <StockBox></StockBox>
    </div>
  );
}

export default App;
