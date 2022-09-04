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
    <div className='w-full h-screen md:h-[600px] text-white'>
      <div className="w-full h-full">
      <div className='absolute w-full h-screen md:h-[600px] bg-gradient-to-r from-black'></div>
        <img className="w-full h-full object-cover"
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}/>
      </div>
      <div className="absolute w-full top-[60%] sm:top-[32%] p-6 sm:p-16">
        <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
        <div className='my-4'>
          <button className='border bg-gray-200 text-black/90 border-gray-400 py-2 px-5 font-semibold hover:bg-white hover:text-black hover:border-gray-200 rounded'>Play</button>
          <button className='border text-white/80 border-gray-400 py-2 px-5 ml-4 font-semibold rounded hover:text-white hover:border-white'>Watch Later</button>
        </div>
        <p className='my-4 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-300'>
          {truncateString(movie?.overview, 150)}
        </p>
      </div>
    </div>
  )
}

export default Main
