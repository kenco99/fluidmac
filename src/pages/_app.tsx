import type { AppProps } from "next/app";
import "../styles/globals.css";
import localFont from "next/font/local";

const gilroy = localFont({
	src: [
		{
			path: "./Gilroy-Thin.ttf",
			weight: "300",
			style: "italic",
		},
		{
			path: "./Gilroy-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./Gilroy-RegularItalic.ttf",
			weight: "400",
			style: "italic",
		},
		{
			path: "./Gilroy-SemiBold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "./Gilroy-SemiBoldItalic.ttf",
			weight: "600",
			style: "italic",
		},
		{
			path: "./Gilroy-Bold.ttf",
			weight: "700",
			style: "normal",
		},
	],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main style={gilroy.style}>
			<Component {...pageProps} />
		</main>
	);
}
