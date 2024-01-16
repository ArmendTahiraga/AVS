import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

function App() {
	return (
		<div className="bg-black">
			<Nav />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
