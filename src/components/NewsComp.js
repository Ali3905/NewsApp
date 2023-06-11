import React, { useEffect } from 'react'
import {useState} from 'react'
import Loading from './loading';
import News from './News'
import InfiniteScroll from 'react-infinite-scroll-component';

const NewsComp = (props) => {



  const article =[
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Jacob Lev",
        "title": "Boston Bruins rescind contract after NHL says player is ineligible over bullying of a Black classmate as a young teen",
        "description": "The Boston Bruins have rescinded their contract with Mitchell Miller after the National Hockey League deemed him ineligible to join the team due to a bullying incident the player participated in when he was a young teenager.",
        "url": "http://www.cnn.com/2022/11/06/sport/boston-bruins-part-ways-mitchell-miller-reaj/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221107115754-cam-neely.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2022-11-07T04:26:16Z",
        "content": "The Boston Bruins have rescinded their contract with Mitchell Miller after the National Hockey League deemed him ineligible to join the team due to a bullying incident the player participated in when… [+3724 chars]"
      },
      {
        "source": {
          "id": "nhl-news",
          "name": "NHL News"
        },
        "author": "NHL Public Relations",
        "title": "Tkachuck suspended two games for actions in Panthers game",
        "description": "Florida Panthers forward Matthew Tkachuk has been suspended for two games, without pay, for high-sticking Los Angeles Kings goaltender Jonathan Quick during NHL Game No. 189 in Los Angeles on Saturday, Nov. 5, the National Hockey League's Department of Player…",
        "url": "https://www.nhl.com/news/florida-panthers-matthew-tkachuk-suspended-two-games-for-high-sticking/c-337290694",
        "urlToImage": "https://cms.nhl.bamgrid.com/images/photos/337290586/1024x576/cut.jpg",
        "publishedAt": "2022-11-06T21:37:21Z",
        "content": null
      },
      {
        "source": {
          "id": "nhl-news",
          "name": "NHL News"
        },
        "author": "Tracey Myers",
        "title": "McNab dies at 70, was 2021 U.S. Hockey Hall of Fame inductee",
        "description": "Peter McNab, color analyst for the Colorado Avalanche who played 14 NHL seasons as a forward, died Sunday. He was 70.",
        "url": "https://www.nhl.com/news/us-hockey-hall-of-fame-inductee-peter-mcnab-dies-at-70/c-337290468",
        "urlToImage": "https://cms.nhl.bamgrid.com/images/photos/337290378/1024x576/cut.jpg",
        "publishedAt": "2022-11-06T20:36:30Z",
        "content": "Peter McNab, color analyst for the Colorado Avalanche who played 14 NHL seasons as a forward, died Sunday. He was 70.\"The Altitude and KSE family are saddened to announce the passing of our friend, P… [+3130 chars]"
      }
    ]
   
    const [articles , setArticles] = useState(article)
    const [page , setPage] = useState(1)
    const [loading , setLoading] = useState(false)
    const [totalResults, setTotalResults] = useState(0) 
  

  const update = async (pageNo) =>  {
    // pageNum = pageNo 
    document.title = `NewsMonkey - ${capitalize(props.category)}` 
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&pageSize=6&page=${pageNo}`
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    setPage(pageNo)
    props.setProgress(100)
  }

  useEffect(() => {
    update(page);
  },[]);

 const fetchMoreData = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&pageSize=6&page=${page + 1}`
        // this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(Array.from(parsedData.articles)))
        setPage(page + 1)
    }
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

    return (
      <div className='container my-3'>
        {/* {loading(true) && <Loading/>} */}
        <h2>Top Headlines</h2>
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loading/>}
        >
      {<div className='row'>
       {articles.map((ele)=>{
      return <div className='col-md-4 my-4' key={ele.url}>
     <News title = {ele.title.slice(0, 45)} desc = {ele.description ? ele.description.slice(0, 200): null} img = {ele.urlToImage} newsUrl = {ele.url} date = {ele.publishedAt.slice(0,10)} dat = {ele.publishedAt.slice(11,18)} author = {ele.author} />
     </div>
      })}
      </div>}
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
    <button type="button" className="btn btn-dark" onClick={this.previous} disabled ={this.state.page<=1} >Previous</button>
    <button type="button" className="btn btn-dark" onClick={this.next} disabled ={this.state.page + 1 > Math.ceil(this.state.totalResults/4)}>Next</button>
    </div> */}
    </div>
    )
}

export default NewsComp
