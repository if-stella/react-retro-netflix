import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests';

const Home = () => {
  return (
    <div className="home-container">
      <Main />
      <Row rowID="1" title='Trending' fetchURL={requests.requestTrending}/>
      <Row rowID="2" title='Top Rated' fetchURL={requests.requestTopRated}/>
    </div>
  )
}

export default Home
