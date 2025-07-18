import Headers from './Headers.jsx'
import GallerySlider from './GallerySlider.jsx'

export default function Gallery() {
	return (
		<section
			id='gallery'
			className='mx-4 xl:mx-0'>
			<div className='container bg-[#f7f7f7] xl:max-w-[1440px]'>
				<div className='container xl:max-w-[1328px] overflow-hidden'>
					<Headers
						top='Prezentacja firmy'
						cta='Zobacz naszą galerię zdjęć'
					/>
					<GallerySlider />
				</div>
			</div>
		</section>
	)
}
