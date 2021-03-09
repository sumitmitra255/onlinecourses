import { AppBar } from '@material-ui/core'
import Tab from '@material-ui/core/Tab'
import TabContext from '@material-ui/lab/TabContext'
import TabList from '@material-ui/lab/TabList'
import TabPanel from '@material-ui/lab/TabPanel'
import { useState } from 'react'
import { AllCourses } from './AllCourses'

export const TabNavigation = (props) => {
	const [value, setValue] = useState('1')

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}
	return (
		<>
			<div className='content'>
				<TabContext value={value}>
					<AppBar position='relative' color='transparent'>
						<TabList
							onChange={handleChange}
							variant='scrollable'
							scrollButtons='auto'>
							<Tab label='All Courses' value='1' />
							<Tab label='Discussions' value='2' />
							<Tab label='Students' value='3' />
							<Tab label='Payments' value='4' />
						</TabList>
					</AppBar>
					<TabPanel value='1'>
						<AllCourses />
					</TabPanel>
					<TabPanel value='2'>Discussions</TabPanel>
					<TabPanel value='3'>Students</TabPanel>
					<TabPanel value='4'>Payments</TabPanel>
				</TabContext>
			</div>
		</>
	)
}
