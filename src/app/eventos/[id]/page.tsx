import React from 'react'

type Props = {
    params: { id: string }
  }
  
const EventPost = ({ params }: Props) => {
    const { id } = params;

  return (
    <div>EventPost {id}</div>
  )
}

export default EventPost