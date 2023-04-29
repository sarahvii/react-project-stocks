import Nav from "../components/Nav";
import Chart from "../components/Chart";
import Search from "../components/Search";
import NewsPanel from "../components/NewsPanel";
import StockDetailsList from "../components/StockDetailsList";
import StockList from "../components/StockList";
import StockItem from "../components/StockItem";

const HomeBox = ({portfolioStocks}) => {

    const stockNodes = portfolioStocks.map((portfolioStock) => {
        return <StockItem portfolioStock={portfolioStock} key={portfolioStock._id} />
    })

    return ( 
        <>
            <p>Homebox</p>
            <Nav></Nav>
            <Search></Search>
            <Chart></Chart>
            <NewsPanel></NewsPanel>
            <StockList stockNodes={stockNodes}></StockList>
            <hr></hr>
        </>
     );
}
 
export default HomeBox;