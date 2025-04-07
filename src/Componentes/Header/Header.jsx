import * as React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Header = ({children}) => {
  return(
    <header className='shadow'>
      <div className='divTitulo'>
        <h2 className='interMedium titulo'>SVG Tweak</h2>
        <h5 className='interMedium subTitulo'>Coleção e edição de cores de vetores (SVG)</h5>
      </div>
      <nav className='nav'>
        {children}
      </nav>
    </header>
  )
}

export default Header