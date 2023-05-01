import Nav from "../components/Nav";
import Chart from "../components/Chart";
import Search from "../components/Search";
import NewsPanel from "../components/NewsPanel";
import StockList from "../components/StockList";
import StockItem from "../components/StockItem";

const HomeBox = ({}) => {



    return ( 
        <>
            <p>Homebox</p>
            <Nav></Nav>
            <Search></Search>
            <Chart></Chart>
            <NewsPanel></NewsPanel>
            <hr></hr>
        </>
     );
}
 
export default HomeBox;