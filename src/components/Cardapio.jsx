import styleCardapio from "../styles/Cardapio.module.css";
import Carne1 from "../image/Costela.png";
import Carne2 from "../image/Picanha.webp";
import Carne3 from "../image/Picanha-ao-catupiry.webp";
import Carne4 from "../image/Chorizo.webp";
import Carne5 from "../image/Ex.-Contra-file.webp";
import Carne6 from "../image/Cupim.png";
import Carne7 from "../image/Mignon.webp";
import Carne8 from "../image/File-Mignon-ao-Catupiry.webp";
import Carne9 from "../image/Carre.webp";
import Carne10 from "../image/Picanha-de-Cordeiro.png";
import Especialidades from "./EspecialidadesGrandes";
import EspecialidadesExecutivos from "./EspecialidadesExecutivos";

import Executivo1 from "../image/ExecutivoCostela.webp"
import Executivo2 from "../image/ExecutivoCupim.webp"
import Executivo3 from "../image/ExecutivoContraFile.webp"
import Executivo4 from "../image/ExecutivoPicanhaImportada.webp"
import Executivo5 from "../image/ExecutivoChorizo.webp"
import Executivo6 from "../image/ExecutivoBifeAncho.webp"
import Executivo7 from "../image/ExecutivoAlcatra.webp"
import Executivo8 from "../image/ExecutivoMaminha.webp"
import Executivo9 from "../image/ExecutivoLinguiça.webp"
import Executivo10 from "../image/FrangoParmegiana.webp"
import Footer from "./Footer";


  export default function Cardapio({termoPesquisa}) {
  const pratosGrandes = [
    {
      id: 1,
      imagem: Carne1,
      NomeCarne: "Costela no Bafo",
      preco: "R$199",
      informacoes:
        "Deliciosa Costela assada no Bafo, macia e suculenta. Desmancha na boca.",
    },
    {
      id: 2,
      imagem: Carne2,
      NomeCarne: "Picanha Importada",
      preco: "R$249",
      informacoes:
        "Um Rechaud de Picanha Maturada Importada (da Argentina ou do Uruguai).",
    },
    {
      id: 3,
      imagem: Carne3,
      NomeCarne: "Picanha ao Catupiry",
      preco: "R$269",
      informacoes:
        "Um Rechaud de Picanha importada com uma deliciosa camada de Catupiry.",
    },
    {
      id: 4,
      imagem: Carne4,
      NomeCarne: "Chorizo",
      preco: "R$249",
      informacoes: "Um Rechaud com 6 Bifes do delicioso Chorizo Argentino.",
    },
    {
      id: 5,
      imagem: Carne5,
      NomeCarne: "Contra Filé",
      preco: "R$ 219",
      informacoes: "Um Rechaud com o nosso delicioso Contra Filé Nacional.",
    },
    {
      id: 6,
      imagem: Carne6,
      NomeCarne: "Alcatra",
      preco: "R$199",
      informacoes:
        "Rechaud de composto pelo maravilhoso corte de Alcatra Nacional.",
    },
    {
      id: 7,
      imagem: Carne7,
      NomeCarne: "Cupim no Bafo",
      preco: "R$219",
      informacoes:
        "Nosso Cupim é especial, macio e suculento leva 16h para ficar no ponto perfeito.",
    },
    {
      id: 8,
      imagem: Carne8,
      NomeCarne: "Filé Mignon",
      preco: "R$239",
      informacoes:
        "Um dos cortes mais nobres, nosso Filé Mignon é sensacional.",
    },
    {
      id: 9,
      imagem: Carne9,
      NomeCarne: "Filé  ao Catupiry",
      preco: "R$259",
      informacoes:
        "Nosso delicioso Filé Mignon com uma camada perfeita de Catupiry.",
    },
    {
      id: 10,
      imagem: Carne10,
      NomeCarne: "Carré de Cordeiro",
      preco: "R$309",
      informacoes:
        "O corte de Carré Importado é perfeito para os amantes de carnes especiais.",
    },
  ];

  const pratosExecutivos = [
    { id: 1, imagem: Executivo1, NomeCarne: "Costela", preco: "R$59,90", informacoes: 'Lorem ipsum dolor adipisicing elit.  provident adipisci, totam eligendi atque libero, ipsam autem!' },
    { id: 2, imagem: Executivo2, NomeCarne: "Cupim", preco: "R$59,90", informacoes: 'Lorem ipsum dolor adipisicing elit.  provident adipisci, totam eligendi atque libero, ipsam autem!' },
    { id: 3, imagem: Executivo3, NomeCarne: "Contra Filé", preco: "R$59,90", informacoes: 'Lorem ipsum dolor adipisicing elit.  provident adipisci, totam eligendi atque libero, ipsam autem!' },
    { id: 4, imagem: Executivo4, NomeCarne: "Picanha Importada", preco: "R$75,90", informacoes: 'Lorem ipsum dolor adipisicing elit.  provident adipisci, totam eligendi atque libero, ipsam autem!' },
    { id: 5, imagem: Executivo5, NomeCarne: "Chorizo Argentino", preco: "R$79,90", informacoes: 'Lorem ipsum dolor adipisicing elit.  provident adipisci, totam eligendi atque libero, ipsam autem!' },
    { id: 6, imagem: Executivo6, NomeCarne: "Bife Ancho", preco: "R$75,90", informacoes: 'Lorem ipsum dolor adipisicing elit.  provident adipisci, totam eligendi atque libero, ipsam autem!' },
    { id: 7, imagem: Executivo7, NomeCarne: "Alcatra", preco: "R$54,99", informacoes: 'Lorem ipsum dolor adipisicing elit.  provident adipisci, totam eligendi atque libero, ipsam autem!' },
    { id: 8, imagem: Executivo8, NomeCarne: "Maminha", preco: "R$50", informacoes: 'Lorem ipsum dolor adipisicing elit.  provident adipisci, totam eligendi atque libero, ipsam autem!' },
    { id: 9, imagem: Executivo9, NomeCarne: "Linguiça Art.", preco: "R$54,99", informacoes: 'Lorem ipsum dolor adipisicing elit.  provident adipisci, totam eligendi atque libero, ipsam autem!' },
    { id: 10, imagem: Executivo10, NomeCarne: "Filé a Parmegiana", preco: "R$79,99", informacoes: 'Lorem ipsum dolor adipisicing elit.  provident adipisci, totam eligendi atque libero, ipsam autem!' },
  ];

  



   

 
  
  const PratosGrandesFiltro = pratosGrandes.filter((teste) => {

    return(
      
      teste.NomeCarne.toLowerCase().includes(termoPesquisa.toLowerCase())
  
    )
  
  
  
    })
      
    
  
  
      
  
  
    const PratosExecutivosFiltro = pratosExecutivos.filter((teste) => {
  
     
      return(
      
        teste.NomeCarne.toLowerCase().includes(termoPesquisa.toLowerCase())
    
      )
  
   
  
      
  
      
  
  
  
       
    
        
    
      
    
    })
    
    

  

  

  return (

    
    <>
      <Especialidades></Especialidades>
      {PratosGrandesFiltro.map((dados) => {
        return (
          <div className={styleCardapio.Container}>
            <div className={styleCardapio.ContainerInfo}>
              <img
                className={styleCardapio.imagemCard}
                src={dados.imagem}
                alt=""
              />
              <span className={styleCardapio.ContainerCard}>
                <h1 className={styleCardapio.Titulo}>{dados.NomeCarne}</h1>
                <h2 className={styleCardapio.subTitulo}>{dados.preco}</h2>
              </span>
              <p className={styleCardapio.informacoes}>{dados.informacoes}</p>
              
            </div>
          </div>
        );
      })}

      <EspecialidadesExecutivos></EspecialidadesExecutivos>


      {PratosExecutivosFiltro.map((dados) => {
       return(

        <div className={styleCardapio.Container}>
        <div className={styleCardapio.ContainerInfo}>
          <img
            className={styleCardapio.imagemCard}
            src={dados.imagem}
            alt=""
          />
          <span className={styleCardapio.ContainerCard}>
            <h1 className={styleCardapio.Titulo}>{dados.NomeCarne}</h1>
            <h2 className={styleCardapio.subTitulo}>{dados.preco}</h2>
          </span>
          <p className={styleCardapio.informacoes}>{dados.informacoes}</p>
        </div>
      </div>

       );

      })}

      <Footer></Footer>
    </>
  );
}
