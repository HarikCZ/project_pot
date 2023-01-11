import React from 'react'
import Link from 'next/link'

export const Heading = () => {
    return <div>
       <div className='topnav'>
            <Link href='/'> 
                Home
            </Link>

            <Link href='/about'>
                About us
            </Link>
 
            <Link href='/contacts'>
                Contacts
            </Link>
 
            <Link href='/news'>
                News
            </Link>

            <Link href='/login' className='login-container'>
                Login
            </Link>
        </div>
    </div>
}