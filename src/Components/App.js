import { Navigation } from './Navigation'
import { InstructorProfile } from './InstructorProfile'
import { TabNavigation } from './TabNavigation'
import { PlanSubcription } from './PlanSubcription'
import { Query } from './Query'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Footer } from './Footer'
import { Login } from './Login.js'
import { Register } from './Register.js'
function App() {
	const [token, setToken] = useState(
		localStorage.getItem('userToken') ? localStorage.getItem('userToken') : ''
	)
	const [showLogin, setShowLogin] = useState(true)
	
	return (
		<>
			{token ? (
				<>
					<Navigation />
					<InstructorProfile token={token} />
					<TabNavigation />
					<PlanSubcription />
					<Query />
					<br />
					<br />
					<br />
					<br />
					<Footer />
				</>
			) : (
				<>
					{showLogin ? (
						<Login setShowLogin={setShowLogin} />
					) : (
						<Register setShowLogin={setShowLogin} />
					)}
				</>
			)}
		
		</>
	)
}

export default App
