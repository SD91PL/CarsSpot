import SeoCard from './SeoCard.jsx'

export default function Seo() {
	return (
		<section
			id='seo'
			className='bg-[#282828] min-w-screen focus-in animation-delay-1200'>
			<div className='mx-4'>
				<div className='container '>
					<div className='flex justify-between items-center gap-x-12 gap-y-20 py-20 min-h-[360px] text-white text-base flex-wrap md:flex-nowrap'>
						<SeoCard
							header='Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.'
							paragraph='Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et sem fermentum rhoncus vel id nisi. Donec mollis semper ex eu posuere. Pellentesque ultricies, libero ut blandit luctus, dolor eros pellentesque neque, in sodales lectus mi sit amet lorem. Donec efficitur cursus nunc, sit amet hendrerit ante pellentesque bibendum. Duis finibus eros lorem, mattis condimentum augue dignissim a. Integer id ligula odio. Integer non erat nec sem feugiat imperdiet. Praesent sed mauris arcu. Ut consectetur, enim id vehicula accumsan, metus purus tristique lorem, non lobortis arcu diam cursus tellus. Quisque tincidunt imperdiet ex a mollis. In sodales ac sem et dignissim. Morbi varius cursus tempor.'
						/>
						<SeoCard
							header='Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.'
							paragraph='Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et sem fermentum rhoncus vel id nisi. Donec mollis semper ex eu posuere. Pellentesque ultricies, libero ut blandit luctus, dolor eros pellentesque neque, in sodales lectus mi sit amet lorem. Donec efficitur cursus nunc, sit amet hendrerit ante pellentesque bibendum. Duis finibus eros lorem, mattis condimentum augue dignissim a. Integer id ligula odio. Integer non erat nec sem feugiat imperdiet. Praesent sed mauris arcu. Ut consectetur, enim id vehicula accumsan, metus purus tristique lorem, non lobortis arcu diam cursus tellus. Quisque tincidunt imperdiet ex a mollis. In sodales ac sem et dignissim. Morbi varius cursus tempor.'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
