import React from 'react'
import FeaturedCard from './FeaturedCard'
import { works } from '../../utils/data'
function FeaturedWork() {
    return (
        <div className='mx-1 md:mx-36'>
            {works.map((data) => {
                return (
                    <div key={data.id}><FeaturedCard data={data} /></div>
                )
            })}
        </div>
    )
}

export default FeaturedWork