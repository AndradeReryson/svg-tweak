import './style.css'
import { Link } from 'react-router-dom'
import Header from '../../Componentes/Header/Header'
import MenuFolders from '../../Componentes/MenuFolders/MenuFolders'
import SVGExplorer from '../../Componentes/SVGExplorer/SVGExplorer'
import SVGEditor from '../../Componentes/SVGEditor/SVGEditor'
import { useEffect, useState } from 'react'

const TelaPrincipal = () => {
  const [selectedSVG, setSelectedSVG] = useState('')

  return(
    <div className='mainContainer'>
      <Header />
      
      <SVGExplorer setSelectedSVG={setSelectedSVG}/>

      <SVGEditor selectedSVG={selectedSVG} />
    </div>
  )
}

export default TelaPrincipal