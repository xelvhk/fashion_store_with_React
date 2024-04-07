import Card from '../card/card.jsx';
import './arrivals.css';
import cat1image from './../../img/categories/cat-01.jpg';
import cat2image from './../../img/categories/cat-02.jpg';
import cat3image from './../../img/categories/cat-03.jpg';


const Arrivals = () => {
	return (
		<section className="arrivals">
			<div className="container">
				<div className="arrivals__header">
					<h2 className="title-2">NEW ARRIVALS</h2>
				</div>
				<div className="arrivals__cards">
					<Card title="Hoodies" img={cat1image} />
					<Card title="Coats" img={cat2image} />
					<Card title="T-Shirts" img={cat3image} />
				</div>
			</div>
		</section>
	);
};

export default Arrivals;
