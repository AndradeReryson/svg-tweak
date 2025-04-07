import { useState } from 'react'
import TelaPrincipal from './Telas/TelaPrincipal/TelaPrincipal'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TelaPrincipal/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

