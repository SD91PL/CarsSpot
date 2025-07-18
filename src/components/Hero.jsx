import HeroBg from '../assets/img/svg/Element.svg'
// import HeroBg from '../assets/img/Element.webp'
import HeroImg from '../assets/img/Hero.webp'

export default function Hero() {
	return (
		<section
			id='hero'
			className='min-h-[45rem]'>
			<div className='mx-4 xl:mx-0'>
				<div className='container relative min-h-[720px] md:min-h-[805px] lg:min-h-[905px] xl:max-w-[1440px] xl:px-14 bg-[#f7f7f7]'>
					<div className='container '>
						<div className='hero-front absolute flex flex-col justify-center py-40 md:py-0 md:pb-40 h-full xl:min-h-[905px] z-20'>
							<div className='flex flex-col gap-12 lg:w-3/4'>
								<div className='hero-header flex flex-col gap-8'>
									<h1 className='bebas-neue text-6xl sm:text-[4.75rem] leading-[1.1] focus-in'>
										Sprzedajemy samochody z&nbsp;Europy
									</h1>
									<p className='xl:w-1/2 focus-in animation-delay-300'>
										Kup wyjatkowy pojazd, aby każda podróż była wyjątkowym przeżyciem
									</p>
								</div>
								<div className='hero-cta flex flex-wrap gap-6 gap-y-4 text-[.9375rem] roboto-flex font-semibold focus-in animation-delay-600'>
									<a
										href='#gallery'
										rel='noopener'
										className='px-6 py-3 rounded-lg bg-[#0147FF] border-[#0147FF] border-[1px] text-[#F7F7F7] transition-colors hover:bg-[#0038cc]'>
										Zobacz zdjęcia
									</a>
									<a
										href='tel:+48000555000'
										rel='noopener'
										className='px-6 py-3 rounded-lg bg-[#F7F7F7] border-[#0147FF] border-[1px] text-[#0147FF] transition-transform hover:scale-105'>
										Zadzwoń do nas
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* Background*/}
					<div className='hero-back z-0 opacity-30 md:opacity-50 xl:opacity-100'>
						<div className='relative flex justify-end'>
							<img
								src={HeroBg}
								alt=''
							/>
							<div className='absolute  h-full w-full bg-gradient-to-b from-[#0000] sm:via-90% via-[#0000] to-[#F7F7F7]'></div>
						</div>
					</div>
				</div>
			</div>
			{/* Image above background - Cars */}
			<div className='relative container max-w-[576px] sm:max-w-[768px] md:max-w-[992px] lg:max-w-[1200px] xl:max-w-[1440px]'>
				<div className='absolute bottom-0 xl:bottom-20 right-0 flex justify-end ps-4'>
					<img
						src={HeroImg}
						alt=''
					/>
				</div>
			</div>
		</section>
	)
}
