import React, { useContext } from "react";
import { Context } from "../Context";
import logo from "../../public/images/logo2.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
	const { language, changeLanguage, isMenuActive, handleMenuClick } = useContext(Context);

	return (
		<div className="w-full pt-7">
			<div className="bg-[#00000047] w-4/5 md:w-max h-12 rounded-3xl flex justify-between items-center mx-auto ps-7 pe-4 md:px-7 border border-gray-300">
				<Link to="/">
					<img src={logo} className="me-20 w-20" alt="logo" />
				</Link>
				<div className="hidden md:block">
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
				<svg
					className={isMenuActive ? "ham hamRotate active md:hidden" : "ham hamRotate md:hidden"}
					viewBox="0 0 100 100"
					width="60"
					onClick={handleMenuClick}
				>
					<path
						className="line top"
						d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
					/>
					<path className="line middle" d="m 30,50 h 40" />
					<path
						className="line bottom"
						d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
					/>
				</svg>
			</div>
			<div className="absolute top-[40px] right-14 hidden md:block">
				<p className="text-white opacity-70 cursor-pointer" onClick={changeLanguage}>
					{language}
				</p>
			</div>
			<motion.div
				className="md:hidden w-full"
				variants={{
					hidden: {
						height: "0px",
						opacity: 0,
						backdropFilter: "blur(0px)",
						WebkitBackdropFilter: "blur(0px)",
					},
					visible: {
						height: "172px",
						opacity: 1,
						backdropFilter: "blur(12px)",
						WebkitBackdropFilter: "blur(12px)",
					},
				}}
				initial="hidden"
				animate={isMenuActive ? "visible" : "hidden"}
				transition={{ duration: 0.3, delay: 0.2 }}
			>
				{isMenuActive ? (
					<div className="flex justify-evenly items-center flex-col py-2 w-full h-full">
						<a href="#products" className="text-gray-100 inline font-inter font-bold cursor-pointer">
							{language === "EN" ? "Products" : "Produktet"}
						</a>
						<a href="#services" className="text-gray-100 inline font-inter font-bold cursor-pointer">
							{language === "EN" ? "Services" : "Shërbimet"}
						</a>
						<a href="#about" className="text-gray-100 inline font-inter font-bold cursor-pointer">
							{language === "EN" ? "About" : "Rreth"}
						</a>
						<p className="text-white opacity-70 cursor-pointer" onClick={changeLanguage}>
							{language}
						</p>
					</div>
				) : (
					""
				)}
			</motion.div>
		</div>
	);
};

export default Nav;
