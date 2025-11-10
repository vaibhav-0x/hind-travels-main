"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, MapPin, Phone, Mail, Star, Users, Zap, Check, Calendar, Users2, HelpCircle } from "lucide-react"

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const cars = [
    {
      id: 1,
      name: "Maruti Suzuki Dzire",
      passengers: 4,
      luggage: 2,
      description: "Perfect for solo travelers and small groups",
    },
    {
      id: 2,
      name: "Maruti Wagon R",
      passengers: 5,
      luggage: 3,
      description: "Spacious and comfortable for families",
    },
    {
      id: 3,
      name: "Maruti Ertiga",
      passengers: 7,
      luggage: 4,
      description: "Ideal for group travel and outings",
    },
    {
      id: 4,
      name: "Toyota Innova",
      passengers: 8,
      luggage: 5,
      description: "Luxury and space combined",
    },
    {
      id: 5,
      name: "Toyota Innova Crysta",
      passengers: 8,
      luggage: 5,
      description: "Premium comfort and style",
    },
    {
      id: 6,
      name: "Kia Carens",
      passengers: 7,
      luggage: 4,
      description: "Modern design with premium features",
    },
    {
      id: 7,
      name: "Tempo Traveller",
      passengers: 12,
      luggage: 6,
      description: "Best for large groups and tours",
    },
  ]

  const features = [
    {
      icon: Star,
      title: "Professional Drivers",
      description: "Trained and experienced drivers committed to your safety",
    },
    {
      icon: Zap,
      title: "Quick Booking",
      description: "Book your ride in seconds with our intuitive platform",
    },
    {
      icon: Users,
      title: "Various Vehicles",
      description: "7 different vehicle options for every travel need",
    },
  ]

  const services = [
    {
      title: "Airport Transfer",
      description: "Reliable pickups and drop-offs to and from airports",
      icon: MapPin,
    },
    {
      title: "Corporate Travel",
      description: "Premium transportation for business meetings and events",
      icon: Users2,
    },
    {
      title: "Tourist Packages",
      description: "Explore the city with comfortable sightseeing tours",
      icon: Calendar,
    },
    {
      title: "Events & Functions",
      description: "Transportation for weddings, parties, and corporate events",
      icon: Star,
    },
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Executive",
      text: "Excellent service and professional drivers. Hind Travels is my first choice for all my business trips.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Tourist",
      text: "Amazing experience with comfortable vehicles and courteous drivers. Highly recommended!",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Family Traveler",
      text: "Perfect for family outings. Safe, clean, and reliable. Will definitely use again.",
      rating: 5,
    },
  ]

  const faqItems = [
    {
      question: "How can I book a cab?",
      answer:
        "Simply fill in your pickup and drop-off locations, select your preferred date and time, choose a vehicle, and complete the booking. Our confirmation will be sent to your email and phone.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, credit cards, debit cards, and digital wallets including UPI, PayTM, and Google Pay for your convenience.",
    },
    {
      question: "Are your drivers trained and verified?",
      answer:
        "Yes, all our drivers are professionally trained, background-checked, and verified to ensure passenger safety and comfort.",
    },
    {
      question: "Can I cancel my booking?",
      answer:
        "Yes, you can cancel up to 2 hours before your scheduled pickup time with full refund. Cancellations within 2 hours may incur a cancellation fee.",
    },
    {
      question: "Do you offer corporate packages?",
      answer:
        "Yes, we offer customized corporate packages with flexible pricing and dedicated support for businesses with regular transportation needs.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">HT</span>
            </div>
            <span className="font-bold text-xl text-blue-900 hidden sm:inline">Hind Travels</span>
          </div>
          <button className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium">
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium">
                Premium Taxi Service
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
                Your Journey, Our Commitment
              </h1>
              <p className="text-lg text-blue-100 text-balance max-w-lg">
                Experience premium cab booking with professional drivers, comfortable vehicles, and exceptional service
                across the city.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-3 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold group">
                  Book Your Ride
                  <ChevronRight className="inline ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold">
                  Learn More
                </button>
              </div>
            </div>

            <div className="relative h-96 flex items-center justify-center">
              <div className="text-6xl font-bold text-white opacity-20">HIND TRAVELS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Why Choose Hind Travels?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We bring reliability, comfort, and professionalism to every journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-blue-900 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-blue-900" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">About Hind Travels</h2>
              <p className="text-gray-600 mb-4 text-lg">
                With over a decade of experience in the transportation industry, Hind Travels has established itself as
                a trusted name in premium cab booking services. We are committed to providing safe, comfortable, and
                reliable transportation solutions for business travelers, families, and tourists.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Our fleet of well-maintained vehicles and team of professional drivers ensure that every journey is a
                pleasant experience. We prioritize customer satisfaction and safety above all else.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <Check size={20} className="text-blue-900" />
                  Over 10 years of service experience
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <Check size={20} className="text-blue-900" />7 premium vehicle options
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <Check size={20} className="text-blue-900" />
                  100% verified and trained drivers
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <Check size={20} className="text-blue-900" />
                  24/7 customer support
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-2xl p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-900 mb-2">10K+</div>
                <p className="text-gray-600 text-lg mb-6">Happy Customers Served</p>
                <div className="text-5xl font-bold text-blue-900 mb-2">7</div>
                <p className="text-gray-600 text-lg">Premium Vehicles Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting a ride is simple and straightforward with our easy booking process
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Enter Location", description: "Provide your pickup and drop-off locations" },
              { step: 2, title: "Choose Date", description: "Select your preferred date and time" },
              { step: 3, title: "Pick Vehicle", description: "Choose from our 7 premium vehicle options" },
              { step: 4, title: "Confirm Booking", description: "Complete payment and get confirmation" },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-900 transition-colors">
                  <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {item.step < 4 && (
                  <div className="hidden md:block absolute top-1/4 -right-3 text-gray-400">
                    <ChevronRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Fleet Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Our Premium Fleet</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from 7 meticulously maintained vehicles for every travel need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <div
                key={car.id}
                className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-900 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative p-6">
                  <div className="text-sm font-semibold text-blue-900 uppercase tracking-wide mb-2">
                    Vehicle Type {car.id}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{car.name}</h3>
                  <p className="text-gray-600 mb-6 text-sm">{car.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-gray-200">
                    <div className="space-y-1">
                      <p className="text-xs text-gray-500 uppercase font-semibold">Passengers</p>
                      <p className="text-3xl font-bold text-blue-900">{car.passengers}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-gray-500 uppercase font-semibold">Luggage</p>
                      <p className="text-3xl font-bold text-blue-900">{car.luggage}</p>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-blue-900 text-white rounded-lg group-hover:bg-blue-800 transition-colors font-semibold">
                    Select Vehicle
                  </button>
                </div>

                <div className="absolute top-0 right-0 w-1 h-full bg-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Comprehensive transportation solutions tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div key={idx} className="bg-blue-800 rounded-xl p-6 hover:bg-blue-700 transition-colors">
                  <Icon className="text-white mb-4" size={32} />
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-blue-100">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Real reviews from our satisfied customers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2">Ready to Travel with Hind Travels?</h2>
              <p className="text-lg text-gray-600">Get 20% off on your first booking</p>
            </div>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
                  <input
                    type="text"
                    placeholder="Enter pickup location"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dropoff Location</label>
                  <input
                    type="text"
                    placeholder="Enter dropoff location"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date & Time</label>
                  <input
                    type="datetime-local"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all">
                    <option>Select a vehicle</option>
                    {cars.map((car) => (
                      <option key={car.id}>{car.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button className="w-full py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-bold text-lg mt-6">
                Book Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Find answers to common questions about our services</p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-semibold text-gray-900">{item.question}</span>
                  <HelpCircle
                    size={20}
                    className={`text-blue-900 transition-transform ${expandedFaq === idx ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-gray-900 font-bold">HT</span>
                </div>
                <span className="font-bold text-lg">Hind Travels</span>
              </div>
              <p className="text-sm text-gray-400">
                Your trusted partner for premium cab booking and taxi services across the city.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Our Fleet
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Airport Transfer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Corporate Travel
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Tourist Packages
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Events & Tours
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <Phone size={16} />
                  <span>+91 XXX-XXX-XXXX</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <Mail size={16} />
                  <span>info@hindtravels.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <MapPin size={16} />
                  <span>India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Hind Travels. All rights reserved. | Premium Taxi & Cab Booking Service</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
