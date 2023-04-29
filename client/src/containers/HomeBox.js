import Nav from "../components/Nav";
import Chart from "../components/Chart";
import Search from "../components/Search";
import NewsPanel from "../components/NewsPanel";
import StockDetailsList from "../components/StockDetailsList";
import StockList from "../components/StockList";
import StockItem from "../components/StockItem";

const HomeBox = ({portfolioStocks}) => {

    console.log("Portfolio stocks:", portfolioStocks);


    const stockNodes = portfolioStocks.map((portfolioStock) => {
        console.log("Mapping portfolio stock:", portfolioStock);
        return <StockItem portfolioStock={portfolioStock} key={portfolioStock._id} />
    })

    console.log("Stock nodes:", stockNodes);

    return ( 
        <>
            <p>Homebox</p>
            <Nav></Nav>
            <Search></Search>
            <Chart></Chart>
            <NewsPanel></NewsPanel>
            <StockList>
                {stockNodes}
            </StockList>
            <ul>
                {stockNodes}
            </ul>


            <hr></hr>
        </>
     );
}
 
export default HomeBox;