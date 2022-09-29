import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import {ReactComponent as HeartEmpty} from '../assets/txt-icon-heart-empty.svg';
import {ReactComponent as HeartFill} from '../assets/txt-icon-heart-fill.svg';

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const {user} = UserAuth();


  const movieID = doc(db, 'users', `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert('Please log in to save a movie');
    }
  };

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className='w-[175px] sm:w-[220px] md:w-[280px] lg:w-[320px] inline-block cursor-pointer relative pl-2'>
      <img className='h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title}/>

      <div className='absolute top-0 left-0 block w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 ml-2 text-white'>
          <p className='white-space-normal text-[10px] md:text-sm lg:text-lg font-semibold flex justify-center items-center h-full text-center relative z-[12]'>
            {truncateString(item?.title, 16)}
          </p>
          <p onClick={saveShow}>
          {like ? (
            <>
            <FaHeart className='new-icon absolute text-red-600 top-2 left-2 sm:top-4 sm:left-4 sm:w-6 sm:h-6 w-5 h-5 z-[12]' />
            <HeartFill className='retro-icon absolute top-2 left-2 sm:top-4 sm:left-4 sm:w-6 sm:h-6 w-5 h-5 z-[12]' />
            </>
          ) : (
            <>
            <FaRegHeart className='new-icon absolute text-gray-300 hover:text-red-600 top-2 left-2 sm:top-4 sm:left-4 sm:w-6 sm:h-6 w-5 h-5 z-[12]' />
            <HeartEmpty className='retro-icon absolute top-2 left-2 sm:top-4 sm:left-4 sm:w-6 sm:h-6 w-5 h-5 fill-gray-300 hover:fill-red-600 z-[12]' />
            </>
          )}
        </p>
      </div>
    </div>
  )
}

export default Movie
