import * as yup from 'yup'
import 'yup-phone'

export const validationSchema = yup.object({
	fullname: yup
		.string('Fullname must be string')
		.required('Fullname is required'),
	email: yup
		.string('Enter your email')
		.email('Enter a valid email')
		.required('Email is required'),
	phone: yup.string().phone().required(),
	message: yup.string('Enter your Address').required('Address is required'),
})
