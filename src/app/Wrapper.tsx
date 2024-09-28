"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Facebook, Instagram, Youtube } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}