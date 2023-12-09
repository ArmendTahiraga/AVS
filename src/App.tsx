import Guide from "./Components/Guide";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Products from "./Components/Products";

function App() {
	return (
		<div className="bg-black">
			<Nav />
			<div className="grid grid-cols-12">
				<Guide />
				<div className="col-span-11">
					<Hero />
					<Products />
				</div>
			</div>
		</div>
	);
}

export default App;
