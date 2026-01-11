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
      description: 'Virtually invisible protection that preserves your paint\'s appearance',
    },
    {
      icon: Award,
      title: 'Warranty Backed',
      description: '10-year manufacturer warranty against yellowing and cracking',
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
    <section id="ppf" className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
              Paint Protection Film
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The ultimate invisible armor for your vehicle. Our premium PPF protects your investment
            while maintaining the factory finish you love.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 rounded-xl p-6 hover:border-amber-500/50 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Coverage Options</h3>
            <div className="grid grid-cols-2 gap-4">
              {coverage.map((area, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 rounded-lg p-4 text-center hover:border-amber-500/50 transition-all"
                >
                  <p className="text-white font-medium">{area}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-lg hover:from-amber-400 hover:to-amber-500 transform hover:scale-105 transition-all shadow-lg shadow-amber-500/50"
            >
              View PPF Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PPF;
