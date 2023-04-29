import React, { useState, useEffect } from 'react';

const BuyPanel = () => {

    const [holdingsPurchased, setHoldingsPurchased] = useState("");
    const [showHoldingsPurchased, setShowHoldingsPurchased] = useState({show: false, holdings: ""});

    const handleButtonClick = () => {
        console.log('Button has been clicked') // can be removed
        setShowHoldingsPurchased({show:true, holdings: holdingsPurchased});
    };

    const handleFormSubmit = function (event) {
        event.preventDefault();
        console.log(event.target.holdings.value);
        const holdingsPurchasedToSubmit = holdingsPurchased.trim();
        if (!holdingsPurchasedToSubmit) {
            return
        }
        setHoldingsPurchased("");
        setShowHoldingsPurchased({show:true, holdings: holdingsPurchased}); // This doesn't work properly from constHoldingsPurchasedToSubmit to here.

        // TODO: Update Text in StockBox -- ?? or in Buy Panel
  
    };

    const handleHoldingsPurchasedChange = (event) => {
        setHoldingsPurchased(event.target.value);

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
                value={holdingsPurchased}
                onChange={handleHoldingsPurchasedChange}
                onSubmit={handleFormSubmit}
                /> 
            </label>
        <button id="buy_button" onClick={handleButtonClick}>Buy</button>
        </form>
        {showHoldingsPurchased.show && <p>You have purchased {showHoldingsPurchased.holdings} holdings of.</p>}
        </>
        // what is onSubmit doing?  Is the submission activating through useEffect??
    );

};


// re-render once purchased. DONE
// should input type be text?  number..?
// add to db
// update total holdings.  you purchased x of x stocks.  you now hold x of x stocks.
// should this instead render in StockBox?
// Figure out how to render name of stock




export default BuyPanel
;