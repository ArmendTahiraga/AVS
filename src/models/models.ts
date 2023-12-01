export type ContextType = {
	language: "EN" | "AL";
	changeLanguage: () => void;
};

export type RevealType = {
	children: JSX.Element;
	width: "fit-content" | "100%";
};
