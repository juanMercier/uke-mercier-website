"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import Nav from '@/components/Nav';
import MobileNav from '@/components/MobileNav';

const Header = () => {
  const [navbarTransparent, setNavbarTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarTransparent(true);
      } else {
        setNavbarTransparent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        navbarTransparent ? 'bg-transparent' : 'bg-accent'
      } flex h-min items-center justify-between px-4 py-3 text-2xl`}
    >
      {/* LOGO */}
      <Link href="/">
        <Image
          src="/Screenshot_logo.png"
          alt=""
          width={100}
          height={50}
          className="h-full w-full rounded-xl"
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
  );
};

export default Header;
