import Hero from "./Components/Hero";
import Nav from "./Components/Nav";

function App() {
	return (
		<div className="bg-black">
			<div className="h-screen bg-fixed">
				<Nav />
				<Hero />
			</div>
		</div>
	);
}

export default App;
