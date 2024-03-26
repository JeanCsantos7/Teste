


import CampoInput from "./campoInput"
import Cardapio from "./Cardapio"
import { useState } from "react"

export default function CortesSelecionados()
{
    
  const[propInput, setPropInput] = useState('')

  function passarDados(prop){

     setPropInput(prop)


  }

    return(
   <>
   
    
    <CampoInput valorInput={passarDados}></CampoInput>
    <Cardapio termoPesquisa={propInput}></Cardapio>

  
   </>

    )

}