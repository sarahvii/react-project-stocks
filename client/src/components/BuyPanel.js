import React, { useState } from 'react';
import PortfolioStocksService from '../PortfolioStocksServices';

const BuyPanel = ({ selectedStock }) => {

    const [name, setName] = useState("");
    const [symbol, setSymbol] = useState("");
    const [date_purchased, setDate_Purchased] = useState("")
    const [holdings, setHoldings] = useState("")


    

    const handleHoldingsChange = (event) => setHoldings(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        PortfolioStocksService.addPortfolioStock({
            name: selectedStock.name,
            symbol: selectedStock.symbol,
            date_purchased: selectedStock.date_purchased,
            holdings: holdings
        });
        setName("");
        setSymbol("");
        setDate_Purchased("");
        setHoldings("");
    }

    return (
        <>
        <p>Buy Panel</p>
        <form id="buy_form" onSubmit={handleSubmit}>
            <label>Amount to buy:
                <input 
                type="text" 
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