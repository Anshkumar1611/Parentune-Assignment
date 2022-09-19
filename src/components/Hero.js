import React from 'react'

function Hero() {
    return (
        <div className='flex flex-col '>
            <div className='flex justify-center'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp4Ay9JQjxxOaz5_zVHSGGCYDqvYQ82dLOuw&usqp=CAU' alt='blog' className='rounded-full h-48 w-48' />
            </div>
            <div className='text-center text-dark px-6 py-8'>
                <div className='font-bold text-3xl leading-10 pb-5'>Hi, I am John,
                    Creative Technologist</div>
                <p className='font-normal text-base leading-6'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
            <div className='text-center'>
                <button className='bg-primary text-white w-52 h-12 text-lg drop-shadow-2xl font-medium leading-7'>Download Resume</button>
            </div>

        </div>
    )
}

export default Hero