export type ContextType = {
	language: "EN" | "AL";
	changeLanguage: () => void;
	productsRef: React.RefObject<HTMLDivElement>;
};

export type RevealType = {
	children: JSX.Element;
	width: "fit-content" | "100%";
};
