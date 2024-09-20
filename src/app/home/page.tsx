import React from 'react'

const content = [
  {
    index: 1,
    name: "first",
    value: "Descubra a alegria de tocar ukulele com aulas presenciais e online! Seja você um iniciante ou um músico mais experiente, Carlos Mercier oferece aulas personalizadas que se adaptam ao seu nível e estilo musical."
  }
]

const Homepage = () => {
  return (
    <div className='w-full h-full bg-primary'>
      <div className='flex flex-row h-[400px] items-center justify-center my-8 mx-8 bg-primary-foreground rounded-xl'>
        {content.filter(item => item.index === 1).map((item) => (
          <div className='text-2xl'>
            {item.value}
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default Homepage