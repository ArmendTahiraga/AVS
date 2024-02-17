import React, { createContext, useEffect, useRef, useState } from "react";import { ContextType } from "./models/models";

export const Context = createContext<ContextType>({
	language: "EN",
	changeLanguage: () => {},
	productsRef: React.createRef<HTMLDivElement>(),
	serviceRef: React.createRef<HTMLDivElement>(),
	aboutRef: React.createRef<HTMLDivElement>(),
	heights: [0],
	hasScrolled: false,
	isMenuActive: false,
	handleMenuClick: () => {},
	width: 0,
	orderModal: false,
	handleOrderModal: () => {},
	loading: true,
});

const ContextProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
	const [language, setLanguage] = useState<"EN" | "AL">("AL");
	const [hasScrolled, setHasScrolled] = useState<boolean>(false);
	const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
	const [heights, setHeights] = useState<number[]>([0]);
	const [width, setWidth] = useState<number>(window.innerWidth);
	const [orderModal, setOrderModal] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);

	const productsRef = useRef<HTMLDivElement>(null);
	const serviceRef = useRef<HTMLDivElement>(null);
	const aboutRef = useRef<HTMLDivElement>(null);

	const changeLanguage = () => {
		setLanguage((prevLanguage) => (prevLanguage === "EN" ? "AL" : "EN"));
	};

	const handleMenuClick = () => {
		setIsMenuActive((prevIsMenuActive) => !prevIsMenuActive);
	};

	const handleOrderModal = () => {
		setOrderModal((prevOrderModal) => !prevOrderModal);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (!hasScrolled) {
				setHasScrolled(true);
				setHeights(() => [productsRef.current!.offsetTop]);
			}
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", () => {
			setWidth(window.innerWidth);
			if (hasScrolled) {
				setHeights(() => [productsRef.current!.offsetTop]);
			}
		});

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [hasScrolled]);

	useEffect(() => {
		setTimeout(() => setLoading(false), 1200);
	}, []);

	const contextValue: ContextType = {
		language,
		changeLanguage,
		productsRef,
		heights,
		hasScrolled,
		isMenuActive,
		handleMenuClick,
		serviceRef,
		aboutRef,
		width,
		orderModal,
		handleOrderModal,
		loading,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
