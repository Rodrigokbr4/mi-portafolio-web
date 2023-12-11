import styles from './ContactCard.module.css'
import Curriculum from '../../assets/CurriculumVitae/RodrigoCabreraCV.pdf'

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
					viewBox='0 0 512 512'
				>
					<path
						fill='currentColor'
						d='M249.18 328.324c-9.788 15.384-19.179 30.434-40.222 45.055c-11.256 7.89-37.164 23.306-73.99 23.306C64.709 396.685 8 345.605 8 255.801c0-78.486 53.345-140.486 128.466-140.486c30.434 0 57.474 10.521 77.387 26.304c18.414 14.65 27.038 29.304 34.563 42.456l-52.58 26.273c-3.762-8.626-8.29-17.649-19.913-27.406c-12.784-10.155-25.54-13.152-36.46-13.152c-42.821 0-65.364 39.825-65.364 84.145c0 58.238 29.7 87.143 65.364 87.143c34.563 0 48.48-24.042 57.474-39.426l52.243 26.673zm184.194-204.75H504l-92.037 265.22h-67.597l-90.904-265.22h70.625l54.843 188.6z'
					/>
				</svg>
			),
			href: Curriculum,
			alt: 'Curriculum Vitae',
			description: 'Descargar Curriculum Vitae',
			Text: 'Descargar Curriculum',
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
							download={
								item.Text === 'Curriculum Vitae' ? 'RodrigoCabreraCV.pdf' : null
							}
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
