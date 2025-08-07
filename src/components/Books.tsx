import { Card, CardContent } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'

// Add book data array
const books = [
	{
		id: 1,
		title: 'ESTOU CANSADA DE ESTAR CANSADA',
		cover: '/AURORA-EBOOK 1.jpg',
		buyLink:
			'https://hotmart.com/pt-br/marketplace/produtos/estou-cansada-de-estar-cansada/F100947342H',
	},
	{
		id: 2,
		title: 'COMO DAR UM CALA BOCA NA SÍNDROME DA IMPOSTORA ',
		cover: '/AURORA-EBOOK 2.jpg',
		buyLink:
			'https://hotmart.com/pt-br/marketplace/produtos/como-dar-um-cala-boca-na-sindrome-da-impostora/C100947759B',
	},
	{
		id: 3,
		title: 'ESTADO CIVIL: EM UM RELACIONAMENTO SÉRIO COMIGO MESMA',
		cover: '/AURORA-EBOOK 3.jpg',
		buyLink:
			'https://hotmart.com/pt-br/marketplace/produtos/estado-civil-em-um-relacionamento-serio-comigo-mesma/I101122954C',
	},
	{
		id: 4,
		title: 'EM BREVE',
		cover: '/logopb.png',
		buyLink: '',
	},
	{
		id: 5,
		title: 'EM BREVE',
		cover: '/logopb.png',
		buyLink: '',
	},
	{
		id: 6,
		title: 'EM BREVE',
		cover: '/logopb.png',
		buyLink: '',
	},
	{
		id: 7,
		title: 'EM BREVE',
		cover: '/logopb.png',
		buyLink: '',
	},
	{
		id: 8,
		title: 'EM BREVE',
		cover: '/logopb.png',
		buyLink: '',
	},
]

export function CarouselSize() {
	return (
		<>
			<div className='max-w-7xl mx-auto px-4 py-8 mt-24'>
				<h2 className='text-4xl font-bold text-left'>E-Books</h2>
				<div className='flex items-center justify-center px-4'>
					<Carousel
						opts={{
							align: 'center',
							loop: true,
							startIndex: 1,
						}}
						className='w-full max-w-4xl relative '>
						<CarouselContent>
							{books.map((book) => (
								<CarouselItem
									key={book.id}
									className='md:basis-1/2 lg:basis-1/3 p-4'>
									<div className='p-1'>
										<Card
											className='w-full cursor-pointer transition-transform hover:scale-105 border-none shadow-none bg-transparent'
											onClick={() => window.open(book.buyLink, '_blank')}>
											<CardContent className='p-0 aspect-[2/3] relative'>
												<img
													src={book.cover}
													alt={book.title}
													className='absolute inset-0 w-full h-full object-cover rounded-lg'
												/>
											</CardContent>
										</Card>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className='cursor-pointer absolute -left-12 ' />
						<CarouselNext className=' cursor-pointer absolute -right-12' />
					</Carousel>
				</div>
			</div>
		</>
	)
}
