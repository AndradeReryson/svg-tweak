import './style.css'
import SVGDisplay from '../SVGDisplay/SVGDisplay'
import ColorPicker from '../ColorPicker/ColorPicker'
import InputNumero from '../InputTexto/InputNumero'
import { useState, useEffect } from 'react'
import Botao from '../Botao/Botao'

const SVGEditor = ({selectedSVG}) => {
  const [SVGContent, setSVGContent] = useState("")  
  const [estados, setEstados] = useState([])
  const [width, setWidth] = useState(512)
  const [height, setHeight] = useState(512)

  // converter o SVG em texto para manipulação
  useEffect(() => {
    fetch(selectedSVG).
      then(res => res.text()).
      then(setSVGContent)
  }, [selectedSVG])

  const mudarCor = (nome, novaCor) => {
    setEstados(estados.map((cor) => 
      cor.nome === nome ? {...cor, hexAtual: novaCor} : cor
    ))
  }

  // Gerar e retornar o SVG com as cores alterados pelo usuario
  const getSVGModificado = () => {
    let novoSVG = SVGContent
  
    estados.forEach(({ hexOriginal, hexAtual }) => {
      const regex = new RegExp(`fill:\\s*${hexOriginal}`, 'gi')
      novoSVG = novoSVG.replace(regex, `fill:${hexAtual}`)
    })
  
    return novoSVG
  }

  // Pegar cores originais e carregar como objeto dentro do estados
  useEffect(() => {
    if (!SVGContent) return
  
    // Regex para extrair 'fill:#xxxxxx' de dentro de 'style="..."'
    const regex = /fill:\s*(#[0-9a-fA-F]{3,6})/g
    const encontrados = new Set()
    let match
  
    while ((match = regex.exec(SVGContent)) !== null) {
      encontrados.add(match[1])
    }
  
    const novosEstados = Array.from(encontrados).map((cor, idx) => ({
      nome: `color${idx}`,
      hexOriginal: cor,
      hexAtual: cor
    }))
  
    setEstados(novosEstados)

    // pegando tamanho original
  }, [SVGContent])

  const baixarSVG = (largura, altura) => {
    const parser = new DOMParser()
    const svgDoc = parser.parseFromString(getSVGModificado(), 'image/svg+xml')
    const svgElement = svgDoc.querySelector('svg')
  
    if (svgElement) {
      svgElement.setAttribute('width', largura)
      svgElement.setAttribute('height', altura)
  
      const serializer = new XMLSerializer()
      const svgString = serializer.serializeToString(svgDoc)
  
      const blob = new Blob([svgString], { type: 'image/svg+xml' })
      const url = URL.createObjectURL(blob)
  
      const link = document.createElement('a')
      link.href = url
      link.download = 'imagem-editada.svg'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } else {
      console.error("Elemento <svg> não encontrado no conteúdo.")
    }
  }

  const baixarPNG = (largura, altura) => {
    const svgString = getSVGModificado()

    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(svgBlob)
  
    const img = new Image()
  
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = largura
      canvas.height = altura
      const ctx = canvas.getContext('2d')
  
      // Limpa a imagem temporária
      URL.revokeObjectURL(url)
  
      ctx.drawImage(img, 0, 0, largura, altura)
  
      canvas.toBlob((blob) => {
        const pngUrl = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = pngUrl
        link.download = 'imagem-editada.png'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(pngUrl)
      }, 'image/png')
    }
  
    img.onerror = () => {
      console.error('Erro ao carregar imagem SVG para conversão em PNG.')
    }
  
    img.src = url
  }

  return(
    <aside className='menuEditSVG'>
      <div className='menuSectionSVG'>
        <h3 style={{textAlign: 'center', margin: '8px 0', color: '#FAF9F6'}}>Editar</h3>
        <div className='divSVGButtons'>
          <SVGDisplay className="SVGEditorVerticalMargin" getSVG={getSVGModificado}/>

          <div style={{width: '100%'}}>
            <h5 style={{textAlign: 'center', color: '#FAF9F6'}}>Tamanho (Exportação)</h5>
            <div className='linhaTamanho'>
              <InputNumero value={width} setValue={setWidth}/>
              <h6 style={{color: "#FAF9F6", margin: '0 4px'}}>X</h6>
              <InputNumero value={height} setValue={setHeight}/>
            </div>
            <Botao 
              className="SVGEditorVerticalMargin" 
              titulo="Baixar SVG" 
              onClick={() => baixarSVG(width, height)}
            />

            <Botao 
              className="SVGEditorVerticalMargin" 
              titulo="Baixar PNG" 
              onClick={() => baixarPNG(width, height)}
            />
          </div>
        </div>
      </div>

      <div className="menuSectionColors">
            <div className='colorsContainer SVGEditorVerticalMargin'>
              {estados.map((cor, idx) => {
                return(
                  <div key={idx} className='linhaCor'>
                    <ColorPicker nome={cor.nome} color={cor.hexAtual} mudarCor={mudarCor} />
                  </div> 
                )
              })}
              
            </div>
      </div>
    </aside>
  )
}

export default SVGEditor