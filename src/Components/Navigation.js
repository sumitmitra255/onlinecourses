export const Navigation = (props) => {
	//Responsive menu button
	const myFunction = () => {
		var x = document.getElementById('myTopnav')
		if (x.className === 'topnav') {
			x.className += ' responsive'
		} else {
			x.className = 'topnav'
		}
	}

	return (
		<>
			<div className='topnav' id='myTopnav'>
				<a href='#home'>Courses</a>
				<a href='#news'>Teach With Us</a>
				<a href='#contact'>Contact</a>
				<a href='javascript:void(0);' className='icon' onClick={myFunction}>
					<i className='fa fa-bars'></i>
				</a>
				<div style={{ display: 'flex' }}>
					<input type='text' name='search' placeholder='Search..'></input>
				</div>
			</div>
		</>
	)
}
