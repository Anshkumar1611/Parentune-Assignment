import React from 'react'
import PostCard from './PostCard'

function Posts() {
    return (
        <div className='bg-posts mt-14 flex flex-col justify-center'>
            <div className='text-center pt-5'>Recent posts</div>
            <div><PostCard /></div>

        </div>
    )
}

export default Posts