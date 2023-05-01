import StockItem from "./StockItem"

const StockList = ({portfolioStocks, selectedStock, setSelectedStock}) => {

    // const hardcodedApiData = [
    //     {currentPrice: 169.59},
    //     {currentPrice: 126.09},
    //     {currentPrice: 161.78},
    //     {currentPrice: 89.03},
    //     {currentPrice: 127.42},
    //     {currentPrice: 101.00},    
    // ]

    const HardcodedPrice = 150



    const stockNodes = portfolioStocks.map((portfolioStock, index) => {
        // const currentPrice = hardcodedApiData[index].currentPrice;
        const currentPrice = HardcodedPrice
        return <StockItem portfolioStock={portfolioStock} key={portfolioStock._id} selectedStock={selectedStock} setSelectedStock={setSelectedStock} currentPrice={currentPrice}/>
    })

    return ( 
        <>
            <h3>Portfolio:</h3>
            <ul>{stockNodes}</ul>
        </>

     );
}
 
export default StockList;