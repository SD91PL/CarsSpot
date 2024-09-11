import { useState, useEffect } from 'react'
// import { useRef } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

export default function GallerySlider() {
	const [images, setImages] = useState([])
	useEffect(() => {
		const importImages = async () => {
			const images = import.meta.glob('../assets/img/gallery/*.webp')
			const imagePromises = Object.keys(images).map(async path => {
				const image = await images[path]()
				return image.default
			})
			const loadedImages = await Promise.all(imagePromises)
			setImages(loadedImages)
		}

		importImages()
	}, [])

	// const slider = useRef(null)

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
	}

	return (
		<>
			<div>
				{/* <button onClick={() => slider?.current.slickPrev()}>Wstecz</button> */}
				<Slider
					className='mb-20'
					// ref={slider}
					{...settings}>
					{images.map((image, index) => (
						<div key={index}>
							<img	
								src={image}
								alt={`gallery-img-${index}`}
							/>
						</div>
					))}
				</Slider>
				{/* <button onClick={() => slider?.current.slickNext()}>Dalej</button> */}
			</div>
		</>
	)
}
