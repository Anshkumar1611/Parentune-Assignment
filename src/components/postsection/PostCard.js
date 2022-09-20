import React from 'react'

function PostCard({data}) {
    const {title,type,date,description}=data
    return (
        <>
            <div className='bg-white m-4 my-7 text-dark drop-shadow-md rounded '>
                <div className='font-bold text-xl leading-7 p-2.5'>{title}</div>
                <div className='flex leading-6 p-2.5'><p className=' mr-6'>{date}</p> <p className='basis-2/3'>{type}</p></div>
                <p className='leading-6 p-2.5'>{description}</p>
            </div>
        </>

    )
}

export default PostCard