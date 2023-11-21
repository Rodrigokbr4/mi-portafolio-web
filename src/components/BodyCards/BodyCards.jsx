import { Card } from './Card'
import { useState } from 'react'
import styles from './Accordion.module.css'

export function BodyCards() {
	const [activeIndex, setActiveIndex] = useState(0)

	const handleToggle = index => {
		setActiveIndex(prevIndex => (prevIndex === index ? -1 : index))
	}

	const accordionItems = [
		{ title: 'Sección 1', content: 'Contenido de la sección 1' },
		{ title: 'Sección 2', content: 'Contenido de la sección 2' },
		{ title: 'Sección 3', content: 'Contenido de la sección 3' },
	]

	return (
		<div className={styles.accordion}>
			{accordionItems.map((item, index) => (
				<div
					key={index}
					className={`${styles.accordionItem} ${
						index === activeIndex ? styles.accordionItemActive : ''
					}`}
				>
					<div
						className={styles.accordionTitle}
						onClick={() => handleToggle(index)}
					>
						{item.title}
					</div>
					{index === activeIndex && (
						<div className={styles.accordionContent}>{item.content}</div>
					)}
				</div>
			))}
		</div>
	)
}
