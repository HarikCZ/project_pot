import React from 'react'
import Link from 'next/link'

export const Heading = () => {
    return <div>
       <div className='topnav'>
            <Link href='/'> 
                <a>Home</a> 
            </Link>
            <Link href='/about'>
                <a>About us</a>
            </Link>
            <Link href='/contacts'>Contacts</Link>
            <Link href='/news'>
                <a>News</a>
            </Link>
            
        </div>
    </div>
}