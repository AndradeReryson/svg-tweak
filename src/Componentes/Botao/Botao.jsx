import './style.css'

const Botao = ({titulo, onClick, ...props}) => {


  return(
    <div 
      className={props.className ? "botao "+props.className : "botao"} 
      onClick={onClick}
    >
      <h4 className='interMedium'>{titulo}</h4>
    </div>
  )
}

export default Botao 