const Hero = () => {
	return (
		<div className="h-hero ps-24 pe-14 flex justify-between items-center">
			<div className="w-[40%]">
				<h1 className="text-gray-100 text-6xl font-inter font-bold mb-6 mt-[-12px]">
					Hello, we are <br />
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#aabed7] to-[#3772b6b3] to-70%">
						AVS
					</span>
				</h1>
				<p className="text-lg text-gray-100">
					We are a experienced digital agency that helps our clients be noticed online. Our team ensures to help your
					digital growth.
				</p>
			</div>
			<div className="w-[55%] h-[457px] bg-slate-700 rounded-xl"></div>
		</div>
	);
};

export default Hero;
