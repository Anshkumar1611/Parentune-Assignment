import React from 'react'

function Header() {
    return (
        <div className='my-7 mx-16'>
            <ul className='flex flex-row justify-end items-center text-xl leading-7 text-right'>
                <li className='mx-4 font-500'>Works</li>
                <li className='mx-4 font-500'>Blog</li>
                <li className='mx-4 font-500'>Contact</li>
            </ul>
        </div>
    )
}

export default Header