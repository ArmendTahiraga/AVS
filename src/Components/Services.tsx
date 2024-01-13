import { useContext } from "react";
import { Context } from "../Context";
import Service from "./Service";
import { services } from "../Data/data";

const Services = () => {
	const { language } = useContext(Context);

	return (
		<div id="services" className="w-full mb-40">
			<div className="flex justify-around items-center flex-col md:flex-row w-full">
				{services.map((service, index) => (
					<Service
						key={index}
						products={service.products}
						descriptionEN={service.descriptionEN}
						descriptionAL={service.descriptionAL}
						serviceNameEN={service.serviceNameEN}
						serviceNameAL={service.serviceNameAL}
					/>
				))}
			</div>
			<div className="w-full flex justify-center mt-10">
				<button type="button" className="bg-[#d9d9d9] font-bold text-2xl px-12 py-4 rounded-full text-center">
					{language === "EN" ? "Order now" : "Porositni tani"}
				</button>
			</div>
		</div>
	);
};

export default Services;
