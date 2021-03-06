import Tab from '@material-ui/core/Tab'
import TabContext from '@material-ui/lab/TabContext'
import TabList from '@material-ui/lab/TabList'
import TabPanel from '@material-ui/lab/TabPanel'
import { useState } from 'react'
import { AllCourses } from './AllCourses'
import { tabsnavigationStyles, tabnavigationStyles } from '../Resources/uistyle'
export const TabNavigation = (props) => {
	const [value, setValue] = useState('1')
	const tabsnavigationstyles = tabsnavigationStyles()
	const tabnavigationstyles = tabnavigationStyles()
	const handleChange = (event, newValue) => {
		setValue(newValue)
	}
	return (
		<>
			<div className='content'>
				<TabContext value={value}>
					<br />
					<TabList
						classes={{
							flexContainer: tabsnavigationstyles.flexContainer,
						}}
						indicatorColor='primary'
						onChange={handleChange}
						variant='scrollable'
						scrollButtons='auto'>
						<Tab
							classes={{
								root: tabnavigationstyles.root,
							}}
							label='All Courses'
							value='1'
						/>
						<Tab
							classes={{
								root: tabnavigationstyles.root,
							}}
							label='Discussions'
							value='2'
						/>
						<Tab
							classes={{
								root: tabnavigationstyles.root,
							}}
							label='Students'
							value='3'
						/>
						<Tab
							classes={{
								root: tabnavigationstyles.root,
							}}
							label='Payments'
							value='4'
						/>
					</TabList>

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
