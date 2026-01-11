import { Sparkles, Shield, Droplets, Wind, Zap, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Ceramic Coating',
      description:
        'Advanced nano-ceramic protection for long-lasting shine and durability. Hydrophobic properties repel water and contaminants.',
      image: '/ceramic-coating.jpeg',
    },
    {
      icon: Droplets,
      title: 'Paint Protection Film',
      description:
        'Invisible armor against rock chips, scratches, and environmental damage. Self-healing technology keeps your paint pristine.',
      image: '/Paint-protection.jpeg',
    },
    {
      icon: Sparkles,
      title: 'Paint Correction',
      description:
        'Multi-stage polishing to remove swirls, scratches, and imperfections. Restore your paint to showroom condition.',
      image: '/Car-Paint-Correction.png',
    },
    {
      icon: Wind,
      title: 'Interior Detailing',
      description:
        'Deep cleaning and conditioning of all interior surfaces. Steam cleaning, leather treatment, and fabric protection.',
      image: '/interior decor.jpeg',
    },
    {
      icon: Zap,
      title: 'Exterior Detailing',
      description:
        'Complete exterior restoration including washing, claying, polishing, and sealing. Premium care for every surface.',
      image: '/exterior-car.jpeg',
    },
    {
      icon: Star,
      title: 'Maintenance Packages',
      description:
        'Regular maintenance programs to keep your vehicle looking its best. Customized plans for your needs.',
      image: '/maintenance-package.jpeg',
    },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive automotive care solutions designed to protect and enhance your vehicle
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-700/40 rounded-xl overflow-hidden hover:border-gray-400/60 transition-all duration-300 hover:scale-105 h-[28rem]"
            >
              {/* Image */}
              <div
                className="h-1/2 w-full bg-cover bg-center"
                style={{ backgroundImage: `url('${service.image}')` }}
              ></div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>

              {/* Content */}
              <div className="relative p-6 h-1/2 flex flex-col justify-center">
                <service.icon className="h-12 w-12 text-gray-300 group-hover:text-white mb-4 transition-colors" />
                <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-gradient-to-r from-white to-gray-300 text-black font-semibold rounded-lg hover:from-gray-200 hover:to-white transform hover:scale-105 transition-all shadow-lg shadow-white/30"
          >
            Explore Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
