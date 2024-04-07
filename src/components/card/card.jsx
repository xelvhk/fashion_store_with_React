import styles from "./card.module.css"
import arrowimage from "./../../img/icons/arrow.svg"
const Card = ({title, img}) => {
    return(
    <div className={styles.card}>
        <a href="#!" className="card__link">
        <img src={img} className={styles.card__img} alt="category"/></a>
        <div className={styles.card__body}>
            <div className={styles.card__text}>
            <a href="#!" className="card__link"><div className={styles.card__title}>{title}</div></a>
                <div className={styles.card__muted}>Explore Now!</div>
                </div>
                <div className={styles.card__icon}>
                    <img src={arrowimage} alt="arrow"/>
                </div>
        </div>
        </div>)
}

export default Card