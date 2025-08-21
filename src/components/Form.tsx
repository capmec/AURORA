import { type FormEvent, useState } from 'react'

export function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	})

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		try {
			const response = await fetch(
				'https://formsubmit.co/faleconosco.calma@gmail.com',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
					body: JSON.stringify({
						name: formData.name,
						email: formData.email,
						phone: formData.phone,
						message: formData.message,
					}),
				},
			)

			if (response.ok) {
				alert('Mensagem enviada com sucesso!')
				setFormData({ name: '', email: '', phone: '', message: '' })
			}
		} catch (error) {
			alert('Erro ao enviar mensagem. Tente novamente.')
		}
	}

	return (
		<section className='py-16 max-w-7xl mx-auto mb-4'>
			<div className='container mx-auto px-4'>
				<div className='max-w-2xl mx-auto'>
					<h2 className='text-4xl font-bold mb-8 text-center text-white'>
						Agendamentos e consultas
					</h2>
					<form
						onSubmit={handleSubmit}
						className='space-y-6'>
						<div>
							<input
								type='text'
								placeholder='Nome'
								required
								className='w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white'
								value={formData.name}
								onChange={(e) =>
									setFormData({ ...formData, name: e.target.value })
								}
							/>
						</div>
						<div>
							<input
								type='email'
								placeholder='E-mail'
								required
								className='w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white'
								value={formData.email}
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
							/>
						</div>
						<div>
							<input
								type='tel'
								placeholder='Telefone'
								required
								className='w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white'
								value={formData.phone}
								onChange={(e) =>
									setFormData({ ...formData, phone: e.target.value })
								}
							/>
						</div>
						<div>
							<textarea
								placeholder='Mensagem'
								required
								rows={4}
								className='w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white resize-none'
								value={formData.message}
								onChange={(e) =>
									setFormData({ ...formData, message: e.target.value })
								}
							/>
						</div>
						<button
							type='submit'
							className='w-full py-3 px-6 rounded-lg bg-white text-[#315A6F] font-semibold cursor-pointer hover:text-[#e16b65] transition-colors focus:outline-none focus:ring-2 focus:ring-[#e16b65] focus:ring-opacity-50'>
							Enviar
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}
