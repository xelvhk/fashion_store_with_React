import "./promo.css"
import promoImage from "./../../img/images/header-img.jpg"
const Promo = () => {
    return ( <section className="promo">
        <div className="container">
            <div className="promo__content">
                <div className="promo__text">
                    <div className="promo__title">
                        <span className="highlight">
                            <span>CHOOSE</span> </span> 
                    YOUR<br/>
                    <span className="highlight highlight--yellow">
                    <span>NEW</span></span> CLOTHES</div>
                    <div className="promo__desc">Live your best life</div>
                    <div className="promo__btn-wrapper"><a href="#!" className="promo__btn"> Shop Now </a></div>
                    </div>
                    <div className="promo__image"><img src={promoImage} alt = "promo"/></div>
                    </div>
                
                </div>
    </section> );
}
 
export default Promo;