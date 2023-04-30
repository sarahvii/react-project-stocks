import React, { useState } from 'react';
// import { addPortfolioStock } from PortfolioStocksService;
import PortfolioStocksService from '../PortfolioStocksServices';

const BuyPanel = ( { addHolding }) => {

    const [holdingsPurchased, setHoldingsPurchased] = useState({
        name: "",
        symbol: "",
        date_purchased: "",
        holdings: "",
    });
    const [showHoldingsPurchased, setShowHoldingsPurchased] = useState({show: false, holdings: ""});

    // const handleButtonClick = () => {
    //     console.log('Button has been clicked') // can be removed
    //     setShowHoldingsPurchased({show:true, holdings: holdingsPurchased});
    // }; // is this section just duplicating information. should this instead all be via onSubmit?

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.holdings.value);
        const holdingsPurchasedToSubmit = holdingsPurchased.holdings.trim();
        if (!holdingsPurchasedToSubmit) {
            return;
        }

        PortfolioStocksService.addPortfolioStock(holdingsPurchasedToSubmit)
        .then((response) => {
            setHoldingsPurchased("");
            setShowHoldingsPurchased({ show:true, holdings: response.holdings });
        })
        .catch((error) => {
            console.log(error);
        });
    
    };


  // This doesn't work properly from constHoldingsPurchasedToSubmit to here.

        // TODO: Update Text in StockBox -- ?? or in Buy Panel
  


    const handleHoldingsPurchasedChange = (event) => {
        const newHoldingsPurchased = Object.assign({}, holdingsPurchased);
        newHoldingsPurchased[event.target.name] = event.target.value;
        setHoldingsPurchased(newHoldingsPurchased);

    };

    // useEffect(() => {
    //     const form = document.querySelector('#buy_form');
    //     const button = document.querySelector('#buy_button');

    //     form.addEventListener('submit', handleFormSubmit);
    //     button.addEventListener('click', handleButtonClick);

    //     return () => {
    //         form.removeEventListener('submit', handleFormSubmit);
    //         button.removeEventListener('click', handleButtonClick);
    //     };
    // }, []);

    return (
        <>
        <p>Buy Panel</p>
        <form id="buy_form" onSubmit={handleFormSubmit}>
            <label>Amount to buy:
                <input 
                type="text" 
                placeholder="0" 
                name="holdings" 
                value={holdingsPurchased.holdings}
                onChange={handleHoldingsPurchasedChange}
                /> 
            </label>
            <button type="submit">Buy</button>
        </form>
        {showHoldingsPurchased.show && <p>You have purchased {showHoldingsPurchased.holdings} holdings of.</p>}
        </>
    );

};


// re-render once purchased. DONE
// should input type be text?  number..?
// add to db
// update total holdings.  you purchased x of x stocks.  you now hold x of x stocks.
// should this instead render in StockBox?
// Figure out how to render name of stock

// Speak to Paul about rendering of portfolio stocks details in StockBox.

// Link to DB.

// The number of stocks is not linked to the name of the stock - how do we link these?




export default BuyPanel
;