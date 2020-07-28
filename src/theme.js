import { theme } from "@chakra-ui/core";

const customTheme = {
	...theme,
	colors: {
		...theme.colors,
		primary: {
			// 100: "#CFD1FD",
			// 200: "#A7ABFB",
			// 300: "#8388F9",
			// 400: "#6268F8",
			// 500: "#444BF7",
			// 600: "#262EF6",
			// 700: "#0B14F5",
			// 800: "#0911DD",
			// 900: "#080FC7",
			100: "#f9f9f9",
			200: "#ffe0ac",
			300: "#ffacb7",
			400: "#6886c5",
		},
		customPink: {
			100: "#fff",
			200: "#fee8f0",
			300: "#fee8f0",
			400: "#fed8e5",
			500: "#fc85ae",
			600: "#fc85ae",
			700: "#fda6c4",
			800: "#fc96b9",
			900: "#fc85ae",
		},
	},
};

export default customTheme;
