import ArrowDown from '../assets/img/arrow-down.webp'

export default function Seo() {
	return (
		<section id='seo' className='bg-[#282828] min-w-screen'>
			<div className='mx-4'>
				<div className='container'>
					<div className='flex justify-between items-center gap-x-12 gap-y-20 py-20 min-h-[360px] text-white text-base flex-wrap md:flex-nowrap'>
						<div className='card flex flex-col gap-y-4 min-h-[185px]'>
							<h3 className='bebas-neue text-2xl leading-9'>
								Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.
							</h3>
							<p className='text-sm leading-5'>
								Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat
								ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]
							</p>
							<button className='flex items-center gap-2 py-[0.375rem] w-16 border-b-[1.5px] text-sm'>
								Rozwiń
								<img
									src={ArrowDown}
									alt=''
								/>
							</button>
						</div>
						<div className='card flex flex-col gap-y-4 min-h-[185px]'>
							<h3 className='bebas-neue text-2xl leading-9'>
								Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.
							</h3>
							<p className='text-sm leading-5'>
								Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat
								ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]
							</p>
							<button className='flex items-center gap-2 py-[0.375rem] w-16 border-b-[1.5px] text-sm'>
								Rozwiń
								<img
									src={ArrowDown}
									alt=''
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
