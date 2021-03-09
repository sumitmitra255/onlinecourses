import digitalmarket from '../Resources/digital-marketing.jpg'

export const CourseCard = (props) => {
	const { coursetype } = props
	const temp = [1, 1, 1, 1]
	return (
		<>
			{coursetype === 'offline' ? (
				<div className='flexdiv'>
					<div>Active Courses(3)</div>
					<div>
						<button>Add New Course</button>
					</div>
				</div>
			) : (
				<div className='flexdiv'>
					<div>Active Live Courses(3)</div>
					<div style={{ float: 'left' }}>
						<button>Add New Course</button>
					</div>
				</div>
			)}
			<br />
			<br />
			{coursetype === 'offline'
				? temp.map((ele) => {
						return (
							<div className='flexdiv'>
								<div>
									<img
										src={digitalmarket}
										alt='Nature'
										class='responsiveimage'></img>
								</div>
								<div className='center'>
									<h5>Why digital marketing?</h5>
									<br />
									Instructore name : Sumit Mitra
									<br />
									Chapter 02
									<br />
									Crux of social media
								</div>
								<div className='center'>
									<button>Edit Course</button>
									<br />
									<br />
									<button>View Details</button>
								</div>
							</div>
						)
				  })
				: temp.map((ele) => {
						return (
							<div className='flexdiv'>
								<div>
									<img
										src={digitalmarket}
										alt='Nature'
										class='responsiveimage'></img>
								</div>
								<div className='center'>
									<h5>Why digital marketing?</h5>
									<br />
									Instructore name : Sumit Mitra
									<br />
									Chapter 02
									<br />
									Crux of social media
								</div>
								<div className='center'>
									<button>Edit Course</button>
									<br />
									<br />
									<button>View Details</button>
								</div>
							</div>
						)
				  })}
		</>
	)
}
