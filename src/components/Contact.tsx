import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-900 via-black to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to protect and enhance your vehicle? Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ENQUIRY CTA */}
          <div className="flex items-center justify-center">
            <div className="text-center bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl p-10 w-full">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>

              <p className="text-gray-400 mb-8">
                Click below to send us your enquiry and our team will assist you.
              </p>

              <button
                onClick={() =>
                  window.open(
                    'https://2026.geteasysoftware.com/ocar_customs/qr/index.php?branch_id=UzN4eE9JUEUzaUltOERvTTJKVVNGUT09',
                    '_blank'
                  )
                }
                className="px-10 py-4 bg-gradient-to-r from-white to-gray-300 text-black font-semibold rounded-lg hover:scale-105 transition-all shadow-lg shadow-white/20"
              >
                Enquiry Now
              </button>
            </div>
          </div>

          {/* INFO */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              {[
                {
                  icon: MapPin,
                  title: 'Location',
                  lines: ['123 Auto Center Drive', 'Los Angeles, CA'],
                },
                { icon: Phone, title: 'Phone', lines: ['(555) 123-4567'] },
                { icon: Mail, title: 'Email', lines: ['info@elitedetailing.com'] },
                {
                  icon: Clock,
                  title: 'Business Hours',
                  lines: ['Mon–Fri: 8AM–6PM', 'Sat: 9AM–4PM'],
                },
              ].map((item, i) => (
                <div key={i} className="flex space-x-4 mb-4">
                  <item.icon className="h-6 w-6 text-white mt-1" />
                  <div>
                    <div className="text-white font-medium">{item.title}</div>
                    {item.lines.map((l, j) => (
                      <div key={j} className="text-gray-400">
                        {l}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-gray-800/40 to-transparent border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Why Choose Us?
              </h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  'Free consultation and quote',
                  'Premium products and materials',
                  'Certified technicians',
                  'Warranty on all services',
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
