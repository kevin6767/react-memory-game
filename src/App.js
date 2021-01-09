import React, { useState } from 'react'

import Board from './components/Board'
import { cardCreation } from './util'

function App() {
	const [cardsArr, updateCardsArr] = useState(cardCreation())

	return (
		<div className='wrapper'>
			<div className='game-container'>
				<h1>Hellow!</h1>
				<Board cardsArr={cardsArr} />
			</div>
		</div>
	)
}

export default App
