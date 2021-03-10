import { makeStyles } from '@material-ui/core/styles'
export const tabStyles = makeStyles({
	root: {
		background: 'white',
		borderRadius: '5px',
		color: 'red',
		padding: '0 10px',
		'&:focus': {
			background: 'red',
			color: 'white',
		},
	},
})
export const tabsStyles = makeStyles({
	flexContainer: {
		justifyContent: 'center',
	},
})
export const tabsnavigationStyles = makeStyles({
	root: {
		// background: 'white',
	},
	flexContainer: {
		justifyContent: 'space-between',
	},
})
export const tabnavigationStyles = makeStyles({
	root: {
		background: 'white',
		borderRadius: '5px',
		color: '#002984',
		// padding: '0 30px',
		fontSize: '14px',
		'&:focus': {
			background: '#002984',
			color: 'white',
		},
	},
})
