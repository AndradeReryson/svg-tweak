import * as React from 'react'
import reactCSS from 'reactcss'
import './style.css'
import { ChromePicker } from 'react-color'
import { useState } from 'react'

const ColorPicker = ({nome, color, mudarCor, ...props}) => {
  const [isPickerOpen, setPicker] = useState(false)
  
  const handleClick = () => {
    setPicker(!isPickerOpen)
  }

  const handleClose = () => {
    setPicker(false)
  };

  const handleChange = (nome, color) => {
    mudarCor(nome, color)
  }


  const styles = reactCSS({
    'default': {
      color: {
        width: '2.5vw',
        height: '2.5vw',
        borderRadius: '50%',
        background: color,
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        border: '1px solid #000',
        borderRadius: '50%',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
      wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    },
  });

  return(
    <div style={styles.wrapper} key={props.key}>
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.color}/>
      </div>
      {isPickerOpen ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose}/>
          <ChromePicker color={color} onChange={(nova) => handleChange(nome, nova.hex)}/>
        </div>
      ) : null}
      
    </div>
  )
}

export default ColorPicker