import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'

function Footer() {
    return (
        <div className='flex flex-col py-24 '>
            <ul className='flex justify-center text-2xl text-dark pb-4'>
                <li className='px-3'><FaFacebookSquare /></li>
                <li className='px-3'><FaInstagram /></li>
                <li className='px-3'><FaTwitter /></li>
                <li className='px-3'><AiFillLinkedin /></li>
            </ul>
            <p className='text-center text-sm'>Copyright @2022 All rights reserved</p>
        </div>
    )
}

export default Footer