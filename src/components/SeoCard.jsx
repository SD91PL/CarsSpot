import { useState } from 'react'
import ArrowDown from '../assets/img/arrow-down.webp'

export default function SeoCard({ header, paragraph }) {
	// Using useState to track whether the text is expanded or truncated
	const [isExpanded, setIsExpanded] = useState(false)

	// Maximum length for the truncated paragraph
	const maxLength = 185

	// Function to handle the toggle between expanding and collapsing text
	const toggleExpand = () => {
		setIsExpanded(!isExpanded)
	}

	return (
		<div className='card flex flex-col md:basis-1/2 gap-y-4 min-h-[185px]'>
			<h3 className='bebas-neue text-2xl leading-9'>{header}</h3>

			{/* Display the text based on whether it's expanded */}
			<p className='text-sm leading-5'>
				{isExpanded ? paragraph : `${paragraph.slice(0, maxLength)}${paragraph.length > maxLength ? ' [...]' : ''}`}
			</p>

			{/* Button to toggle between expanding and collapsing */}
			<button
				onClick={toggleExpand}
				className={`flex items-center gap-2 py-[0.375rem] border-b-[1.5px] text-sm ${isExpanded ? 'w-12' : 'w-16'}`}>
				{isExpanded ? 'Zwiń' : 'Rozwiń'} {/* "Zwiń" means "Collapse", "Rozwiń" means "Expand" */}
				<img
					src={ArrowDown}
					alt=''
					className={isExpanded ? 'rotate-180 transition-transform' : 'transition-transform'}
				/>
			</button>
		</div>
	)
}
