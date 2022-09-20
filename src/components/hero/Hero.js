import React from 'react'
import Vector from '../../assets/images/Vector.png'

function Hero() {
    return (
        <div className='md:px-36'>
            <div className='flex flex-col items-center md:flex-row justify-center'>
                <div className='flex justify-center w-full md:order-last w-1/2'>
                    <img src={Vector} alt='blog' className='rounded-full h-48 w-48' />
                </div>
                <div className='flex flex-col text-dark pt-8 md:w-1/2 order-1'>
                    <div className='font-bold text-center text-3xl leading-10 pb-5 md:text-left text-4xl'>Hi, I am John,
                        Creative Technologist</div>
                    <p className='font-normal text-center text-base leading-6 md:text-left'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <div className='text-center pt-8 md:text-left'>
                        <button className='bg-primary text-white w-52 h-12 text-lg drop-shadow-2xl font-medium leading-7'>Download Resume</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero