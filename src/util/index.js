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
import backImg from '../imgs/cardPattern.png'

function buildCards() {
	let id = 0
	const images = {
		Bulbasaur,
		Ivysaur,
		Venusaur,
		Charmander,
		Charmeleon,
		Charizard,
		Squirtle,
		Wartortle,
		Blastoise,
		Caterpie,
		Metapod,
		Butterfree,
	}
	const cards = Object.keys(images).reduce((result, item) => {
		const getCard = () => ({
			id: id++,
			type: item,
			backImg,
			frontImg: images[item],
			flipped: false,
			selected: false,
		})
		return [...result, getCard(), getCard()]
	}, [])
	return suffle(cards)
}

function suffle(arr) {
	let len = arr.length
	for (let i = 0; i < len; i++) {
		let randomIdx = Math.floor(Math.random() * len)
		let copyCurrent = { ...arr[i] }
		let copyRandom = { ...arr[randomIdx] }
		arr[i] = copyRandom
		arr[randomIdx] = copyCurrent
	}
	return arr
}

export { buildCards }
