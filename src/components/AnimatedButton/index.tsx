"use client"

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link';

type Props = {
    backgroundColor: string;
    textColor: string;
    text:string;
    link: string;
}

const AnimatedButton = ({backgroundColor, textColor, text, link}: Props) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <Link
            href={link}
            className={`bg-${backgroundColor} text-${textColor} text-lg font-bold py-3 px-6 rounded-full inline-flex items-center transition-all duration-300 ${isHovered ? 'pr-6' : 'pr-0'
                }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {text}
            <ArrowRight className={`ml-2 transition-all duration-300 ${isHovered ? 'translate-x-4 opacity-100' : 'translate-x-0 opacity-0'
                }`} />
        </Link>
    )
}

export default AnimatedButton