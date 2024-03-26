
import { IoIosSearch } from "react-icons/io";
import styleInput from "../styles/campoInput.module.css"




export default function CampoInput({valorInput}){

  function PegarDados(e){
     const valorDigitado = e.target.value
     
     valorInput(valorDigitado)

  }


 return(
    <>
    <div className={styleInput.containerInput}>
    <input className={styleInput.campoInput} type="text" placeholder="O que está procurando" onBlur={PegarDados}  />
     <button className={styleInput.buttonInput}> <IoIosSearch className={styleInput.lupa}/> </button>
    </div>
    
    </>
 )

}