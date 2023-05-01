import { Link } from 'react-router-dom'

const StockItem = ({portfolioStock, selectedStock, setSelectedStock}) => {
    console.log("Portfolio stock in StockItem:", portfolioStock);

    const handleClick = (portfolioStock) => {
        console.log("click")
        setSelectedStock(portfolioStock)
        console.log("selectedStock is now:", selectedStock)


    }

    return ( 
        <Link to="/stocks">
            <p onClick={()=>handleClick(portfolioStock)}>{portfolioStock.name}</p>
        </Link>
     );
}
 
export default StockItem;