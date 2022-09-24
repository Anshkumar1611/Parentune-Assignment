import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

function PostCardModal({ visible, data, onClose }) {
    const { title, type, date, description } = data
    if (!visible) return null;
    const handleOnBackDropClick = (e) => {
        if (e.target.id === "backdrop") onClose && onClose();
    };
    return (
        <div id="backdrop" onClick={handleOnBackDropClick} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className='bg-white m-4 my-7 mx-32  text-dark drop-shadow-md rounded cursor-pointer' >
                <div className='flex justify-end text-2xl py-4 px-8 border-b'><AiOutlineClose className='hover:text-primary hover:scale-125' id="backdrop" onClick={handleOnBackDropClick} /></div>
                <div className='font-bold text-xl leading-7 px-8 p-2.5'>{title}</div>
                <div className='flex leading-6 p-2.5 px-8'><p className=' mr-6'>{date}</p> <p className='basis-2/3 px-8'>{type}</p></div>
                <p className='leading-6 p-2.5 px-8'>{description}</p>
                <div className='p-4 flex justify-center'>
                    <button className='bg-primary text-white font-bold py-2 px-4 rounded ' id="backdrop" onClick={handleOnBackDropClick}>Close</button>
                </div>
            </div>

        </div>
    )
}

export default PostCardModal