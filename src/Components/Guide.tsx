import { motion } from "framer-motion";
import useWindowDimensions from "./Hooks";

const Guide = () => {
	const { height } = useWindowDimensions();
	const margin = (height - 76) * 0.25 + "px";
	return (
		<div className="col-span-1 flex justify-end items-start">
			<motion.div
				style={{ marginTop: margin }}
				className="w-3 bg-gradient-to-b from-[#2d52d800] to-[#002aff] me-8"
				variants={{
					hidden: { opacity: 0, height: 0 },
					visible: { opacity: 1, height: "75%" },
				}}
				initial="hidden"
				whileInView="visible"
				transition={{ duration: 0.3, delay: 0.2 }}
			></motion.div>
		</div>
	);
};

export default Guide;
