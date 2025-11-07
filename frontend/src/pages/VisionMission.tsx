const VisionMission = () => {
  return (
    <section className="  bg-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Vision */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-pink-500 mb-6 font-roboto 
          opacity-0 animate-fadeInUp"
        >
          Our Vision
        </h1>

        <p
          className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-16 
          opacity-0 animate-fadeInUp animation-delay-300"
        >
          To become the UK’s most trusted and joyful toy store destination inspiring
          imagination, learning, and lifelong memories for children and families across every home.
        </p>

        <div
          className="relative mt-10 opacity-0 animate-fadeInUp animation-delay-600"
        >
          <div className="absolute inset-0 flex justify-center">
            <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-pink-700 to-blue-700 rounded-full" />
          </div>
        </div>

        {/* Mission */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-500 mt-20 mb-6 font-roboto 
          opacity-0 animate-fadeInUp animation-delay-900"
        >
          Our Mission
        </h2>

        <p
          className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto 
          opacity-0 animate-fadeInUp animation-delay-1200"
        >
          At <span className="text-pink-600 font-semibold">Debrak Toys</span>, our mission is to make playtime meaningful.
          We provide high-quality, safe, and affordable toys that spark creativity,
          support development, and bring families together. With a commitment to excellent
          service and fast delivery across the UK, we aim to make every customer parent
          and child alike smile from the moment they click to the moment they play.
        </p>
      </div>
    </section>
  );
};

export default VisionMission;


