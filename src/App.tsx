import { About } from './components/About'
import { CarouselSize } from './components/Books'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ContactForm } from './components/Form'

function App() {
	return (
		<div className='relative'>
			{' '}
			<About />
			<main className=''>
				<Contact />
				<CarouselSize />
				<ContactForm />

				<Footer />
			</main>
		</div>
	)
}

export default App
