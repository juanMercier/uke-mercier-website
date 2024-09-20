"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    {
        name: "Sobre",
        value: "/sobre",
    },
    {
        name: "Recursos",
        value: "/recursos",
    },
    {
        name: "Eventos",
        value: "/eventos",
    },
    {
        name: "Contacto",
        value: "/contacto",
    },
]

const Nav = () => {

    const pathname = usePathname();
    return (
        < div className='flex justify-end gap-5' >
            {
                links.map((item, index) => {
                    return (
                        <Link href={item.value}
                            key={index}
                            className={`${item.value === pathname && "text-secondary border-b-2 border-secondary"} 
                            font-medium hover:text-secondary transition-all`}
                        >
                            {item.name}
                        </Link>
                    );
                })
            }
        </div >
    )
}

export default Nav