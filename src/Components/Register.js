// import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { Button, TextField } from '@material-ui/core'
// import { useHistory } from 'react-router-dom'
import { registerValidationSchema } from '../Schema/registerValidationSchema'
// import { registerActionGenerator } from '../Actions/actions'
export const Register = (props) => {
	// const dispatch = useDispatch()
	// let history = useHistory()
	const formik = useFormik({
		initialValues: {
			fullname: '',
			email: '',
			password: '',
			address: '',
		},
		validationSchema: registerValidationSchema,
		onSubmit: (values) => {
			console.log(values)
		},
	})

	return (
		<>
			<h1>Any Queries?</h1>
			<div className='formdiv'>
				<form onSubmit={formik.handleSubmit}>
					<div className='registerinput'>
						<TextField
							fullWidth
							id='fullname'
							name='fullname'
							label='Fullname'
							type='text'
							value={formik.values.fullname}
							onChange={formik.handleChange}
							error={formik.touched.fullname && Boolean(formik.errors.fullname)}
							helperText={formik.touched.fullname && formik.errors.fullname}
						/>
						<TextField
							fullWidth
							id='email'
							name='email'
							label='Email'
							placeholder='abc@xyz.com'
							value={formik.values.email}
							onChange={formik.handleChange}
							error={formik.touched.email && Boolean(formik.errors.email)}
							helperText={formik.touched.email && formik.errors.email}
						/>
						<TextField
							fullWidth
							id='password'
							name='password'
							label='Password'
							type='text'
							value={formik.values.password}
							onChange={formik.handleChange}
							error={formik.touched.password && Boolean(formik.errors.password)}
							helperText={formik.touched.password && formik.errors.password}
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
							error={formik.touched.address && Boolean(formik.errors.address)}
							helperText={formik.touched.address && formik.errors.address}
						/>
						<Button variant='contained' color='primary' type='submit' fullWidth>
							Submit
						</Button>
					</div>
				</form>
			</div>
		</>
	)
}
