import * as React from 'react'
import SVGThumbnail from '../SVGThumbnail/SVGThumbnail'
import listaVetores from '../../../public/svgs/listaVetores.json'
import './style.css'

const basePath = '/svgs/'

const SVGExplorer = ({setSelectedSVG}) => {
  return(
    <main className='SVGExplorer'>
      <h3 style={{textAlign: 'center', margin: '8px 0', color: '#fff'}}>Vetores</h3>
        <div className='itensGrid'>
          {listaVetores.vetores.map((nome, idx) => {
            return <SVGThumbnail key={idx} src={`${import.meta.env.BASE_URL}svgs/${nome}`} onClick={() => setSelectedSVG(`${import.meta.env.BASE_URL}svgs/${nome}`)}/>
          })}
      </div>
    </main>
  )
}

export default SVGExplorer