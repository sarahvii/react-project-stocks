import Nav from "../components/Nav";
import Search from "../components/Search";
import NewsPanel from "../components/NewsPanel";
import StockList from "../components/StockList";
import StockItem from "../components/StockItem";
import HomeChart from "../components/HomeChart";
import styled from "styled-components";

const HomeBox = ({}) => {



    return ( 
        <HomeContainer>
            <>
            <p>Homebox</p>
            <Nav></Nav>
            <Search></Search>
            <HomeChart></HomeChart>
            <NewsPanel></NewsPanel>
            <hr></hr>
            </>
        </HomeContainer>
     );
}

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    margin: 10;
`
 
export default HomeBox;