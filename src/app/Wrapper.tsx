import Header from '@/components/Header'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex min-h-screen w-full text-secondary'>
        <main className='flex w-full flex-col bg-gray-50'>
        <Header />
        {children}
        </main>
    </div>
  )
}

const Wrapper = ({children} : {children: React.ReactNode}) => {
    return (
        <Layout>
            {children}
        </Layout>
    )
}



export default Wrapper