function validateValidators(validators) {
	return validators.length === 2 && validators[0].type === validators[1].type
}
function cardAlreadyInValidators(validators, card) {
	return validators.length === 1 && validators[0].id === card.id
}
function validatorsFull(validators) {
	return validators.length === 2
}

export { validateValidators, cardAlreadyInValidators, validatorsFull }
