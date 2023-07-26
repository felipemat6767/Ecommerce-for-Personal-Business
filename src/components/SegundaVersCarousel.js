import React from 'react'
import ImageSlider from './ImageSlider'
const imag = [
  { id: 0, value: "Portrait-Images/Carousel1_Photo1.jpg" },
  { id: 1, value: "Portrait-Images/Carousel1_Photo2.jpg" },
  { id: 2, value: "Portrait-Images/Carousel1_Photo3.jpg" },
  { id: 3, value: "Portrait-Images/Carousel1_Photo4.jpg" }
]


const SegundaVersCarousel = () => {
  return (
    <div className='containerStyles'>
      <ImageSlider slides={imag}></ImageSlider>
    </div>
  )
}

export default SegundaVersCarousel


