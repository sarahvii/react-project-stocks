const StockData = () => {
    return ( 
        <>
        {error ? (
            <p>Error: {error.message}</p>
            ) : (
            <p>
                Price:{' '}
                {globalSelectedStockData && globalSelectedStockData['Global Quote'] && globalSelectedStockData['Global Quote']['05. price']}
                Change:{' '}
                {globalSelectedStockData && globalSelectedStockData['Global Quote'] && globalSelectedStockData['Global Quote']['10. change percent']}
    
            </p>
          )}
        </>
    );
}
 
export default StockData;