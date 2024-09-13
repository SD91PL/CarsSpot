// import HeroBg from '../assets/img/Element.webp'
import HeroBg from '../assets/img/svg/Element.svg'
import HeroImg from '../assets/img/Hero.webp'

export default function Hero() {
	return (
		<>
			<section id='hero'>
				<div className='mx-4'>
					<div className='container relative min-h-[700px] md:min-h-[805px] lg:min-h-[905px] xl:max-w-[1320px]'>
						<div className='container '>
							<div className='hero-front absolute flex flex-col justify-center py-40 md:py-0 md:pb-40 h-full xl:min-h-[905px] z-20'>
								<div className='flex flex-col gap-12 xl:w-3/4'>
									<div className='hero-header flex flex-col gap-8'>
										<h1 className='bebas-neue text-[4.75rem] leading-[1.1]'>Sprzedajemy samochody z Europy</h1>
										<p className='xl:w-1/2'>Kup wyjatkowy pojazd, aby każda podróż była wyjątkowym przeżyciem</p>
									</div>
									<div className='hero-cta flex flex-wrap gap-6 text-[.9375rem] roboto-flex'>
										<a
											href='#gallery'
											rel='noopener'
											className='px-6 py-3 rounded-lg bg-[#0147FF] text-[#F7F7F7]'>
											Zobacz zdjęcia
										</a>
										<a
											href='tel:+48000555000'
											rel='noopener'
											className='px-6 py-3 rounded-lg bg-[#F7F7F7] border-[#0147FF] border-[1px] text-[#0147FF]'>
											Zadzwoń do nas
										</a>
									</div>
								</div>
							</div>
						</div>
						{/* Background*/}
						<div className='hero-back z-0'>
							<div className='flex justify-end'>
								<img
									src={HeroBg}
									alt=''
								/>
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
		</>
	)
}
