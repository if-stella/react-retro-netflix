import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Requests';

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  console.log(movie)
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className='w-full text-white main'>
      <div className="w-full h-full">
      <div className='main-overlay absolute w-full main-img'></div>
        <img className="w-full h-full object-cover"
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}/>
      </div>
      <div className="w-full p-6 sm:p-16 main-info">
        <h1 className='text-3xl md:text-7xl font-bold'>{movie?.title}</h1>
        <div className='my-4'>
          <button className=' text-black/90 border-white py-2 px-5 font-semibold hover:bg-white hover:text-black hover:border-gray-800'>Play</button>
          <button className=' text-white/80 py-2 px-5 ml-4 font-semibold hover:text-white '>Watch Later</button>
        </div>
        <p className='my-4'>
          {truncateString(movie?.overview, 150)}
        </p>
      </div>
    </div>
  )
}

export default Main
