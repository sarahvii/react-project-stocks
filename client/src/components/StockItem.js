import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import PortfolioStocksService from '../PortfolioStocksServices'

const StockItem = ({portfolioStock, selectedStock, setSelectedStock}) => {

    const [currentPrice, setCurrentPrice] = useState(0)

    const fetchPrice = async () => {
        const singleStockData = await PortfolioStocksService.fetchOneStockApi(portfolioStock.symbol)
        const priceToSet = singleStockData["Global Quote"]["05. price"]
        setCurrentPrice(priceToSet)
    }
    
    useEffect(()=> {
        fetchPrice()
    }, [])



    console.log("Portfolio stock in StockItem:", portfolioStock);

    const handleClick = (portfolioStock) => {
        console.log("click")
        setSelectedStock(portfolioStock)
        console.log("selectedStock is now:", selectedStock)
    }

    const calculatePriceDiff = (portfolioStock) => {
        console.log("currentPrice:", currentPrice);
        console.log("price_purchased:", portfolioStock.price_purchased);
        let profit_or_loss = currentPrice - portfolioStock.price_purchased;
        return profit_or_loss;
    }

    const calculatePercentageDiff = (portfolioStock) => {
        let percentage_diff = ((currentPrice - portfolioStock.price_purchased) / portfolioStock.price_purchased) * 100;
        return percentage_diff
    }

    const calculateHoldingsValue = (portfolioStock) => {
        let holdingsValue = portfolioStock.holdings * currentPrice
        return holdingsValue
    }

    const profit_or_loss = calculatePriceDiff(portfolioStock)
    const percentage_diff = calculatePercentageDiff(portfolioStock)
    const holdingsValue = calculateHoldingsValue(portfolioStock)





    return ( 
        <>
        <ul>
         <li><Link to="/stocks"><span onClick={()=>handleClick(portfolioStock)}>{portfolioStock.name}</span></Link></li><li>${holdingsValue.toFixed(2)}</li>
         </ul>
        <ul>
        <li><p>{portfolioStock.symbol}</p></li>
        <li><p>Holdings: {portfolioStock.holdings}</p></li>
        <li><p>Shares  ${profit_or_loss.toFixed(2)}</p></li>
        <li><p>({percentage_diff.toFixed(2)}%)</p></li>
        </ul>
        </>


     );
}
 
export default StockItem;