import React from "react";
import logo from "../../images/logo.png";

const Nav: React.FC = () => {
	return (
		<div className="w-full pt-7">
			<div className="bg-[#00000047] w-max h-12 rounded-3xl flex justify-between items-center mx-auto px-7 border border-gray-300">
				<img src={logo} className="me-20 w-20" alt="logo" />
				<div>
					<p className="text-gray-100 inline font-bold cursor-pointer">Products</p>
					<p className="text-gray-100 inline font-bold cursor-pointer ms-11">Services</p>
					<p className="text-gray-100 inline font-bold cursor-pointer ms-11">About us</p>
				</div>
			</div>
		</div>
	);
};

export default Nav;
