import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="py-12 px-4 text-center">
      {" "}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
        Craft Your Professional Resume in Minutes. <br />
        <span className="font-semibold inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text mt-4">
          Absolutely Free.
        </span>
      </h1>
      <h2 className="text-xl sm:text-2xl text-gray-700 mt-4 max-w-3xl mx-auto">
        Land Your Dream Job Faster and Smarter.
      </h2>
      <p className="text-base sm:text-lg text-gray-600 mt-6 mb-8 max-w-2xl mx-auto leading-relaxed">
        Tired of wrestling with complicated formatting and endless templates?
        Our intuitive online resume builder makes creating a stunning,
        recruiter-approved resume incredibly simple. Get noticed by hiring
        managers and beat the Applicant Tracking Systems (ATS) without spending
        a dime.
      </p>
      <Link to="builder">
        <button className="rounded-xl px-8 py-4 bg-gradient-to-r from-pink-500 to-indigo-500 text-white text-lg font-bold hover:from-pink-600 hover:to-indigo-600 transition-all duration-300 shadow-lg transform hover:scale-105">
          Create Your Free Resume Now!
        </button>
      </Link>
    </section>
  );
};

export default HeroSection;
