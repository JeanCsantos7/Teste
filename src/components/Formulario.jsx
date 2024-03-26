import ImagemFundo from "../image/BackgroundChurrasco.jpeg";
import styleFormulario from "../styles/Formulario.module.css";

export default function Formulario() {
  return (
    <>
      <div className={styleFormulario.ContainerFundo}>
        <h1 className={styleFormulario.Titulo}>Precisa de mais informações?</h1>
        <h2 className={styleFormulario.subTitulo}>ENTRE EM CONTATO</h2>

        <form action="#">
          <span className={styleFormulario.containerFormulario}>
            <label htmlFor="">Nome</label>
            <input className={styleFormulario.campoInput} type="text" />

            <label htmlFor="">E-mail</label>
            <input className={styleFormulario.campoInput} type="text" />

            <label htmlFor="">Mensagem</label>
            <input className={styleFormulario.campoInput} type="text" />
          </span>
        </form>
      </div>

      <div className={styleFormulario.ContainerFundo2}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7312.349110243502!2d-46.63425355805822!3d-23.59807196509819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a3190255555%3A0xba4a4a2740a4b173!2sOutback%20Steakhouse%20Shopping%20Metr%C3%B4%20Santa%20Cruz!5e0!3m2!1spt-BR!2sbr!4v1709773517172!5m2!1spt-BR!2sbr"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
