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
         <Link to="/stocks"><span onClick={()=>handleClick(portfolioStock)}>{portfolioStock.name}</span></Link><span> <span>_/_ ${holdingsValue.toFixed(2)}</span></span>
        <p>{portfolioStock.symbol} {portfolioStock.holdings} Shares  ${profit_or_loss.toFixed(2)} ({percentage_diff.toFixed(2)}%)</p>
        </>


     );
}
 
export default StockItem;