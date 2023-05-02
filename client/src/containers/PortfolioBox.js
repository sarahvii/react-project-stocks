import Nav from "../components/Nav";
import Search from "../components/Search";
import NewsPanel from "../components/NewsPanel";
import PieChart from "../components/PieChart";
import StockList from "../components/StockList";
import StockItem from "../components/StockItem";
import styled from "styled-components";

const PortfolioBox = ({portfolioStocks, selectedStock, setSelectedStock}) => {
    return ( 
        <PortfolioContainer>

            <Nav></Nav>
            <Search></Search>
            <PieChart></PieChart>

            <StockList portfolioStocks={portfolioStocks} selectedStock={selectedStock} setSelectedStock={setSelectedStock}></StockList>


            <NewsPanel></NewsPanel>

        </PortfolioContainer>
     );
}

const PortfolioContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    margin: 10;
`
 
export default PortfolioBox;