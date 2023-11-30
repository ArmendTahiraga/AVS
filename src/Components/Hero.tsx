import Reveal from "./Reveal";
import Website3D from "./Website3D";

const Hero = () => {
	return (
		<div className="h-hero flex justify-between items-center">
			<div className="w-2/5">
				<Reveal width="fit-content">
					<h1 className="text-gray-100 text-6xl font-inter font-bold mb-6 mt-[-12px]">
						Hello, we are <br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#aabed7] to-[#2a3cdeb3] to-60%">
							AVS
						</span>
					</h1>
				</Reveal>
				<Reveal width="fit-content">
					<p className="text-lg text-gray-100">
						We are a experienced digital agency that helps our clients be noticed online. Our team ensures to help
						your digital growth.
					</p>
				</Reveal>
			</div>
			<div className="w-3/5 h-full">
				<Website3D />
			</div>
		</div>
	);
};

export default Hero;
