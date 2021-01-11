import React from 'react'

import Board from './components/Board/Board'
import { restartGame } from './util/restartGame'
import { buildCards } from './util/index'
const App = () => {
	return (
		<div className='wrapper'>
			<div className='game-container'>
				<h1>Matching Game! Find two of the same pokemon! </h1>
				<button onClick={restartGame}>New Game/Restart</button>
				<Board cards={buildCards} />
			</div>
		</div>
	)
}

export default App
