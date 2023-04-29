import React, { useEffect } from 'react';

const BuyPanel = () => {

    const handleButtonClick = () => {
        console.log('Button has been clicked');
    };

    const handleFormSubmit = function (event) {
        event.preventDefault();
        console.log(event.target.holdings.value);
    };

    useEffect(() => {
        const form = document.querySelector('#buy_form');
        const button = document.querySelector('#buy_button');

        form.addEventListener('submit', handleFormSubmit);
        button.addEventListener('click', handleButtonClick);

        return () => {
            form.removeEventListener('submit', handleFormSubmit);
            button.removeEventListener('click', handleButtonClick);
        };
    }, []);

    return (
        <>
        <p>Buy Panel</p>
        <form id="buy_form">
            <label>Amount to buy:
                <input type="text" name="holdings" />
            </label>
        <button id="buy_button">Buy</button>
        </form>
        </>
    );



};







export default BuyPanel
;