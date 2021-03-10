
import Tab from '@material-ui/core/Tab'
import TabContext from '@material-ui/lab/TabContext'
import TabList from '@material-ui/lab/TabList'
import TabPanel from '@material-ui/lab/TabPanel'
import { useState } from 'react'
import { CourseCard } from './CourseCard'
import { tabStyles, tabsStyles } from '../Resources/uistyle'
export const AllCourses = (props) => {
	const [value, setValue] = useState('1')
	const tabstyle = tabStyles()
	const tabsstyle = tabsStyles()
	const handleChange = (event, newValue) => {
		setValue(newValue)
	}
	return (
		<>
				<TabContext value={value}>
						<TabList
							classes={{
								flexContainer: tabsstyle.flexContainer,
							}}
							onChange={handleChange}
							variant='scrollable'>
							<Tab
								classes={{
									root: tabstyle.root,
								}}
								label='Offline Courses'
								value='1'
							/>
							<Tab
								classes={{
									root: tabstyle.root, 
								}}
								label='Live Courses'
								value='2'
							/>
						</TabList>
					<TabPanel value='1'>
						<CourseCard coursetype='offline' />
					</TabPanel>
					<TabPanel value='2'>
						<CourseCard coursetype='live' />
					</TabPanel>
				</TabContext>
			</>
	
	)
}
