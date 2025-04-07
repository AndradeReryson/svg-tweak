import * as React from 'react'
import MenuButton from '../MenuButton/MenuButton'
import './style.css'

const MenuFolders = () => {
  return (
    <aside className='menuFolders shadow'>
      <h3 style={{textAlign: 'center', margin: '8px 0'}}>Pastas</h3>
      <MenuButton nome="PureSolution" selected/>
    </aside>
  )
}

export default MenuFolders