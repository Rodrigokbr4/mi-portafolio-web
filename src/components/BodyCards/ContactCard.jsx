import styles from './ContactCard.module.css'

export function ContactCard() {
	const ContactItems = [
		{
			Icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='1.6em'
					height='1.6em'
					viewBox='0 0 24 24'
				>
					<path
						fill='currentColor'
						d='M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z'
					/>
				</svg>
			),
			href: 'http://www.linkedin.com/in/rodrigo-cabrera-506130225/',
			alt: 'LinkedIn',
			description: 'LinkedIn',
			Text: 'LinkedIn',
			Color: '#0077B5',
		},
		{
			Icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='1.6em'
					height='1.6em'
					viewBox='0 0 24 24'
				>
					<path
						fill='currentColor'
						d='m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z'
					/>
				</svg>
			),
			href: 'mailto:cabrerarodrigo481@gmail.com',
			alt: 'Email',
			description: 'Email',
			Text: 'cabrerarodrigo481@gmail.com',
			Color: '#c71610',
		},
		{
			Icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='1.6em'
					height='1.6em'
					viewBox='0 0 16 16'
				>
					<path
						fill='currentColor'
						d='M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144l-2.494.654l.666-2.433l-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931a6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646c-.182-.065-.315-.099-.445.099c-.133.197-.513.646-.627.775c-.114.133-.232.148-.43.05c-.197-.1-.836-.308-1.592-.985c-.59-.525-.985-1.175-1.103-1.372c-.114-.198-.011-.304.088-.403c.087-.088.197-.232.296-.346c.1-.114.133-.198.198-.33c.065-.134.034-.248-.015-.347c-.05-.099-.445-1.076-.612-1.47c-.16-.389-.323-.335-.445-.34c-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654c0 .977.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992c.47.205.84.326 1.129.418c.475.152.904.129 1.246.08c.38-.058 1.171-.48 1.338-.943c.164-.464.164-.86.114-.943c-.049-.084-.182-.133-.38-.232z'
					/>
				</svg>
			),
			href: 'tel:+5493544620507',
			alt: 'Numero de teléfono',
			description: 'Teléfono',
			Text: '3544-620507',
			Color: '#25D366',
		},
		{
			Icon: (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='1.6em'
					height='1.6em'
					viewBox='0 0 24 24'
				>
					<path
						fill='currentColor'
						fillRule='evenodd'
						d='M4.172 3.172C3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828C5.343 22 7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172C21 19.657 21 17.771 21 14v-4c0-3.771 0-5.657-1.172-6.828C18.657 2 16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172ZM8 9.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H8Zm0 4a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5H8Z'
						clipRule='evenodd'
					/>
				</svg>
			),
			href: '',
			alt: 'Curriculum Vitae',
			description: 'Curriculum Vitae',
			Text: 'Curriculum Vitae',
			Color: '#DBFF33',
		},
	]
	return (
		<section className={styles.section}>
			<ul className={styles.ul}>
				{ContactItems.map((item, index) => (
					<li key={index} className={styles.li}>
						<a
							href={item.href}
							alt={item.alt}
							title={item.description}
							className={styles.a}
							target='_blank'
							rel='noreferrer'
							style={{ color: item.Color }}
						>
							{item.Icon}
						</a>
						<h3 className={styles.h3}>{item.Text}</h3>
					</li>
				))}
			</ul>
		</section>
	)
}
