import styles from './Header.module.css'
import perfil from '../../assets/Img/perfil.jpg'
import { Contactos } from '../Contactos/Contactos'

export function Header() {
	const handleImageHover = () => {
		document.querySelector('AnimatedCursor').style.display = 'none'
	}

	const handleImageLeave = () => {
		document.querySelector('AnimatedCursor').style.display = 'block'
	}
	return (
		<>
			<div className={styles.Header}>
				<img
					src={perfil}
					alt='Foto de perfil'
					className={styles.Img}
					onMouseEnter={handleImageHover}
					onMouseLeave={handleImageLeave}
				/>
				<div className={styles.Env}>
					<h1 className={styles.H1}>Rodrigo Cabrera</h1>
					<h2 className={styles.H2}>Web Developer</h2>
					<div className={styles.Contactos}>
						<Contactos />
					</div>
				</div>
			</div>
		</>
	)
}
