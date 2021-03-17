import { useFormik } from 'formik'
import { Button, MenuItem, TextField } from '@material-ui/core'
import { loginValidationSchema } from '../Schema/loginValidationSchema'
import { useState } from 'react'
import swal from 'sweetalert'
import axios from 'axios'
export const Login = (props) => {
	const { setShowLogin } = props
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: loginValidationSchema,
		onSubmit: (values) => {
			if (values) {
				axios
					.post('http://localhost:3050/api/users/login', values)
					.then((response) => {
						if (response.data.errors) {
							swal(
								'Oops! Dear  Your Login has Failed! Please Refreash the to try again!',
								response.data.errors,
								'error'
							)
						} else {
							if (response.data.token) {
								localStorage.setItem('userToken', response.data.token)

								swal('Whoa!', `Dear  Your Login is Sucessful!`, 'success')
								window.location.reload()
							} else {
								swal('Oops! Login Failed!', response.data.message, 'error')
							}
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
			<h1 style={{ letterSpacing: '0px', color: '#143754' }}>Login Here</h1>
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
								onClick={() => setShowLogin(false)}>
								Register Here!
							</Button>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
