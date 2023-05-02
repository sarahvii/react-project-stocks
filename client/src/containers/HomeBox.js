import Nav from "../components/Nav";
import Search from "../components/Search";
import NewsPanel from "../components/NewsPanel";
import StockList from "../components/StockList";
import StockItem from "../components/StockItem";
import HomeChart from "../components/HomeChart";

const HomeBox = ({}) => {



    return ( 
        <>
            <p>Homebox</p>
            <Nav></Nav>
            <Search></Search>
            <HomeChart></HomeChart>
            <NewsPanel></NewsPanel>
            <hr></hr>
        </>
     );
}
 
export default HomeBox;