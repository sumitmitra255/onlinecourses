import digitalmarket from '../Resources/digital-marketing.jpg'

export const CourseCard = (props) => {
	const { coursetype } = props
	const temp = [1, 1, 1, 1]
	return (
		<div>
			{coursetype === 'offline' ? (
				<>
					<div className='flexdiv'>
						<div>Active Courses(3)</div>
						<div>
							<button className='btn danger'>+ Add New Course</button>
						</div>
					</div>
					<hr />
				</>
			) : (
				<>
					<div className='flexdiv'>
						<div>Active Live Courses(3)</div>
						<div style={{ float: 'left' }}>
							<button className='btn danger'>+ Schedule Live Classes</button>
						</div>
					</div>
					<hr />
				</>
			)}

			{coursetype === 'offline'
				? temp.map((ele,i) => {
						return (
							<div key={i}>
								<div className='carddiv'>
									<div className='flexdiv'>
										<div>
											<img
												src={digitalmarket}
												alt='Nature'
												className='responsiveimage'></img>
										</div>
										<div>
											<h3>Why digital marketing?</h3>
											<hr />
											Instructore name : Sumit Mitra
											<br />
											Course Language : English
											<br />
											Chapter 02
											<br />
											Crux of social media
										</div>
										<div className='center'>
											<button className='btn danger'>Edit Course</button>
											<br />
											<br />
											<button className='fixbtn'>View Details</button>
										</div>
									</div>
								</div>
								<br />
							</div>
						)
				  })
				: temp.map((ele,i) => {
						return (
							<div key={i}>
								<div className='carddiv'>
									<div className='flexdiv'>
										<div>
											<img
												src={digitalmarket}
												alt='Nature'
												className='responsiveimage'></img>
										</div>
										<div>
											<h3>Why digital marketing?</h3>
											<hr />
											Instructore name : Sumit Mitra
											<br />
											<br />
											Chapter 02
											<br />
											Crux of social media
										</div>
										<div className='center'>
											<button className='btn danger'>Manage Course</button>
											<br />
											<br />
											<button className='fixbtn'> Send Link </button>
										</div>
									</div>
								</div>
								<br />
							</div>
						)
				  })}
		</div>
	)
}
