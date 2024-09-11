import { useState, useEffect } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

export default function GallerySlider() {
	const [images, setImages] = useState([])

	useEffect(() => {
		const importImages = async () => {
			// Import all .webp images
			const images = import.meta.glob('../assets/img/gallery/*.webp')
			// Load the images
			const imagePromises = Object.keys(images).map(async path => {
				const image = await images[path]()
				// Return an object with the image path and file name (without extension)
				return { path: image.default, fileName: path.split('/').pop().replace('.webp', '') }
			})
			const loadedImages = await Promise.all(imagePromises)
			setImages(loadedImages)
		}

		importImages()
	}, [])

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
	}

	// Function to generate dynamic alt text based on the file name
	const generateAltText = fileName => {
		// Remove the numeric prefix (e.g., "01-", "02-") from the file name
		const fileNameParts = fileName.split('-').slice(1)
		// Join the remaining parts of the name and add the "samochód" (car) prefix
		return `samochód-${fileNameParts.join('-')}`
	}

	return (
		<div>
			<Slider
				className='mb-20 '
				{...settings}>
				{images.map((image, index) => (
					<div
						key={index}
						className='outline-none'>
						<img
							src={image.path}
							alt={generateAltText(image.fileName)} // Generate dynamic alt text
						/>
					</div>
				))}
			</Slider>
		</div>
	)
}
