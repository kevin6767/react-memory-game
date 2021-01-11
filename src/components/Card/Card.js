import React from 'react'
import backImg from '../../imgs/cardPattern.png'

const Card = ({ frontImg, flipped, onClick, selected }) => {
	function changeSize(e) {
		e.target.style.transform = 'scale(1,1.2)'
	}
	function changeBack(e) {
		e.target.style.transform = 'scale(1,1)'
	}
	const imgProps = {
		src: flipped ? frontImg : backImg,
		className: selected ? 'selected' : '',
		alt: '',
	}
	return (
		<div className='card-wrapper'>
			<div
				className={`Card`}
				onClick={onClick}
				onMouseEnter={changeSize}
				onMouseLeave={changeBack}
			>
				<img {...imgProps} />
			</div>
		</div>
	)
}

export default Card
