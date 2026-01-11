import { useState } from 'react';
import { Car } from 'lucide-react';

const Pricing = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<'hatchback' | 'sedan' | 'suv' | 'luxury'>('sedan');

  const vehicleTypes = [
    { id: 'hatchback' as const, name: 'Hatchback', description: 'Compact cars' },
    { id: 'sedan' as const, name: 'Sedan', description: 'Standard cars' },
    { id: 'suv' as const, name: 'SUV', description: 'Large vehicles' },
    { id: 'luxury' as const, name: 'Luxury', description: 'Premium vehicles' },
  ];

  const pricing = {
    hatchback: {
      essentialCare: '$99',
      premiumProtection: '$299',
      ultimateElite: '$799',
      ceramicCoating: '$599',
      ppfFrontEnd: '$1,199',
      ppfFullVehicle: '$3,999',
    },
    sedan: {
      essentialCare: '$129',
      premiumProtection: '$349',
      ultimateElite: '$899',
      ceramicCoating: '$699',
      ppfFrontEnd: '$1,399',
      ppfFullVehicle: '$4,499',
    },
    suv: {
      essentialCare: '$159',
      premiumProtection: '$449',
      ultimateElite: '$1,099',
      ceramicCoating: '$899',
      ppfFrontEnd: '$1,799',
      ppfFullVehicle: '$5,499',
    },
    luxury: {
      essentialCare: '$199',
      premiumProtection: '$599',
      ultimateElite: '$1,499',
      ceramicCoating: '$1,199',
      ppfFrontEnd: '$2,499',
      ppfFullVehicle: '$7,999',
    },
  };

  const services = [
    { name: 'Essential Care Package', key: 'essentialCare' as const },
    { name: 'Premium Protection Package', key: 'premiumProtection' as const },
    { name: 'Ultimate Elite Package', key: 'ultimateElite' as const },
    { name: 'Ceramic Coating', key: 'ceramicCoating' as const },
    { name: 'PPF - Front End', key: 'ppfFrontEnd' as const },
    { name: 'PPF - Full Vehicle', key: 'ppfFullVehicle' as const },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Select your vehicle type to see our competitive pricing
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {vehicleTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedVehicle(type.id)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-lg font-semibold transition-all ${
                selectedVehicle === type.id
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/50'
                  : 'bg-gray-900 text-gray-300 hover:bg-gray-800 border border-amber-500/20'
              }`}
            >
              <Car className="h-5 w-5" />
              <div className="text-left">
                <div className="font-bold">{type.name}</div>
                <div className="text-xs opacity-75">{type.description}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-amber-500/10 border-b border-amber-500/20">
                  <th className="text-left p-6 text-white font-semibold">Service</th>
                  <th className="text-right p-6 text-white font-semibold">Price</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr
                    key={index}
                    className="border-b border-amber-500/10 hover:bg-amber-500/5 transition-colors"
                  >
                    <td className="p-6 text-gray-300">{service.name}</td>
                    <td className="p-6 text-right">
                      <span className="text-2xl font-bold text-amber-500">
                        {pricing[selectedVehicle][service.key]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">
            All prices include materials and labor. Custom quotes available for specialized services.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-lg hover:from-amber-400 hover:to-amber-500 transform hover:scale-105 transition-all shadow-lg shadow-amber-500/50"
          >
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
