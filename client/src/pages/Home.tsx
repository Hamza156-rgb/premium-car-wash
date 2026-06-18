import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Menu, X, ArrowRight, Star, Check } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Premium Car Wash & Auto Detailing - Elegant Redesign
 * Design Philosophy: Modern Luxury Minimalism with Sophisticated Elegance
 * - Premium typography hierarchy
 * - Elegant asymmetric layouts
 * - Sophisticated color transitions
 * - Advanced micro-interactions
 * - Luxury brand positioning
 */

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("exterior");

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
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Premium Sticky Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <nav className="container flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/6MaZNP4xquf8VtHtunHXAg/brand-logo-bwjyKb2zSjhcbfrJpfmWV7.webp"
              alt="Premium Car Wash"
              className="w-10 h-10 transition-transform group-hover:scale-110"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-bold text-gray-900 leading-none">PRISTINE</span>
              <span className="text-xs text-gray-500 font-light tracking-widest">AUTO CARE</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {["Services", "About", "Gallery", "Pricing", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <Button className="hidden lg:flex bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 h-11 rounded-full transition-all hover:shadow-lg hover:scale-105 active:scale-95">
            Book Now
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
            <div className="container py-6 flex flex-col gap-4">
              {["Services", "About", "Gallery", "Pricing", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-gray-700 hover:text-blue-600 py-2 font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-11 rounded-full">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - Elegant & Sophisticated */}
      <section className="relative pt-20 overflow-hidden">
        <div className="relative h-screen max-h-[900px] flex items-center justify-center">
          {/* Background Image with Parallax */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/6MaZNP4xquf8VtHtunHXAg/hero-luxury-car-wash-hSS3aERRrD3qHM4rhfwK5i.webp"
              alt="Luxury car detailing"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
            />
          </div>

          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          
          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative container z-10 text-white max-w-3xl">
            <div className="space-y-8 animate-fade-in">
              {/* Tagline */}
              <div className="inline-block">
                <span className="text-sm font-semibold tracking-widest text-blue-300 uppercase">
                  ✨ Premium Auto Detailing
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight">
                Your Vehicle
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
                  Deserves Perfection
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl leading-relaxed">
                Experience meticulous detailing that transforms your vehicle into a masterpiece. Professional care, premium products, exceptional results.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg h-14 px-10 rounded-full font-semibold transition-all hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-2 group">
                  Book Your Appointment
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-lg h-14 px-10 rounded-full font-semibold backdrop-blur-sm"
                >
                  Explore Services
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex gap-8 pt-8 text-sm">
                <div className="flex items-center gap-2">
                  <Star size={18} className="text-yellow-300 fill-yellow-300" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={18} className="text-green-300" />
                  <span>10+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
            <path
              d="M0,50 Q360,0 720,50 T1440,50 L1440,120 L0,120 Z"
              fill="white"
              className="drop-shadow-lg"
            />
          </svg>
        </div>
      </section>

      {/* About Section - Elegant Grid */}
      <section id="about" className="py-32 bg-white relative">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">About Us</span>
                <h2 className="text-5xl font-bold text-gray-900 mt-4 leading-tight">
                  Precision Meets Passion
                </h2>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                With over a decade of expertise in professional auto detailing, we've perfected the art of vehicle care. Our commitment to excellence means every vehicle receives meticulous attention to detail using only premium products and cutting-edge equipment.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                We don't just clean vehicles—we restore them to their original glory and protect them for the future. Your satisfaction isn't just our goal; it's our obsession.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { number: "10+", label: "Years" },
                  { number: "5K+", label: "Vehicles" },
                  { number: "100%", label: "Satisfied" },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-6 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl border border-blue-100 hover:shadow-lg transition-all">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 lg:h-full min-h-96">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/6MaZNP4xquf8VtHtunHXAg/hero-car-wash-action-PgfWjrc8gEJwozEpVAKGoj.webp"
                alt="Professional car wash"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Tabbed Interface */}
      <section id="services" className="py-32 bg-gray-50 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -mr-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -ml-48" />

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">Services</span>
            <h2 className="text-5xl font-bold text-gray-900 mt-4">
              Comprehensive Auto Care Solutions
            </h2>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              From routine maintenance to premium protection, we offer everything your vehicle needs
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            {[
              { id: "exterior", label: "Exterior" },
              { id: "detailing", label: "Detailing" },
              { id: "protection", label: "Protection" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {activeTab === "exterior" && (
              <>
                {[
                  { name: "Express Wash", price: "$29", desc: "Quick exterior wash with premium finish" },
                  { name: "Deluxe Wash", price: "$49", desc: "Comprehensive cleaning with tire shine" },
                  { name: "Premium Wash", price: "$79", desc: "Full detailing wash with wax application" },
                ].map((service, i) => (
                  <ServiceCard key={i} service={service} delay={i} />
                ))}
              </>
            )}
            {activeTab === "detailing" && (
              <>
                {[
                  { name: "Interior Detailing", price: "$89", desc: "Deep clean interior with conditioning" },
                  { name: "Exterior Detailing", price: "$119", desc: "Complete exterior care and polish" },
                  { name: "Full Detail Package", price: "$199", desc: "Complete transformation inside and out" },
                ].map((service, i) => (
                  <ServiceCard key={i} service={service} delay={i} />
                ))}
              </>
            )}
            {activeTab === "protection" && (
              <>
                {[
                  { name: "Ceramic Coating", price: "$299", desc: "Long-lasting paint protection" },
                  { name: "Paint Protection Film", price: "$399", desc: "Advanced protection from damage" },
                  { name: "Premium Package", price: "$699", desc: "Ceramic + PPF + Interior Protection" },
                ].map((service, i) => (
                  <ServiceCard key={i} service={service} delay={i} />
                ))}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Elegant Cards */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">Why Choose Us</span>
            <h2 className="text-5xl font-bold text-gray-900 mt-4">
              Excellence in Every Detail
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "⚡", title: "Expert Technicians", desc: "Highly trained professionals with years of experience" },
              { icon: "🌱", title: "Eco-Friendly", desc: "Sustainable products that protect the environment" },
              { icon: "💎", title: "Premium Products", desc: "Only the finest detailing products and equipment" },
              { icon: "⏱️", title: "Fast Turnaround", desc: "Efficient service without compromising quality" },
              { icon: "✅", title: "Satisfaction Guaranteed", desc: "100% customer satisfaction or your money back" },
              { icon: "🏆", title: "Award Winning", desc: "Recognized for excellence in auto detailing" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Premium Grid */}
      <section id="gallery" className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">Gallery</span>
            <h2 className="text-5xl font-bold text-gray-900 mt-4">
              Transformation Gallery
            </h2>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              See the dramatic before-and-after transformations we achieve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/6MaZNP4xquf8VtHtunHXAg/gallery-1-before-after-UFzAsR4dcXyenxwEpzyUcU.webp',
                title: 'Luxury Sedan Detail',
                desc: 'Complete ceramic coating'
              },
              {
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/6MaZNP4xquf8VtHtunHXAg/gallery-2-before-after-kKAkPw69xhWQBYR4Gis3QM.webp',
                title: 'White SUV Restoration',
                desc: 'Deep cleaning & protection'
              },
              {
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/6MaZNP4xquf8VtHtunHXAg/gallery-3-before-after-czAKzcKtksDFR6zAc5DWJ6.webp',
                title: 'Sports Car Polish',
                desc: 'Mirror-like finish achieved'
              },
              {
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/6MaZNP4xquf8VtHtunHXAg/gallery-4-before-after-cvbEdN9fJjUScgNoFU3RxZ.webp',
                title: 'Red Sedan Transformation',
                desc: 'Oxidation removal & wax'
              },
              {
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/6MaZNP4xquf8VtHtunHXAg/gallery-5-before-after-4v5moV58ZMcoxtH8VjmJmA.webp',
                title: 'Blue Luxury Detail',
                desc: 'Full interior & exterior'
              },
              {
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/6MaZNP4xquf8VtHtunHXAg/gallery-1-before-after-UFzAsR4dcXyenxwEpzyUcU.webp',
                title: 'Premium Protection',
                desc: 'Ceramic coating applied'
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-300 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <p className="font-bold text-lg">{item.title}</p>
                    <p className="text-sm text-gray-300">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Premium Cards */}
      <section id="pricing" className="py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">Pricing</span>
            <h2 className="text-5xl font-bold text-gray-900 mt-4">
              Transparent Pricing, Exceptional Value
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Essential",
                price: "$49",
                desc: "Perfect for routine maintenance",
                features: ["Exterior Wash", "Tire Shine", "Air Freshener"],
              },
              {
                name: "Premium",
                price: "$129",
                desc: "Most Popular - Complete detailing",
                features: ["Exterior Detail", "Interior Clean", "Wax Application", "Tire Shine"],
                highlighted: true,
              },
              {
                name: "Ultimate",
                price: "$299",
                desc: "Complete transformation & protection",
                features: ["Full Detail", "Ceramic Coating", "Paint Protection", "Interior Detail"],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${
                  plan.highlighted
                    ? "ring-2 ring-blue-600 shadow-2xl scale-105 bg-gradient-to-br from-blue-50 to-white"
                    : "bg-white border border-gray-200 hover:shadow-xl hover:border-blue-200"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 text-center font-bold text-sm">
                    MOST POPULAR
                  </div>
                )}

                <div className={`p-8 ${plan.highlighted ? "pt-16" : ""}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.desc}</p>

                  <div className="mb-8">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-gray-700">
                        <Check size={20} className="text-blue-600 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full h-12 rounded-full font-semibold transition-all ${
                      plan.highlighted
                        ? "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg hover:scale-105"
                        : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    Choose Plan
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

        <div className="container relative z-10 text-center">
          <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their most prized possessions
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg h-14 px-12 rounded-full font-semibold transition-all hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-2 group mx-auto">
            Schedule Your Appointment
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Contact Section - Elegant */}
      <section id="contact" className="py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">Contact</span>
            <h2 className="text-5xl font-bold text-gray-900 mt-4">
              Get In Touch
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              {[
                { icon: Phone, title: "Phone", value: "(555) 123-4567" },
                { icon: Mail, title: "Email", value: "info@premiumcarwash.com" },
                { icon: MapPin, title: "Location", value: "123 Auto Detail Lane, Los Angeles, CA 90001" },
                { icon: Clock, title: "Hours", value: "Mon-Fri: 8AM-6PM | Sat-Sun: 9AM-5PM" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 rounded-xl font-semibold transition-all hover:shadow-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663768090420/6MaZNP4xquf8VtHtunHXAg/brand-logo-bwjyKb2zSjhcbfrJpfmWV7.webp"
                  alt="Premium Car Wash"
                  className="w-8 h-8"
                />
                <div>
                  <p className="font-bold text-sm">PRISTINE</p>
                  <p className="text-xs text-gray-400">AUTO CARE</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Premium auto detailing for discerning vehicle owners who demand perfection.
              </p>
            </div>
            {[
              { title: "Services", links: ["Exterior Wash", "Detailing", "Protection"] },
              { title: "Company", links: ["About", "Contact", "Blog"] },
              { title: "Follow", links: ["Facebook", "Instagram", "Twitter"] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-bold mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
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
          ↑
        </button>
      )}
    </div>
  );
}

// Service Card Component
function ServiceCard({ service, delay }: { service: any; delay: number }) {
  return (
    <div
      className="group relative p-8 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden"
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
            <span className="text-xl">✨</span>
          </div>
          <span className="text-2xl font-bold text-blue-600">{service.price}</span>
        </div>

        <h4 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>

        <div className="mt-6 flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
          Learn More
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
}
