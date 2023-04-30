import React, { useState } from 'react';
import PortfolioStocksService from '../PortfolioStocksServices';

const BuyPanel = ({ selectedStock }) => {

    const [holdings, setHoldings] = useState(0)


    

    const handleHoldingsChange = (event) => setHoldings(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        PortfolioStocksService.addPortfolioStock({
            name: selectedStock.name,
            symbol: selectedStock.symbol,
            date_purchased: selectedStock.date_purchased,
            holdings: parseInt(holdings)
        });

        setHoldings(0);
    }

    return (
        <>
        <p>Buy Panel</p>
        <form id="buy_form" onSubmit={handleSubmit}>
            <label>Amount to buy:
                <input 
                type="number" 
                placeholder="0"
                name="holdings" 
                value={holdings}
                onChange={handleHoldingsChange}
                /> 
            </label>
            <button type="submit">Buy</button>
        </form>
        </>
    )

    }

export default BuyPanel
;