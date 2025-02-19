import Hero from "@/components/home/hero";
import OurProducts from "@/components/home/our-products";
import TrustedBy from "@/components/home/trusted-by";
import WhoAreWe from "@/components/home/who-are-we";

import TopBar from "@/components/top-bar";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const Home = () => {
	return (
		<>
			<Header />
			<Hero />
			<OurProducts />
			<TrustedBy />
			<WhoAreWe />
			<Footer />
		</>
	);
};

export default Home;
