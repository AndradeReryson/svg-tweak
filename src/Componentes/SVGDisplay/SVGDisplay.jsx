import * as React from 'react'
import './style.css'

const SVGDisplay = ({getSVG, ...props}) => {
  return(
    <div className={'svgDisplayContainer shadow '+props.className}>
      <div 
        className='svgDisplayImage'
        dangerouslySetInnerHTML={{__html: getSVG()}}
      />
    </div>
  )
}

export default SVGDisplay