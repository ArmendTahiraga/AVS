// import Guide from "./Components/Guide";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Products from "./Components/Products";

function App() {
	return (
		<div className="bg-black">
			<Nav />
			<div className="w-4/5 mx-auto">
				<Hero />
				<Products />
			</div>
		</div>
	);
}

export default App;
