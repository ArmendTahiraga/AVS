export type ContextType = {
	language: "EN" | "AL";
	changeLanguage: () => void;
	productsRef: React.RefObject<HTMLDivElement>;
	servicesRef: React.RefObject<HTMLDivElement>;
	aboutRef: React.RefObject<HTMLDivElement>;
	heights: number[];
	hasScrolled: boolean;
	isMenuActive: boolean;
	handleMenuClick: () => void;
};

export type RevealType = {
	children: JSX.Element;
	width: "fit-content" | "100%";
};

export type ServiceType = {
	serviceNameEN: string;
	serviceNameAL: string;
	products: ProductType[];
	descriptionEN: string;
	descriptionAL: string;
};

type ProductType = {
	productNameEN: string;
	productNameAL: string;
	productPrice: number;
};
