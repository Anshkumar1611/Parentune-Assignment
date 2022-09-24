import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

function FeaturedWorkModal({ visible, data, onClose }) {
    const { title, type, date, description, img } = data
    if (!visible) return null;
    const handleOnBackDropClick = (e) => {
        if (e.target.id === "backdrop") onClose && onClose();
    };
    return (
        <div id="backdrop" onClick={handleOnBackDropClick} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className='mx-4 bg-white rounded cursor-pointer md:mx-32'>
                <div className='flex justify-end text-2xl px-1 py-1 md:py-4 md:px-8'><AiOutlineClose className='hover:text-primary hover:scale-125' id="backdrop" onClick={handleOnBackDropClick} /></div>
                <div className='flex flex-col justify-center mx-8 pb-1 md:pb-8 md:flex-row'>
                    <div className='md:w-1/3'><img className='w-screen h-60 p-2.5 rounded-md md:w-full h-60' src={img} alt='blog' />
                    </div>
                    <div className='md:w-2/3 text-black '>
                        <p className='font-bold text-xl leading-7 p-2.5'>{title}</p>
                        <div className='flex p-2.5 leading-6'><div className='mr-6 text-white bg-dark-blue font-black rounded-2xl px-2'>{date}</div><p className='text-light'>{type}</p></div>
                        <p className='p-2.5 leading-6'>{description}</p>
                    </div>
                    <div className='pt-4 md:pt-48 '>
                        <button className='bg-primary text-white font-bold py-2 px-4 rounded ' id="backdrop" onClick={handleOnBackDropClick}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedWorkModal