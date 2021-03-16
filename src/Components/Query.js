import { useFormik } from 'formik'
import { Button, MenuItem, TextField } from '@material-ui/core'
import { validationSchema } from '../Schema/validationSchema'
import { useState } from 'react'
import swal from 'sweetalert'
export const Query = (props) => {
	const [selectedcountry, setCountries] = useState('')
	const formik = useFormik({
		initialValues: {
			fullname: '',
			email: '',
			phone: '',
			message: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			if (selectedcountry.length) {
				values.country = selectedcountry

				swal(
					'Success',
					`Dear ${values.fullname} ! Your Query is Sent!`,
					'success'
				)
			}
		},
	})

	const countries = [
		{
			value: 'usa',
			label: 'USA',
		},
		{
			value: 'europe',
			label: 'Europe',
		},
		{
			value: 'india',
			label: 'INDIA',
		},
		{
			value: 'japan',
			label: 'JAPAN',
		},
	]

	const handleChange = (event) => {
		setCountries(event.target.value)
	}
	return (
		<div className='basicdiv'>
			<h1 style={{ letterSpacing: '0px', color: '#143754' }}>Any Queries?</h1>
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
											required={true}
											fullWidth
											id='fullname'
											name='fullname'
											label='Fullname'
											type='text'
											value={formik.values.fullname}
											onChange={formik.handleChange}
											error={
												formik.touched.fullname &&
												Boolean(formik.errors.fullname)
											}
											helperText={
												formik.touched.fullname && formik.errors.fullname
											}
										/>
									</td>
									<td>
										<TextField
											required={true}
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
											required={true}
											fullWidth
											id='phone'
											name='phone'
											label='Phone'
											type='text'
											value={formik.values.phone}
											onChange={formik.handleChange}
											error={
												formik.touched.phone && Boolean(formik.errors.phone)
											}
											helperText={formik.touched.phone && formik.errors.phone}
										/>
									</td>
									<td>
										<TextField
											id='select-currency'
											fullWidth
											select
											label='Choose Country'
											value={selectedcountry}
											onChange={handleChange}
											helperText='Please select your country'
											required={true}>
											{countries.map((option) => (
												<MenuItem key={option.value} value={option.value}>
													{option.label}
												</MenuItem>
											))}
										</TextField>
									</td>
								</tr>
							</tbody>
						</table>
						<TextField
							required={true}
							fullWidth
							multiline
							id='message'
							name='message'
							label='Message'
							type='text'
							value={formik.values.message}
							onChange={formik.handleChange}
							error={formik.touched.message && Boolean(formik.errors.message)}
							helperText={formik.touched.message && formik.errors.message}
						/>

						<br />
						<br />
						<div className='buttondiv'>
							<Button variant='contained' color='primary' type='submit'>
								Submit
							</Button>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
