import About from "../Components/About";
import Guide from "../Components/Guide";
import Hero from "../Components/Hero";
import Products from "../Components/Products";
import Services from "../Components/Services";

const HomePage = () => {
	return (
		<div className="grid grid-cols-12">
			<Guide />
			<div className="col-span-11">
				<Hero />
				<Products />
				<Services />
				<About />
			</div>
		</div>
	);
};

export default HomePage;
