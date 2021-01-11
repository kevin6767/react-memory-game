const ScoreContainer = ({ count }) => {
	return (
		<div className='score-holder'>
			{count < 12 ? `Your score is: ${count}` : 'You won!'}
		</div>
	)
}

export default ScoreContainer
