import { Shield, Zap, Eye, Award } from 'lucide-react';

const PPF = () => {
  const features = [
    {
      icon: Shield,
      title: 'Impact Resistance',
      description: 'Protects against rock chips, road debris, and minor impacts',
    },
    {
      icon: Zap,
      title: 'Self-Healing',
      description: 'Heat-activated technology repairs minor scratches automatically',
    },
    {
      icon: Eye,
      title: 'Crystal Clear',
      description:
        "Virtually invisible protection that preserves your paint's appearance",
    },
    {
      icon: Award,
      title: 'Warranty Backed',
      description:
        '10-year manufacturer warranty against yellowing and cracking',
    },
  ];

  const coverage = [
    'Full Front End',
    'Hood',
    'Fenders',
    'Mirrors',
    'Door Edges',
    'Rocker Panels',
    'Rear Bumper',
    'Full Vehicle Wrap',
  ];

  return (
    <section
      id="ppf"
      className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Paint Protection Film
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The ultimate invisible armor for your vehicle. Our premium PPF protects
            your investment while maintaining the factory finish you love.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-700/40 rounded-xl p-6 hover:border-gray-400/60 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coverage */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Coverage Options
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {coverage.map((area, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-black border border-gray-700/40 rounded-lg p-4 text-center hover:border-gray-400/60 transition-all"
                >
                  <p className="text-white font-medium">{area}</p>
                </div>
              ))}
            </div>

            {/* Button */}
            <button
              >
             <a
  href="https://2026.geteasysoftware.com/ocar_customs/webapp/"
  className="w-full ml-32 mt-4 px-8 py-4  bg-gradient-to-r from-white to-gray-300 text-black font-semibold rounded-lg hover:from-gray-200 hover:to-white transform hover:scale-105 transition-all shadow-lg shadow-white/30 inline-block text-center"
>
  BOOK APPOINTMENT
</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PPF;
