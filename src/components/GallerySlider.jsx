import { useState, useEffect } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

export default function GallerySlider() {
	const [images, setImages] = useState([])
	const [filter, setFilter] = useState('osobowy') // 'osobowy', 'dostawczy' or 'all' - commented in filteredImages and Filter buttons
	const [isGrabbing, setIsGrabbing] = useState(false) // Cursor changing (grab/grabbing)

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
		arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
		],
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
		// if (filter === 'all') return true
		const altText = generateAltText(image.fileName)
		return altText.includes(filter)
	})

	// Filter buttons styling
	const btnStyle = 'transition-colors underline underline-offset-[.35rem] decoration-[#0000]'
	const highlighted = 'text-[#0147FF] decoration-current'

	// Cursor changing (grab/grabbing) - Slider images
	const handleMouseDown = () => {
		setIsGrabbing(true)
	}
	const handleMouseUp = () => {
		setIsGrabbing(false)
	}

	return (
		<div>
			{/* Filter buttons */}
			<div className='filters flex flex-wrap gap-x-12 gap-y-4 mb-12 md:mb-16 xl:mb-20 xl:ms-8 roboto-flex font-semibold text-[.9375rem]'>
				<button
					className={`${btnStyle} ${filter === 'osobowy' ? highlighted : ''}`}
					onClick={() => setFilter('osobowy')}>
					Samochody osobowe
				</button>
				<button
					className={`${btnStyle} ${filter === 'dostawczy' ? highlighted : ''}`}
					onClick={() => setFilter('dostawczy')}>
					Samochody dostawcze
				</button>
				{/* <button
					className={`${btnStyle} ${filter === 'all' ? highlighted : ''} hidden md:inline-block`}
					onClick={() => setFilter('all')}>
					Pokaż wszystkie
				</button> */}
				{/* Button to show all images */}
			</div>

			{/* Slider with filtered images */}
			<div className='mb-36 xl:mb-0 xl:min-h-[598px]'>
				<Slider {...settings}>
					{filteredImages.map((image, index) => (
						<div
							key={index}
							className='sm:px-4 xl:px-[31.5px] outline-none' // Optimal padding for 601 x 446 images
						>
							<img
								className={`cursor-grab transition-transform duration-500 ${
									isGrabbing ? 'cursor-grabbing scale-[.98]' : ''
								}`}
								onMouseDown={handleMouseDown} // changes cursor
								onMouseUp={handleMouseUp} // changes cursor
								onMouseLeave={handleMouseUp} // Same action as onMouseUp - improved ux
								src={image.path}
								alt={generateAltText(image.fileName)} // Generate dynamic alt text
							/>
						</div>
					))}
				</Slider>
			</div>
		</div>
	)
}
