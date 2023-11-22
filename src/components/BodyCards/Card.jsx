import styles from './Card.module.css'
import { ContactCard } from './ContactCard'
import { ProjectsCards } from './ProjectsCards'
import { SkillsCard } from './SkillsCard'

export function Card() {
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
	return (
		<div className={styles.card}>
			{CardsItems.map((item, index) => (
				<div key={index} className={styles.cardItem}>
					<h2 className={styles.cardTitle}>{item.title}</h2>
					<div className={styles.cardContent}>{item.content}</div>
				</div>
			))}
		</div>
	)
}
