import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export function Footer() {
	return (
		<footer className='w-full bg-white py-4'>
			<div className='max-w-7xl mx-auto px-4'>
				<div className='flex items-center justify-center gap-4'>
					<p className='text-gray-600 text-sm'>
						2025 - Todos os direitos reservados ®
					</p>
					<a
						href=' https://www.instagram.com/cinthiaalvesprais/'
						target='_blank'
						rel='noopener noreferrer'
						className='text-gray-600 hover:text-[#e16b65] transition-colors'>
						<FaInstagram size={24} />
					</a>
					<a
						href='https://wa.me/5511930689846'
						target='_blank'
						rel='noopener noreferrer'
						className='text-gray-600 hover:text-[#e16b65] transition-colors'>
						<FaWhatsapp size={24} />
					</a>
				</div>
			</div>
		</footer>
	)
}
