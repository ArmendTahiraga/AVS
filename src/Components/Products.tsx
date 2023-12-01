import { useContext } from "react";
import { Context } from "../Context";

const Products = () => {
	const { productsRef } = useContext(Context);

	return (
		<div className="grid grid-cols-5 grid-rows-6 gap-7 px-40" ref={productsRef}>
			<div className="row-start-1 col-start-1 row-end-3 col-end-4 bg-white rounded-lg h-52"></div>
			<div className="row-start-1 col-start-4 row-end-3 col-end-6 bg-white rounded-lg h-52"></div>
			<div className="row-start-3 col-start-1 row-end-5 col-end-3 bg-white rounded-lg h-52"></div>
			<div className="row-start-3 col-start-3 row-end-5 col-end-5 bg-white rounded-lg h-52"></div>
			<div className="row-start-3 col-start-5 row-end-7 col-end-6 bg-white rounded-lg h-52"></div>
			<div className="row-start-5 col-start-1 row-end-7 col-end-2 bg-white rounded-lg h-52"></div>
			<div className="row-start-5 col-start-2 row-end-7 col-end-6 bg-white rounded-lg h-52"></div>
		</div>
	);
};

export default Products;
