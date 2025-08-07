import { About } from './components/About'
import { CarouselSize } from './components/Books'
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {
	return (
		<div className='relative'>
			{' '}
			<Header />
			<main className='pt-36'>
				<CarouselSize />
				<About />
				<Contact />
				<Footer />
			</main>
		</div>
	)
}

export default App
