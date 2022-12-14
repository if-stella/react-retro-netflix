import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { ImCross } from 'react-icons/im';
import {ReactComponent as ChevronLeft} from '../assets/txt-icon-chevron-left.svg';
import {ReactComponent as ChevronRight} from '../assets/txt-icon-chevron-right.svg';
import {ReactComponent as Cross} from '../assets/txt-icon-cross.svg';


const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const movieRef = doc(db, 'users', `${user?.email}`)
  const deleteShow = async (passedID) => {
      try {
        const result = movies.filter((item) => item.id !== passedID)
        await updateDoc(movieRef, {
            savedShows: result
        })
      } catch (error) {
          console.log(error)
      }
  }

  return (
    <>
      <h2 className='text-white font-bold md:text-xl px-4 mt-4 mb-2'>Your Shows</h2>
      <div className='relative flex items-center group'>
      <MdChevronLeft
      onClick={slideLeft}
      className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer left-2 sm:left-4 new-row-icon z-[14] h-7 w-7 sm:h-10 sm:w-10"/>
      <ChevronLeft
      onClick={slideLeft}
      className="h-6 w-6 sm:h-8 sm:w-8 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-[14] left-2 sm:left-4 retro-row-icon" />
        <div
          id={'slider'}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
        >
          {movies.map((item) => (
            <div
              key={item.id}
              className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative pl-2'
            >
              <img
                className='w-full h-auto block imgfilter'
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <div className='absolute z-[3] top-0 left-0 block w-[97%] p-[8px] md:p-[16px] xl:p-[32px] h-full ml-2 text-white movie-overlay border-none'>
                <p className='break-words whitespace-pre-wrap text-[10px] md:text-sm lg:text-lg font-bold flex justify-center items-center h-full text-center'>
                  {item?.title}
                </p>
                <p onClick={()=> deleteShow(item.id)} className='absolute text-gray-300 hover:text-red-600 top-2 left-3 sm:top-4 sm:left-5'><ImCross className="new-icon w-3 h-3 sm:w-5 sm:h-5"/> <Cross className='retro-icon w-4 h-4 sm:w-6 sm:h-6 fill-white hover:fill-red-600'  /></p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
        onClick={slideRight}
        className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-[14] right-2 sm:right-4 new-row-icon h-7 w-7 sm:h-10 sm:w-10"/>
        <ChevronRight
        onClick={slideRight}
        className="h-6 w-6 sm:h-8 sm:w-8 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-[14] right-2 sm:right-4 retro-row-icon" />
      </div>
    </>
  );
};

export default SavedShows;
