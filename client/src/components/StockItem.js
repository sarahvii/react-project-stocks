const StockItem = ({portfolioStock}) => {
    console.log("Portfolio stock in StockItem:", portfolioStock);

    return ( 
        <p>{portfolioStock.name}</p>
     );
}
 
export default StockItem;