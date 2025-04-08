import * as React from 'react'
import './style.css'

const InputNumero = ({value, setValue}) => {
  return (
    <input 
      className="inputNumero" 
      type='number'
      value={value || ""} 
      onChange={e => setValue(e.target.value)}
    />
  )
}

export default InputNumero