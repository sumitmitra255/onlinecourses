import { Navigation } from './Navigation'
import { InstructorProfile } from './InstructorProfile'
import { TabNavigation } from './TabNavigation'
import { PlanSubcription } from './PlanSubcription'
import { Query } from './Query'

function App() {
	return (
		<>
			<div>
				<Navigation />
				<InstructorProfile />
				<TabNavigation />
			</div>
			<br />
			<br />
			<div>
				<PlanSubcription />
			</div>
			<br />
			<br />
			<div>
				<Query />
			</div>
			<br />
			<br />
		</>
	)
}

export default App
