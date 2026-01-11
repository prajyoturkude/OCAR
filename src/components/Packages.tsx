import { Package, Star, Crown } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      icon: Package,
      name: 'Essential Care',
      description: 'Perfect for regular maintenance and keeping your vehicle looking its best',
      features: [
        'Premium Hand Wash',
        'Wheel & Tire Cleaning',
        'Interior Vacuum',
        'Window Cleaning',
        'Tire Shine',
        'Exterior Wipe Down',
      ],
      popular: false,
    },
    {
      icon: Star,
      name: 'Premium Protection',
      description: 'Comprehensive detailing with added protection for discerning owners',
      features: [
        'Everything in Essential',
        'Clay Bar Treatment',
        'Single-Stage Polish',
        'Paint Sealant Application',
        'Interior Deep Clean',
        'Leather Conditioning',
        'Engine Bay Cleaning',
      ],
      popular: true,
    },
    {
      icon: Crown,
      name: 'Ultimate Elite',
      description: 'The pinnacle of automotive care with maximum protection',
      features: [
        'Everything in Premium',
        'Multi-Stage Paint Correction',
        'Ceramic Coating Application',
        'PPF on High-Impact Areas',
        'Premium Interior Treatment',
        'Headlight Restoration',
        '12-Month Maintenance Plan',
      ],
      popular: false,
    },
  ];

  return (
    <section id="packages" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Service Packages
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive care packages designed to meet every need and budget
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden transition-all ${
                pkg.popular
                  ? 'border-2 border-white scale-105 shadow-lg shadow-white/20'
                  : 'border border-gray-700/40'
              }`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-white to-gray-300 text-black px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8">
                <pkg.icon className="h-12 w-12 text-gray-300 mb-4" />

                <h3 className="text-2xl font-bold text-white mb-3">
                  {pkg.name}
                </h3>

                <p className="text-gray-400 mb-6">{pkg.description}</p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button
                 ><a
  href="https://2026.geteasysoftware.com/ocar_customs/webapp/"
  className={`w-full ml-10 px-6 py-3 font-semibold rounded-lg transition-all text-center inline-block ${
    pkg.popular
      ? 'bg-gradient-to-r from-white to-gray-300 text-black hover:from-gray-200 hover:to-white shadow-lg shadow-white/30'
      : 'bg-white/10 text-white hover:bg-white/20 border border-gray-700/40'
  }`}
>
  BOOK APPOINTMENT
</a>

                 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
