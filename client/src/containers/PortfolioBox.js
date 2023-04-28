import Nav from "../components/Nav";
import Chart from "../components/Chart";
import Search from "../components/Search";
import NewsPanel from "../components/NewsPanel";
import PieChart from "../components/PieChart";
import StockDetailsItem from "../components/StockDetailsItem";
import StockDetailsList from "../components/StockDetailsList";

const PortfolioBox = () => {
    return ( 
        <>
            <p>PortfolioBox</p>
            <Nav></Nav>
            <Search></Search>
            <PieChart></PieChart>
            <NewsPanel></NewsPanel>
            <StockDetailsList>
                <StockDetailsItem></StockDetailsItem>
            </StockDetailsList>

            <hr></hr>

        </>
     );
}
 
export default PortfolioBox;