import styles from './App.module.css'
import { Header } from './components/Header/Header.jsx'
import { BodyCards } from './components/BodyCards/BodyCards.jsx'

function App() {
	return (
		<>
			<section className={styles.Section}>
				<Header />
				<BodyCards />
			</section>
		</>
	)
}

export default App
