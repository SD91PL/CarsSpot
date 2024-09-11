// import { useRef } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

export default function GallerySlider() {
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
				<Slider className='mb-20'
					// ref={slider}
					{...settings}>
					<div>
						<h3>1</h3>
					</div>
					<div>
						<h3>2</h3>
					</div>
					<div>
						<h3>3</h3>
					</div>
					<div>
						<h3>4</h3>
					</div>
					<div>
						<h3>5</h3>
					</div>
				</Slider>
				{/* <button onClick={() => slider?.current.slickNext()}>Dalej</button> */}
			</div>
		</>
	)
}
