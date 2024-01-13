import React, { useContext } from "react";
import { ServiceType } from "../models/models";
import { Context } from "../Context";

const Service: React.FC<ServiceType> = ({ products, descriptionEN, descriptionAL, serviceNameEN, serviceNameAL }) => {
	const { language } = useContext(Context);
	return (
		<div className="text-white service font-inter backdrop-blur-lg brightness-100 border border-[#464646] rounded-xl px-4 py-3 w-[25%]">
			<div>
				<h1 className="text-xl font-bold text-center mb-5">{language === "EN" ? serviceNameEN : serviceNameAL}</h1>
				<div className="mb-5">
					{products.map((item, index) => {
						if (item.productNameEN === "Full package") {
							return (
								<div key={index} className="flex justify-between w-full mt-3">
									<h3 className="font-semibold">
										{language === "EN" ? item.productNameEN : item.productNameAL}
									</h3>
									<p className="font-semibold">{item.productPrice}$</p>
								</div>
							);
						} else {
							return (
								<div key={index} className="flex justify-between w-full">
									<h3>{language === "EN" ? item.productNameEN : item.productNameAL}</h3>
									<p>{item.productPrice}$</p>
								</div>
							);
						}
					})}
				</div>
			</div>
			<p className=" text-center">{language === "EN" ? descriptionEN : descriptionAL}</p>
		</div>
	);
};

export default Service;
