import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests';

const Home = () => {
  return (
    <div className="home-container">
      <Main />
      <Row rowID="1" title='Trending movies' fetchURL={requests.requestTrending}/>
      <Row rowID="2" title='Top rated' fetchURL={requests.requestTopRated}/>
      <Row rowID="3" title='Crime movies' fetchURL={requests.requestCrime}/>
      <Row rowID="4" title='Animated movies' fetchURL={requests.requestAni}/>
    </div>
  )
}

export default Home
