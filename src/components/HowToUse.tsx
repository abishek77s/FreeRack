const HowToUse = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-3">
        Master Core Concepts
      </h2>
      <p className="text-gray-700 mb-4">
        Understand the basics of programming.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mb-3">
        Take It Step by Step
      </h2>
      <p className="text-gray-700 mb-4">
        Choose one language, master it, then expand.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mb-3">
        Build Projects
      </h2>
      <p className="text-gray-700 mb-4">
        Apply knowledge through hands-on experience.
      </p>

      <h2 className="text-xl font-semibold text-gray-900 mb-3">
        Use Great Resources
      </h2>
      <p className="text-gray-700 mb-4">
        Check out{" "}
        <a href="https://roadmap.sh" className="text-blue-600 underline">
          Roadmap.sh
        </a>{" "}
        for structured guidance.
      </p>
    </div>
  );
};

export default HowToUse;
