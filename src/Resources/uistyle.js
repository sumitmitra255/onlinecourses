import { makeStyles } from '@material-ui/core/styles'
export const tabStyles = makeStyles({
	root: {
		border: ' 1px solid red',
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
		justifyContent: 'space-between',
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
		width: '246px',
		height: '25px',
		textAlign: 'center',
		font: ' normal normal normal 22px/25px Roboto',
		letterSpacing: ' 0px',
		color: '#143754',
		// opacity: '1',
		opacity: '0.35',
	},
})
