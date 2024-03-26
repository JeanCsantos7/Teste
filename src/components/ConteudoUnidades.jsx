import { useState } from "react";
import UnidadeMoema from "../image/UnidadeMoema.jpg"
import UnidadePaulista from "../image/UnidadePaulista.jpg"
import UnidadeStoAmaro from "../image/UnidadeSantoAmaro.jpg"
import UnidadeOsasco from "../image/UnidadeOsasco.jpg"
import UnidadeSantana from "../image/UnidadeSantana.jpg"
import Footer from "../components/Footer"
import styleUnidades from "../styles/ConteudoUnidades.module.css";


export default function ConteudoUnidades() {
  const lista = [
    { id: "1", local: "Unidade Moema", endereco: 'Av. Ibirapuera, 2401, Moema São Paulo – SP', horario: 'Seg. a Sex. das 10h30 às 21h Sáb. das 11h30 às 00h10', imagem: UnidadeMoema },
    { id: "2", local: "Unidade Santo Amaro", endereco: 'Av. Adolfo Pinheiro, 1735, Santo Amaro', horario: 'Seg. a Sex. das 10h30 às 21h Sáb. das 11h30 às 00h10', imagem: UnidadeStoAmaro  },
    { id: "3", local: "Unidade Santana", endereco: 'Avenida Braz Leme, 1732, Santana São Paulo – SP', horario: 'Seg. a Sex. das 10h30 às 21h Sáb. das 11h30 às 00h10', imagem: UnidadeSantana  },
    { id: "4", local: "Unidade Osasco", endereco: 'R. Salém Bechara, 140, Centro, Osasco São Paulo – SP', horario: 'Seg. a Sex. das 10h30 às 21h Sáb. das 11h30 às 00h10', imagem: UnidadeOsasco  },
    { id: "5", local: "Unidade Paulista", endereco: 'Av Paulista, 2444, Consolação São Paulo – SP', horario: 'Seg. a Sex. das 10h30 às 21h Sáb. das 11h30 às 00h10, ', imagem: UnidadePaulista  },
  ];

  const [unidade, setUnidade] = useState("");

  function opcaoSelecionado(e) {
    const opcaoUsuario = e.target.value;
    setUnidade(opcaoUsuario);
  }

  return (
    <>
      <h1 className={styleUnidades.Titulo}>Venha Conhecer</h1>
      <h2 className={styleUnidades.subTitulo}>Nossas Unidades</h2>
      <hr className={styleUnidades.linhaTopo} />
      <p className={styleUnidades.informações}>
        Se interessou em nosso cardápio? Ótimo!! Venha conhecer uma de nossas
        unidades, veja abaixo qual unidade está mais próxima de você e venha nos
        conhecer, será um prazer!
      </p>

     

      <select name="unidade" id="unidade" onChange={opcaoSelecionado}>
        <option disabled value="">
          Escolha uma unidade
        </option>
        <option value="1">Unidade Moema</option>
        <option value="2">Unidade Santo Amaro</option>
        <option value="3">Unidade Santana</option>
        <option value="4">Unidade Osasco</option>
        <option value="5">Unidade Paulista</option>

        
      </select>
      {lista
        .filter((filtroOpcao) => {
          return filtroOpcao.id === unidade;
        })
        .map((cardItem) => {
          return (
            <>
            <div className={styleUnidades.Container} key={cardItem.id}>
            <span className={styleUnidades.informacoesCards}>
            <h1 className={styleUnidades.TituloCard}>{cardItem.local }</h1>
            <hr className={styleUnidades.linhaCard} />
            <p className={styleUnidades.paragrafoCard}>{cardItem.endereco}</p>
            <p className={styleUnidades.paragrafoCard}>{cardItem.horario}</p>
            <img className={styleUnidades.imagemCard} src={cardItem.imagem} alt="" />
            </span>
           
         
            </div>
              
            </>
          );
        })}

       <Footer></Footer>
    
    </>
  );
}
