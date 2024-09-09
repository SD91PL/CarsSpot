export default function Footer() {
	return (
		<footer className='bg-[#282828] min-w-screen border-t border-solid border-white'>
			<div className='mx-4'>
				<div className='container'>
					<div className='flex justify-between items-center h-[72px] text-white text-base'>
						<a href='#'>
							<p className='font-bold'>Cars Spot</p>
						</a>
						<a
							href='#'
							target='_blank'
							rel='noopener noreferrer'>
							<p className='underline'>Polityka prywatności</p>
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
