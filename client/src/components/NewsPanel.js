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
    <NewsPanelContainer>
      {/* <h1>News</h1> */}
      {/* <button onClick={handleGetNews}>Fetch</button> */}
      <NewsList>
      {data.map((item, idx) => (
        <NewsItem key={idx}>
          <h3>{item.title}</h3>
          {/* <h5>Sentiment: {item.overall_sentiment_label}</h5>
          <h5>Sentiment Score: {item.overall_sentiment_score}</h5> */}
          <a href={item.url}>
            <img
              src={item.banner_image}
              alt={item.title}
              width='400'
              height='300'
            />
          </a>
          <p>{item.summary}</p>
          {/* <p>{JSON.stringify(item.ticker_sentiment)}</p> */}
          {/* <p>Authors: {item.authors}</p> */}
        </NewsItem>
      ))}
      </NewsList>
      </NewsPanelContainer>
    </>
  );
};

const NewsPanelContainer = styled.div`
  // overflow-x: scroll;
  // white-space: nowrap;
  `;

const NewsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  `;

const NewsItem = styled.div`
    background: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin: 10px;
    // width: calc(33.33% - 120px);
    width: 250px;
    overflow: hidden;

    a {
      display: block;
      overflow: hidden;
      height: 200px;
    }

      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }

    h3 {
      word-wrap: break-word;
    }

    &:hover {
      transform: scale(1.05);
      transition: transform 0.2s ease-in-out;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      z-index: 1;
    }

    @media (max-width: 768px) {
      width: calc(50% - 20px);
    }
`;


export default NewsPanel;
