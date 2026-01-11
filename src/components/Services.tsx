import { Sparkles, Shield, Droplets, Wind, Zap, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Ceramic Coating',
      description: 'Advanced nano-ceramic protection for long-lasting shine and durability. Hydrophobic properties repel water and contaminants.',
    },
    {
      icon: Droplets,
      title: 'Paint Protection Film',
      description: 'Invisible armor against rock chips, scratches, and environmental damage. Self-healing technology keeps your paint pristine.',
    },
    {
      icon: Sparkles,
      title: 'Paint Correction',
      description: 'Multi-stage polishing to remove swirls, scratches, and imperfections. Restore your paint to showroom condition.',
    },
    {
      icon: Wind,
      title: 'Interior Detailing',
      description: 'Deep cleaning and conditioning of all interior surfaces. Steam cleaning, leather treatment, and fabric protection.',
    },
    {
      icon: Zap,
      title: 'Exterior Detailing',
      description: 'Complete exterior restoration including washing, claying, polishing, and sealing. Premium care for every surface.',
    },
    {
      icon: Star,
      title: 'Maintenance Packages',
      description: 'Regular maintenance programs to keep your vehicle looking its best. Customized plans for your needs.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive automotive care solutions designed to protect and enhance your vehicle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 rounded-xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <div className="relative">
                <service.icon className="h-12 w-12 text-amber-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
