import { buildCards } from '.'

function restartGame() {
	console.log('restarting')
	const cards = buildCards()

	return cards
}

export { restartGame }
