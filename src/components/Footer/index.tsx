import { Facebook, Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className="flex flex-col bg-amber-50">
            <footer className="bg-accent text-white p-4">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                        <Link href="/about" className="hover:underline">About</Link>
                        <Link href="/resources" className="hover:underline">Resources</Link>
                        <Link href="/events" className="hover:underline">Events</Link>
                        <Link href="/contact" className="hover:underline">Contact</Link>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-amber-300"><Facebook size={24} /></a>
                        <a href="#" className="hover:text-amber-300"><Instagram size={24} /></a>
                        <a href="#" className="hover:text-amber-300"><Youtube size={24} /></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer