import google from '../Resources/Image 7.png';
import apple from '../Resources/Image 8.png';

export const Footer = (props) => {




	return (
		<div className='footer'>
			<div className='innerfooter'>
				<div>
					<table>
						<tbody>
							<tr>
								<h2 style={{ color: '#143754' }}>Download App Now</h2>
							</tr>
							<tr>
								<img src={google} />
							</tr>
							<tr>
								<img src={apple} />
							</tr>
						</tbody>
					</table>
				</div>
				<div>
					<table>
						<tbody>
							<tr>
								<h2 style={{ color: '#143754' }}>General</h2>
							</tr>
							<tr>Sign Up</tr>
							<tr>About Us</tr>
							<tr>Teach on Inskillz</tr>
							<tr>Contact Us</tr>
							<tr>Careers</tr>
						</tbody>
					</table>
				</div>
				<div>
					<table>
						<tbody>
							<tr>
								<h2 style={{ color: '#143754' }}>Community</h2>
							</tr>
							<tr>Create Account</tr>
							<tr>Refer a Friend</tr>
						</tbody>
					</table>
				</div>
				<div>
					<table>
						<tbody>
							<tr>
								<h2 style={{ color: '#143754' }}>Support</h2>
							</tr>
							<tr>FAQs</tr>
							<tr>Terms And Conditions</tr>
							<tr>Privacy Policy</tr>
							<tr>Get Help</tr>
						</tbody>
					</table>
				</div>
				<div>
					<table>
						<tbody>
							<tr>
								<h2 style={{ color: '#143754' }}>Contact Us</h2>
							</tr>
							<tr>
								FutureLabs Interactive Pvt. Ltd No. 6/858-M, 2nd Floor,
								Valamkottil Towers, Judgemukku, Kakkanad, Kochi
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
