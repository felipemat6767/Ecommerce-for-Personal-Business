
const ProdPage = ({el}) => {
    const { name, type, price, quantity, img_name } = el
    return (
        <article>
            <div className='modalBackground'>
                <div className="modalContainer">
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
