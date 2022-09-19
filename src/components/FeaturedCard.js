import React from 'react'

function FeaturedCard() {
    return (
        <>
            <div className='flex flex-col justify-center m-3 my-7 '>
                <div className=''><img className='w-screen h-52 p-2.5 rounded-md' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUK1LaBaummJfuW6GIM_kt3R9egIlpqVpEKw&usqp=CAU' alt='blog' /></div>
                <div>
                    <p className='font-bold text-xl leading-7 p-2.5'>Designing Dashboards</p>
                    <div className='flex p-2.5 leading-6'><div className='mr-6 text-white bg-dark-blue font-black rounded-2xl px-2'>2020</div><p className='text-light'>Dashboard</p></div>
                    <p className='p-2.5 leading-6'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
                <div className='border-t border-horizontal-line '></div>
            </div>

        </>

    )
}

export default FeaturedCard