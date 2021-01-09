import React from 'react'

const Card = (props) => {
	const { frontImg, backImg, flipped, onClick, selected } = props
	const img = flipped ? frontImg : backImg
	const selectedClass = selected ? 'selected' : ''
	function changeSize(e) {
		e.target.style.transform = 'scale(1,1.2)'
	}
	function changeBack(e) {
		e.target.style.transform = 'scale(1,1)'
	}
	return (
		<div className='card-wrapper'>
			<div
				className={`Card`}
				onClick={onClick}
				onMouseEnter={changeSize}
				onMouseLeave={changeBack}
			>
				<img src={img} alt='' className={`${selectedClass}`} />
			</div>
		</div>
	)
}

export default Card
