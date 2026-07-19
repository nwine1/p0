import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Landing from './pages/Landing'
import NavBar from './components/NavBar'
import CreatePlan from './pages/CreatePlan'
import NotFound from './pages/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
		<NavBar />
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/create" element={<CreatePlan distance={"0"} unit="mi"/>} />
			<Route path="/create/5k" element={<CreatePlan distance="5" unit="kl"/>} />
			<Route path="/create/10k" element={<CreatePlan distance="0" unit="kl"/>} />
			<Route path="/create/half" element={<CreatePlan distance={0} unit="mi"/>} />
			<Route path="/create/full" element={<CreatePlan distance={26} unit="mi"/>} />
			
			<Route path="*" element={<NotFound />} />
		</Routes>
    </>
  )
}

export default App
