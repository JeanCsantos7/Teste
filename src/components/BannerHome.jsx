
import styleBanner from "../styles/BannerHome.module.css"
import Banners from "../image/BackgroundChurrasco.jpeg"
import ConteudoLandingPage from "./ConteudoHome"


export default function Banner()
{

    return(
   <>
    <main>
        <img className={styleBanner.imagemBanner} src={Banners} alt="" />
    </main>
    <ConteudoLandingPage></ConteudoLandingPage>
   
   </>

    )

}