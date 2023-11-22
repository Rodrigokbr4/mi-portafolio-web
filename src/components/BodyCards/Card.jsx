import styles from './Card.module.css'
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
	]
	return (
		<div className={styles.card}>
			{CardsItems.map((item, index) => (
				<div key={index} className={styles.cardItem}>
					<div>{item.title}</div>
					<div className={styles.cardContent}>{item.content}</div>
				</div>
			))}
		</div>
	)
}
