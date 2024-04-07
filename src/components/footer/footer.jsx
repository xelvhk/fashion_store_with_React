import "./footer.css"
import logoImage from "./../../img/icons/logo_footer.png"
import fb from "./../../img/socials/fb.svg"
import lin from "./../../img/socials/in.svg"
import inst from "./../../img/socials/inst.svg"
import tw from "./../../img/socials/tw.svg"
const Footer = () => {
    return (<section className="footer">
    <div className="container" >
        <div className="footer__links">
            <div className="footer__image"><img src={logoImage} alt ="logo"/></div>
            <span>Complete your style with our products</span>
            </div>
            <div className="footer__socials">
                <img src={fb} alt ="facebook"/>
                <img src={lin} alt ="linkedin"/>
                <img src={inst} alt ="instagram"/>
                <img src={tw} alt ="instagram"/>
            </div>

        </div>

            </section>
    )
}

export default Footer