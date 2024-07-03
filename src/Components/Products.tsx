import { useContext } from "react";
import { Context } from "../Context";
import foodhunt from "../../public/images/foodhunt.png";
import magazin3 from "../../public/images/magazin3.png";
import canna from "../../public/images/canna.png";
import fightcamp from "../../public/images/fightcamp.png";
import techrealm from "../../public/images/techrealm.png";
import magazin1 from "../../public/images/magazin1.png";
import teaship from "../../public/images/teaship.png";
import magazin2 from "../../public/images/magazin2.png";
import good from "../../public/images/good.png";

const Products = () => {
	const { productsRef } = useContext(Context);

	return (
		<div className="md:grid md:grid-cols-5 md:grid-rows-6 gap-6 md:pe-10 mb-24 md:mb-40" ref={productsRef} id="products">
			<div className="row-start-1 col-start-1 row-end-3 col-end-2 rounded-lg h-60 mx-auto w-[90%] mb-5 md:mx-0 md:w-auto md:mb-0">
				<img src={magazin3} className="rounded-lg h-full w-full object-cover" alt="" />
			</div>
			<div className="row-start-1 col-start-2 row-end-3 col-end-4 rounded-lg h-60 mx-auto w-[90%] mb-5 md:mx-0 md:w-auto md:mb-0">
				<img src={canna} className="rounded-lg h-full w-full object-cover" alt="" />
			</div>
			<div className="row-start-1 col-start-4 row-end-3 col-end-6 rounded-lg h-60 mx-auto w-[90%] mb-5 md:mx-0 md:w-auto md:mb-0">
				<img src={fightcamp} className="rounded-lg h-full w-full object-cover" alt="" />
			</div>
			<div className="row-start-3 col-start-1 row-end-5 col-end-3 rounded-lg h-60 mx-auto w-[90%] mb-5 md:mx-0 md:w-auto md:mb-0">
				<img src={techrealm} className="rounded-lg h-full w-full object-cover" alt="" />
			</div>
			<div className="row-start-3 col-start-3 row-end-5 col-end-5 rounded-lg h-60 mx-auto w-[90%] mb-5 md:mx-0 md:w-auto md:mb-0">
				<img src={foodhunt} className="rounded-lg h-full w-full object-cover" alt="" />
			</div>
			<div className="row-start-3 col-start-5 row-end-7 col-end-6 rounded-lg h-60 mx-auto w-[90%] mb-5 md:mx-0 md:w-auto md:mb-0">
				<img src={magazin1} className="rounded-lg h-full w-full object-cover" alt="" />
			</div>
			<div className="row-start-5 col-start-1 row-end-7 col-end-3 rounded-lg h-60 mx-auto w-[90%] mb-5 md:mx-0 md:w-auto md:mb-0">
				<img src={teaship} className="rounded-lg h-full w-full object-cover" alt="" />
			</div>
			<div className="row-start-5 col-start-3 row-end-7 col-end-4 rounded-lg h-60 mx-auto w-[90%] mb-5 md:mx-0 md:w-auto md:mb-0">
				<img src={magazin2} className="rounded-lg h-full w-full object-cover" alt="" />
			</div>
			<div className="row-start-5 col-start-4 row-end-7 col-end-6 rounded-lg h-60 mx-auto w-[90%] mb-5 md:mx-0 md:w-auto md:mb-0">
				<img src={good} className="rounded-lg h-full w-full object-cover" alt="" />
			</div>
		</div>
	);
};

export default Products;
