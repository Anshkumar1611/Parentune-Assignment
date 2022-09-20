import React from 'react'
import FeaturedWork from '../components/featured/FeaturedWork'
import Hero from '../components/hero/Hero'
import Posts from '../components/postsection/Posts'

function Home() {
    return (
        <div>
            <Hero />
            <Posts />
            <div className='text-center mx-1 pt-5 md:text-left mx-36'>FeaturedWork</div>
            <FeaturedWork />
        </div>
    )
}

export default Home