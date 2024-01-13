import About from "./Components/About";
import Footer from "./Components/Footer";
import Guide from "./Components/Guide";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Products from "./Components/Products";
import Services from "./Components/Services";

function App() {
	return (
		<div className="bg-black">
			<Nav />
			<div className="grid grid-cols-12">
				<Guide />
				<div className="col-span-11">
					<Hero />
					<Products />
					<Services />
					<About />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
