import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import ScoreContainer from '../ScoreContainer/ScoreContainer'

import { removingIndex } from '../../util/removingIndex'
import {
	validateValidators,
	cardAlreadyInValidators,
	validatorsFull,
} from '../../util/validations'

const Board = (props) => {
	const [cards, setCards] = useState(...[props.cards])
	const [validators, setValidators] = useState([])
	const [completed, setCompleted] = useState([])
	const [count, setCount] = useState(0)

	const onCardClick = (card) => () => {
		if (validatorsFull(validators) || cardAlreadyInValidators(validators, card))
			return
		const newValidators = [...validators, card]
		setValidators(newValidators)

		const cardsInValidatorMatched = validateValidators(newValidators)
		if (cardsInValidatorMatched) {
			setCompleted([...completed, newValidators[0].type])
			setCount(count + 1)
		}

		if (validatorsFull(newValidators)) {
			resetValidatorsAfter(1000)
		}
		function resetValidatorsAfter(time) {
			setTimeout(() => {
				setValidators([])
			}, time)
		}
	}
	useEffect(() => {
		const newCards = cards.map((card) => ({
			...card,
			flipped:
				validators.find((c) => c.id === card.id) ||
				completed.includes(card.type),
		}))
		setCards(newCards)
	}, [validators])

	useEffect(() => {
		setTimeout(() => {
			setCards(removingIndex(cards, completed))
		}, 500)
	}, [completed])

	const handleRestart = () => {
		setCards(...[props.cards])
		setValidators([])
		setCompleted([])
		setCount(0)
	}
	return (
		<div className='game-holder'>
			<div className='btn-holder'>
				<button onClick={handleRestart}>New Game/Restart</button>
			</div>
			<ScoreContainer count={count} cards={cards} />
			<div className='board-container'>
				{cards.length > 0
					? cards.map((card) => (
							<Card {...card} onClick={onCardClick(card)} key={card.id} />
					  ))
					: ''}
			</div>
		</div>
	)
}

export default Board
