import { useContext } from "react";import { Context } from "../Context";
import Reveal from "./Reveal";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Website3D from "./Website3D";

const Hero = () => {
	const { language, isMenuActive } = useContext(Context);
	const [text] = useTypewriter({
		words: ["AVS", "Albanian Visual Solutions"],
		loop: 1.5,
		delaySpeed: 3000,
		typeSpeed: 100,
		deleteSpeed: 80,
	});

	return (
		<motion.div
			className="min-h-hero flex justify-between items-center flex-col md:flex-row p-hero"
			variants={{
				hidden: {
					paddingTop: "80px",
				},
				visible: {
					paddingTop: "20px",
				},
			}}
			initial="hidden"
			animate={isMenuActive ? "visible" : "hidden"}
			transition={{ duration: 0.3 }}
		>
			<div className="w-11/12 md:w-2/5">
				<Reveal width="fit-content">
					<h1 className="text-gray-100 text-3xl md:text-5xl font-inter font-bold mb-6 mt-[-12px]">
						{language === "EN" ? "Hello, we are " : "Përshëndetje, ne jemi "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#aabed7] to-[#2a3cdeb3] to-60%">
							{text}
						</span>
					</h1>
				</Reveal>
				<Reveal width="fit-content">
					<p className="text-base text-gray-100">
						{language === "EN"
							? "We are a experienced digital agency that helps our clients be noticed online. Our team ensures to help your digital growth."
							: "Ne jemi një agjenci dixhitale me përvojë që i ndihmon klientët tanë të vihen re në internet. Ekipi ynë siguron të ndihmojë rritjen tuaj dixhitale."}
					</p>
				</Reveal>
			</div>
			<div className="w-full md:w-3/5 flex justify-center items-center">
				<div className="w-full h-[50vh] md:h-[70vh]">
					<Website3D />
				</div>
			</div>
		</motion.div>
	);
};

export default Hero;
