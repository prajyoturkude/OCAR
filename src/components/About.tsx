import { Award, Users, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We never compromise on quality. Every vehicle receives meticulous attention to detail.',
    },
    {
      icon: Users,
      title: 'Experience',
      description: 'Over 10 years of expertise in automotive protection and detailing services.',
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Certified technicians using the latest techniques and premium products.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We treat every vehicle as if it were our own, with care and dedication.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
                About Elite Detailing
              </span>
            </h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Founded on a passion for automotive excellence, Elite Detailing has become the
                trusted choice for vehicle protection and enhancement in the region.
              </p>
              <p>
                Our team of certified professionals combines years of experience with cutting-edge
                technology to deliver results that exceed expectations. We use only premium products
                from industry-leading brands to ensure your vehicle receives the best care possible.
              </p>
              <p>
                From everyday drivers to exotic supercars, we approach every project with the same
                level of dedication and attention to detail. Your satisfaction is our highest priority.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 rounded-xl p-6 hover:border-amber-500/50 transition-all"
              >
                <value.icon className="h-10 w-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-amber-500 mb-2">10+</div>
              <div className="text-gray-400">Years in Business</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-500 mb-2">5000+</div>
              <div className="text-gray-400">Satisfied Customers</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-500 mb-2">100%</div>
              <div className="text-gray-400">Quality Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
