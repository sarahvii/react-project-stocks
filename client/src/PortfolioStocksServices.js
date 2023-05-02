const baseURL = 'http://localhost:9000/api/stocks/';

const PortfolioStocksService =  {
  getPortfolioStocks() {
    return fetch(baseURL)
      .then(res => res.json());
  },

  async fetchOneStockApi (stockSymbol) {
    const API_KEY = process.env.REACT_APP_ALPHA_KEY;
    let StockSymbol = stockSymbol;
    let API_Call = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
  
    const response = await fetch(API_Call);
    const data = await response.json();
    console.log(data);
    return data
  },

  addPortfolioStock(stock) {
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(stock),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          console.error('Server returned an error:', res.status, res.statusText);
          return res.text().then(text => {
            console.error('Response body:', text);
            throw new Error('Server returned an error');
          });
        }
        
        
        return res.json();
  });
},

  updatePortfolioStock(stock) {
    return fetch(baseURL + stock._id, {
      method: 'PUT',
      body: JSON.stringify(stock),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json());
  },

  deletePortfolioStock(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    });
  }
};

export default PortfolioStocksService;