import HeroSection from "./section1/HeroSection";
import FeaturesSection from "./section2/FeaturesSection";
import AboutSection from "./section3/AboutSection";

export default function Main() {
    return (
        <>
            <section id="nosotros" >
            <HeroSection />
            </section>
            <section id="funcionalidades" >
            <FeaturesSection />
            </section>
            <section id="historia" >
            <AboutSection />
            </section>
        </>
    );
}