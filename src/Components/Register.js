import { useFormik } from 'formik'
import { Button, MenuItem, TextField } from '@material-ui/core'
import { validationSchema } from '../Schema/validationSchema'
import { useState } from 'react'
import swal from 'sweetalert'
import { registerValidationSchema } from '../Schema/registerValidationSchema.js'
import axios from 'axios'
export const Register = (props) => {
	const { setShowLogin } = props
	const formik = useFormik({
		initialValues: {
			username: '',
			email: '',
			password: '',
			address: '',
		},
		validationSchema: registerValidationSchema,
		onSubmit: (values) => {
			console.log(values)
			if (values) {
				axios
					.post(
						'https://coursesbackend.herokuapp.com/api/users/register',
						values
					)
					.then((response) => {
						if (response.data._id) {
							console.log(response.data)
							swal(
								'Whoa!',
								`Dear ${response.data.username} Your Registration is Sucessful!`,
								'success'
							)
							setShowLogin(true)
						} else {
							swal(
								'Oops! Registrations Failed!',
								'something went wrong, Try using a different email and userid',
								'error'
							)
						}
					})
					.catch((err) => {
						swal(
							'Server is LOST. Please Try Again after Sometime!',
							err.message,
							'error'
						)
					}, [])
			}
		},
	})

	return (
		<div className='basicdiv'>
			<h1 style={{ letterSpacing: '0px', color: '#143754' }}>Register Here!</h1>
			<br />
			<br />
			<div>
				<form onSubmit={formik.handleSubmit}>
					<br />

					<div>
						<table>
							<tbody>
								<tr>
									<td>
										<TextField
											fullWidth
											id='username'
											name='username'
											label='username'
											type='text'
											value={formik.values.username}
											onChange={formik.handleChange}
											error={
												formik.touched.username &&
												Boolean(formik.errors.username)
											}
											helperText={
												formik.touched.username && formik.errors.username
											}
										/>
									</td>
									<td>
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
									</td>
								</tr>
								<tr>
									<td>
										<TextField
											fullWidth
											id='password'
											name='password'
											label='Password'
											type='password'
											value={formik.values.password}
											onChange={formik.handleChange}
											error={
												formik.touched.password &&
												Boolean(formik.errors.password)
											}
											helperText={
												formik.touched.password && formik.errors.password
											}
										/>
									</td>
									<td>
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
									</td>
								</tr>
							</tbody>
						</table>

						<br />
						<br />
						<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
							<Button variant='contained' color='primary' type='submit'>
								Submit
							</Button>
							<Button
								variant='contained'
								color='secondary'
								onClick={() => setShowLogin(true)}>
								Login Here!
							</Button>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
