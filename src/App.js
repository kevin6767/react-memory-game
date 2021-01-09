import React, { useState } from 'react'

import Board from './components/Board/Board'
import { buildCards } from './util'
function App() {
	const cards = buildCards()
	return (
		<div className='wrapper'>
			<div className='game-container'>
				<h1>Matching Game! Find two of the same pokemon!</h1>
				<Board cards={cards} />
			</div>
		</div>
	)
}

export default App
