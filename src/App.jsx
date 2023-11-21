import styles from './App.module.css'
import { Header } from './components/Header/Header.jsx'
import { BodyCards } from './components/BodyCards/BodyCards.jsx'

function App() {
	return (
		<>
			<header className={styles.Header}>
				<Header />
				<BodyCards />
			</header>
		</>
	)
}

export default App
