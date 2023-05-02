use stocks_hub;
db.dropDatabase();

db.stocks.insertMany(
 [{
  name: 'Apple Inc.',
  symbol: 'AAPL',
  date_purchased: '4/5/2022',
  holdings: 20,
  price_purchased: 165.02,
},
{
  name: 'International Business Machines',
  symbol: 'IBM',
  date_purchased: '5/6/2022',
  holdings: 40,
  price_purchased: 136.11,	

},
{
  name: 'Tesla, Inc.',
  symbol: 'TSLA',
  date_purchased: '6/7/2022',
  holdings: 60,
  price_purchased: 231.73,
},
// {
//   name: 'NetEase, Inc.',
//   symbol: 'NTES',
//   date_purchased: '7/8/2022',
//   holdings: 80,
//   price_purchased: 87.79,
  
// },
// {
//   name: 'Electronic Arts Inc.',
//   symbol: 'EA',
//   date_purchased: '8/9/2022',
//   holdings: 80,
//   price_purchased: 126.73,
// },]
]);




