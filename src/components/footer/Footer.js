import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'

function Footer() {
    return (
        <div className='flex flex-col py-24 '>
            <ul className='flex justify-center text-2xl text-dark pb-4'>
                <a href='https://www.facebook.com/'><li className='px-3 hover:text-primary'><FaFacebookSquare /></li></a>
                <a href='https://twitter.com/login'><li className='px-3 hover:text-primary'><FaInstagram /></li></a>
                <a href='https://www.instagram.com/'><li className='px-3 hover:text-primary'><FaTwitter /></li></a>
                <a href='https://www.linkedin.com'><li className='px-3 hover:text-primary'><AiFillLinkedin /></li></a>
            </ul>
            <p className='text-center text-sm'>Copyright @2022 All rights reserved</p>
        </div>
    )
}

export default Footer