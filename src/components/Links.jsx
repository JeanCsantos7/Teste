import styleLink from "../styles/Links.module.css";
import { Link } from "react-router-dom";

export default function Links() {
  return (
    <>
      <div className={styleLink.container}>
        <Link className={styleLink.Links} to={"/Menu"}>
          Menu
        </Link>

        <Link className={styleLink.Links} to={"/Unidades"}>
          Unidades
        </Link>

        <Link className={styleLink.Links} to={"/Contato"}>
          Contato
        </Link>
      </div>
    </>
  );
}
