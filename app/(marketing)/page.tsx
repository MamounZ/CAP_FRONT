import Features from "@/components/marketing components/Features";
import HowItWorks from "@/components/marketing components/HowItWorks";
import LandingPageHero from "@/components/marketing components/landingPageHero";
import SeeItInAction from "@/components/marketing components/SeeItInAction";
import Docs from "./docs/page";

export default function Home() {
	return (
		<>
			<LandingPageHero />
			<HowItWorks />
			<Features />
			<SeeItInAction />
		</>
	);
}
