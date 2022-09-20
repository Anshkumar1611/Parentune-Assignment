import React from 'react'
import PostCard from './PostCard'
import { posts } from '../../utils/data'
function Posts() {
    return (
        <div className='bg-posts mt-14 px-1 flex flex-col justify-center md:px-24 '>
            <div className='flex justify-between'><div className='pt-5 mx-o text-center md:text-left mx-12'>Recent posts</div> <div className='pt-5 mx-o text-center text-sm text-secondary cursor-pointer md:text-right mx-12 '>View all</div></div>
            <div className='flex flex-col md:flex-row '>
                {posts.map((data) => {
                    return (
                        <div key={data.id}><PostCard data={data} /></div>
                    )
                })}
            </div>
        </div>
    )
}

export default Posts