import React from 'react'
import { ImCross } from 'react-icons/im';
import {ReactComponent as Cross} from '../assets/txt-icon-cross.svg';
import {ReactComponent as Language} from '../assets/txt-icon-language.svg';
import {ReactComponent as Trophy} from '../assets/txt-icon-trophy.svg';
import {ReactComponent as Date} from '../assets/txt-icon-date.svg';
import {data} from '../data/data.js';

const Modal = ({ open, onClose, title, summary, imagesrc, language, rating, postersrc, release, genre }) => {
  if (!open) return null
  const genreIndex = data.findIndex((g)=>g.id===genre)
  return (
    <div onClick={onClose} className="bg-black/90 backdrop-blur-[3px] w-screen h-screen fixed top-[0] left-[0] z-[51]">
      <div onClick={(e) => {
        e.stopPropagation();
      }}
      className="modalbox minimodalbg modalpcolor w-[343px] sm:w-[390px] md:w-[80%] z-[30] relative top-[20%] sm:top-[5%] md:top-[25%] xl:top-[8%] mx-auto flex flex-col md:flex-row p-4 sm:p-0 modaloutline">
        <img className='img-roundedness h-[150px] w-[100px] sm:w-[100%] sm:h-[500px] lg:h-full xl:h-auto md:w-[300px] xl:w-[450px] object-cover object-center imgfilter-clr posterBorder' src={`https://image.tmdb.org/t/p/w500/${postersrc}`} alt={title}/>
        <div className="sepline"></div>
        <h1 className="flex items-center h-[150px] sm:hidden font-bold text-xl break-words whitespace-pre-wrap absolute top-[16px] left-[132px] mr-[32px]">{title}</h1>
        <div className="relative">
        <ImCross className="new-icon modalpcolor hover:text-black w-3 h-3 sm:w-4 lg:w-5 sm:h-4 lg:h-5 absolute right-0 sm:right-[16px] md:right-[32px] top-[-140px] sm:top-[20px] md:top-[28px] z-[31]" onClick={onClose}/>
        <Cross className='retro-icon fill-white/90 hover:fill-red-500 h-5 lg:h-6 xl:h-7 absolute right-[-8px] sm:right-[10px] md:right-[24px] lg:right-[28px] top-[-146px] sm:top-[20px] md:top-[28px] lg:top-[32px] z-[31]' onClick={onClose}/>
        <div className="modalbg md:absolute md:rounded-tr-md rounded-bl-md md:rounded-bl-none rounded-br-md md:h-full w-full p-0 sm:p-4 md:px-8 md:pt-6 md:pb-4 mt-4 sm:mt-0 flex flex-col justify-between z-[30]">
          <div className="upperhalf">
            <h1 className="hidden sm:block font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl break-words whitespace-pre-wrap mr-6 lg:mr-10">{title}</h1>
            <p className="break-words whitespace-pre-wrap sm:mt-2">{summary}</p>
            <div className="w-full flex justify-between items-end relative mt-6">
              <p className="pr-1"><strong>Genre</strong></p>
              <div className="dotline grow mb-1"></div>
              <p className="pl-2">{data[genreIndex].name}</p>
            </div>
          </div>
          <div className="lowerhalf">
          <div className="w-full modalline mt-4 md:mt-6"></div>
            <div className="flex justify-between mt-2">
              <div className="text-center md:text-left">
                <div className="flex flex-col md:flex-row">
                  <Language className='mx-auto modal-icon fill-white/90 h-5 lg:h-6 xl:h-7 md:ml-[-8px] mt-[2px]'/>
                  <h3 className="font-bold text-sm lg:text-lg">Origin</h3>
                </div>
                <p>{language}</p>
              </div>
              <div className="justify-center text-center flex flex-col">
                <div className="flex mx-auto flex-col md:flex-row">
                  <Date className='modal-icon fill-white/90 h-5 lg:h-6 xl:h-7 lg:mt-[2px]'/>
                  <h3 className="font-bold text-sm lg:text-lg">Year</h3>
                </div>
                <p>{release}</p>
              </div>
              <div className="rating text-center md:text-right">
                <div className="flex flex-col md:flex-row">
                  <Trophy className='mx-auto modal-icon fill-white/90 h-5 lg:h-6 xl:h-7 mt-[2px]'/>
                  <h3 className="font-bold text-sm lg:text-lg">Rating</h3>
                </div>
                <p><strong>{rating}</strong>/10</p>
              </div>
            </div>
        </div>
      </div>
      <div className="modaloverlay_b-to-t md:absolute md:rounded-tr-md rounded-br-md md:h-full w-full"></div>
      <div className="modaloverlay_r-to-l md:absolute md:rounded-tr-md rounded-br-md md:h-full w-full"></div>
      <img className='hidden md:block md:rounded-tr-md rounded-br-md object-cover object-center h-full xl:h-inherit' src={`https://image.tmdb.org/t/p/original/${imagesrc}`} alt={title}/>
      </div>
      </div>
    </div>
  )
}

export default Modal
