import {useEffect, useState} from 'react'
import { ReactSVG } from 'react-svg'
import './style.css'

const SVGThumbnail = ({src, onClick, ...props}) => {
  return(
    <div key={props.key} className='svgContainer shadow' onClick={onClick}>
      <ReactSVG src={src} className='svgThumbnail'/>
    </div>
  )
}

export default SVGThumbnail