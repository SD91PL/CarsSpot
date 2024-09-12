export default function Hero() {
	return (
		<section
			id='hero'
			className='mx-4'>
			<div className='container bg-[#fff] xl:min-h-[905px]'>
				<div className='hero-front flex flex-col justify-center py-40 h-full xl:min-h-[905px]'>
					<div className='flex flex-col gap-12 xl:w-1/2'>
						<div className='hero-header flex flex-col gap-8'>
							<h1 className='bebas-neue text-[4.75rem] leading-[1.1]'>Sprzedajemy samochody z Europy</h1>
							<p className='xl:w-1/2'>Kup wyjatkowy pojazd, aby każda podróż była wyjątkowym przeżyciem</p>
						</div>
						<div className='hero-cta flex gap-6 text-[.9375rem] roboto-flex'>
							<a
								href='#gallery'
								rel='noopener'
								className='px-6 py-3 rounded-lg bg-[#0147FF] text-[#F7F7F7]'>
								Zobacz zdjęcia
							</a>
							<a
								href='tel:+48000555000'
								rel='noopener'
								className='px-6 py-3 rounded-lg border-[#0147FF] border-[1px] text-[#0147FF]'>
								Zadzwoń do nas
							</a>
						</div>
					</div>
				</div>
				<div className='hero-back'>{/* WORK - add images / backgrounds */}</div>
			</div>
		</section>
	)
}
