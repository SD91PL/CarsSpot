import { useState, useEffect } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

export default function GallerySlider() {
	const [images, setImages] = useState([])
	const [filter, setFilter] = useState('all') // 'all', 'osobowy', or 'dostawczy'

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

	// Filter the images based on the current filter ('osobowy', 'dostawczy', or 'all')
	const filteredImages = images.filter(image => {
		if (filter === 'all') return true
		const altText = generateAltText(image.fileName)
		return altText.includes(filter)
	})

	return (
		<div>
			{/* Filter buttons */}
			<div className='filters flex gap-12 roboto-flex font-semibold text-[.9375rem]'>
				<button onClick={() => setFilter('osobowy')}>Samochody osobowe</button>
				<button onClick={() => setFilter('dostawczy')}>Samochody dostawcze</button>
				<button onClick={() => setFilter('all')}>Pokaż wszystkie</button> {/* Button to show all images */}
			</div>

			{/* Slider with filtered images */}
			<Slider
				className='my-20'
				{...settings}>
				{filteredImages.map((image, index) => (
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
