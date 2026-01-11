import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/Car-Paint-Correction.png')"
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Optional radial effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_50%)] z-20"></div>

      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8">
          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            <span className="block text-white mb-2">PREMIUM</span>
            <span className="block bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              AUTO DETAILING
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Elevate your vehicle's protection and aesthetics with professional ceramic coating,
            paint protection film, and premium detailing services.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={scrollToServices}
              className="px-8 py-4 bg-gradient-to-r from-white to-gray-300 text-black font-semibold rounded-lg hover:from-gray-200 hover:to-white transform hover:scale-105 transition-all shadow-lg shadow-white/30"
            >
              Explore Services
            </button>

            <button
              
            >  
            <a
  href="https://2026.geteasysoftware.com/ocar_customs/webapp/"
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 border border-gray-500/40 transition-all inline-block text-center"
>
  BOOK APPOINTMENT
</a>
           
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">5000+</div>
              <div className="text-gray-400">Cars Protected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Button */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-300 hover:text-white animate-bounce transition-colors z-30"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;
