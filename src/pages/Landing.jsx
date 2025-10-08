import { Link } from "react-router-dom";
import DownloadIcon from "../components/svgIcons/DownloadIcon.jsx";
import FreeIcon from "../components/svgIcons/FreeIcon.jsx";
import LightningFastIcon from "../components/svgIcons/LighteningFastIcon.jsx";
import NoSignUpIcon from "../components/svgIcons/NoSignUpIcon.jsx";
import ProfessionalIcon from "../components/svgIcons/SheetIcon.jsx";
import UserFriendlyIcon from "../components/svgIcons/UserIcon.jsx";

export default function Landing() {
  return (
    <main className="w-full">
      {/* Hero Section */}
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
          managers and beat the Applicant Tracking Systems (ATS) without
          spending a dime.
        </p>
        <Link to="builder">
          <button className="rounded-xl px-8 py-4 bg-gradient-to-r from-pink-500 to-indigo-500 text-white text-lg font-bold hover:from-pink-600 hover:to-indigo-600 transition-all duration-300 shadow-lg transform hover:scale-105">
            Create Your Free Resume Now!
          </button>
        </Link>
      </section>

      <section className="w-full py-12 px-4 bg-gray-50">
        {" "}
        <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Why Choose Our Free Resume Builder?
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1: Lightning Fast */}
          <li className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <span className="flex items-center justify-center w-16 h-16 text-indigo-600 mb-4 flex-shrink-0">
              <LightningFastIcon className="w-full h-full" />
            </span>
            <p className="text-lg text-gray-700">
              <span className="font-bold text-gray-900">Lightning Fast:</span>{" "}
              Build a complete, professional resume in just minutes – not hours.
            </p>
          </li>

          {/* Feature 2: 100% Free */}
          <li className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <span className="flex items-center justify-center w-16 h-16 text-orange-500 mb-4 flex-shrink-0">
              <FreeIcon className="w-full h-full" />
            </span>
            <p className="text-lg text-gray-700">
              <span className="font-bold text-gray-900">100% Free:</span> No
              hidden fees, no subscriptions. Create and download your resume
              without any cost.
            </p>
          </li>
          {/* Feature 3: No Sign-Up Required */}
          <li className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <span className="flex items-center justify-center w-16 h-16 text-red-600 mb-4 flex-shrink-0">
              <NoSignUpIcon className="w-full h-full" />
            </span>
            <p className="text-lg text-gray-700">
              <span className="font-bold text-gray-900">
                No Sign-Up Required:
              </span>{" "}
              Start building your resume instantly, no account creation needed.
            </p>
          </li>

          {/* Feature 4: Effortlessly Professional */}
          <li className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <span className="flex items-center justify-center w-16 h-16 text-green-600 mb-4 flex-shrink-0">
              <ProfessionalIcon className="w-full h-full" />
            </span>
            <p className="text-lg text-gray-700">
              <span className="font-bold text-gray-900">
                Effortlessly Professional:
              </span>{" "}
              Access a library of modern, ATS-friendly templates designed to get
              you noticed.
            </p>
          </li>

          {/* Feature 5: User-Friendly Interface */}
          <li className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <span className="flex items-center justify-center w-16 h-16 text-yellow-500 mb-4 flex-shrink-0">
              <UserFriendlyIcon className="w-full h-full" />
            </span>
            <p className="text-lg text-gray-700">
              <span className="font-bold text-gray-900">
                User-Friendly Interface:
              </span>{" "}
              Our step-by-step guidance makes the process smooth, even if you
              have no design experience.
            </p>
          </li>

          {/* Feature 6: Download & Go */}
          <li className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <span className="flex items-center justify-center w-16 h-16 text-blue-600 mb-4 flex-shrink-0">
              <DownloadIcon className="w-full h-full" />
            </span>
            <p className="text-lg text-gray-700">
              <span className="font-bold text-gray-900">Download & Go:</span>{" "}
              Instantly download your resume in PDF format, ready to send to
              potential employers.
            </p>
          </li>
        </ul>
      </section>
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
