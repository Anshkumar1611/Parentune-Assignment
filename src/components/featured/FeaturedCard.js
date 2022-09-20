import React from 'react'

function FeaturedCard({ data }) {
    const { img, title, date, type, description } = data;
    return (
        <>
            <div className='flex flex-col justify-center my-10 md:flex-row '>
                <div className='md:w-1/3'><img className='w-screen h-60 p-2.5 rounded-md md:w-full h-60' src={img} alt='blog' />
                </div>
                <div className='md:w-2/3 '>
                    <p className='font-bold text-xl leading-7 p-2.5'>{title}</p>
                    <div className='flex p-2.5 leading-6'><div className='mr-6 text-white bg-dark-blue font-black rounded-2xl px-2'>{date}</div><p className='text-light'>{type}</p></div>
                    <p className='p-2.5 leading-6'>{description}</p>
                </div>
                <div className='border-t border-horizontal-line '></div>
            </div>

        </>

    )
}

export default FeaturedCard