import Chef from "../image/Chef.png"
import Temperos from "../image/tempero.png"
import Talheres from "../image/Talheres.png"
import styleDiferenciais from "../styles/Diferenciais.module.css"

export default function Diferenciais(){

return(
<>

<h1 className={styleDiferenciais.titulo}>ESTAMOS TE ESPERANDO</h1>
<h2 className={styleDiferenciais.subTitulo}>Vem se Deliciar!</h2>
<div className={styleDiferenciais.conteudoContainer}>
<span className={styleDiferenciais.diferencial}>
     <img className={styleDiferenciais.infoImagem} src={Chef} alt="" />
     <h2 className={styleDiferenciais.infoDiferenciais}>Os melhores Profissionais</h2>
    
</span>

<span className={styleDiferenciais.diferencial}>
     <img className={styleDiferenciais.infoImagem} src={Temperos} alt="" />
     <h2 className={styleDiferenciais.infoDiferenciais}>Tempero Especial</h2>
    
</span>

<span className={styleDiferenciais.diferencial}>
     <img className={styleDiferenciais.infoImagem} src={Talheres} alt="" />
     <h2 className={styleDiferenciais.infoDiferenciais}>Preparo na hora</h2>
    
</span>
</div>


</>

)

}