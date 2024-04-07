import "./voucher.css"
import v_img from "./../../img/images/promo-img.png"

const Voucher = () => {
    return (
        <section className="voucher">
            <div className="container">
            <div className="voucher__content"><div className="voucher__image"><img src={v_img} alt = "voucher"/></div>
                <div className="voucher__text">
                    <div className="voucher__title">
                        <span className="highlight">
                            <span>PAYDAY</span></span>
                            <br/>SALE NOW</div>
                    <div className="voucher__desc"><p>Spend minimal $100 and get 40% off voucher code for your next purchase</p>
                    <p><strong>1 October - 15 October 2023</strong><br/>
                    Terms & Conditions apply</p></div>
                    <div className="voucher__btn-wrapper"><a href="#!" className="voucher__btn"> Shop Now </a></div>
                    </div>
                    
                    </div>
                
                </div>
    </section>
    )
}

export default Voucher