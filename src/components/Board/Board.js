import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import ScoreContainer from '../ScoreContainer/ScoreContainer'
const Board = (props) => {
	const [cards, setCards] = useState(props.cards)
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
		function validateValidators(validators) {
			return (
				validators.length === 2 && validators[0].type === validators[1].type
			)
		}
		function cardAlreadyInValidators(validators, card) {
			return validators.length === 1 && validators[0].id === card.id
		}
		function validatorsFull(validators) {
			return validators.length === 2
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
	}, [validators, completed])

	return (
		<div className='game-holder'>
			<ScoreContainer count={count} />
			<div className='board-container'>
				{cards.map((card) => (
					<Card {...card} onClick={onCardClick(card)} key={card.id} />
				))}
			</div>
		</div>
	)
}

export default Board
