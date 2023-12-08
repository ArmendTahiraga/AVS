import React, { createContext, useRef, useState } from "react";
import { ContextType } from "./models/models";

export const Context = createContext<ContextType>({
	language: "EN",
	changeLanguage: () => {},
	productsRef: React.createRef(),
});

const ContextProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
	const [language, setLanguage] = useState<"EN" | "AL">("EN");

	const productsRef = useRef<HTMLDivElement>(null);

	function changeLanguage() {
		setLanguage((prevLanguage) => (prevLanguage === "EN" ? "AL" : "EN"));
	}

	const contextValue: ContextType = {
		language: language,
		changeLanguage: changeLanguage,
		productsRef: productsRef,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
