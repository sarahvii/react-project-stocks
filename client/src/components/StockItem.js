const StockItem = ({portfolioStock, selectedStock, setSelectedStock}) => {
    console.log("Portfolio stock in StockItem:", portfolioStock);

    const handleClick = (portfolioStock) => {
        console.log("click")
        setSelectedStock(portfolioStock)
        console.log("selectedStock is now:", selectedStock)


    }

    return ( 
        <p onClick={()=>handleClick(portfolioStock)}>{portfolioStock.name}</p>
     );
}
 
export default StockItem;