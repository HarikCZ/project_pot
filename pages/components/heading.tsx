import React from 'react'
import Link from 'next/link'

export const Heading = () => {
    return <div>
       <div className='topnav'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About us</Link>
            <Link href='/contacts'>Contacts</Link>
            <Link href='/news'>
                <a>News</a>
            </Link>
            
        </div>
    </div>
}