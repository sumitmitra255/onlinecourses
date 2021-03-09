export const Navigation = (props) => {
	//Responsive menu button
	const myFunction = () => {
		var x = document.getElementById('myTopnav');
		if (x.className === 'topnav') {
			x.className += ' responsive';
		} else {
			x.className = 'topnav';
		}
	};

	return (
		<>
			<div class='topnav' id='myTopnav'>
				<a href='#home'>Courses</a>
				<a href='#news'>Teach with us</a>
				<a href='#contact'>Contact</a>
				<a href='javascript:void(0);' class='icon' onClick={myFunction}>
					<i class='fa fa-bars'></i>
				</a>
			</div>
		</>
	);
};
