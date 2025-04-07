import * as React from 'react'
import './style.css'

const MenuButton = ({nome, link, selected = false}) => {
  const style = selected ? 'container selected' : 'container'

  return(
    <div className={style}>
      <h4 className='placeholder interRegular'>{nome}</h4>
    </div>
  )
}

export default MenuButton