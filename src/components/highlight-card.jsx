import { BiCheckCircle } from "react-icons/bi";

export const HighlightCard = ({ content }) => (
	<div className="w-[540px] flex flex-col gap-4 justify-between bg-gray-100 rounded-lg p-4 relative overflow-hidden max-h-72">
		<div className="rounded-lg p-2 bg-blue-500 w-fit text-white">
			<BiCheckCircle />
		</div>
		<p className="text-sm md:text-lg leading-4 text-[#475467]">{content}</p>
		<svg className="absolute h-full top-0 right-6" viewBox="0 0 143 152" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g opacity="0.35">
				<path
					opacity="0.5"
					d="M115.309 150.788L140.987 1M108.431 150.788L137.319 1M101.553 150.788L133.803 1M94.3688 150.788L130.135 1.18889M87.185 150.788L126.467 1.18889M80.0011 150.788L122.493 1.18889M72.2059 150.788L118.672 1.37778M64.4107 150.977L114.392 1.37778M56.3098 150.977L110.112 1.37778M47.9031 150.788L105.68 1.37778M39.3437 150.788L100.941 1.37778M30.4785 150.788L96.0501 1.37778M21.1548 150.788L91.0062 1.37778M11.6783 150.788L85.6565 1.37778M1.74316 150.977L80.6125 1.37778"
					stroke="url(#paint0_linear_851_2839)"
					stroke-opacity="0.6"
					stroke-width="2.16442"
				/>
			</g>
			<defs>
				<linearGradient
					id="paint0_linear_851_2839"
					x1="1.74316"
					y1="150.977"
					x2="161.623"
					y2="124.197"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#1975FF" />
					<stop offset="1" stop-color="#33A9FF" />
				</linearGradient>
			</defs>
		</svg>
	</div>
);
