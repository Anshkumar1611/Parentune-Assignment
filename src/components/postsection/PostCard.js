import React, { useState } from 'react'
import PostCardModal from '../modals/PostCardModal'

function PostCard({ data }) {
    const [showModal, setShowModal] = useState(false);
    const { title, type, date, description } = data
    return (
        <>
            <div>
                <div className='bg-white m-4 my-7 text-dark drop-shadow-md rounded cursor-pointer hover:scale-105' onClick={() => setShowModal(true)}>
                    <div className='font-bold text-xl leading-7 p-2.5'>{title}</div>
                    <div className='flex leading-6 p-2.5'><p className=' mr-6'>{date}</p> <p className='basis-2/3'>{type}</p></div>
                    <p className='leading-6 p-2.5'>{description}</p>
                </div>
            </div>
            <PostCardModal visible={showModal} data={data} onClose={() => setShowModal(false)} />
        </>
    )
}

export default PostCard