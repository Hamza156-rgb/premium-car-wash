import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Droplet, Sparkles, Shield, Wind, Zap, Star, ChevronRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Premium Car Wash & Auto Detailing Website
 * Design Philosophy: Modern Luxury Minimalism
 * - Precision over decoration
 * - Whitespace as luxury
 * - Masculine sophistication
 * - Motion with purpose
 */

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <nav className="container flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/6MaZNP4xquf8VtHtunHXAg/brand-logo-bwjyKb2zSjhcbfrJpfmWV7.webp"
              alt="Premium Car Wash"
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-gray-900 hidden sm:inline">Premium Wash</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <Button className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white">
            Book Now
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container py-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-gray-700 hover:text-blue-600 py-2 font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-700 hover:text-blue-600 py-2 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left text-gray-700 hover:text-blue-600 py-2 font-medium"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-left text-gray-700 hover:text-blue-600 py-2 font-medium"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 hover:text-blue-600 py-2 font-medium"
              >
                Contact
              </button>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden">
        <div className="relative h-screen max-h-[800px] flex items-center justify-center">
          {/* Background Image */}
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/6MaZNP4xquf8VtHtunHXAg/hero-luxury-car-wash-hSS3aERRrD3qHM4rhfwK5i.webp"
            alt="Luxury car detailing"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

          {/* Content */}
          <div className="relative container z-10 text-white max-w-2xl">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Premium Car Wash & Auto Detailing Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 font-light">
                Professional exterior washes, interior detailing, ceramic coatings, and paint protection for vehicles that deserve the best.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg h-14 px-8 transition-transform active:scale-95">
                  Book Appointment
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg h-14 px-8"
                >
                  View Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">About Our Service</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                With over a decade of experience in professional auto detailing, we've built our reputation on precision, attention to detail, and unwavering commitment to customer satisfaction. Our team of experienced technicians uses only the highest-quality products and state-of-the-art equipment to ensure your vehicle receives the premium care it deserves.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We believe that every vehicle tells a story. Whether it's a luxury sedan, a rugged truck, or a sports car, we treat each one with the same meticulous care and respect.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                <p className="text-gray-600 font-medium">Years Experience</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-blue-600 mb-2">5K+</div>
                <p className="text-gray-600 font-medium">Vehicles Serviced</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <p className="text-gray-600 font-medium">Satisfaction Focus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive auto care solutions tailored to your vehicle's needs
            </p>
          </div>

          {/* Exterior Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Exterior Services</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: "Express Wash", icon: Wind, desc: "Quick exterior wash" },
                { name: "Deluxe Wash", icon: Droplet, desc: "Comprehensive cleaning" },
                { name: "Premium Wash", icon: Sparkles, desc: "Full detailing wash" },
                { name: "Hand Wash", icon: Zap, desc: "Precision hand care" },
              ].map((service, i) => (
                <Card
                  key={i}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                >
                  <service.icon className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h4>
                  <p className="text-gray-600">{service.desc}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Detailing Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Detailing Services</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Interior Detailing", icon: Sparkles, desc: "Deep clean interior" },
                { name: "Exterior Detailing", icon: Shield, desc: "Complete exterior care" },
                { name: "Full Detail Package", icon: Star, desc: "Complete transformation" },
              ].map((service, i) => (
                <Card
                  key={i}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                >
                  <service.icon className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h4>
                  <p className="text-gray-600">{service.desc}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Protection Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Protection Services</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Ceramic Coating", icon: Shield, desc: "Long-lasting protection" },
                { name: "Paint Protection", icon: Sparkles, desc: "Advanced protection" },
                { name: "Wax & Polish", icon: Zap, desc: "Premium finish" },
              ].map((service, i) => (
                <Card
                  key={i}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                >
                  <service.icon className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h4>
                  <p className="text-gray-600">{service.desc}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Services */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Additional Services</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Engine Cleaning", icon: Zap, desc: "Professional engine care" },
                { name: "Headlight Restoration", icon: Sparkles, desc: "Restore clarity" },
                { name: "Tire Shine", icon: Shield, desc: "Professional finish" },
              ].map((service, i) => (
                <Card
                  key={i}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                >
                  <service.icon className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h4>
                  <p className="text-gray-600">{service.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Experienced Professionals", desc: "Highly trained technicians with years of expertise" },
              { title: "Eco-Friendly Products", desc: "Sustainable solutions that protect the environment" },
              { title: "Affordable Pricing", desc: "Premium quality at competitive rates" },
              { title: "Fast Service", desc: "Efficient turnaround without compromising quality" },
              { title: "Customer Satisfaction", desc: "Your satisfaction is our top priority" },
              { title: "Premium Equipment", desc: "State-of-the-art tools and technology" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gray-300 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-white opacity-50" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Wash",
                price: "$29",
                desc: "Perfect for routine cleaning",
                features: ["Exterior wash", "Tire shine", "Air freshener"],
              },
              {
                name: "Premium Detail",
                price: "$79",
                desc: "Most Popular",
                features: ["Exterior detailing", "Interior cleaning", "Wax application", "Tire shine"],
                highlighted: true,
              },
              {
                name: "Ultimate Protection",
                price: "$199",
                desc: "Complete transformation",
                features: ["Full detailing", "Ceramic coating", "Paint protection", "Interior detail"],
              },
            ].map((plan, i) => (
              <Card
                key={i}
                className={`p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "ring-2 ring-blue-600 shadow-xl scale-105"
                    : "hover:shadow-lg"
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-blue-600 text-white px-4 py-1 rounded-full inline-block text-sm font-bold mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.desc}</p>
                <div className="text-4xl font-bold text-blue-600 mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-700">
                      <ChevronRight className="w-5 h-5 text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full h-12 ${
                    plan.highlighted
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "border border-blue-600 text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  Choose Plan
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container text-center">
          <h2 className="text-5xl font-bold mb-6">Give Your Vehicle the Shine It Deserves</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience premium auto detailing that transforms your vehicle and protects your investment
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg h-14 px-12">
            Schedule Your Wash Today
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@premiumcarwash.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600">123 Auto Detail Lane, Los Angeles, CA 90001</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                  <p className="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sat - Sun: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/6MaZNP4xquf8VtHtunHXAg/brand-logo-bwjyKb2zSjhcbfrJpfmWV7.webp"
                  alt="Premium Car Wash"
                  className="w-8 h-8"
                />
                <span className="font-bold">Premium Wash</span>
              </div>
              <p className="text-gray-400">Professional auto detailing for discerning vehicle owners.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Exterior Wash</a></li>
                <li><a href="#" className="hover:text-white transition">Detailing</a></li>
                <li><a href="#" className="hover:text-white transition">Protection</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Premium Car Wash & Auto Detailing. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
        <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95">
          <Phone size={24} />
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95">
          <Mail size={24} />
        </button>
      </div>

      {/* Back to Top Button */}
      {isScrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 left-8 bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95 z-40"
        >
          <ChevronRight size={24} className="rotate-180" />
        </button>
      )}
    </div>
  );
}
