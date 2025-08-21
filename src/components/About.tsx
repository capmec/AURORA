export function About() {
	return (
		<section className='py-0 bg-[#e16b65] max-w-7xl mx-auto rounded-xl shadow-lg overflow-hidden mb-4 mt-4'>
			<div className='container mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 h-full'>
					<div className='flex '>
						<img
							src='/photo2.jpg'
							alt='Cinthia'
							className='w-[800px] h-[600px] object-cover'
						/>
					</div>
					<div className='p-8 flex flex-col justify-center'>
						<div className='space-y-6'>
							<h2 className='text-4xl font-bold text-white mb-4'>
								Cinthia Alves Prais
							</h2>
							<p className='text-lg text-gray-200'>
								Sou psicóloga, mentora e facilitadora de processos emocionais,
								dedicada há mais de 25 anos a ajudar mulheres a se reconectarem
								consigo mesmas, resgatarem sua autoestima e transformarem suas
								relações de dentro para fora. Minha missão é criar espaços de
								acolhimento e despertar, onde cada mulher possa reconhecer sua
								força e reescrever sua própria história.
							</p>
							<p className='text-lg text-gray-200'>
								Minha atuação clínica e como facilitadora de grupos me permitiu
								acompanhar centenas de pessoas em momentos de transição, cura e
								autodescoberta. Me especializei em Terapia Somática,
								Neurociência do Comportamento, Terapia Cognitivo-Comportamental,
								Mudança de Hábitos e Qualidade de Vida, sempre trazendo
								abordagens que unem ciência e sensibilidade para promover
								mudanças reais e duradouras.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
