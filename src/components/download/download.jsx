import "./download.css"
import d_img from "./../../img/images/vouchers-img.png"
import apple from "./../../img/icons/app-store.png"
import google from "./../../img/icons/google-play.png"

const Download = () => {
    return (<section className="download">
    <div className="container">
        <div className="download__content">
            <div className="download__text">
                <div className="download__title">   <span>DOWNLOAD APP &<br/> GET YOUR VOUCHER</span> </div>
                <div className="download__desc"><p>Get 30% off for first transaction using our mobile apps:</p>
                <a href="#!"><img src={apple} alt="appStore"/></a><a href="#!"><img src={google} alt="googlePlay"/></a>
                </div>
                </div>
                <div className="download__image"><img src={d_img} alt = "promo"/></div>
                </div>
            
            </div>
            </section>
    )
}

export default Download