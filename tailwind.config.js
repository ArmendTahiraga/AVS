/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
			minHeight: {
				hero: "calc(100vh - 76px)",
			},
		},
	},
	plugins: [],
};
