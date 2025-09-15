import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Building, Crosshair, Menu, X } from 'lucide-react';
import { FiFlag } from 'react-icons/fi';
import { MdDinnerDining } from 'react-icons/md';
import { useState } from 'react';

export default function Wingshooting() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Wingshooting - Rosybill Outfitters</title>
        <meta name="description" content="Premier wingshooting experiences in Argentina - Buenos Aires, Entre Rios, and Cordoba hunting territories." />
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
                <Link href="/wingshooting" className="text-orange-600 hover:text-orange-700 font-medium transition-colors">Wingshooting</Link>
                <Link href="/about-us" className="text-stone-700 hover:text-orange-600 font-medium transition-colors">About Us</Link>
                <Link href="/contact-us" className="text-stone-700 hover:text-orange-600 font-medium transition-colors">Contact US</Link>
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
                    className="block px-3 py-2 text-base font-medium text-orange-600 bg-orange-100 rounded-md transition-colors"
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
                    className="block px-3 py-2 text-base font-medium text-stone-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
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
                   backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/patridge_wallpaper.jpg')`,
                   backgroundSize: 'cover',
                   backgroundPosition: 'center'
                 }}>
          
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight slide-up-stagger-1">
                Wingshooting Argentina
              </h1>
              <p className="text-xl md:text-2xl text-stone-200 mb-8 slide-up-stagger-2">
                World-Class Bird Hunting Territories
              </p>
              <p className="text-lg text-stone-300 mb-10 max-w-2xl mx-auto slide-up-stagger-3">
                Experience Argentina&apos;s premier wingshooting destinations with expert guides and authentic hunting lodges.
              </p>
            </div>
          </div>
        </section>

        {/* Hunting Territories Section */}
        <section className="py-16 bg-white fade-in-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-stone-800 mb-4">Hunting Territories</h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Explore Argentina&apos;s most productive wingshooting regions with professional guides
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Buenos Aires */}
              <div className="bg-stone-50 rounded-lg overflow-hidden shadow-md">
                <div className="h-64">
                  <Image
                    src="/images/accomodation1.webp"
                    alt="Buenos Aires Hunting Lodge"
                    width={400}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-stone-800 mb-3">Buenos Aires</h3>
                  <p className="text-stone-600 mb-4">(Ducks and Partridge)</p>
                  <p className="text-stone-700">
                    Hunt premium waterfowl and upland game birds in Buenos Aires province. 
                    Traditional estancia with expert guides and authentic Argentine hospitality.
                  </p>
                </div>
              </div>

              {/* Entre Rios */}
              <div className="bg-stone-50 rounded-lg overflow-hidden shadow-md">
                <div className="h-64">
                  <Image
                    src="/images/accomodation2.webp"
                    alt="Entre Rios Hunting Lodge"
                    width={400}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-stone-800 mb-3">Entre Ríos</h3>
                  <p className="text-stone-600 mb-4">(Doves)</p>
                  <p className="text-stone-700">
                    World-renowned dove hunting in Entre Ríos province. 
                    High-volume shooting opportunities in prime agricultural areas with luxury accommodations.
                  </p>
                </div>
              </div>

              {/* Cordoba */}
              <div className="bg-stone-50 rounded-lg overflow-hidden shadow-md">
                <div className="h-64">
                  <Image
                    src="/images/accomodation3.webp"
                    alt="Cordoba Hunting Lodge"
                    width={400}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-stone-800 mb-3">Córdoba</h3>
                  <p className="text-stone-600 mb-4">(Doves)</p>
                  <p className="text-stone-700">
                    The dove shooting capital of the world. 
                    Experience unlimited shooting opportunities in Córdoba&apos;s legendary hunting fields.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-16 bg-stone-100 fade-in-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-stone-800 mb-4">What to Expect</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-stone-800 mb-2">Expert Guides</h3>
                <p className="text-stone-600">Professional hunting guides with local expertise</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-stone-800 mb-2">Premium Lodges</h3>
                <p className="text-stone-600">Authentic Argentine estancias with modern amenities</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-stone-600 rounded-lg flex items-center justify-center mb-4">
                  <MdDinnerDining className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-stone-800 mb-2">Gourmet Cuisine</h3>
                <p className="text-stone-600">Traditional Argentine barbecue and fine wines</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-amber-600 rounded-lg flex items-center justify-center mb-4">
                  <Crosshair className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-stone-800 mb-2">Equipment</h3>
                <p className="text-stone-600">Top-quality firearms and ammunition provided</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-stone-800 text-white fade-in-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Book Your Wingshooting Adventure</h2>
              <p className="text-lg text-stone-300 mb-8 max-w-2xl mx-auto">
                Contact our hunting experts to plan your personalized wingshooting experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded transition-colors duration-300">
Call US: 4044042333
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded transition-colors duration-300">
Call ARG: +54 9 11 69274103
                </button>
              </div>
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
        
        /* Image Effects */
        .image-hover {
          transition: all 0.4s ease;
        }
        
        .image-hover:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
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
