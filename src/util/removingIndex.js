function removingIndex(cards, completed) {
	let index = completed.length - 1
	let c = completed.filter((el) => !cards.includes(el))
	let cardsAfterRemoval = cards.filter((item) => item.type !== c[index])
	return cardsAfterRemoval
}

export { removingIndex }
