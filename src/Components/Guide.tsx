import { motion } from "framer-motion";
import { useContext } from "react";
import { Context } from "../Context";

const Guide = () => {
	const { heights, hasScrolled, language } = useContext(Context);

	return (
		<div className="col-span-1 flex justify-start items-center flex-col">
			<motion.div
				style={{ marginTop: "27vh" }}
				className="w-3 bg-gradient-to-b from-[#2d52d800] to-[#002aff] mb-16"
				variants={{
					hidden: { opacity: 0, height: 0 },
					visible: { opacity: 1, height: `calc(${heights[0]}px - 20vh)` },
				}}
				initial="hidden"
				animate="visible"
				transition={{ duration: 0.3, delay: 0.2 }}
			></motion.div>
			<motion.div
				className="text-gray-100 text-center text-2xl"
				variants={{
					hidden: { opacity: 0 },
					visible: { opacity: hasScrolled ? 1 : 0 },
				}}
				initial="hidden"
				animate="visible"
				transition={{ duration: 0.3, delay: 0.5 }}
			>
				<p className="-rotate-90">{language === "EN" ? "PRODUCTS" : "PRODUKTET"}</p>
			</motion.div>
			<motion.div
				className="w-3 bg-gradient-to-b from-[#2d52d800] to-[#002aff] mb-16"
				variants={{
					hidden: { opacity: 0, height: 0 },
					visible: { opacity: 1, height: `calc(${heights[0]}px - 20vh)` },
				}}
				initial="hidden"
				animate="visible"
				transition={{ duration: 0.3, delay: 0.2 }}
			></motion.div>
			<motion.div
				className="text-gray-100 text-center text-2xl"
				variants={{
					hidden: { opacity: 0 },
					visible: { opacity: hasScrolled ? 1 : 0 },
				}}
				initial="hidden"
				animate="visible"
				transition={{ duration: 0.3, delay: 0.5 }}
			>
				<p className="-rotate-90">{language === "EN" ? "SERVICES" : "SHËRBIMET"}</p>
			</motion.div>
			<motion.div
				className="w-3 bg-gradient-to-b from-[#2d52d800] to-[#002aff] mb-16"
				variants={{
					hidden: { opacity: 0, height: 0 },
					visible: { opacity: 1, height: `calc(${heights[0]}px - 20vh)` },
				}}
				initial="hidden"
				animate="visible"
				transition={{ duration: 0.3, delay: 0.2 }}
			></motion.div>
			<motion.div
				className="text-gray-100 text-center text-2xl h-fit"
				variants={{
					hidden: { opacity: 0 },
					visible: { opacity: hasScrolled ? 1 : 0 },
				}}
				initial="hidden"
				animate="visible"
				transition={{ duration: 0.3, delay: 0.5 }}
			>
				<p className="-rotate-90">{language === "EN" ? "ABOUT" : "RRETH"}</p>
			</motion.div>
		</div>
	);
};

export default Guide;
