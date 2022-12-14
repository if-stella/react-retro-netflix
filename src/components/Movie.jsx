import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import {ReactComponent as HeartEmpty} from '../assets/txt-icon-heart-empty.svg';
import {ReactComponent as HeartFill} from '../assets/txt-icon-heart-fill.svg';
import Modal from './Modal';

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

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='w-[175px] sm:w-[220px] md:w-[280px] lg:w-[320px] inline-block cursor-pointer relative pl-2' onClick={() => setOpenModal(true)} >
      <Modal
      title={item?.title}
      language={item?.original_language}
      summary={truncateString(item?.overview, 245)}
      imagesrc={item?.backdrop_path}
      postersrc={item?.poster_path}
      genre={item?.genre_ids[0]}
      release={item?.release_date.slice(0,4)}
      rating={Math.round(item?.vote_average)}
      open={openModal}
      onClose={() => setOpenModal(false)} />
      <div className="dither">
        <picture>
          <img className='h-auto block imgfilter' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title}/>
        </picture>
      </div>
      <div className='absolute z-[3] top-0 left-0 block w-[97.5%] p-[8px] md:p-[16px] xl:p-[32px] h-full ml-2 text-white movie-overlay'>
          <p className='break-words whitespace-pre-wrap text-[10px] md:text-sm lg:text-lg font-semibold flex justify-center items-center h-full text-center relative z-[12]'>
            {truncateString(item?.title, 30)}
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
