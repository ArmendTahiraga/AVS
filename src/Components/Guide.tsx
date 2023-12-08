import { motion } from "framer-motion";import { useContext } from "react";
import { Context } from "../Context";
import { useElementPosition, useWindowDimensions } from "./Hooks";

const Guide = () => {
	const { height } = useWindowDimensions();
	const marginNum = (height - 76) * 0.25;
	const margin = marginNum + "px";

	const { productsRef } = useContext(Context);
	const y = useElementPosition(productsRef);
	const hero = y - 20 - marginNum;
	console.log(hero);

	return (
		<div className="col-span-1 flex justify-start items-end flex-col">
			<motion.div
				style={{ marginTop: margin }}
				className="w-3 bg-gradient-to-b from-[#2d52d800] to-[#002aff] me-8"
				variants={{
					hidden: { opacity: 0, height: 0 },
					visible: { opacity: 1, height: hero },
				}}
				initial="hidden"
				whileInView="visible"
				transition={{ duration: 0.3, delay: 0.2 }}
			></motion.div>
			<div className="text-gray-100 me-8 w-4 text-center -mb-4">
				<p>P</p>
				<p>R</p>
				<p>O</p>
				<p>D</p>
				<p>U</p>
				<p>C</p>
				<p>T</p>
				<p>S</p>
			</div>
		</div>
	);
};

export default Guide;
