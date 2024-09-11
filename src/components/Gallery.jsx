import Headers from './Headers.jsx'
import Slider from './Slider.jsx'

export default function Gallery() {
	return (
		<>
			<Headers
				top='Prezentacja firmy'
				cta='Zobacz naszą galerię zdjęć'
			/>
			<div className='container xl:max-w-[1264px]'>
				<Slider/>
			</div>
		</>
	)
}
