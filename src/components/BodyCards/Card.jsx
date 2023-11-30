import styles from './Card.module.css'
import { ContactCard } from './ContactCard'
import { ProjectsCards } from './ProjectsCards'
import { SkillsCard } from './SkillsCard'
import { useState, useEffect } from 'react'

export function Card() {
	const initialColores = ['#ff5733', '#33ff57', '#5733ff', '#ff33d1']
	const [colores, setColores] = useState(initialColores)
	const [transitionClass, setTransitionClass] = useState('')

	const CardsItems = [
		{
			title: 'Acerca de mi',
			content:
				'Soy un apasionado de la programación, del hardware y de las ' +
				'tecnologías, dispuesto a aprender y afrontar nuevos desafíos ' +
				'aplicando mis conocimientos.',
		},
		{ title: 'Portafolio', content: <ProjectsCards /> },
		{ title: 'Skills', content: <SkillsCard /> },
		{ title: 'Contacto', content: <ContactCard /> },
	]

	useEffect(() => {
		const intervalId = setInterval(() => {
			const newColores = [...colores].reverse()
			setColores(newColores)
			setTransitionClass('transition') // Añade la clase de transición
		}, 5000)

		return () => {
			clearInterval(intervalId)
		}
	}, [colores])

	return (
		<div className={styles.card}>
			{CardsItems.map((item, index) => (
				<div key={index} className={styles.cardItem}>
					<h2
						className={`${styles.cardTitle} ${styles[transitionClass]}`}
						style={{ color: colores[index % colores.length] }}
					>
						{item.title}
					</h2>
					<div className={styles.cardContent}>{item.content}</div>
				</div>
			))}
		</div>
	)
}
