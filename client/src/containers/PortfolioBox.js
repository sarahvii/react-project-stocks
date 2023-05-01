import Nav from "../components/Nav";
import Chart from "../components/Chart";
import Search from "../components/Search";
import NewsPanel from "../components/NewsPanel";
import PieChart from "../components/PieChart";
import StockList from "../components/StockList";
import StockItem from "../components/StockItem";

const PortfolioBox = ({portfolioStocks, selectedStock, setSelectedStock}) => {
    return ( 
        <>
            <p>PortfolioBox</p>
            <Nav></Nav>
            <Search></Search>
            <PieChart></PieChart>
            <NewsPanel></NewsPanel>
            <StockList portfolioStocks={portfolioStocks} selectedStock={selectedStock} setSelectedStock={setSelectedStock}></StockList>



            <hr></hr>

        </>
     );
}
 
export default PortfolioBox;