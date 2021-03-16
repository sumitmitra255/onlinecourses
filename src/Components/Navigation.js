import logo from '../Resources/logo.png'
import avatar from '../Resources/instructor.png'
import Avatar from '@material-ui/core/Avatar'
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
				{/* <a>
					<input type='text' name='search' placeholder='Search..'></input>
				</a> */}
				<a>
					<select>
						<option selected>John doe</option>
					</select>
				</a>
				<a href='#home'>Courses</a>
				<a href='#news'>Teach With Us</a>
				<a href='#contact'>Contact</a>

				<a href='javascript:void(0);' className='icon' onClick={myFunction}>
					<i className='fa fa-bars'></i>
				</a>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-evenly',
						alignItems: 'center',
						padding: '10px 0px 0px 0px',
					}}>
					<img src={logo} />
					<div className='searchdiv'>
						<i class='fa fa-search fa-2x' aria-hidden='true' style={{padding:'3px 10px 0px 10px'}}></i>
						<input type='text' name='search' placeholder='Search..'></input>
					</div>
				</div>
			</div>
		</>
	)
}
