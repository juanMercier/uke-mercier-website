import Image from 'next/image'
import React from 'react'

type UpperSectionProps = {
    imgLocation: string,
    title: string,
}

const UpperSection = ({imgLocation, title}: UpperSectionProps) => {
  return (
    <section className="relative md:mt-16 h-64 sm:h-80 md:h-96 flex items-center justify-center">
    <Image
      src={imgLocation}
      alt=""
      layout="fill"
      objectFit="cover"
      priority
    />
    <div className="absolute inset-0 bg-black bg-opacity-50" />
    <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">{title}</h1>
  </section>

  )
}

export default UpperSection