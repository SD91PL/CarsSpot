import { useRef } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

export default function GallerySlider() {
	return (
		<>
			<div>
				<div>
					<button>Wstecz</button>
				</div>
				<Slider>

				</Slider>
				<div>
					<button>Dalej</button>
				</div>
			</div>
		</>
	)
}
