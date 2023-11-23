import React from "react";
const Nav: React.FC = () => {
	return (
		<div className="w-full pt-7">
			<div className="bg-white w-max h-11 rounded-xl flex justify-between items-center mx-auto px-5">
				<h2 className="italic text-zinc-900 me-20">AVS</h2>
				<div>
					<p className="text-zinc-900 inline font-bold cursor-pointer">Products</p>
					<p className="text-zinc-900 inline font-bold cursor-pointer ms-7 ">Services</p>
					<p className="text-zinc-900 inline font-bold cursor-pointer ms-7 ">About us</p>
				</div>
			</div>
		</div>
	);
};

export default Nav;
