import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        vehicle: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 via-black to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to protect and enhance your vehicle? Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FORM */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { label: 'Full Name', name: 'name', type: 'text' },
                { label: 'Email', name: 'email', type: 'email' },
                { label: 'Phone', name: 'phone', type: 'tel' },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gray-400 transition"
                  />
                </div>
              ))}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <select
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-gray-400"
                >
                  <option value="">Vehicle Type</option>
                  <option value="hatchback">Hatchback</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="luxury">Luxury</option>
                </select>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-gray-400"
                >
                  <option value="">Service Interest</option>
                  <option value="ceramic">Ceramic Coating</option>
                  <option value="ppf">Paint Protection Film</option>
                  <option value="detailing">Detailing Package</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-gray-400 resize-none"
                placeholder="Your message..."
              />

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-white to-gray-300 text-black font-semibold rounded-lg hover:scale-105 transition shadow-lg shadow-white/10"
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* INFO */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              {[
                { icon: MapPin, title: 'Location', lines: ['123 Auto Center Drive', 'Los Angeles, CA'] },
                { icon: Phone, title: 'Phone', lines: ['(555) 123-4567'] },
                { icon: Mail, title: 'Email', lines: ['info@elitedetailing.com'] },
                { icon: Clock, title: 'Business Hours', lines: ['Mon–Fri: 8AM–6PM', 'Sat: 9AM–4PM'] },
              ].map((item, i) => (
                <div key={i} className="flex space-x-4 mb-4">
                  <item.icon className="h-6 w-6 text-white mt-1" />
                  <div>
                    <div className="text-white font-medium">{item.title}</div>
                    {item.lines.map((l, j) => (
                      <div key={j} className="text-gray-400">{l}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-gray-800/40 to-transparent border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>
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
