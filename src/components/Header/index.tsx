import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'


const Header = () => {
    return (
        <div className='flex h-min w-full items-center justify-between px-4 py-3 bg-accent text-2xl'>
            {/* LOGO */}
            <Link href='/'>
                <Image
                    src='/Screenshot_logo.png'
                    alt=""
                    width={100}
                    height={50}
                    className='h-full w-full rounded-xl'
                />
            </Link>
            {/* NAV DESKTOP */}
            <div className="hidden xl:flex item-center gap-8">
                <Nav />
            </div>
            {/* MOBILE NAV */}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    )
}

export default Header