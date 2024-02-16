import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import OrderModal from "./Components/OrderModal";
import { useContext } from "react";
import { Context } from "./Context";

function App() {
	const { orderModal } = useContext(Context);

	return (
		<div className="bg-black">
			{orderModal && (
				<div>
					<OrderModal />
				</div>
			)}
			<Nav />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
