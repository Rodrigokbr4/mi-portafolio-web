import styles from './Header.module.css'
import perfil from '../../assets/Img/perfil.webp'
import { Contactos } from '../Contactos/Contactos'
import { useState, useEffect } from 'react'

export function Header() {
	const initialColores = ['#DBFF33', '#33ff57']
	const [colores, setColores] = useState(initialColores)

	useEffect(() => {
		const intervalId = setInterval(() => {
			const newColores = [...colores].reverse()
			setColores(newColores)
		}, 5000)

		return () => {
			clearInterval(intervalId)
		}
	}, [colores])

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
					<h2
						className={`${styles.H2} ${styles.transition}`}
						style={{ color: colores[0] }}
					>
						Web Developer
					</h2>
					<div className={styles.Contactos}>
						<Contactos />
					</div>
				</div>
			</div>
		</>
	)
}
