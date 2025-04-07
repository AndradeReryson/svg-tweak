import TelaPrincipal from './Telas/TelaPrincipal/TelaPrincipal'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './index.css'

export default function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<TelaPrincipal/>} />
        </Routes>
      </HashRouter>
    </>
  )
}

