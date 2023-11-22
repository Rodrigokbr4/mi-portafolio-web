import styles from './ProjectsCards.module.css'
import ImgHotel from '../../assets/Img/Cards/HotelAmelieScreen.webp'
import ImgEcommerce from '../../assets/Img/Cards/EcommercePage.webp'
export function ProjectsCards() {
	const ProjectsItems = [
		{
			Title: 'Hotel Amelie',
			Description:
				'En este proyecto, desarrollé una página web para un hotel ' +
				'utilizando las siguientes tecnologías: React, Tailwind CSS, HTML,' +
				' JSX y Vite.',
			Img: ImgHotel,
			url: 'https://ameliehotel.000webhostapp.com/',
		},
		{
			Title: 'Tienda X',
			Description:
				'En este proyecto, desarrollé una ecommerce ' +
				'utilizando las siguientes tecnologías: React, Tailwind CSS, HTML,' +
				' JSX y Vite.',
			Img: ImgEcommerce,
		},
	]
	return (
		<section className={styles.section}>
			<ul className={styles.ul}>
				{ProjectsItems.map((item, index) => (
					<li key={index} className={styles.ul}>
						<a
							href={item.url}
							target='_blank'
							className={styles.a}
							rel='noreferrer'
							alt='Pagina web Hotel'
							title='Pagina web hotel'
						>
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
