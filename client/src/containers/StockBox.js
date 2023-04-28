import Nav from "../components/Nav";
import Chart from "../components/Chart";
import Search from "../components/Search";
import BuyPanel from "../components/BuyPanel";
import NewsPanel from "../components/NewsPanel";
import StockDetailsItem from "../components/StockDetailsItem";

const StockBox = () => {
    return ( 
        <>
            <p>StockBox</p> 
            <Nav></Nav>
            <Search></Search>
            <Chart></Chart>
            <BuyPanel></BuyPanel>
            <NewsPanel></NewsPanel>
            <StockDetailsItem></StockDetailsItem>
            <hr></hr>

        </>

     );
}
 
export default StockBox;