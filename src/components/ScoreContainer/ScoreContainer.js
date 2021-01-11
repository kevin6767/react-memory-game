const ScoreContainer = (score) => {
	return (
		<div className='score-holder'>
			{score.count < 12 ? `Your score is: ${score.count}` : 'You won!'}
		</div>
	)
}

export default ScoreContainer
