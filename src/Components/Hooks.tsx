import { useState, useEffect } from "react";
function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

export function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
}

// export function useProductsYPostion() {
// 	const { productsRef } = useContext(Context);
// 	const [yPos, setYPos] = useState(productsRef.current?.getBoundingClientRect().top);

// 	useEffect(() => {
// 		setYPos(productsRef.current?.getBoundingClientRect().top);
// 	}, [productsRef]);

// 	return yPos;
// }

export const useElementPosition = (elementRef: React.RefObject<HTMLDivElement>) => {
	const [position, setPosition] = useState(0);

	useEffect(() => {
		const getElementPosition = () => {
			const element = elementRef.current;
			if (element) {
				const rect = element.getBoundingClientRect();
				setPosition(rect.top);
			}
		};

		// const handleResize = () => {
		// 	requestAnimationFrame(getElementPosition);
		// };

		getElementPosition();

		// window.addEventListener("resize", handleResize);

		// return () => {
		// 	window.removeEventListener("resize", handleResize);
		// };
	}, [elementRef]);

	return position;
};

export default useElementPosition;
