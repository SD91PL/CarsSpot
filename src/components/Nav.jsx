import { useState, useEffect } from 'react'
import logotype from '../assets/img/logotype.webp'

export default function Nav() {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const navHeight = document.getElementById('nav').offsetHeight / 4
			if (window.scrollY > navHeight) {
				setIsScrolled(true)
				console.log(navHeight)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<nav
			id='nav'
			className={`fixed top-0 left-0 right-0 min-h-20 w-full border-b border-b-[#0000] roboto-flex z-50 transition duration-300 focus-in animation-delay-900 ${
				isScrolled
					? 'bg-[#f7f7f7bd] backdrop-blur-md border-b-[#f7f7f7]'
					: 'bg-[#0000]'
			}`}>
			<div className='mx-4'>
				<div className='container flex flex-col justify-center min-h-20'>
					<div className='flex justify-between items-center'>
						<a
							href='#'
							rel='noopener'>
							<div className='logotype drop-shadow-[0_0_24px_#f7f7f7]'>
								<img
									src={logotype}
									alt='Logotyp CarsSpot'
								/>
							</div>
						</a>
						<ul
							className={`hidden md:flex gap-6 py-3 px-8 rounded-lg border border-[#0000] transition duration-500 ${
								isScrolled ? 'backdrop-blur-md border-[#f7f7f7]' : ''
							}`}>
							<li className='transition-colors duration-300 hover:text-[#0147FF]'>
								<a
									href='#gallery'
									rel='noopener'>
									Galeria zdjęć
								</a>
							</li>
							<li className='transition-colors duration-300 hover:text-[#0147FF]'>
								<a
									href='#seo'
									rel='noopener'>
									FAQ
								</a>
							</li>
						</ul>
						<a
							href='tel:+48000555000'
							rel='noopener'
							className='px-6 py-3 rounded-lg bg-[#0147FF] border-[#0147FF] border text-[#F7F7F7] text-[.9375rem] font-semibold transition-colors hover:bg-[#0038cc]'>
							Zadzwoń <span className='hidden sm:inline'>do nas</span>
						</a>
					</div>
				</div>
			</div>
		</nav>
	)
}
