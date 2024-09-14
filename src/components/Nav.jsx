import logo from '../assets/img/logo.webp'
import logoCTA from '../assets/img/logo-CTA.webp'
import logotype from '../assets/img/logotype.webp'

export default function Nav() {
	return (
		<nav
			id='nav'
			className='fixed top-0 left-0 right-0 min-h-20 w-full roboto-flex z-50 bg-red-400 opacity-50'>
			<div className='container flex flex-col justify-center min-h-20 bg-red-500'>
				<div className='flex justify-between items-center'>
					<a
						href='#'
						rel='noopener'>
						<div className='logotype'>
							<img
								src={logotype}
								alt='Logotyp CarsSpot'
							/>
							{/* <div className='flex gap-3 justify-start items-center'>
								<img
									src={logo}
									alt='Logotyp CarsSpot'
								/>
								<img
									src={logoCTA}
									alt='Logotyp CarsSpot'
								/>
							</div> */}
						</div>
					</a>
					<ul className='flex gap-6'>
						<a
							href='#gallery'
							rel='noopener'>
							<li>Galeria zdjęć</li>
						</a>
						<a
							href='#seo'
							rel='noopener'>
							<li>FAQ</li>
						</a>
					</ul>
					<a
						href='tel:+48000555000'
						rel='noopener'
						className='px-6 py-3 rounded-lg bg-[#0147FF] border-[#0147FF] border-[1px] text-[#F7F7F7] text-[.9375rem] transition-colors hover:bg-[#0038cc]'>
						Zadzwoń do nas
					</a>
				</div>
			</div>
		</nav>
	)
}
