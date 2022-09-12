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
    <h2 className='text-white font-bold md:text-xl px-5 mt-4 mb-2 relative z-[12]'>{title}</h2>
    <div className='relative flex items-center group'>
      <MdChevronLeft
      onClick={slideLeft}
      className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer left-2 sm:left-4 new-row-icon z-[14] h-7 w-7 sm:h-10 sm:w-10"/>
      <ChevronLeft
      onClick={slideLeft}
      className="h-6 w-6 sm:h-8 sm:w-8 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-[14] left-2 sm:left-4 retro-row-icon" />
      <div id={'slider' + rowID} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
        {movies.map((item, id) => (
          <Movie key={id} item={item} />
        ))}
      </div>
      <MdChevronRight
      onClick={slideRight}
      className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-[14] right-2 sm:right-4 new-row-icon h-7 w-7 sm:h-10 sm:w-10"/>
      <ChevronRight
      onClick={slideRight}
      className="h-6 w-6 sm:h-8 sm:w-8 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-[14] right-2 sm:right-4 retro-row-icon" />
    </div>
    </div>
  )
}

export default Row
