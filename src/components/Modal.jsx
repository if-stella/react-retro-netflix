import React from 'react'
import { ImCross } from 'react-icons/im';

const Modal = ({ open, onClose, title, summary, imagesrc, language, rating, postersrc }) => {
    if (!open) return null
  return (
    <div onClick={onClose} className="z-[23] bg-black/90 w-screen h-screen fixed top-[0] left-[0]">
      <div onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer w-[311px] sm:w-[50%] md:w-[70%] z-[30] relative top-[15%] sm:top-[15%] md:top-[25%] mx-auto flex flex-col md:flex-row">
        <ImCross className="text-black/70 hover:text-black w-3 h-3 sm:w-4 lg:w-5 sm:h-4 lg:h-5 absolute right-[16px] top-[418px] sm:top-[496px] md:top-[16px] z-[31]" onClick={onClose}/>
        <img className='h-[400px] sm:h-[480px] lg:h-[400px] object-cover object-center' src={`https://image.tmdb.org/t/p/w500/${postersrc}`} alt={title}/>
        <div className="p-4 flex flex-col justify-between">
          <div className="upperhalf">
            <h3 className="font-bold md:text-2xl break-words whitespace-pre-wrap">{title}</h3>
            <p className="break-words whitespace-pre-wrap">{summary}</p>
          </div>
          <div className="lowerhalf">
            <div className="w-full h-[1px] bg-black/50"></div>
            <div className="flex justify-between mt-2">
              <div className="language">
                <h3 className="font-bold md:text-l">Language</h3>
                <p>{language}</p>
              </div>
              <div className="rating text-right">
                <h3 className="font-bold md:text-l">Rating</h3>
                <p><strong>{rating}</strong>/10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
