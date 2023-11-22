import styles from './ProjectsCards.module.css'
import ImgHotel from '../../assets/Img/Cards/HotelAmelieScreen.webp'
export function ProjectsCards() {
	const ProjectsItems = [
		{
			Title: 'Hotel Amelie',
			Description:
				'En este proyecto, desarrollé una página web para un hotel ' +
				'utilizando las siguientes tecnologías: React, Tailwind CSS, HTML,' +
				' JSX y Vite.',
			Img: ImgHotel,
		},
		{
			Title: 'Hotel Amelie',
			Description:
				'En este proyecto, desarrollé una página web para un hotel ' +
				'utilizando las siguientes tecnologías: React, Tailwind CSS, HTML,' +
				' JSX y Vite.',
			Img: ImgHotel,
		},
	]
	return (
		<section className={styles.section}>
			<ul className={styles.ul}>
				{ProjectsItems.map((item, index) => (
					<li key={index} className={styles.ul}>
						<a href='' className={styles.a}>
							<img src={item.Img} alt='' className={styles.img} />
							<h1 className={styles.h1}>{item.Title}</h1>
							<p className={styles.p}>{item.Description}</p>
						</a>
					</li>
				))}
			</ul>
		</section>
	)
}
