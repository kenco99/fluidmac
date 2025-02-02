import Hero from "@/components/home/hero";
import OurProducts from "@/components/home/our-products";
import TrustedBy from "@/components/home/trusted-by";
import WhoAreWe from "@/components/home/who-are-we";
import PageHeader from "@/components/page-header";
import TopBar from "@/components/top-bar";
import { Footer } from "@/components/footer";

const Home = () => {
	return (
		<>
			<TopBar />
			<PageHeader />
			<Hero />
			<OurProducts />
			<TrustedBy />
			<WhoAreWe />
			<Footer />
		</>
	);
};

export default Home;
