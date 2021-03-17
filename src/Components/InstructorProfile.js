import baby from '../Resources/instructor.png'
import {
	Accordion,
	AccordionActions,
	AccordionDetails,
	AccordionSummary,
	Button,
	TextField,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { editValidationSchema } from '../Schema/registerValidationSchema.js'
import { useFormik } from 'formik'
export const InstructorProfile = (props) => {
	const { token } = props
	const [userinfo, setuserinfo] = useState()
	const [editToggle, seteditToggle] = useState(false)
	useEffect(() => {
		axios
			.get('http://localhost:3050/api/users/account', {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((response) => {
				console.log(response.data)
				setuserinfo(response.data)
			})
			.catch((err) => {
				alert(err.message)
			}, [])
	}, [])

	const formik = useFormik({
		initialValues: {
			email: userinfo?.email,
			address: userinfo?.address,
		},
		validationSchema: editValidationSchema,
		onSubmit: (values) => {
			console.log(values)
			const body = {
				username: userinfo.username,
				email: values.email,
				address: values.address,
			}
			axios
				.put(`http://localhost:3050/api/users/${userinfo._id}`, values, {
					headers: { Authorization: `Bearer ${token}` },
				})
				.then((response) => {
					seteditToggle(false)
				})
				.catch((err) => {
					alert(err.message)
				}, [])
		},
	})

	return (
		<>
			<div className='sidebar'>
				<br />
				<div className='instructorcard '>
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
					<h4 className='welcomeuser'>Welcome John Doe</h4>
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
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<div className='contactdetails'>
								<b>Contact Details</b>
							</div>
						</AccordionSummary>
						<AccordionDetails>
							{editToggle ? (
								<>
									<form onSubmit={formik.handleSubmit}>
										<TextField
											fullWidth
											id='email'
											name='email'
											label='Email'
											placeholder='abc@xyz.com'
											value={formik.values.email}
											onChange={formik.handleChange}
											error={
												formik.touched.email && Boolean(formik.errors.email)
											}
											helperText={formik.touched.email && formik.errors.email}
										/>
										<TextField
											fullWidth
											multiline
											id='address'
											name='address'
											label='address'
											type='text'
											value={formik.values.address}
											onChange={formik.handleChange}
											error={
												formik.touched.address && Boolean(formik.errors.address)
											}
											helperText={
												formik.touched.address && formik.errors.address
											}
										/>
										<Button variant='contained' color='primary' type='submit'>
											Submit
										</Button>
									</form>
								</>
							) : (
								<>
									{userinfo?.email}
									<br />
									{userinfo?.address}
									<br />
								</>
							)}
						</AccordionDetails>
						<AccordionActions>
							{editToggle ? (
								<Button
									size='small'
									variant='outlined'
									color='primary'
									onClick={() => seteditToggle(false)}>
									Cancel Edit
								</Button>
							) : (
								<Button
									size='small'
									variant='outlined'
									color='primary'
									onClick={() => seteditToggle(true)}>
									Edit
								</Button>
							)}
						</AccordionActions>
					</Accordion>
				</div>
			</div>
		</>
	)
}
