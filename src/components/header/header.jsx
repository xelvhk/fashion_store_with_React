import "./header.css"
import logoImage from "./../../img/icons/logo.png"
function Header () {
return (
    <header className="header">
   <div className="container">
    <div className="header__row">
        <div className="header__logo">
            <img src={logoImage} alt="Logo" />
        </div>
        <nav className="header__nav">
            <ul>
                <li><a href="#!">BRAND CATALOGUE</a></li>
                <li><a href="#!">FASHION</a></li>
                <li><a href="#!">FAVORITES</a></li>
                <li><a href="#!">LIFESTYLE</a></li>
                <li><a href="#!" className="header__nav-btn">SIGN UP</a></li>
            </ul>
        </nav>
    </div>
   </div>
    </header>
)
}
export default Header