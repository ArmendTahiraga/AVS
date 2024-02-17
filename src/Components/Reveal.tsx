import { RevealType } from "../models/models";
import { motion } from "framer-motion";
import { useContext } from "react";
import { Context } from "../Context";

const Reveal: React.FC<RevealType> = ({ children, width }) => {
	const { loading } = useContext(Context);
	return (
		<>
			{!loading && (
				<div className="relative overflow-hidden py-2" style={{ width: width }}>
					<motion.div
						variants={{
							hidden: { opacity: 0, y: -75 },
							visible: { opacity: 1, y: 0 },
						}}
						initial="hidden"
						animate="visible"
						transition={{ duration: 0.3, delay: 0.2 }}
					>
						{children}
					</motion.div>
				</div>
			)}
		</>
	);
};

export default Reveal;
