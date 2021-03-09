import { Navigation } from './Navigation'
import { InstructorProfile } from './InstructorProfile'
import { TabNavigation } from './TabNavigation'
import { PlanSubcription } from './PlanSubcription'
import { Register } from './Register'


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
				<Register/>
			</div>
		</>
	)
}

export default App
