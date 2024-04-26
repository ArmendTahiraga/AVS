import { useContext } from "react";import { Context } from "../Context";

const Products = () => {
	const { productsRef } = useContext(Context);

	return (
		<div className="md:grid md:grid-cols-5 md:grid-rows-6 gap-6 md:pe-10 mb-24 md:mb-40" ref={productsRef} id="products">
			<div className="row-start-1 col-start-1 row-end-3 col-end-2 rounded-lg h-60 mx-auto w-[90%] mb-5 md:mx-0 md:w-auto md:mb-0">
				<img src="../../images/magazin3.png" className="rounded-lg h-full w-full object-cover" alt="" />
			</div>
			<div className="row-start-1 col-start-2 row-end-3 col-end-4 rounded-lg h-60 mx-auto w-[90%] mb-5 md:mx-0 md:w-auto md:mb-0">
				<img src="../../images/canna.png" className="rounded-lg h-full w-full object-cover" alt="" />
			</div>
			<div className="row-start-1 col-start-4 row-end-3 col-end-6 rounded-lg h-60 mx-auto w-[90%] mb-5 md:mx-0 md:w-auto md:mb-0">
				<img src="../../images/fightcamp.png" className="rounded-lg h-full w-full object-cover" alt="" />
			</div>
			<div className="row-start-3 col-start-1 row-end-5 col-end-3 rounded-lg h-60 mx-auto w-[90%] mb-5 md:mx-0 md:w-auto md:mb-0">
				<img src="../../images/techrealm.png" className="rounded-lg h-full w-full object-cover" alt="" />
			</div>
			<div className="row-start-3 col-start-3 row-end-5 col-end-5 rounded-lg h-60 mx-auto w-[90%] mb-5 md:mx-0 md:w-auto md:mb-0">
				<img src="../../images/foodhunt.png" className="rounded-lg h-full w-full object-cover" alt="" />
			</div>
			<div className="row-start-3 col-start-5 row-end-7 col-end-6 rounded-lg h-60 mx-auto w-[90%] mb-5 md:mx-0 md:w-auto md:mb-0">
				<img src="../../images/magazin1.png" className="rounded-lg h-full w-full object-cover" alt="" />
			</div>
			<div className="row-start-5 col-start-1 row-end-7 col-end-3 rounded-lg h-60 mx-auto w-[90%] mb-5 md:mx-0 md:w-auto md:mb-0">
				<img src="../../images/teaship.png" className="rounded-lg h-full w-full object-cover" alt="" />
			</div>
			<div className="row-start-5 col-start-3 row-end-7 col-end-4 rounded-lg h-60 mx-auto w-[90%] mb-5 md:mx-0 md:w-auto md:mb-0">
				<img src="../../images/magazin2.png" className="rounded-lg h-full w-full object-cover" alt="" />
			</div>
			<div className="row-start-5 col-start-4 row-end-7 col-end-6 rounded-lg h-60 mx-auto w-[90%] mb-5 md:mx-0 md:w-auto md:mb-0">
				<img src="../../images/good.png" className="rounded-lg h-full w-full object-cover" alt="" />
			</div>
		</div>
	);
};

export default Products;
