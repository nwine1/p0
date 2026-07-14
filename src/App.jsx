import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Landing from './pages/Landing'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
		<NavBar />
		<Routes>
			<Route path="/" element={<Landing />} />
		</Routes>
    </>
  )
}

export default App
