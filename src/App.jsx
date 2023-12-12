import styles from './App.module.css'
import AnimatedCursor from 'react-animated-cursor'
import OGImage from './assets/Img/OGImage.webp'
import { Header } from './components/Header/Header.jsx'
import { BodyCards } from './components/BodyCards/BodyCards.jsx'

function App() {
	return (
		<>
			<section className={styles.Section}>
				<AnimatedCursor
					showSystemCursor={true}
					innerSize={3}
					outerSize={40}
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
			</section>
		</>
	)
}

export default App
