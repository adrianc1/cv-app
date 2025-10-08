import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection.jsx";
import FeaturesSection from "../components/FeaturesSection.jsx";

export default function Landing() {
  return (
    <main className="w-full">
      <HeroSection />
      <FeaturesSection />

      <section className="w-full mx-auto text-center my-8">
        <Link to="builder">
          <button className="rounded-xl px-8 py-4 bg-gradient-to-r from-pink-500 to-indigo-500 text-white text-lg font-bold hover:from-pink-600 hover:to-indigo-600 transition-all duration-300 shadow-lg transform hover:scale-105">
            Build My Resume
          </button>
        </Link>
      </section>
    </main>
  );
}
