import baby from '../Resources/baby.jfif'
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export const InstructorProfile = (props) => {
	return (
		<>
			<div className='sidebar'>
				<br />
				<div className='instructordiv'>
					<h4>Instructor Profile</h4>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							// alignItems: 'center',
						}}>
						<img
							src={baby}
							alt='Nature'
							className='responsive2'
							width='600'
							height='400'></img>
					</div>
					<h4>Welcome User</h4>
					<div style={{ display: ' flex', justifyContent: 'center' }}>
						<table>
							<tbody>
								<tr>
									<td>Coureses Offered</td>
									<td>15</td>
								</tr>
								<tr>
									<td>Student Enrolled</td>
									<td>5,44,943</td>
								</tr>
								<tr>
									<td>Language</td>
									<td>English</td>
								</tr>
								<tr>
									<td>Join Date</td>
									<td>12-02-2021</td>
								</tr>
								<tr>
									<td>Coureses Language</td>
									<td>English</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<br />
				<br />
				<div className='contactdiv'>
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1a-content'
							id='panel1a-header'>
							Contact Details
						</AccordionSummary>
						<AccordionDetails>
							Mitrasumit1@gmail.com
							<br />
							9002362320
							<br />
							Siliguri, West Bengal
						</AccordionDetails>
					</Accordion>
				</div>
			</div>
		</>
	)
}
