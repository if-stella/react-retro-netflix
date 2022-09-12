import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Requests';

import { BsFillPlayFill } from 'react-icons/bs';
import {ReactComponent as Play} from '../assets/txt-icon-play.svg';

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
      <div className="w-full bg-blue-700">
        <div className='main-overlay absolute'></div>
        <div id="noise"></div>
          <img className="object-cover object-center"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}/>
        </div>
      <div className="w-full p-6 sm:p-16 main-info">
        <h1 className='text-4xl md:text-7xl font-bold'>{movie?.title}</h1>
        <h1 className="glitch text-4xl md:text-7xl font-bold z-[12]" data-text={movie?.title}>{movie?.title}</h1>
        <div className='my-4'>
          <button className=' text-black/90 border-white py-2 w-full sm:w-auto sm:px-5 font-semibold hover:bg-white hover:text-black hover:border-gray-800 flex justify-center items-center gap-2 relative z-[12]'>Play<Play className="w-5 h-5 retro-icon"/><BsFillPlayFill className="w-5 h-5 new-icon"/></button>
        </div>
        <p className='my-4 relative z-[12]'>
          {truncateString(movie?.overview, 150)}
        </p>
      </div>
    </div>
  )
}

export default Main
