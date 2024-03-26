import Logotipo from "../image/Logotipo.png";
import { IoMenuOutline } from "react-icons/io5";
import styleNavBar from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import Links from "./Links";
import { useState } from "react";
import ConteudoMenu from "../components/ConteudoMenu"


export default function Navbar2() {
    const [toggle, setToggle] = useState(true);
    const [alternar, setAlternar] = useState("");
  
    function teste() {
      setToggle(!toggle);
      setAlternar(toggle ? <Links></Links> : "");
    }
  
    return (
      <>
        <div className={styleNavBar.Container}>
          <nav>
            <Link to={"/"}>
              <img className={styleNavBar.Logo} src={Logotipo} alt="" />
            </Link>
         
            <IoMenuOutline onClick={teste} className={styleNavBar.menuMobile} />
          </nav>
  
  
  
          <p>{alternar}</p>
          <ConteudoMenu></ConteudoMenu>
          
     
          
        </div>
      </>
    );
  }
  