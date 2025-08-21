export function Contact() {
	const services = [
		'• Hábitos e Estilo de Vida',
		'• Mentoria',
		'• Psicoterapia',
		'• Palestras',
		'• Vivências',
	]

	return (
		<section
			className='py-16 max-w-7xl mx-auto rounded-xl shadow-lg overflow-hidden mb-4'
			style={{ backgroundColor: '#315A6F' }}>
			<div className='container mx-auto px-4'>
				<div className='max-w-3xl mx-auto'>
					<div className='flex flex-col gap-6'>
						{/* Top row - 3 items */}
						<div className='grid grid-cols-1 sm:grid-cols-3 gap-6 text-white'>
							{services.slice(0, 3).map((service, index) => (
								<div
									key={index}
									className='p-4 backdrop-blur-sm
                                        hover:border-white/40 transition-colors text-center'>
									<span className='text-xl font-medium'>{service}</span>
								</div>
							))}
						</div>
						{/* Bottom row - 2 items */}
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-6 text-white sm:w-2/3 mx-auto'>
							{services.slice(3).map((service, index) => (
								<div
									key={index + 3}
									className='p-4 backdrop-blur-sm
                                        hover:border-white/40 transition-colors text-center'>
									<span className='text-xl font-medium'>{service}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
