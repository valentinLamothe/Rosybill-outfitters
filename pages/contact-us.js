import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { Phone, Target, Menu, X } from 'lucide-react';
import { FiFlag } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { FaFlagUsa } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa6';
import { useState } from 'react';

export default function ContactUs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Contact Us - Rosybill Outfitters</title>
        <meta name="description" content="Contact Rosybill Outfitters to plan your personalized hunting trip in Argentina. Book your adventure today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-stone-50">
        {/* Header */}
        <header className="navbar-blur shadow-lg sticky top-0 z-50 animate-slide-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <Link href="/">
                <div className="flex items-center cursor-pointer hover-glow group">
                  <Image 
                    src="/images/rosybill-outfitters-logo.jpeg" 
                    alt="Rosybill Outfitters Logo" 
                    width={120} 
                    height={60} 
                    className="h-10 sm:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-110 animate-float"
                  />
                  <div className="ml-2 sm:ml-3">
                    <div className="text-sm sm:text-lg font-bold text-stone-800 transition-all duration-300 group-hover:text-orange-700">
                      Rosybill Outfitters
                    </div>
                    <div className="text-xs text-stone-600 italic transition-all duration-300 group-hover:text-orange-600 hidden sm:block">
                      premier hunting outfitters
                    </div>
                    <div className="text-xs text-stone-500 flex items-center gap-1 mt-1 transition-all duration-300 group-hover:text-orange-500">
                      <FiFlag className="text-sm animate-pulse" />
                      <span>Argentina</span>
                    </div>
                  </div>
                </div>
              </Link>
              
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex space-x-8">
                <Link href="/" className="text-stone-700 hover:text-orange-600 font-medium transition-colors">Home</Link>
                <Link href="/wingshooting" className="text-stone-700 hover:text-orange-600 font-medium transition-colors">Wingshooting</Link>
                <Link href="/about-us" className="text-stone-700 hover:text-orange-600 font-medium transition-colors">About Us</Link>
                <Link href="/contact-us" className="text-orange-600 hover:text-orange-700 font-medium transition-colors">Contact US</Link>
              </nav>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-stone-700 hover:text-orange-600 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 transition-colors"
                >
                  {mobileMenuOpen ? (
                    <X className="block h-6 w-6" />
                  ) : (
                    <Menu className="block h-6 w-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-stone-200 rounded-b-lg shadow-lg">
                  <Link 
                    href="/" 
                    className="block px-3 py-2 text-base font-medium text-stone-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/wingshooting" 
                    className="block px-3 py-2 text-base font-medium text-stone-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Wingshooting
                  </Link>
                  <Link 
                    href="/about-us" 
                    className="block px-3 py-2 text-base font-medium text-stone-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link 
                    href="/contact-us" 
                    className="block px-3 py-2 text-base font-medium text-orange-600 bg-orange-100 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden fade-in-section"
                 style={{
                   backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/car_banner_guys.jpg')`,
                   backgroundSize: 'cover',
                   backgroundPosition: 'center'
                 }}>
          
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight slide-up-stagger-1">
                Book Your Hunt Today
              </h1>
              <p className="text-xl md:text-2xl text-stone-200 mb-8 slide-up-stagger-2">
                Expert Hunting Guides in Argentina
              </p>
              <p className="text-lg text-stone-300 mb-10 max-w-2xl mx-auto slide-up-stagger-3">
                Speak directly with our experts to plan your personalized hunting adventure in Argentina&apos;s premier territories.
              </p>
            </div>
          </div>

        </section>

        {/* Contact Methods Section */}
        <section className="py-16 bg-white fade-in-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Call or WhatsApp */}
              <div className="text-center p-6 bg-stone-50 rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-4">Call or WhatsApp</h3>
                <div className="space-y-2">
                  <p className="text-stone-600 flex items-center gap-2">
                    <FaFlagUsa className="w-4 h-4 text-red-500" />
                    4044042333
                  </p>
                  <p className="text-stone-600 flex items-center gap-2">
                    <FaFlag className="w-4 h-4 text-blue-400" />
                    +54 9 11 69274103
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="text-center p-6 bg-stone-50 rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <MdEmail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-4">Email</h3>
                <div className="space-y-2">
                  <p className="text-stone-600">rosybilloutfitters@gmail.com</p>
                </div>
              </div>

              {/* Online Booking */}
              <div className="text-center p-6 bg-stone-50 rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto bg-stone-600 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-4">Online Booking</h3>
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-16 bg-stone-100 fade-in-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Booking Form */}
              <div>
                <ContactForm />
              </div>

              {/* Hunting Information */}
              <div>
                <h2 className="text-3xl font-bold text-stone-800 mb-6">Plan Your Hunt</h2>
                
                <div className="space-y-6 text-stone-600 leading-relaxed">
                  <p className="text-lg">
                    Contact our hunting experts for a personalized hunting experience in Argentina&apos;s premier territories.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <h3 className="font-semibold text-stone-800">Prime Hunting Locations</h3>
                        <p>Access to Argentina&apos;s best hunting territories with expert local guides.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <h3 className="font-semibold text-stone-800">Expert Guidance</h3>
                        <p>Professional hunters with 30+ years experience in wingshooting and bird hunting.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <h3 className="font-semibold text-stone-800">Custom Packages</h3>
                        <p>Tailored hunting trips for red deer, wild boar, dove shooting, and waterfowl.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-orange-600" />
                      <div>
                        <p className="font-semibold text-stone-800 flex items-center gap-2">
                          <FaFlagUsa className="w-4 h-4 text-red-500" />
                          US Office: 4044042333
                        </p>
                        <p className="font-semibold text-stone-800 flex items-center gap-2">
                          <FaFlag className="w-4 h-4 text-blue-400" />
                          Argentina Office: +54 9 11 69274103
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg font-medium text-stone-800 pt-4">
                    Call today to book your hunting adventure in Argentina!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-stone-800 text-white fade-in-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
              <p className="text-lg text-stone-300 max-w-2xl mx-auto">
                For more information about Rosybill Outfitters, contact our offices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* US Office */}
              <div className="text-center p-6 bg-stone-700 rounded-lg">
                <div className="mb-4">
                  <FaFlagUsa className="w-12 h-12 text-red-500 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4">US OFFICE</h3>
                <div className="space-y-3">
                  <p className="text-2xl font-bold">4044042333</p>
                  <p className="text-orange-200">rosybilloutfitters@gmail.com</p>
                </div>
              </div>

              {/* Argentina Office */}
              <div className="text-center p-6 bg-stone-700 rounded-lg">
                <div className="mb-4">
                  <FaFlag className="w-12 h-12 text-blue-400 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4">ARGENTINA OFFICE</h3>
                <div className="space-y-3">
                  <p className="text-2xl font-bold">+54 9 11 69274103</p>
                  <p className="text-orange-200">rosybilloutfitters@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-stone-300 mb-6">
                Ready to plan your hunting adventure in Argentina?
              </p>
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded transition-colors duration-300">
                Contact Us Today
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-stone-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-stone-400">
                © 2024 Rosybill Outfitters. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>

              <style jsx>{`
                /* Basic Styles */
                html { scroll-behavior: smooth; }
                
                /* Hunter-themed Navbar */
                .navbar-blur {
                  backdrop-filter: blur(8px);
                  background-color: rgba(245, 245, 240, 0.95);
                  border-bottom: 1px solid rgba(194, 162, 108, 0.3);
                }
                
                /* Scroll-triggered Animations */
                .fade-in-section {
                  opacity: 1;
                  transform: translateY(0);
                  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .fade-in-section:not(.animated) {
                  opacity: 0;
                  transform: translateY(60px);
                }
                
                .fade-in-section.animated {
                  opacity: 1;
                  transform: translateY(0);
                }
                
                .slide-up-stagger-1 {
                  opacity: 0;
                  transform: translateY(40px);
                  animation: slideUpFade 0.8s ease-out 0.3s forwards;
                }
                
                .slide-up-stagger-2 {
                  opacity: 0;
                  transform: translateY(40px);
                  animation: slideUpFade 0.8s ease-out 0.5s forwards;
                }
                
                .slide-up-stagger-3 {
                  opacity: 0;
                  transform: translateY(40px);
                  animation: slideUpFade 0.8s ease-out 0.7s forwards;
                }
                
                .slide-up-stagger-4 {
                  opacity: 0;
                  transform: translateY(40px);
                  animation: slideUpFade 0.8s ease-out 0.9s forwards;
                }
                
                /* Hover Effects */
                .hover-lift {
                  transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                
                .hover-lift:hover {
                  transform: translateY(-5px);
                  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                }
                
                .hover-scale {
                  transition: transform 0.3s ease;
                }
                
                .hover-scale:hover {
                  transform: scale(1.02);
                }
                
                .hover-glow {
                  transition: all 0.3s ease;
                }
                
                /* Card Effects */
                .card-hover {
                  transition: all 0.4s ease;
                }
                
                .card-hover:hover {
                  transform: translateY(-8px);
                  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                }
                
                /* Keyframes */
                @keyframes fadeInUp {
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                
                @keyframes slideUpFade {
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                
                @keyframes slide-up {
                  from { opacity: 0; transform: translateY(20px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-8px); }
                }
                
                @keyframes pulse {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0.7; }
                }
                
                .animate-slide-up { animation: slide-up 0.8s ease-out; }
                .animate-float { animation: float 4s ease-in-out infinite; }
                .animate-pulse { animation: pulse 2s infinite; }
                
                /* Button Enhancements */
                button, .btn {
                  transition: all 0.3s ease;
                  position: relative;
                  overflow: hidden;
                }
                
                button:hover, .btn:hover {
                  transform: translateY(-2px);
                  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
                }
                
                /* Responsive Design */
                @media (max-width: 768px) {
                  .text-5xl { font-size: 2.25rem; }
                  .text-6xl { font-size: 2.75rem; }
                  
                  .fade-in-section {
                    animation-delay: 0.1s;
                  }
                }
              `}</style>
              
              <script dangerouslySetInnerHTML={{
                __html: `
                  (function() {
                    let currentObserver = null;
                    
                    function initScrollAnimations() {
                      // Clean up previous observer if exists
                      if (currentObserver) {
                        currentObserver.disconnect();
                      }
                      
                      // Simple and effective scroll animations
                      const observerOptions = {
                        threshold: 0.15,
                        rootMargin: '0px 0px -100px 0px'
                      };
                      
                      currentObserver = new IntersectionObserver((entries) => {
                        entries.forEach((entry) => {
                          if (entry.isIntersecting) {
                            // Add animated class to trigger animation
                            entry.target.classList.add('animated');
                            // Stop observing once animated
                            currentObserver.unobserve(entry.target);
                          }
                        });
                      }, observerOptions);
                      
                      // Start observing all fade-in sections
                      const fadeInSections = document.querySelectorAll('.fade-in-section');
                      
                      fadeInSections.forEach((section) => {
                        // Reset animation state for page navigation
                        section.classList.remove('animated');
                        currentObserver.observe(section);
                      });
                      
                      // Also observe sections already in viewport on page load
                      setTimeout(() => {
                        fadeInSections.forEach((section) => {
                          const rect = section.getBoundingClientRect();
                          const windowHeight = window.innerHeight;
                          
                          // If section is already visible, animate it immediately
                          if (rect.top < windowHeight && rect.bottom > 0) {
                            section.classList.add('animated');
                          }
                        });
                      }, 150);
                    }
                    
                    // Run immediately on load
                    initScrollAnimations();
                    
                    // Aggressive re-initialization for navigation
                    let reinitCount = 0;
                    function scheduleReinit() {
                      reinitCount++;
                      setTimeout(() => {
                        initScrollAnimations();
                      }, 100);
                    }
                    
                    // Multiple fallback strategies
                    setTimeout(scheduleReinit, 50);   // Quick check
                    setTimeout(scheduleReinit, 200);  // Medium check  
                    setTimeout(scheduleReinit, 500);  // Slow check
                    setTimeout(scheduleReinit, 1000); // Final check
                    
                    // Listen for any URL changes
                    let lastUrl = window.location.href;
                    setInterval(() => {
                      const currentUrl = window.location.href;
                      if (currentUrl !== lastUrl) {
                        lastUrl = currentUrl;
                        initScrollAnimations();
                      }
                    }, 100);
                    
                    // DOM mutation observer
                    const observer = new MutationObserver(() => {
                      setTimeout(initScrollAnimations, 50);
                    });
                    observer.observe(document.body, { childList: true, subtree: true });
                    
                    // Focus events (when coming back to page)
                    window.addEventListener('focus', () => {
                      setTimeout(initScrollAnimations, 50);
                    });
                    
                    // Visibility change
                    document.addEventListener('visibilitychange', () => {
                      if (!document.hidden) {
                        setTimeout(initScrollAnimations, 100);
                      }
                    });
                  })();
                `
              }} />
    </>
  );
}
