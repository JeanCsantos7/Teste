
import styleCortes from "../styles/ConteudoLandingPage.module.css"
import carneImagem from "../image/churrasco imagem.jpg"
import Promoção from "./Promoção"
import Diferenciais from "./Diferenciais"
import Formulario from "./Formulario"
import Footer from "./Footer"

export default function CortesSelecionados()
{

    return(
   <>
   
   <h1 className={styleCortes.titulo}>Cortes Selecionados todos os dias</h1>
   <h2 className={styleCortes.subTitulo}>O AMBIENTE PERFEITO PARA SUA FAMÍLIA</h2>
   <p className={styleCortes.informações}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo dolor eius adipisci repudiandae, sunt facere assumenda voluptates quibusdam dolorum dolore ut, voluptate a. Perferendis suscipit officia quam animi doloribus optio?</p>
   <span className={styleCortes.containerImage}>
   <img className={styleCortes.imagemCarne} src={carneImagem} alt="" />
   </span>

   <Promoção></Promoção>
   <Diferenciais></Diferenciais>
   <Formulario></Formulario>
   <Footer></Footer>

  
   </>

    )

}