

import styleFooter from "../styles/Footer.module.css"
import { GrInstagram } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";


export default function Footer()
{

 return(

    <>
     <footer className={styleFooter.Footer}>
        <span > 
            <h1 className={styleFooter.Titulo}>Entre em contato conosco.</h1>
            <p className={styleFooter.Informacoes}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe repellat, et earum quam labore nulla atque maxime neque voluptates repudiandae, sit voluptatum modi aperiam rem! Tempora consequatur minus deleniti commodi.</p>
            
            <div className={styleFooter.containerFooter}>
            <h2 className={styleFooter.Telefone}>11 2561-2033</h2>
                <GrInstagram className={styleFooter.Icones}></GrInstagram>
                <IoLogoWhatsapp className={styleFooter.Icones}></IoLogoWhatsapp>
                <FaFacebook className={styleFooter.Icones}></FaFacebook>
            </div>
        </span>

       

     </footer>
     
     <div className={styleFooter.Direitos}>
     <h1 className={styleFooter.TituloDireitos}>Todos os direitos reservados. Copyright © 2022 by Costelaria Goes</h1>
     </div>
    </>
 )

}
