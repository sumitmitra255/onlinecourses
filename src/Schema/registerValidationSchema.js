import * as yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const registerValidationSchema = yup.object({
	fullname: yup
		.string('Fullname must be string')
		.required('Fullname is required'),
	email: yup
		.string('Enter your email')
		.email('Enter a valid email')
		.required('Email is required'),
	password: yup
		.number('Phone must be a number')
		.required('Phone cannot be empty!')
		.positive('Phone should be a positive number')
		.integer('Phone must be a integer')
		.min(phoneRegExp),
	address: yup.string('Enter your Address').required('Address is required'),
})
