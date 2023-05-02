import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NewsPanel = () => {
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
      {/* <button onClick={handleGetNews}>Fetch</button> */}
      <NewsList>
      {data.map((item, idx) => (
        <NewsItem key={idx}>
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
        </NewsItem>
      ))}
      </NewsList>
    </>
  );
};

const NewsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  `

const NewsItem = styled.div`
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
`


// const NavHeader = styled.h2`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 0px 50px;
//     box-shadow: 0 1px 8px #ddd;
// `

// const NavLinks = styled.ul`
//     display: flex;
//     justify-content: space-between;
//     list-style: none;
//     padding: 20px;
// `

// const NavListItems = styled.li`
//     display: inline-block;
//     justify-content: space-between;
//     padding: 20px;
// `

// const NavLink = styled(Link)`
//     text-decoration: none;
//     color: #555;
//     transition: all 0.3s ease 0s;

//     &:hover {
//         color: #b2dfdb;
//     }
//     `

export default NewsPanel;
