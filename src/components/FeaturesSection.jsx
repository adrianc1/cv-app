import LightningFastIcon from "./svgIcons/LighteningFastIcon.jsx";
import FreeIcon from "./svgIcons/FreeIcon.jsx";
import NoSignUpIcon from "./svgIcons/NoSignUpIcon.jsx";
import ProfessionalIcon from "./svgIcons/SheetIcon.jsx";
import UserIcon from "./svgIcons/UserIcon.jsx";
import DownloadIcon from "./svgIcons/DownloadIcon.jsx";

const FeaturesSection = () => {
  return (
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
            <UserIcon className="w-full h-full" />
          </span>
          <p className="text-lg text-gray-700">
            <span className="font-bold text-gray-900">
              User-Friendly Interface:
            </span>{" "}
            Our step-by-step guidance makes the process smooth, even if you have
            no design experience.
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
  );
};

export default FeaturesSection;
