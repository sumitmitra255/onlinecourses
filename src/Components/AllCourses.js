import { AppBar } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import { useState } from 'react';
import { CourseCard } from './CourseCard';

export const AllCourses = (props) => {
	const [value, setValue] = useState('1');

	const handleChange = (event, newValue) => {
		console.log(newValue);
		setValue(newValue);
	};
	return (
		<>
			<div>
				<TabContext value={value}>
					<AppBar position='relative' color='transparent'>
						<TabList onChange={handleChange} variant='scrollable'>
							<Tab label='Offline Courses' value='1' />
							<Tab label='Live Courses' value='2' />
						</TabList>
					</AppBar>
					<TabPanel value='1'>
						<CourseCard coursetype='offline' />
					</TabPanel>
					<TabPanel value='2'>
						<CourseCard coursetype='live' />
					</TabPanel>
				</TabContext>
			</div>
		</>
	);
};
