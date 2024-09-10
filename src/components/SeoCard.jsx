import { useState, useRef, useEffect } from 'react'
import ArrowDown from '../assets/img/arrow-down.webp'

export default function SeoCard({ header, paragraph }) {
	const [isExpanded, setIsExpanded] = useState(false)
	const contentRef = useRef(null)
	const maxLength = 185

	const toggleExpand = () => {
		setIsExpanded(prev => !prev)
	}

	useEffect(() => {
		const content = contentRef.current
		if (!content) return

		const fullHeight = content.scrollHeight
		const truncatedHeight = content.querySelector('.truncated')?.scrollHeight || fullHeight / 4

		// Apply height transition for expanding or collapsing
		content.style.height = isExpanded ? `${truncatedHeight}px` : `${fullHeight}px`

		requestAnimationFrame(() => {
			content.style.height = isExpanded ? `${fullHeight}px` : `${truncatedHeight}px`
		})

		const handleTransitionEnd = () => {
			if (!isExpanded) {
				content.querySelector('p').innerHTML = `${paragraph.slice(0, maxLength)}${
					paragraph.length > maxLength ? ' [...]' : ''
				}`
			}
			content.style.height = 'auto'
			content.removeEventListener('transitionend', handleTransitionEnd)
		}

		content.addEventListener('transitionend', handleTransitionEnd)

		return () => {
			content.removeEventListener('transitionend', handleTransitionEnd)
		}
	}, [isExpanded, paragraph, maxLength])

	return (
		<div className='card flex flex-col md:basis-1/2 gap-y-4 min-h-[185px]'>
			<h3 className='bebas-neue text-2xl leading-9'>{header}</h3>

			{/* Container that will animate height */}
			<div
				ref={contentRef}
				className='transition-[height] duration-500 ease overflow-hidden'
				style={{ height: isExpanded ? 'auto' : '4.6rem' }}>
				<p className={`text-sm leading-5 ${isExpanded ? '' : 'truncated'}`}>
					{isExpanded ? paragraph : `${paragraph.slice(0, maxLength)}${paragraph.length > maxLength ? ' [...]' : ''}`}
				</p>
			</div>

			{/* Button to toggle between expanding and collapsing */}
			<button
				onClick={toggleExpand}
				className={`flex items-center gap-2 py-[0.375rem] border-b-[1.5px] text-sm ${isExpanded ? 'w-12' : 'w-16'}`}>
				{isExpanded ? 'Zwiń' : 'Rozwiń'}
				<img
					src={ArrowDown}
					alt=''
					className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
				/>
			</button>
		</div>
	)
}
