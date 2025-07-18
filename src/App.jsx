import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
// import Headers from "./components/Headers.jsx" // in Gallery section
import Hero from './components/Hero.jsx'
import Nav from './components/Nav.jsx'
import Seo from './components/Seo.jsx'

function App() {
	return (
		<>
			<Nav />
			<main className='xl:bg-[#d9dcd5]'>
				<Hero />
				<Gallery />
				<Seo />
			</main>
			<Footer />
		</>
	)
}

export default App
