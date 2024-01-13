import React, { useContext } from "react";
import { Context } from "../Context";
import logo from "../../images/logo2.png";

const Nav: React.FC = () => {
	const { language, changeLanguage } = useContext(Context);

	return (
		<div className="w-full pt-7">
			<div className="bg-[#00000047] w-max h-12 rounded-3xl flex justify-between items-center mx-auto px-7 border border-gray-300">
				<img src={logo} className="me-20 w-20" alt="logo" />
				<div>
					<a href="#products" className="text-gray-100 inline font-inter font-bold cursor-pointer">
						{language === "EN" ? "Products" : "Produktet"}
					</a>
					<a href="#services" className="text-gray-100 inline font-inter font-bold cursor-pointer ms-11">
						{language === "EN" ? "Services" : "Shërbimet"}
					</a>
					<a href="#about" className="text-gray-100 inline font-inter font-bold cursor-pointer ms-11">
						{language === "EN" ? "About" : "Rreth"}
					</a>
				</div>
			</div>
			<div className="absolute top-[40px] right-14">
				<p className="text-white opacity-70 cursor-pointer" onClick={changeLanguage}>
					{language}
				</p>
			</div>
		</div>
	);
};

export default Nav;
