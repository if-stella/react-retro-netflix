import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import {ReactComponent as ChevronLeft} from '../assets/txt-icon-chevron-left.svg';
import {ReactComponent as ChevronRight} from '../assets/txt-icon-chevron-right.svg';

const Row = ({title, fetchURL, rowID}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };


  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="row-container">
    <h2 className='text-white font-bold md:text-xl px-5 mt-4 mb-2'>{title}</h2>
    <div className='relative flex items-center group'>
      <MdChevronLeft
      onClick={slideLeft}
      className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 left-4 new-row-icon"
      size={40}/>
      <ChevronLeft
      onClick={slideLeft}
      className="h-7 w-7 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 left-4 retro-row-icon" />
      <div id={'slider' + rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
        {movies.map((item, id) => (
          <Movie key={id} item={item} />
        ))}
      </div>
      <MdChevronRight
      onClick={slideRight}
      className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 right-4 new-row-icon"
      size={40}/>
      <ChevronRight
      onClick={slideRight}
      className="h-7 w-7 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 right-4 retro-row-icon" />
    </div>
    </div>
  )
}

export default Row
