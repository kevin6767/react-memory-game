import React from 'react'

import Card from './Card'

function generateCards(cardsArr) {
	return cardsArr.map(({ id, image, selected }) => {
		return <Card id={id} image={image} selected={selected} />
	})
}

function Board({ cardsArr }) {
	return <div className='board-container'>{generateCards(cardsArr)}</div>
}

export default Board
