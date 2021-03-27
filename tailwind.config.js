module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"primario-green": "#B7FFC2",
				"primario-green-pure": "#025400",
				"primario-green-semi": "#008700",
				"primario-blue": "#0085FF",
				"primario-blue-claro": "#DDF5FF",
				"primario-red": "#FF2222",
				"primario-red-transparente": "#FFE0E0",
				"primario-gray": "#FCFCFC",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
