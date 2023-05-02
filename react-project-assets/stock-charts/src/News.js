import React, { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState([]);
  const [fetchTrigger, setFetchTrigger] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = 'SQFHJEETBG9RZHNR';
      const apiUrl = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=${API_KEY}`;
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const articles = data.feed.slice(
          0,
          5
        ); /* Limit the results to the first 5 articles */
        setData(articles);
        console.log(articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    setFetchTrigger(false);
  }, [fetchTrigger]);

  const handleGetNews = () => {
    setFetchTrigger(true);
  };

  return (
    <>
      <h1>News</h1>
      <button onClick={handleGetNews}>Fetch</button>
      {data.map((item, idx) => (
        <div key={idx}>
          <h3>{item.title}</h3>
          <h5>Sentiment: {item.overall_sentiment_label}</h5>
          <h5>Sentiment Score: {item.overall_sentiment_score}</h5>
          <a href={item.url}>
            <img
              src={item.banner_image}
              alt={item.title}
              width='400'
              height='300'
            />
          </a>
          <p>Summary: {item.summary}</p>
          {/* <p>{JSON.stringify(item.ticker_sentiment)}</p> */}
          <p>Authors: {item.authors}</p>
        </div>
      ))}
    </>
  );
};

export default Home;
