export function Contact() {
	return (
		<section
			className='py-16 max-w-7xl mx-auto rounded-xl shadow-lg overflow-hidden mb-4'
			style={{ backgroundColor: '#315A6F' }}>
			<div className='container mx-auto px-4'>
				<div className='max-w-3xl mx-auto text-center'>
					<h2 className='text-4xl font-bold mb-12 text-white'>
						PARTICIPE DO AURORA
					</h2>
					<div className='text-white space-y-6 mb-16'>
						<p className='text-lg'>
							Aurora é um círculo terapêutico de mulheres com encontros
							temáticos, criados para promover escuta, reflexão, fortalecimento
							emocional e conexão com o feminino.
						</p>
						<p className='text-lg'>
							Mais do que um espaço de acolhimento, Aurora é uma jornada
							propositiva, inspiradora e voltada ao autodesenvolvimento
							intencional — sem cair nos clichês de autoajuda.
						</p>
						<p className='text-lg'>
							É um convite para mulheres que desejam se encontrar com mais
							verdade, escutar suas necessidades e transformar, com consciência
							e leveza, a relação consigo mesmas e com o mundo ao redor.
						</p>
						<p className='text-lg mt-8'>
							Saiba mais nos links abaixo ou mande uma mensagem de Whatsapp para
							<a
								href='tel:+5511943580698'
								className='text-white hover:text-gray-200 ml-1'>
								+55 11 94358-0698
							</a>
							.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center'>
						<div className='flex flex-col items-center space-y-4'>
							<img
								src='/instagram.png'
								alt='Instagram QR Code'
								className='w-50 h-60 p-2 bg-white rounded-xl shadow-md'
							/>
						</div>
						<div className='flex flex-col items-center space-y-4'>
							<img
								src='/whatsapp.png'
								alt='WhatsApp QR Code'
								className='w-50 h-60 p-2 bg-white rounded-xl shadow-md'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
