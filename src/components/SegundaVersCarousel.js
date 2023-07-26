import React, { useState } from 'react'
import ImageSlider from './ImageSlider'
const images = [
  { url: "http://localhost:3000/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
]

console.log(images)

const SegundaVersCarousel = () => {
  return (
    <div className='containerStyles'>
        <ImageSlider slides={images}></ImageSlider>
    </div>
  )
}

export default SegundaVersCarousel


