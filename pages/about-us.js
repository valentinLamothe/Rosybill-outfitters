import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Building, Menu, X } from 'lucide-react';
import { FiFlag } from 'react-icons/fi';
import { GiFeatheredWing } from 'react-icons/gi';
import { useState } from 'react';

export default function AboutUs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>About Us - Rosybill Outfitters</title>
        <meta name="description" content="Learn about Rosybill Outfitters - Argentina&apos;s premier hunting outfitters with 30+ years of experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rosybill-outfitters.vercel.app/about-us" />
        <meta property="og:title" content="About Rosybill Outfitters - Argentina Hunting Experts" />
        <meta property="og:description" content="Learn about Rosybill Outfitters - Argentina&apos;s premier hunting outfitters with 30+ years of experience." />
        <meta property="og:image" content="https://rosybill-outfitters.vercel.app/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Rosybill Outfitters" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://rosybill-outfitters.vercel.app/about-us" />
        <meta name="twitter:title" content="About Rosybill Outfitters - Argentina Hunting Experts" />
        <meta name="twitter:description" content="Learn about Rosybill Outfitters - Argentina&apos;s premier hunting outfitters with 30+ years of experience." />
        <meta name="twitter:image" content="https://rosybill-outfitters.vercel.app/og-image.jpg" />
        
        {/* Additional Meta */}
        <meta name="theme-color" content="#ea580c" />
        <meta name="author" content="Rosybill Outfitters" />
        <meta name="keywords" content="about rosybill, hunting outfitters, argentina guides, hunting company, professional guides, premium accommodations" />
      </Head>

      <div className="min-h-screen bg-stone-50">
        {/* Header */}
        <header className="navbar-blur shadow-lg sticky top-0 z-50 animate-slide-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <Link href="/">
                <div className="flex items-center cursor-pointer hover-glow group relative">
                  {/* Decorative hunting-themed glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-600/20 via-amber-500/30 to-orange-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
                  
                  {/* Logo container with refined effects */}
                  <div className="relative">
                    <Image 
                      src="/images/rosybill-outfitters-logo.jpeg" 
                      alt="Rosybill Outfitters Logo" 
                      width={120} 
                      height={60} 
                      className="h-10 sm:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-110 animate-float filter group-hover:brightness-110 group-hover:drop-shadow-lg"
                    />
                    
                    {/* Subtle hunting badge decoration */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full opacity-80 group-hover:scale-125 group-hover:bg-amber-400 transition-all duration-300 badge-float"></div>
                  </div>
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
                <Link href="/about-us" className="text-orange-600 hover:text-orange-700 font-medium transition-colors">About Us</Link>
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
                    className="block px-3 py-2 text-base font-medium text-stone-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Wingshooting
                  </Link>
                  <Link 
                    href="/about-us" 
                    className="block px-3 py-2 text-base font-medium text-orange-600 bg-orange-100 rounded-md transition-colors"
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
                   backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/ducks_wallpaper.jpg')`,
                   backgroundSize: 'cover',
                   backgroundPosition: 'center'
                 }}>
          
          {/* Decorative hunting elements overlay */}
          <div className="absolute inset-0 z-0">
            {/* Subtle crosshair decoration in corners */}
            <div className="absolute top-8 left-8 w-12 h-12 crosshair-animate">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-orange-400 transform -translate-y-1/2"></div>
              <div className="absolute left-1/2 top-0 w-0.5 h-full bg-orange-400 transform -translate-x-1/2"></div>
            </div>
            <div className="absolute top-8 right-8 w-12 h-12 crosshair-animate" style={{animationDelay: '0.5s'}}>
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-orange-400 transform -translate-y-1/2"></div>
              <div className="absolute left-1/2 top-0 w-0.5 h-full bg-orange-400 transform -translate-x-1/2"></div>
            </div>
            <div className="absolute bottom-8 left-8 w-12 h-12 crosshair-animate" style={{animationDelay: '1s'}}>
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-orange-400 transform -translate-y-1/2"></div>
              <div className="absolute left-1/2 top-0 w-0.5 h-full bg-orange-400 transform -translate-x-1/2"></div>
            </div>
            <div className="absolute bottom-8 right-8 w-12 h-12 crosshair-animate" style={{animationDelay: '1.5s'}}>
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-orange-400 transform -translate-y-1/2"></div>
              <div className="absolute left-1/2 top-0 w-0.5 h-full bg-orange-400 transform -translate-x-1/2"></div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-500 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-orange-600 rounded-full opacity-50 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-amber-400 rounded-full opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight slide-up-stagger-1">
                About Rosybill Outfitters
              </h1>
              <p className="text-xl md:text-2xl text-stone-200 mb-8 slide-up-stagger-2">
                Argentina&apos;s Premier Hunting Guides
              </p>
              <p className="text-lg text-stone-300 mb-10 max-w-2xl mx-auto slide-up-stagger-3">
                Three decades of hunting excellence in Argentina&apos;s most exclusive territories
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white fade-in-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-stone-800 mb-6">Our Story</h2>
                
                {/* Desktop version - Full story */}
                <div className="hidden md:block space-y-6 text-stone-600 leading-relaxed">
                  <p className="text-lg">
                    My name is Maxi, my story begins in a small town 1 hour from Buenos Aires where my grandparents lived, who was the one who led me to become a fan of duck and dove hunting. I started in 1999 when I was only 14 years old, now I am 40, at that time I met a group of people who were dedicated to bringing hunters from the United States to Argentina. It seemed like a great idea to me and that&apos;s when I started to investigate and with a lot of good and bad advice, we began to fill the small and large lagoons with the gold decoy (corn) and that&apos;s when everything fit, clouds and clouds of ducks in each blind. Duck decoys and callers made a big difference. and each group that came left me with their knowledge and advice. Hunters arrive as clients and leave as friends! We work so that your stay in Argentina is unique and unmatched.
                  </p>
                </div>

                 {/* Mobile version - Condensed story */}
                 <div className="md:hidden space-y-4 text-stone-600">
                   <p className="text-sm leading-relaxed">
                     My name is Maxi. My passion for duck and dove hunting began in a small town an hour from Buenos Aires, thanks to my grandfather. Since 1999, I&apos;ve been welcoming hunters from around the world, especially from the United States. Over the years, I&apos;ve learned how to create unforgettable experiences — from preparing the lagoons to using the best decoys and calls. Hunters arrive as clients and leave as friends. We work to make your stay in Argentina truly memorable.
                   </p>
                 </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative group">
                  {/* Military-themed gradient border */}
                  <div className="absolute -inset-3 bg-gradient-to-br from-green-800 via-olive-700 to-stone-900 rounded-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Rifle scope crosshairs in corners */}
                  <div className="absolute -top-2 -left-2 w-8 h-8 opacity-60 group-hover:opacity-100 transition-all duration-500 targeting-scope">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-green-500 transform -translate-y-1/2"></div>
                    <div className="absolute left-1/2 top-0 w-0.5 h-full bg-green-500 transform -translate-x-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 border-2 border-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 opacity-60 group-hover:opacity-100 transition-all duration-500 targeting-scope" style={{animationDelay: '0.3s'}}>
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-green-500 transform -translate-y-1/2"></div>
                    <div className="absolute left-1/2 top-0 w-0.5 h-full bg-green-500 transform -translate-x-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 border-2 border-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  
                  {/* Main image container */}
                  <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
                    {/* Bullet impact points */}
                    <div className="absolute top-6 left-6 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 bullet-impact z-10"></div>
                    <div className="absolute top-12 right-8 w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 bullet-impact z-10" style={{animationDelay: '0.2s'}}></div>
                    <div className="absolute bottom-16 left-12 w-2.5 h-2.5 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 bullet-impact z-10" style={{animationDelay: '0.4s'}}></div>
                    
                    {/* Range finder lines */}
                    <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-green-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-1/2 range-line"></div>
                    <div className="absolute left-0 top-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-1/2 range-line" style={{animationDelay: '0.2s'}}></div>
                    
                    {/* Image with professional overlay effect */}
                    <Image
                      src="/images/cazadores_team.jpg"
                      alt="Rosybill Outfitters Professional Hunting Team"
                      width={500}
                      height={384}
                      className="w-full h-full object-cover filter group-hover:brightness-110 group-hover:contrast-105 transition-all duration-500"
                    />
                    
                    {/* Military-themed overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-olive-900/20 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                    
                    {/* Professional badge */}
                    <div className="absolute bottom-4 right-4 bg-green-700/90 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-mono opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      ⚫ EXPERT GUIDES
                    </div>
                    
                    {/* Years of experience indicator */}
                    <div className="absolute top-4 right-4 bg-green-800/80 backdrop-blur-sm text-green-200 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-4 group-hover:translate-x-0">
                      📊 30+ YEARS
                    </div>
                  </div>
                  
                  {/* Ammunition decorative elements */}
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-amber-600 transform rotate-45 opacity-80 group-hover:scale-110 transition-all duration-300 bullet-shell"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-brass-500 transform rotate-12 opacity-70 group-hover:scale-110 transition-all duration-300 bullet-shell" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Expertise Section */}
        <section className="py-16 bg-stone-100 fade-in-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-stone-800 mb-4">Our Expertise</h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Decades of experience in Argentina&apos;s premier hunting territories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-3">Duck & Waterfowl Hunting</h3>
                {/* Desktop description */}
                <p className="hidden md:block text-stone-600">
                  Premium duck and waterfowl hunting in Argentina&apos;s wetlands, marshes, and private reserves.
                </p>
                {/* Mobile description */}
                <p className="md:hidden text-stone-600 text-sm">
                  Premium wetlands hunting
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <GiFeatheredWing className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-3">Wingshooting</h3>
                {/* Desktop description */}
                <p className="hidden md:block text-stone-600">
                  World-record dove shooting, duck hunting, and perdiz in Argentina&apos;s most productive flyways.
                </p>
                {/* Mobile description */}
                <p className="md:hidden text-stone-600 text-sm">
                  World-class dove & perdiz shooting
                </p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 mx-auto bg-stone-600 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-3">Luxury Lodges</h3>
                <p className="text-stone-600">
                  Traditional Argentine estancias with modern amenities, gourmet cuisine, and professional service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white fade-in-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-stone-800 mb-4">Why Choose Rosybill Outfitters</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">30+ Years Experience</h3>
                    <p className="text-stone-600">Three decades of hunting excellence and deep knowledge of Argentina&apos;s game territories.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">Exclusive Territories</h3>
                    <p className="text-stone-600">Access to private hunting concessions in Argentina&apos;s most productive regions.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">Professional Guides</h3>
                    <p className="text-stone-600">Expert hunters and trackers with intimate knowledge of local game patterns.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">Sustainable Practices</h3>
                    <p className="text-stone-600">Commitment to conservation and responsible hunting practices for future generations.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">Customized Experiences</h3>
                    <p className="text-stone-600">Tailored hunting packages designed to match your preferences and skill level.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">Complete Service</h3>
                    <p className="text-stone-600">Full-service hunting trips including accommodation, meals, transportation, and equipment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-stone-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Plan Your Hunt?</h2>
              <p className="text-lg text-stone-300 mb-8 max-w-2xl mx-auto">
                Contact our experienced team to start planning your Argentine hunting adventure
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us">
                  <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded transition-colors duration-300">
                    Contact Us
                  </button>
                </Link>
                <Link href="/wingshooting">
                  <button className="border border-white text-white hover:bg-white hover:text-stone-800 font-semibold py-3 px-8 rounded transition-all duration-300">
                    View Hunting Areas
                  </button>
                </Link>
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
        
        /* List Animations */
        .list-item {
          transition: all 0.3s ease;
        }
        
        .list-item:hover {
          transform: translateX(8px);
          color: #ea580c;
        }
        
        /* Hunting-themed decorative effects */
        .border-t-3 { border-top-width: 3px; }
        .border-l-3 { border-left-width: 3px; }
        .border-r-3 { border-right-width: 3px; }
        .border-b-3 { border-bottom-width: 3px; }
        
        /* Enhanced image hover effects */
        .group:hover .filter {
          filter: brightness(1.1) contrast(1.05) saturate(1.1);
        }
        
        /* Crosshair animation for hero decorations */
        @keyframes crosshairGlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        
        .crosshair-animate {
          animation: crosshairGlow 3s ease-in-out infinite;
        }
        
        /* Hunting badge floating effect */
        @keyframes badgeFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-2px) rotate(1deg); }
          66% { transform: translateY(2px) rotate(-1deg); }
        }
        
        .badge-float {
          animation: badgeFloat 4s ease-in-out infinite;
        }
        
                /* Decorative gradient borders */
                .hunting-gradient-border {
                  background: linear-gradient(45deg, #ea580c, #d97706, #92400e);
                  padding: 3px;
                }
                
                /* UNIQUE TARGETING EFFECTS - Professional Guides Theme */
                @keyframes targetingScope {
                  0%, 100% { opacity: 0.6; transform: scale(1) rotate(0deg); }
                  50% { opacity: 1; transform: scale(1.1) rotate(2deg); }
                }
                
                .targeting-scope {
                  animation: targetingScope 3s ease-in-out infinite;
                }
                
                @keyframes bulletImpact {
                  0% { opacity: 0; transform: scale(0.5); }
                  50% { opacity: 1; transform: scale(1.2); }
                  100% { opacity: 0.8; transform: scale(1); }
                }
                
                .bullet-impact {
                  animation: bulletImpact 0.5s ease-out forwards;
                }
                
                @keyframes rangeLine {
                  0% { opacity: 0; }
                  50% { opacity: 0.6; }
                  100% { opacity: 0.4; }
                }
                
                .range-line {
                  animation: rangeLine 2s ease-in-out infinite;
                }
                
                @keyframes bulletShell {
                  0%, 100% { transform: rotate(0deg) scale(1); }
                  50% { transform: rotate(180deg) scale(1.1); }
                }
                
                .bullet-shell {
                  animation: bulletShell 4s ease-in-out infinite;
                }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .text-5xl { font-size: 2.25rem; }
          .text-6xl { font-size: 2.75rem; }
          
          .fade-in-section {
            animation-delay: 0.1s;
          }
          
          /* Simplify decorative elements on mobile */
          .absolute.w-12.h-12 {
            width: 2rem;
            height: 2rem;
          }
          
          /* Prevent horizontal overflow on mobile */
          body, html {
            overflow-x: hidden;
          }
          
          /* Hide or reduce decorative elements that extend outside containers */
          .absolute[class*="-inset"],
          .absolute[class*="-top"],
          .absolute[class*="-left"],
          .absolute[class*="-right"],
          .absolute[class*="-bottom"] {
            display: none !important;
          }
          
          /* Keep only essential badges and reduce their size */
          .absolute[class*="bottom-4"][class*="right-4"],
          .absolute[class*="top-4"][class*="right-4"] {
            display: block !important;
            transform: scale(0.8);
          }
          
          /* Reduce targeting and military elements */
          .targeting-scope,
          .bullet-impact,
          .range-line,
          .bullet-shell {
            display: none !important;
          }
          
          /* Reduce spacing and padding to prevent overflow */
          .relative.group {
            margin: 0 !important;
            padding: 0 !important;
          }
          
          /* Ensure all images stay within bounds */
          .relative.h-96,
          .relative.overflow-hidden {
            max-width: 100% !important;
            overflow: hidden !important;
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
              
              fadeInSections.forEach((section, index) => {
                // Reset animation state for page navigation
                section.classList.remove('animated');
                currentObserver.observe(section);
              });
              
              // Also observe sections already in viewport on page load
              setTimeout(() => {
                fadeInSections.forEach((section, index) => {
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
