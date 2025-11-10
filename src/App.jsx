import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  document.title += " | Home";
  return (
    <>
      <h2>Course Home</h2>
      <p>This is my home page for the ITIS3135 course, Front-End Web Application Development.</p>
    </>
  )
}

export default App
