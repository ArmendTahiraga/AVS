import React, { createContext, useEffect, useRef, useState } from "react";
import { ContextType } from "./models/models";

export const Context = createContext<ContextType>({
	language: "EN",
	changeLanguage: () => {},
	productsRef: React.createRef<HTMLDivElement>(),
	heights: [0],
	hasScrolled: false,
});

const ContextProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
	const [language, setLanguage] = useState<"EN" | "AL">("EN");
	const [hasScrolled, setHasScrolled] = useState<boolean>(false);
	const [heights, setHeights] = useState<number[]>([0]);

	const productsRef = useRef<HTMLDivElement>(null);

	const changeLanguage = () => {
		setLanguage((prevLanguage) => (prevLanguage === "EN" ? "AL" : "EN"));
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
			if (hasScrolled) {
				setHeights(() => [productsRef.current!.offsetTop]);
			}
		});

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [hasScrolled]);

	const contextValue: ContextType = {
		language,
		changeLanguage,
		productsRef,
		heights,
		hasScrolled,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
