import React, { RefObject, createContext, useEffect, useRef, useState } from "react";
import { ContextType } from "./models/models";

export const Context = createContext<ContextType>({
	language: "EN",
	changeLanguage: () => {},
	productsRef: React.createRef<HTMLDivElement>(),
	servicesRef: React.createRef<HTMLDivElement>(),
	aboutRef: React.createRef<HTMLDivElement>(),
	heights: [0],
	hasScrolled: false,
	isMenuActive: false,
	handleMenuClick: () => {},
});

const ContextProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
	const [language, setLanguage] = useState<"EN" | "AL">("AL");
	const [hasScrolled, setHasScrolled] = useState<boolean>(false);
	const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
	const [heights, setHeights] = useState<number[]>([0]);

	const productsRef = useRef<HTMLDivElement>(null);
	const servicesRef = useRef<HTMLDivElement>(null);
	const aboutRef = useRef<HTMLDivElement>(null);

	const changeLanguage = () => {
		setLanguage((prevLanguage) => (prevLanguage === "EN" ? "AL" : "EN"));
	};

	const handleMenuClick = () => {
		setIsMenuActive((prevIsMenuActive) => !prevIsMenuActive);
	};

	function isElementInViewport(element: RefObject<HTMLDivElement>) {
		const rect = element.current!.getBoundingClientRect();
		console.log(window.innerHeight, document.documentElement.clientHeight, element.current, rect.bottom);
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}

	useEffect(() => {
		const handleScroll = () => {
			if (isElementInViewport(aboutRef)) {
				setHasScrolled(true);
				setHeights((prev) => [...prev, aboutRef.current!.offsetTop]);
			} else if (isElementInViewport(servicesRef)) {
				setHasScrolled(true);
				setHeights((prev) => [...prev, servicesRef.current!.offsetTop]);
			} else if (isElementInViewport(productsRef)) {
				setHasScrolled(true);
				setHeights(() => [productsRef.current!.offsetTop]);
			}
		};
		console.log(heights);

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleScroll);
		};
	}, [hasScrolled]);

	const contextValue: ContextType = {
		language,
		changeLanguage,
		productsRef,
		heights,
		hasScrolled,
		isMenuActive,
		handleMenuClick,
		servicesRef,
		aboutRef,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
