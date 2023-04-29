import StockItem from "./StockItem"

const StockList = ({portfolioStocks, selectedStock, setSelectedStock}) => {



    const stockNodes = portfolioStocks.map((portfolioStock) => {
        return <StockItem portfolioStock={portfolioStock} key={portfolioStock._id} selectedStock={selectedStock} setSelectedStock={setSelectedStock}/>
    })

    return ( 
        <>
            <h3>Portfolio:</h3>
            <ul>{stockNodes}</ul>
        </>

     );
}
 
export default StockList;