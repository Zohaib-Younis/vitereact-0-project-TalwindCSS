import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);
  const myObject={
    name:"Zohaibb Younis",
    age:21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Talwind Test</h1>
      <Card name="Zohaib" email="mr.zohaibyounus@gmail.com" namej="Ali shoaib" jemail="alishaoib@superior.edu.pk" title="FullStack Developer"/>


    </>
  )
}

export default App
