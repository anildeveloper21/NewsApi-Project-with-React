import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
    const [articles, seArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/everything?q=${category}&apiKey=827f5db5bf054c5bb0a56abef23fee0b`
        fetch(url).then(response => response.json()).then(data => seArticles(data.articles))
    },[category])
  return (
    <div>
      <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
      {
        articles.map((news,index) => {
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        })
      }
    </div>
  )
}

export default NewsBoard
