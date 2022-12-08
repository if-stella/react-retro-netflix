import React from 'react'
import { ImCross } from 'react-icons/im';

const Modal = ({ open, onClose, title, summary, imagesrc, language, rating, postersrc }) => {
    if (!open) return null
  return (
    <div onClick={onClose} className="z-[23] bg-black/90 w-screen h-screen fixed top-[0] left-[0]">
      <div onClick={(e) => {
          e.stopPropagation();
        }}
        className="bg-white/95 md:bg-transparent w-[311px] sm:w-[390px] md:w-[80%] z-[30] relative top-[11%] sm:top-[7%] md:top-[25%] xl:top-[15%] mx-auto flex flex-col md:flex-row p-4 sm:p-0 rounded-md">
        <img className='rounded-tl-md rounded-tr-md rounded-bl-md sm:rounded-bl-none rounded-br-md sm:rounded-br-none md:rounded-tr-none md:rounded-bl-md h-[150px] w-[100px] sm:w-[100%] sm:h-[500px] lg:h-full xl:h-auto md:w-[300px] xl:w-[450px] object-cover object-center' src={`https://image.tmdb.org/t/p/w500/${postersrc}`} alt={title}/>
        <h3 className="flex items-center h-[150px] sm:hidden font-bold sm:text-xl break-words whitespace-pre-wrap absolute top-[16px] left-[132px] mr-[32px]">{title}</h3>
        <div className="relative ">
        <ImCross className="text-black/70 hover:text-black w-3 h-3 sm:w-4 lg:w-5 sm:h-4 lg:h-5 absolute right-0 sm:right-[16px] md:right-[32px] top-[-140px] sm:top-[20px] md:top-[28px] z-[31]" onClick={onClose}/>
        <div className="md:bg-white/50 md:absolute md:rounded-tr-md rounded-bl-md md:rounded-bl-none rounded-br-md md:h-full w-full p-0 sm:p-4 md:px-8 md:pt-6 md:pb-4 mt-4 sm:mt-0 flex flex-col justify-between z-[30]">
          <div className="upperhalf">
            <h3 className="hidden sm:block font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl break-words whitespace-pre-wrap">{title}</h3>
            <p className="break-words whitespace-pre-wrap sm:mt-2">{summary}</p>
          </div>
          <div className="lowerhalf">
            <div className="w-full h-[1px] bg-black/50 mt-4 md:mt-6"></div>
            <div className="flex justify-between mt-2">
              <div className="language">
                <h3 className="font-bold text-sm lg:text-lg">Language</h3>
                <p>{language}</p>
              </div>
              <div className="rating text-right">
                <h3 className="font-bold text-sm lg:text-lg">Rating</h3>
                <p><strong>{rating}</strong>/10</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-t from-transparent to-white/50 md:absolute md:rounded-tr-md rounded-br-md md:h-full w-full"></div>
        <div className="bg-gradient-to-l from-transparent to-white/50 md:absolute md:rounded-tr-md rounded-br-md md:h-full w-full"></div>
        <img className='hidden md:block md:rounded-tr-md rounded-br-md object-cover object-center h-full xl:h-inherit' src={`https://image.tmdb.org/t/p/original/${imagesrc}`} alt={title}/>
        </div>
      </div>
    </div>
  )
}

export default Modal
