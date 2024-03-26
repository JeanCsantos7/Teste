

import styleEspecialidades from "../styles/Especialidades.module.css"
import imagem1 from "../image/ex.-linguica-artesanal-768x512.webp"
import imagem2 from "../image/ex.-mignon-768x512.webp"
import imagem3 from "../image/ex.-costela-768x512.webp"
import imagem4 from "../image/shutterstock_194567672.jpg"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


export default function Especialidades(){

const imagensCarrosel = [{id: 1, imagem:imagem1}, {id: 2, imagem:imagem2}, {id: 3, imagem:imagem3},{id: 4, imagem:imagem4}]

return(
    
    
    
    <>
    <h1 className={styleEspecialidades.Titulo}>EXECUTIVOS</h1>
    <h2 className={styleEspecialidades.subTitulo}>Pratos Individuais</h2>
    <p className={styleEspecialidades.informações}>Os pratos executivos são individuais.
Acompanham arroz, feijão, batata frita, ovo, farofa, salada e vinagrete.</p>

<div className={styleEspecialidades.containerMaster}>
<div className={styleEspecialidades.container}>
<h1 className={styleEspecialidades.tituloDetalhes}>Detalhes</h1>
<p className={styleEspecialidades.informacoesDetalhes}>Os executivos são pratos individuais.
Acompanham arroz, feijão, batata frita, ovo, farofa, salada e vinagrete.</p>

<Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation

     >
 {imagensCarrosel.map((dados) => {
          return (
            <SwiperSlide key={dados.id}>
  
              <img
                className={styleEspecialidades.imagemCarrosel}
                src={dados.imagem}
                alt=""
              />
            </SwiperSlide>
          );
        })}


    </Swiper>
 
</div>
    
</div>

 
 
    </>
)

}