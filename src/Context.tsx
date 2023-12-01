import React, { createContext, useState } from "react";
import { ContextType } from "./models/models";

export const Context = createContext<ContextType>({
	language: "EN",
	changeLanguage: () => {},
});

const ContextProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
	const [language, setLanguage] = useState<"EN" | "AL">("EN");

	function changeLanguage() {
		setLanguage((prevLanguage) => (prevLanguage === "EN" ? "AL" : "EN"));
	}

	const contextValue: ContextType = {
		language: language,
		changeLanguage: changeLanguage,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
