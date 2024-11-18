import Headers from './Headers.jsx'
import GallerySlider from './GallerySlider.jsx'

export default function Gallery() {
	return (
		<section
			id='gallery'
			className='mx-4 focus-in animation-delay-900'>
			<div className='container xl:max-w-[1328px] overflow-hidden'>
				<Headers
					top='Prezentacja firmy'
					cta='Zobacz naszą galerię zdjęć'
				/>
				<GallerySlider />
			</div>
		</section>
	)
}
