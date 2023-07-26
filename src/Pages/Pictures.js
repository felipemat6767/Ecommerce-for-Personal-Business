import React, { useState } from 'react'
import SegundaVersCarousel from '../components/SegundaVersCarousel'

const images = [
    { id: 0, value: "Portrait-Images/Carousel1_Photo1.jpg" },
    { id: 1, value: "Portrait-Images/Carousel1_Photo2.jpg" },
    { id: 2, value: "Portrait-Images/Carousel1_Photo3.jpg" },
    { id: 3, value: "Portrait-Images/Carousel1_Photo4.jpg" }
]


const Pictures = () => {
    const [sliderData, setSliderData] = useState(images[0])
    const handleClick = (index) => {
        const slider = images[index]
        setSliderData(slider)
    }
    return (
        <>
            <div className='Picture-Intro'>
                <div className='Picture-Portrait'>
                    <img src={"Images/Portrait2.jpg"} alt='Portrait'></img>
                    <div className='Picture-Info'>
                        <h3>Title regarding Picture</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim amet quibusdam necessitatibus quia magni nam</p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim amet quibusdam necessitatibus quia magni nam
                            asperiores rem eum corrupti vero modi officia at, commodi, fugit facilis? Qui, sit iure. Blanditiis!

                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim amet quibusdam necessitatibus quia magni nam
                            asperiores rem eum corrupti vero modi officia at, commodi, fugit facilis? Qui, sit iure. fugit facilis? Qui, sit iure. Blanditiis!
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim amet quibusdam necessitatibus quia magni nam
                            asperiores rem eum corrupti vero modi officia at, commodi, fugit facilis? Qui, sit iure. fugit facilis? Qui, sit iure. Blanditiis!
                        </p>
                    </div>
                </div>

            </div>

            <div className='Carousel'>
                <h2>PhotoShoot Title</h2>
                <p>Location of Picture</p>
                <img src={sliderData.value} alt='SliderData-Value' height="300" width="500"></img>
                <div className='Carousel-Pictures'>
                    {images.map((data, i) =>
                        <div className='thumbnail'>
                            <img src={data.value} onClick={() => { handleClick(i) }} key={i} alt="Carousel" height="70" width="100" className={sliderData.id===i?"clicked":""}></img>
                        </div>)}
                </div>
            </div>

            <div>
                <SegundaVersCarousel></SegundaVersCarousel>
            </div>
        </>
    )
}

export default Pictures
