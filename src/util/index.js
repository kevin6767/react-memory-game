import React from 'react'
import Bulbasaur from '../imgs/1.svg'
import Ivysaur from '../imgs/2.svg'
import Venusaur from '../imgs/3.svg'
import Charmander from '../imgs/4.svg'
import Charmeleon from '../imgs/5.svg'
import Charizard from '../imgs/6.svg'
import Squirtle from '../imgs/7.svg'
import Wartortle from '../imgs/8.svg'
import Blastoise from '../imgs/9.svg'
import Caterpie from '../imgs/10.svg'
import Metapod from '../imgs/11.svg'
import Butterfree from '../imgs/12.svg'

const pokeArray = [
	{
		id: 1,
		image: Bulbasaur,
	},
	{
		id: 2,
		image: Ivysaur,
	},
	{
		id: 3,
		image: Venusaur,
	},
	{
		id: 4,
		image: Charmander,
	},
	{
		id: 5,
		image: Charmeleon,
	},
	{
		id: 6,
		image: Charizard,
	},
	{
		id: 7,
		image: Squirtle,
	},
	{
		id: 8,
		image: Wartortle,
	},
	{
		id: 9,
		image: Blastoise,
	},
	{
		id: 10,
		image: Caterpie,
	},
	{
		id: 11,
		image: Metapod,
	},
	{
		id: 12,
		image: Butterfree,
	},
]
function randomize(array) {
	let i = array.length - 1
	for (; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		const temp = array[i]
		array[i] = array[j]
		array[j] = temp
	}
	return array
}

function cardCreation() {
	return randomize(pokeArray.concat(pokeArray))
}

export { cardCreation }
