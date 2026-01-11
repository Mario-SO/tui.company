import { OGImageRoute } from "astro-og-canvas";

const pages = {
	home: {
		title: "TUI",
		description: "COMPANY",
	},
};

export const { getStaticPaths, GET } = await OGImageRoute({
	param: "route",
	pages,
	getImageOptions: (_path, page) => ({
		title: page.title,
		description: page.description,
		bgGradient: [
			[27, 77, 255],
			[27, 77, 255],
		],
		padding: 110,
		fonts: ["./public/fonts/DepartureMono-Regular.otf"],
		font: {
			title: {
				color: [255, 255, 255],
				size: 160,
				lineHeight: 0.9,
				weight: "Normal",
				families: ["DepartureMono"],
			},
			description: {
				color: [213, 225, 255],
				size: 140,
				lineHeight: 0.9,
				weight: "Normal",
				families: ["DepartureMono"],
			},
		},
	}),
});
