import styles from './Header.module.css'
import perfil from '../../assets/Img/perfil.jpg'
import { Contactos } from '../Contactos/Contactos'

export function Header() {
	return (
		<>
			<div className={styles.Header}>
				<img src={perfil} alt='Foto de perfil' className={styles.Img} />
				<h1 className={styles.H1}>Rodrigo Cabrera</h1>
				<h2 className={styles.H2}>Web Developer</h2>
				<div className={styles.Contactos}>
					<Contactos />
				</div>
			</div>
		</>
	)
}
