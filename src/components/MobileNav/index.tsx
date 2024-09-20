"use client";

import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
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

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <Menu />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <nav className="flex flex-col justify-center items-center gap-8 mt-[200px]">
                    {
                        links.map((item, index) => {
                            return (
                                <Link href={item.value}
                                    key={index}
                                    className={`${item.value === pathname && "text-accent border-b-2 border-accent"
                                    } text-xl hover:text-accent transition-all`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })
                    }
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav