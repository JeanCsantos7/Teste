import stylePromocao from "../styles/Promoção.module.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Cupim from "../image/Cupim.png";
import PedraMistaGrill from "../image/PedraMistaGrill.png";
import CostelaBafo from "../image/Costela_Bafo.png";
import PedraMistaTradicional from "../image/PedraMistaTradicional.png";

export default function Promoção() {
  const listaDados = [
    {
      id: 1,
      imagem: Cupim,
      tipoCarne: "Pedra Mista Normal",
      info: "Esse prato acompanha Cupim, Costela e Linguiça",
    },

    {
      id: 2,
      imagem: PedraMistaGrill,
      tipoCarne: "Pedra Mista Grill",
      info: "Esse prato acompanha Costela, Contra filé e Alcatra",
    },

    {
      id: 3,
      imagem: CostelaBafo,
      tipoCarne: "Costela no Bafo",
      info: "O prato Principal também entra na promoção!",
    },

    {
      id: 4,
      imagem: PedraMistaTradicional,
      tipoCarne: "Mista Tradicional",
      info: "Esse prato acompanha Costela, Filé de Frango e Linguiça ",
    },
  ];
  return (
    <>
      <h1 className={stylePromocao.titulo}>PROMOÇÕES SEMANAIS</h1>
      <h2 className={stylePromocao.subTitulo}>Especialidades da Casa</h2>
      <p className={stylePromocao.informações}>
        Promoções válidas de segunda a sexta-feira
      </p>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        navigation
        
      >
        {listaDados.map((dados) => {
          return (
            <SwiperSlide key={dados.id}>
              <h3 className={stylePromocao.tipoCarne}>{dados.tipoCarne}</h3>
              <p className={stylePromocao.info}>{dados.info}</p>
              <button className={stylePromocao.botao}>15% DE DESCONTO</button>
              <img
                className={stylePromocao.imagemCarrosel}
                src={dados.imagem}
                alt=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
