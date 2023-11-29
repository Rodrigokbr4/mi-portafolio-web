import styles from './App.module.css'
import AnimatedCursor from 'react-animated-cursor'
import { Header } from './components/Header/Header.jsx'
import { BodyCards } from './components/BodyCards/BodyCards.jsx'

function App() {
	return (
		<>
			<header className={styles.Header}>
				<AnimatedCursor
					showSystemCursor={true}
					innerSize={54}
					outerSize={65}
					color='255, 255, 255'
					outerAlpha={0.2}
					innerScale={0.7}
					outerScale={2}
					trailingSpeed={5}
					outerStyle={{
						border: '3px solid var(--cursor-color)',
					}}
					innerStyle={{
						backgroundColor: 'var(--cursor-color)',
					}}
					clickables={[
						'a',
						'input[type="text"]',
						'input[type="email"]',
						'input[type="number"]',
						'input[type="submit"]',
						'input[type="image"]',
						'label[for]',
						'select',
						'textarea',
						'button',
						'.link',
						'img',
					]}
				/>
				<Header />
				<BodyCards />
			</header>
		</>
	)
}

export default App
