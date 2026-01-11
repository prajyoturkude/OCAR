import { Shield, Droplet, Sun, Clock } from 'lucide-react';

const CeramicCoating = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Ultimate Protection',
      description:
        '9H hardness coating protects against scratches, chemical etching, and UV damage',
    },
    {
      icon: Droplet,
      title: 'Hydrophobic Effect',
      description:
        'Water beads and rolls off instantly, keeping your car cleaner for longer',
    },
    {
      icon: Sun,
      title: 'Enhanced Gloss',
      description:
        "Deep, reflective shine that enhances your paint's color and depth",
    },
    {
      icon: Clock,
      title: 'Long-Lasting',
      description:
        'Up to 5+ years of protection with proper maintenance',
    },
  ];

  return (
    <section id="ceramic" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                Ceramic Coating
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your vehicle with our premium ceramic coating technology. This advanced
              nano-ceramic layer bonds to your paint at a molecular level, creating an incredibly
              durable, glossy, and protective shield.
            </p>

            {/* Benefits */}
            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <button
           >
              <a
  href="https://2026.geteasysoftware.com/ocar_customs/webapp/"
  className="px-8 py-4 bg-gradient-to-r from-white to-gray-300 text-black font-semibold rounded-lg hover:from-gray-200 hover:to-white transform hover:scale-105 transition-all shadow-lg shadow-white/30 inline-block text-center"
>
  BOOK APPOINTMENT
</a>
            
            </button>
          </div>

          {/* Visual Card */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-white/10 to-transparent rounded-2xl overflow-hidden border border-gray-700/40">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <Shield className="h-32 w-32 text-gray-300 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Premium Protection
                  </h3>
                  <p className="text-gray-300">
                    Professional-grade ceramic coating application with lifetime support
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CeramicCoating;
