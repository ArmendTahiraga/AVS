import { useContext } from "react";
import { Context } from "../Context";
import logo from "../../images/logo2.png";

const Loader = () => {
	const { loading } = useContext(Context);

	return (
		<>
			{loading && (
				<div className="loading-overlay">
					<img src={logo} alt="" className="w-20" />
				</div>
			)}
		</>
	);
};

export default Loader;
