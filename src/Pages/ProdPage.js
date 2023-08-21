import { useState } from "react"


const ProdPage = ({ el }) => {
    const { name, type, price, id } = el

    const imag = [
        { id: 1, value: `Images/Image-${id}/Image-${id}a.jpg` },
        { id: 2, value: `Images/Image-${id}/Image-${id}b.jpg` },
        { id: 3, value: `Images/Image-${id}/Image-${id}c.jpg` },
        { id: 4, value: `Images/Image-${id}/Image-${id}d.jpg` }
    ]

    const [sliderData, setSliderData] = useState(imag[0])

    const handleClick = (index) => {
        const slider = imag[index]
        setSliderData(slider)
    }
    return (
        <article>
            <div className='modalBackground'>
                <div className="modalContainer">
                    <div className='Modal-Pictures'>
                        <div className="Modal-Vertical-Pictures-Cont">
                        {imag.map((data, i) =>
                            <div className='Modal-Vertical-Pictures'>
                                <img src={data.value} key={i} onClick={() => { handleClick(i) }}
                                    alt="Carousel" height="70" width="100" ></img>
                            </div>)
                        }
                        </div>
                        <img src={sliderData.value} alt='SliderData-Value' height="300" width="500" className="Modal-Big-Picture"></img>
                    </div>
                    <h2>{name}</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim amet quibusdam necessitatibus quia magni nam
                        asperiores rem eum corrupti vero modi officia at, commodi, fugit facilis? Qui, sit iure. Blanditiis!
                    </p>
                    {type}
                </div>
            </div>
        </article>
    )
}

export default ProdPage
