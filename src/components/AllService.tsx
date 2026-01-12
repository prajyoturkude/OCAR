import {
  Sparkles,
  Shield,
  Droplets,
  Wind,
  Zap,
  Star,
  Car,
  Wrench,
  SprayCan,
} from 'lucide-react';

const ServicesPages = () => {
  const mainServices = [
    {
      icon: Shield,
      title: 'Ceramic Coating',
      description:
        'Advanced nano-ceramic protection for long-lasting shine and durability.',
      image: '/ceramic-coating.jpeg',
    },
    {
      icon: Droplets,
      title: 'Paint Protection Film',
      description:
        'Self-healing invisible protection against scratches and stone chips.',
      image: '/Paint-protection.jpeg',
    },
    {
      icon: Sparkles,
      title: 'Paint Correction',
      description:
        'Multi-stage polishing to remove swirls and restore showroom finish.',
      image: '/Car-Paint-Correction.png',
    },
    {
      icon: Wind,
      title: 'Interior Detailing',
      description:
        'Deep cleaning of seats, dashboard, trims, and fabric surfaces.',
      image: '/interior decor.jpeg',
    },
    {
      icon: Zap,
      title: 'Exterior Detailing',
      description:
        'Complete exterior restoration including wash, polish, and seal.',
      image: '/exterior-car.jpeg',
    },
    {
      icon: Star,
      title: 'Maintenance Packages',
      description:
        'Customized plans to keep your vehicle in perfect condition.',
      image: '/maintenance-package.jpeg',
    },
  ];

  const additionalServices = [
    'Wash',
    'Engine Deep Cleaning',
    'Engine Steam Cleaning',
    'Water Removal From Interior',
    'Seat Deep Cleaning',
    'Rear Seat Deep Cleaning',
    'Ceiling Interior Cleaning',
    'Ozone Disinfection',
    'Interior Deep Cleaning',
    'Door Trim Cleaning',
    'Sticker Removal',
    'Hard Water Scale Removal',
  ];

  const fullDetailing = [
    'Removing Front & Rear Bumper & Accessories',
    'Removing All Wheels & Fender Linings',
    'Engine Steam Cleaning',
    'Underbody Wash',
    'Interior Deep Cleaning',
    'Ozone Disinfection',
  ];

  const ceramicPackages = [
    'Ceramic Packages',
    'Interior Seats Protection',
    'Door Trims Protection',
    'Dashboard Protection',
    'Plastic Parts Protection',
  ];

  const ppfBrands = ['Garware', 'Knit Skin', 'Blumer'];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Services – Ocar
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Premium car care & protection services
          </p>
        </div>

        {/* MAIN 6 SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-black border border-gray-700/40 rounded-xl overflow-hidden hover:border-gray-400/60 transition-all hover:scale-105 h-[28rem]"
            >
              <div
                className="h-1/2 bg-cover bg-center"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              <div className="p-6 h-1/2 flex flex-col justify-center">
                <service.icon className="h-12 w-12 text-gray-300 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ADDITIONAL SERVICES */}
        <ServiceGroup
          title="Deep Cleaning Services"
          icon={SprayCan}
          items={additionalServices}
        />

        <ServiceGroup
          title="Exterior / Interior Deep Cleaning (Complete Package)"
          icon={Car}
          items={fullDetailing}
        />

        <ServiceGroup
          title="Ceramic Coating & Packages"
          icon={Shield}
          items={ceramicPackages}
        />

        <ServiceGroup
          title="Paint Protection Film (PPF)"
          icon={Wrench}
          items={ppfBrands}
        />

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href="https://2026.geteasysoftware.com/ocar_customs/webapp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gradient-to-r from-white to-gray-300 text-black font-semibold rounded-lg hover:scale-105 transition-all shadow-lg shadow-white/30"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

/* 🔹 Reusable Service Group Component */
const ServiceGroup = ({
  title,
  icon: Icon,
  items,
}: {
  title: string;
  icon: any;
  items: string[];
}) => (
  <div className="mb-20">
    <div className="flex items-center gap-3 mb-6">
      <Icon className="h-8 w-8 text-gray-300" />
      <h2 className="text-3xl font-semibold text-white">{title}</h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-gray-900 to-black border border-gray-700/40 rounded-lg p-5 hover:border-gray-400/60 transition"
        >
          <p className="text-gray-300">{item}</p>
        </div>
      ))}
    </div>
  </div>
);

export default ServicesPages;
