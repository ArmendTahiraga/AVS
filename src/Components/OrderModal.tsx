import { motion } from "framer-motion";
import { dropIn } from "../Data/data";
import { useContext } from "react";
import { Context } from "../Context";

const OrderModal = () => {
	const { language, handleOrderModal } = useContext(Context);

	return (
		<motion.div className="not-available-container module" variants={dropIn} initial="hidden" animate="visible" exit="exit">
			<span className="material-symbols-outlined close cursor-pointer" onClick={handleOrderModal}>
				close
			</span>
			<h2 className="not-available-title text-white font-inter">
				{language === "EN"
					? "Sorry, but this feature is not yet available."
					: "Ju kërkojmë ndjesë, por ky opsion nuk është ende i disponueshëm."}
			</h2>
			<button
				className="not-available-button w-full text-black font-inter font-bold"
				style={language === "AL" ? { marginTop: "40px" } : {}}
				onClick={handleOrderModal}
			>
				{language === "EN" ? "Close" : "Mbyll"}
			</button>
		</motion.div>
	);
};

export default OrderModal;
