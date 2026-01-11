import { OGImageRoute } from "astro-og-canvas";

const pages = {
	home: {
		title: "TUI\nCOMPANY",
		description: "Making highly efficient software for terminal lovers.",
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
				size: 150,
				lineHeight: 0.95,
				weight: "Normal",
				families: ["DepartureMono"],
			},
			description: {
				color: [255, 255, 255],
				size: 42,
				lineHeight: 1.3,
				weight: "Normal",
				families: ["DepartureMono"],
			},
		},
	}),
});
