/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Target, Star, Users, Building, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { FiFlag } from 'react-icons/fi';
import { FaFlagUsa } from 'react-icons/fa';
import { FaFlag } from 'react-icons/fa6';
import { MdMuseum, MdDinnerDining } from 'react-icons/md';
import { useState, useEffect } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  // House images for carousel
  const houseImages = [
    '/images/aires_house_outside_1.JPG',
    '/images/aires_house_outside_2.jpg',
    '/images/aires_house_outside_3.jpg',
    '/images/aires_house_outside_4.JPG',
    '/images/aires_house_outside_5.jpg',
    '/images/aires_house_inside_1.jpg',
    '/images/aires_house_inside_2.jpg',
    '/images/aires_house_inside_3.jpg'
  ];

  // Carousel functions
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === houseImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? houseImages.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Touch handlers for swipe navigation
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Auto-advance carousel (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <>
      <Head>
        <title>Rosybill Outfitters - Sporting Excellence</title>
        <meta name="description" content="Argentina&apos;s Premier Wingshooting Destination. Unparalleled dove hunting, duck hunting, and bird shooting experiences with expert guides." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rosybill-outfitters.vercel.app/" />
        <meta property="og:title" content="Rosybill Outfitters - Premier Argentina Hunting" />
        <meta property="og:description" content="Argentina&apos;s Premier Wingshooting Destination. Unparalleled dove hunting, duck hunting, and bird shooting experiences with expert guides." />
        <meta property="og:image" content="https://rosybill-outfitters.vercel.app/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Rosybill Outfitters" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://rosybill-outfitters.vercel.app/" />
        <meta name="twitter:title" content="Rosybill Outfitters - Premier Argentina Hunting" />
        <meta name="twitter:description" content="Argentina&apos;s Premier Wingshooting Destination. Unparalleled dove hunting, duck hunting, and bird shooting experiences with expert guides." />
        <meta name="twitter:image" content="https://rosybill-outfitters.vercel.app/og-image.jpg" />
        
        {/* Additional Meta */}
        <meta name="theme-color" content="#ea580c" />
        <meta name="author" content="Rosybill Outfitters" />
        <meta name="keywords" content="hunting, argentina, wingshooting, waterfowl, upland game, outfitters, guides, luxury, buenos aires, entre rios, cordoba" />
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
                <Link href="/" className="text-orange-600 hover:text-orange-700 font-medium transition-colors">Home</Link>
                <Link href="/wingshooting" className="text-stone-700 hover:text-orange-600 font-medium transition-colors">Wingshooting</Link>
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
                    className="block px-3 py-2 text-base font-medium text-orange-600 bg-orange-100 rounded-md transition-colors"
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
        <section className="relative h-[75vh] overflow-hidden fade-in-section"
                 style={{
                   backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/rifle_banner.jpg')`,
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
          
          <div className="relative z-10 flex items-center justify-center h-full text-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight slide-up-stagger-1">
                Elite Hunting Argentina
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-stone-200 mb-6 sm:mb-8 slide-up-stagger-2">
                Premier Bird Hunting Outfitters
              </p>
              <p className="text-sm sm:text-base md:text-lg text-stone-300 mb-8 sm:mb-10 max-w-2xl mx-auto slide-up-stagger-3 px-2">
                Professional hunting expeditions in Argentina&apos;s finest territories with expert guides and authentic experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up-stagger-4">
                <button 
                  onClick={() => window.location.href = '/contact-us'}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded transition-colors duration-300 cursor-pointer"
                >
                  Book Hunt
                </button>
                <button 
                  onClick={() => window.location.href = '/wingshooting'}
                  className="border border-white text-white hover:bg-white hover:text-stone-800 font-semibold py-3 px-8 rounded transition-all duration-300 cursor-pointer"
                >
                  View Hunts
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Hunting Outfitters - Continuous Carousel */}
        <section className="py-8 sm:py-12 bg-stone-800 relative overflow-hidden fade-in-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">Professional Hunting Outfitters</h2>
              <p className="text-sm sm:text-base text-stone-300">Argentina&apos;s premier wingshooting destination</p>
            </div>

            {/* Continuous Moving Carousel */}
            <div className="carousel-wrapper overflow-hidden h-16 sm:h-20 relative">
              <div className="carousel-continuous flex items-center space-x-8 sm:space-x-12">
                
                {/* First Set */}
                <div className="flex items-center space-x-2 sm:space-x-3 whitespace-nowrap">
                  <MapPin className="w-4 sm:w-6 h-4 sm:h-6 text-orange-500" />
                  <span className="text-white font-semibold text-sm sm:text-base">Buenos Aires</span>
                </div>
                
                <div className="flex items-center space-x-3 whitespace-nowrap">
                  <Target className="w-4 sm:w-6 h-4 sm:h-6 text-orange-500" />
                  <span className="text-white font-semibold text-sm sm:text-base">Duck Hunting</span>
                </div>
                
                <div className="flex items-center space-x-3 whitespace-nowrap">
                  <Star className="w-4 sm:w-6 h-4 sm:h-6 text-orange-500" />
                  <span className="text-white font-semibold text-sm sm:text-base">Córdoba Doves</span>
                </div>
                
                <div className="flex items-center space-x-3 whitespace-nowrap">
                  <Users className="w-4 sm:w-6 h-4 sm:h-6 text-orange-500" />
                  <span className="text-white font-semibold text-sm sm:text-base">Expert Guides</span>
                </div>
                
                <div className="flex items-center space-x-3 whitespace-nowrap">
                  <Building className="w-4 sm:w-6 h-4 sm:h-6 text-orange-500" />
                  <span className="text-white font-semibold text-sm sm:text-base">Premium Lodges</span>
                </div>
                
                <div className="flex items-center space-x-3 whitespace-nowrap">
                  <MapPin className="w-6 h-6 text-orange-500" />
                  <span className="text-white font-semibold">Entre Ríos</span>
                </div>

                {/* Duplicate Set for Continuous Loop */}
                <div className="flex items-center space-x-2 sm:space-x-3 whitespace-nowrap">
                  <MapPin className="w-4 sm:w-6 h-4 sm:h-6 text-orange-500" />
                  <span className="text-white font-semibold text-sm sm:text-base">Buenos Aires</span>
                </div>
                
                <div className="flex items-center space-x-3 whitespace-nowrap">
                  <Target className="w-4 sm:w-6 h-4 sm:h-6 text-orange-500" />
                  <span className="text-white font-semibold text-sm sm:text-base">Duck Hunting</span>
                </div>
                
                <div className="flex items-center space-x-3 whitespace-nowrap">
                  <Star className="w-4 sm:w-6 h-4 sm:h-6 text-orange-500" />
                  <span className="text-white font-semibold text-sm sm:text-base">Córdoba Doves</span>
                </div>
                
                <div className="flex items-center space-x-3 whitespace-nowrap">
                  <Users className="w-4 sm:w-6 h-4 sm:h-6 text-orange-500" />
                  <span className="text-white font-semibold text-sm sm:text-base">Expert Guides</span>
                </div>
                
                <div className="flex items-center space-x-3 whitespace-nowrap">
                  <Building className="w-4 sm:w-6 h-4 sm:h-6 text-orange-500" />
                  <span className="text-white font-semibold text-sm sm:text-base">Premium Lodges</span>
                </div>
                
                <div className="flex items-center space-x-3 whitespace-nowrap">
                  <MapPin className="w-6 h-6 text-orange-500" />
                  <span className="text-white font-semibold">Entre Ríos</span>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16 bg-white fade-in-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
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
                      alt="Rosybill Outfitters Team - Professional hunting guides and staff"
                      width={500}
                      height={384}
                      className="w-full h-full object-cover filter group-hover:brightness-110 group-hover:contrast-105 transition-all duration-500"
                      style={{ objectPosition: 'center 80%' }}
                    />
                    
                    {/* Military-themed overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-olive-900/20 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                    
                    {/* Professional badge */}
                    <div className="absolute bottom-4 right-4 bg-green-700/90 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-mono opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      ⚫ EXPERT GUIDES
                    </div>
                  </div>
                  
                  {/* Ammunition decorative elements */}
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-amber-600 transform rotate-45 opacity-80 group-hover:scale-110 transition-all duration-300 bullet-shell"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-brass-500 transform rotate-12 opacity-70 group-hover:scale-110 transition-all duration-300 bullet-shell" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-stone-800 mb-6">Expert Hunting Guides</h2>
                
                {/* Desktop version - Full text */}
                <div className="hidden md:block space-y-6 text-stone-600 leading-relaxed">
                  <p className="text-lg">
                    30+ years of hunting excellence in Argentina&apos;s premier game territories. 
                    Our professional guides are expert trackers and marksmen ensuring authentic hunting experiences.
                  </p>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">Prime Hunting Territories</h3>
                    <p>
                      Exclusive concessions spanning Argentina&apos;s most productive regions - 
                      waterfowl wetlands in Buenos Aires, dove shooting in Córdoba, and premium bird territories in Entre Ríos.
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => window.location.href = '/wingshooting'}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded transition-colors duration-300 cursor-pointer"
                  >
                    View Territories
                  </button>
                </div>

                {/* Mobile version - Condensed text */}
                <div className="md:hidden space-y-4 text-stone-600">
                  <p className="text-base">
                    30+ years experience in Argentina&apos;s best hunting territories with expert professional guides.
                  </p>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-stone-800 mb-2">Prime Locations</h3>
                    <p className="text-sm">
                      Buenos Aires wetlands, Córdoba dove shooting, Entre Ríos premium territories.
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => window.location.href = '/wingshooting'}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 cursor-pointer text-sm"
                  >
                    View Territories
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hunting Services Section */}
        <section className="py-12 sm:py-16 bg-stone-100 fade-in-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-800 mb-6 sm:mb-8">Hunting Services</h2>
                
                {/* Desktop version - Full descriptions */}
                <div className="hidden md:block space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-stone-800 mb-2">Duck Hunting</h3>
                      <p className="text-base text-stone-600">Premium waterfowl hunting in Argentina&apos;s wetlands and marshes</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-stone-800 mb-2">Bird Hunting</h3>
                      <p className="text-base text-stone-600">World-class dove shooting, duck hunting, and perdiz in prime flyways</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-stone-800 mb-2">Hunting Lodges</h3>
                      <p className="text-base text-stone-600">Traditional Argentine estancias with modern amenities and gourmet cuisine</p>
                    </div>
                  </div>
                </div>

                {/* Mobile version - Card layout */}
                <div className="md:hidden space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-stone-200">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="flex-shrink-0 w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-stone-800">Duck Hunting</h3>
                    </div>
                    <p className="text-sm text-stone-600 ml-13">Premium wetlands hunting in Argentina&apos;s marshes</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm border border-stone-200">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                        <Star className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-stone-800">Bird Hunting</h3>
                    </div>
                    <p className="text-sm text-stone-600 ml-13">World-class dove shooting and perdiz</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm border border-stone-200">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="flex-shrink-0 w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                        <Building className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-stone-800">Hunting Lodges</h3>
                    </div>
                    <p className="text-sm text-stone-600 ml-13">Traditional Argentine estancias</p>
                  </div>
                </div>

                <button 
                  onClick={() => window.location.href = '/contact-us'}
                  className="mt-8 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded transition-colors duration-300 cursor-pointer"
                >
                  Book Hunt
                </button>
              </div>

              <div>
                <div className="relative group">
                  {/* Water-themed gradient border */}
                  <div className="absolute -inset-3 bg-gradient-to-br from-blue-600 via-cyan-700 to-teal-800 rounded-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Flying duck silhouettes */}
                  <div className="absolute -top-4 -left-4 opacity-0 group-hover:opacity-80 transition-all duration-700 flying-duck">
                    <div className="w-4 h-2 bg-slate-600 duck-silhouette transform -rotate-12" style={{clipPath: 'polygon(0% 50%, 20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%)'}}></div>
                  </div>
                  <div className="absolute -top-2 -right-6 opacity-0 group-hover:opacity-80 transition-all duration-700 flying-duck" style={{animationDelay: '0.5s'}}>
                    <div className="w-3 h-1.5 bg-slate-700 duck-silhouette transform rotate-6" style={{clipPath: 'polygon(0% 50%, 20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%)'}}></div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 opacity-0 group-hover:opacity-80 transition-all duration-700 flying-duck" style={{animationDelay: '1s'}}>
                    <div className="w-3.5 h-2 bg-slate-600 duck-silhouette transform -rotate-3" style={{clipPath: 'polygon(0% 50%, 20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%)'}}></div>
                  </div>
                  
                  {/* Water ripples around image */}
                  <div className="absolute -inset-6 opacity-0 group-hover:opacity-60 transition-all duration-1000 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 w-16 h-16 border-2 border-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 water-ripple"></div>
                    <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 water-ripple" style={{animationDelay: '0.3s'}}></div>
                    <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-blue-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 water-ripple" style={{animationDelay: '0.6s'}}></div>
                  </div>
                  
                  {/* Main image container */}
                  <div className="relative h-[28rem] rounded-lg overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
                    {/* Water drops */}
                    <div className="absolute top-8 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 water-drop z-10"></div>
                    <div className="absolute top-12 right-1/3 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 water-drop z-10" style={{animationDelay: '0.3s'}}></div>
                    <div className="absolute bottom-20 left-2/3 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 water-drop z-10" style={{animationDelay: '0.6s'}}></div>
                    
                    {/* Wetland reeds decoration */}
                    <div className="absolute top-0 left-4 w-1 h-16 bg-green-600 rounded-full opacity-0 group-hover:opacity-70 transition-all duration-500 wetland-reed transform rotate-3"></div>
                    <div className="absolute bottom-0 right-6 w-1 h-12 bg-green-700 rounded-full opacity-0 group-hover:opacity-70 transition-all duration-500 wetland-reed transform -rotate-2" style={{animationDelay: '0.2s'}}></div>
                    
                    {/* Image with waterfowl overlay effect */}
                    <Image
                      src="/images/maxi_patos.jpg"
                      alt="Duck hunting experience - Professional guide with ducks at Rosybill Outfitters"
                      width={500}
                      height={384}
                      className="w-full h-full object-cover filter group-hover:brightness-110 group-hover:contrast-105 transition-all duration-500"
                      style={{ objectPosition: 'center 40%' }}
                    />
                    
                    {/* Water surface overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-cyan-900/20 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                    
                    {/* Duck count badge */}
                    <div className="absolute bottom-4 right-4 bg-blue-700/90 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-mono opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      🦆 WATERFOWL EXPERT
                    </div>
                    
                    {/* Weather indicator */}
                    <div className="absolute top-4 right-4 bg-blue-800/80 backdrop-blur-sm text-cyan-200 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-4 group-hover:translate-x-0">
                      💨 PERFECT CONDITIONS
                    </div>
                  </div>
                  
                  {/* Wetland decorative elements */}
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-cyan-600 rounded-full opacity-80 group-hover:scale-110 transition-all duration-300 water-bubble"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-700 rounded-full opacity-70 group-hover:scale-110 transition-all duration-300 water-bubble" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Accommodation Section */}
        <section className="py-16 bg-white fade-in-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-stone-800 mb-4">Hunting Lodges</h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Authentic Argentine estancias providing comfortable accommodation for hunters
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* First Lodge - Enhanced Carousel */}
              <div className="rounded-lg overflow-hidden shadow-md">
                <div 
                  className="h-48 relative group cursor-grab active:cursor-grabbing"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={houseImages[currentImageIndex]}
                      alt={`Buenos Aires Hunting Lodge - ${currentImageIndex < 5 ? 'Outside' : 'Inside'} ${currentImageIndex < 5 ? currentImageIndex + 1 : currentImageIndex - 4}`}
                      width={400}
                      height={192}
                      className="w-full h-full object-cover transition-all duration-500"
                      priority
                    />
                    
                    {/* Image Counter - Always Visible on Mobile */}
                    <div className="absolute top-2 right-2 bg-black/80 text-white text-xs sm:text-sm px-2 py-1 rounded-md backdrop-blur-sm">
                      {currentImageIndex + 1} / {houseImages.length}
                    </div>
                    
                    {/* View Type Indicator */}
                    <div className="absolute top-2 left-2 bg-orange-500/90 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
                      {currentImageIndex < 5 ? 'Outside View' : 'Inside View'}
                    </div>
                    
                    {/* Desktop Arrow Buttons */}
                    <button 
                      onClick={prevImage} 
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hidden sm:block" 
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={nextImage} 
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hidden sm:block" 
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    
                    {/* Mobile Touch Areas */}
                    <div className="absolute left-0 top-0 w-1/3 h-full sm:hidden" onClick={prevImage} />
                    <div className="absolute right-0 top-0 w-1/3 h-full sm:hidden" onClick={nextImage} />
                  </div>
                  
                  {/* Enhanced Dot Indicators */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                    {houseImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`rounded-full transition-all duration-300 touch-manipulation ${
                          index === currentImageIndex 
                            ? 'bg-orange-500 scale-125 w-3 h-3 sm:w-2 sm:h-2' 
                            : 'bg-white/70 hover:bg-white/90 w-2 h-2 sm:w-2 sm:h-2'
                        }`}
                        aria-label={`Go to image ${index + 1} - ${index < 5 ? 'Outside' : 'Inside'} view`}
                      />
                    ))}
                  </div>
                  
                  {/* Swipe Instruction for Mobile */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 sm:hidden transition-opacity duration-300">
                    Swipe to navigate
                  </div>
                </div>
              </div>

              <div className="accommodation-card group rounded-lg overflow-hidden shadow-md cursor-pointer relative">
                {/* Rustic lodge themed decorative elements */}
                <div className="absolute -top-3 -left-3 opacity-0 group-hover:opacity-80 transition-all duration-700 lodge-pine">
                  <div className="w-5 h-5 bg-green-800 pine-tree"></div>
                </div>
                <div className="absolute -top-2 -right-3 opacity-0 group-hover:opacity-70 transition-all duration-700 lodge-pine" style={{animationDelay: '0.4s'}}>
                  <div className="w-4 h-4 bg-green-900 pine-tree"></div>
                </div>
                <div className="absolute -bottom-3 -left-2 opacity-0 group-hover:opacity-60 transition-all duration-700 lodge-cabin">
                  <div className="w-3 h-3 bg-amber-700 cabin-roof"></div>
                </div>
                
                <div className="accommodation-image-wrapper overflow-hidden relative">
                  {/* Wooden frame effect */}
                  <div className="absolute inset-0 border-4 border-amber-700/40 group-hover:border-amber-600/70 transition-all duration-500 rounded-lg"></div>
                  
                  <Image
                    src="/images/accomodation2.webp"
                    alt="Rosybill Outfitters Lodge 2"
                    width={400}
                    height={300}
                    className="accommodation-image w-full h-48 object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110 group-hover:sepia-[0.2]"
                  />
                  
                  {/* Rustic themed overlay */}
                  <div className="accommodation-overlay absolute inset-0 bg-gradient-to-t from-amber-900/70 via-transparent to-green-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-1">Entre Ríos Lodge</h3>
                      <p className="text-white/90 text-sm">Premium hunting accommodation</p>
                    </div>
                  </div>
                  
                  {/* Comfort indicator */}
                  <div className="absolute top-3 right-3 bg-amber-800/80 backdrop-blur-sm text-amber-200 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-3 group-hover:translate-x-0">
                    🏕️ LUXURY
                  </div>
                </div>
              </div>

              <div className="accommodation-card group rounded-lg overflow-hidden shadow-md cursor-pointer relative">
                {/* Country/farmland themed decorative elements */}
                <div className="absolute -top-2 left-1/2 opacity-0 group-hover:opacity-80 transition-all duration-700 country-windmill transform -translate-x-1/2">
                  <div className="w-4 h-6 bg-red-800 windmill-body relative">
                    <div className="absolute -top-1 left-1/2 w-3 h-3 border-2 border-red-700 rounded-full transform -translate-x-1/2 windmill-blades"></div>
                  </div>
                </div>
                <div className="absolute -bottom-3 right-2 opacity-0 group-hover:opacity-70 transition-all duration-700 country-barn">
                  <div className="w-4 h-3 bg-red-700 barn-shape"></div>
                </div>
                <div className="absolute top-1/2 -left-3 opacity-0 group-hover:opacity-60 transition-all duration-700 country-fence transform -translate-y-1/2">
                  <div className="w-2 h-8 bg-amber-800 fence-post"></div>
                </div>
                
                <div className="accommodation-image-wrapper overflow-hidden relative">
                  {/* Countryside frame effect */}
                  <div className="absolute inset-0 border-4 border-red-700/40 group-hover:border-red-600/70 transition-all duration-500 rounded-lg"></div>
                  
                  <Image
                    src="/images/accomodation3.webp"
                    alt="Rosybill Outfitters Lodge 3"
                    width={400}
                    height={300}
                    className="accommodation-image w-full h-48 object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110 group-hover:hue-rotate-[5deg]"
                  />
                  
                  {/* Countryside themed overlay */}
                  <div className="accommodation-overlay absolute inset-0 bg-gradient-to-t from-red-900/70 via-transparent to-orange-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-1">Córdoba Lodge</h3>
                      <p className="text-white/90 text-sm">World-class dove hunting</p>
                    </div>
                  </div>
                  
                  {/* Activity indicator */}
                  <div className="absolute top-3 right-3 bg-red-800/80 backdrop-blur-sm text-red-200 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-3 group-hover:translate-x-0">
                    🌾 FARMLAND
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-stone-100 fade-in-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-stone-800 mb-4">Additional Services</h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">Enhance your hunting adventure with our premium additional services</p>
            </div>
            
            {/* Main Content Grid - Image + Services */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side - Gaucho Asado Image */}
              <div className="relative">
                <div className="relative group">
                  {/* Fire-themed gradient border */}
                  <div className="absolute -inset-3 bg-gradient-to-br from-red-600 via-orange-700 to-yellow-800 rounded-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* BBQ smoke effect rising from top */}
                  <div className="absolute -top-8 left-1/2 opacity-0 group-hover:opacity-100 transition-all duration-1000 pointer-events-none">
                    <div className="absolute -left-1 w-2 h-8 bg-gray-400 rounded-full smoke-rise opacity-60"></div>
                    <div className="absolute left-1 w-1.5 h-10 bg-gray-300 rounded-full smoke-rise opacity-40" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute left-3 w-1 h-6 bg-gray-500 rounded-full smoke-rise opacity-50" style={{animationDelay: '1s'}}></div>
                  </div>
                  
                  {/* Fire sparks around the image */}
                  <div className="absolute -inset-6 opacity-0 group-hover:opacity-100 transition-all duration-800 pointer-events-none">
                    <div className="absolute top-8 left-4 w-1.5 h-1.5 bg-orange-500 rounded-full fire-spark"></div>
                    <div className="absolute top-12 right-8 w-2 h-2 bg-red-500 rounded-full fire-spark" style={{animationDelay: '0.3s'}}></div>
                    <div className="absolute bottom-16 left-8 w-1 h-1 bg-yellow-500 rounded-full fire-spark" style={{animationDelay: '0.6s'}}></div>
                    <div className="absolute bottom-8 right-12 w-1.5 h-1.5 bg-orange-600 rounded-full fire-spark" style={{animationDelay: '0.9s'}}></div>
                    <div className="absolute top-1/2 left-2 w-1 h-1 bg-red-600 rounded-full fire-spark" style={{animationDelay: '1.2s'}}></div>
                    <div className="absolute top-1/3 right-4 w-1.5 h-1.5 bg-yellow-600 rounded-full fire-spark" style={{animationDelay: '1.5s'}}></div>
                  </div>
                  
                  {/* Main image container */}
                  <div className="relative overflow-hidden rounded-lg shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
                    {/* Heat waves effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-all duration-700 pointer-events-none">
                      <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-orange-500/10 via-red-500/5 to-transparent heat-wave"></div>
                    </div>
                    
                    {/* Image with fire effects */}
                    <Image
                      src="/images/gaucho_asado.jpg"
                      alt="Traditional Argentine Gaucho Asado - Authentic BBQ Experience"
                      width={600}
                      height={400}
                      className="w-full h-[400px] object-cover filter group-hover:brightness-110 group-hover:contrast-110 group-hover:saturate-110 transition-all duration-500"
                      priority
                    />
                    
                    {/* Fire-themed overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 via-transparent to-orange-900/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Authentic Argentine Experience</h3>
                      <p className="text-white/90 text-sm">Traditional gaucho asado and premium Argentine hospitality</p>
                    </div>
                    
                    {/* Temperature indicator */}
                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-x-4 group-hover:translate-x-0">
                      <div className="bg-red-900/80 backdrop-blur-sm text-orange-200 px-3 py-2 rounded-lg text-sm font-mono">
                        <div className="text-xs text-orange-300">GRILL TEMP</div>
                        <div className="text-lg font-bold">🔥 450°C</div>
                      </div>
                    </div>
                    
                    {/* Cooking status */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-4 group-hover:translate-x-0">
                      <div className="bg-red-900/80 backdrop-blur-sm text-orange-200 px-2 py-1 rounded text-xs font-mono">
                        <div>🥩 PERFECTLY COOKED</div>
                        <div>⏰ 2 HOURS SLOW</div>
                      </div>
                    </div>
                    
                    {/* Argentine flag accent */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-4 bg-blue-400 argentina-flag"></div>
                        <div className="w-2 h-4 bg-white argentina-flag" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-4 bg-blue-400 argentina-flag" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Fire-themed decorative elements */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-600 rounded-full opacity-80 group-hover:scale-110 transition-all duration-300 flame-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-orange-700 rounded-full opacity-70 group-hover:scale-110 transition-all duration-300 flame-pulse" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>

              {/* Right Side - Services Grid */}
              <div className="space-y-6">
                
                {/* Wildlife Photography */}
                <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📸</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-2">Wildlife Photography</h3>
                    <p className="text-stone-600">
                      Capture Argentina&apos;s landscapes and wildlife with guided photography sessions.
                    </p>
                  </div>
                </div>

                {/* Cultural Excursions */}
                <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MdMuseum className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-2">Cultural Excursions</h3>
                    <p className="text-stone-600">
                      Optional cultural tours exploring local traditions, markets, and historical sites.
                    </p>
                  </div>
                </div>

                {/* Gourmet Dining */}
                <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MdDinnerDining className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-2">Gourmet Argentine Cuisine</h3>
                    <p className="text-stone-600">
                      Traditional gaucho asado, premium Argentine beef, and fine Malbec wines.
                    </p>
                  </div>
                </div>

                {/* Full-Service Expeditions */}
                <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-2">Full-Service Expeditions</h3>
                    <p className="text-stone-600">
                      All-inclusive hunting packages with professional guides, equipment, and accommodations.
                    </p>
                  </div>
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
              {/* US Contact */}
              <div className="text-center p-6 bg-stone-700 rounded-lg">
                <div className="mb-4">
                  <FaFlagUsa className="w-12 h-12 text-red-500 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4">US OFFICE</h3>
                <div className="space-y-3">
                  <a href="tel:4044042333" className="text-2xl font-bold hover:text-orange-300 transition-colors cursor-pointer block">4044042333</a>
                  <a href="mailto:rosybilloutfitters@gmail.com" className="text-orange-200 hover:text-orange-300 transition-colors cursor-pointer block">rosybilloutfitters@gmail.com</a>
                </div>
              </div>

              {/* Argentina Contact */}
              <div className="text-center p-6 bg-stone-700 rounded-lg">
                <div className="mb-4">
                  <FaFlag className="w-12 h-12 text-blue-400 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-4">ARGENTINA OFFICE</h3>
                <div className="space-y-3">
                  <a href="tel:+5491169274103" className="text-2xl font-bold hover:text-orange-300 transition-colors cursor-pointer block">+54 9 11 69274103</a>
                  <a href="mailto:rosybilloutfitters@gmail.com" className="text-orange-200 hover:text-orange-300 transition-colors cursor-pointer block">rosybilloutfitters@gmail.com</a>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg text-stone-300 mb-6">
                Ready to plan your hunting adventure in Argentina?
              </p>
              <button 
                onClick={() => window.location.href = '/contact-us'}
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded transition-colors duration-300 cursor-pointer"
              >
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
                  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .fade-in-section:not(.animated) {
                  opacity: 0;
                  transform: translateY(40px);
                }
                
                .fade-in-section.animated {
                  opacity: 1;
                  transform: translateY(0);
                }
                
                .slide-up-stagger-1 {
                  opacity: 0;
                  transform: translateY(30px);
                  animation: slideUpFade 0.6s ease-out 0.2s forwards;
                }
                
                .slide-up-stagger-2 {
                  opacity: 0;
                  transform: translateY(30px);
                  animation: slideUpFade 0.6s ease-out 0.3s forwards;
                }
                
                .slide-up-stagger-3 {
                  opacity: 0;
                  transform: translateY(30px);
                  animation: slideUpFade 0.6s ease-out 0.4s forwards;
                }
                
                .slide-up-stagger-4 {
                  opacity: 0;
                  transform: translateY(30px);
                  animation: slideUpFade 0.6s ease-out 0.5s forwards;
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
                
                /* Continuous Carousel Animation */
                .carousel-continuous {
                  animation: scroll-left 30s linear infinite;
                }
                
                .carousel-wrapper:hover .carousel-continuous {
                  animation-play-state: paused;
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
                
                @keyframes scroll-left {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                
                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-8px); }
                }
                
                @keyframes pulse {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0.7; }
                }
                
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
                
                /* Image Animations */
                img, .image-container {
                  transition: transform 0.4s ease, filter 0.3s ease;
                }
                
                .image-container:hover img {
                  transform: scale(1.05);
                  filter: brightness(1.1);
                }
                
                /* Accommodation Card Effects */
                .accommodation-card {
                  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                  position: relative;
                }
                
                .accommodation-card:hover {
                  transform: translateY(-8px);
                  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                }
                
                .accommodation-image-wrapper {
                  position: relative;
                  overflow: hidden;
                }
                
                .accommodation-image {
                  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .accommodation-overlay {
                  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                /* Mobile Touch Effects */
                @media (pointer: coarse) {
                  .accommodation-card:active {
                    transform: translateY(-4px) scale(0.98);
                    box-shadow: 0 15px 30px -8px rgba(0, 0, 0, 0.3);
                  }
                  
                  .accommodation-card:active .accommodation-image {
                    transform: scale(1.08);
                    brightness: 1.2;
                  }
                  
                  .accommodation-card:active .accommodation-overlay {
                    opacity: 1;
                  }
                  
                  /* Touch feedback with a subtle pulse */
                  .accommodation-card:active::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle, rgba(234, 88, 12, 0.1) 0%, transparent 70%);
                    pointer-events: none;
                    animation: touchPulse 0.3s ease-out;
                  }
                }
                
                @keyframes touchPulse {
                  0% {
                    opacity: 0;
                    transform: scale(0.8);
                  }
                  50% {
                    opacity: 1;
                    transform: scale(1);
                  }
                  100% {
                    opacity: 0;
                    transform: scale(1.1);
                  }
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
                
                /* UNIQUE WATERFOWL EFFECTS - Duck Hunting Theme */
                @keyframes flyingDuck {
                  0% { opacity: 0; transform: translateX(-20px) translateY(5px) rotate(-5deg); }
                  50% { opacity: 0.8; transform: translateX(0px) translateY(0px) rotate(0deg); }
                  100% { opacity: 0; transform: translateX(20px) translateY(-5px) rotate(5deg); }
                }
                
                .flying-duck {
                  animation: flyingDuck 4s ease-in-out infinite;
                }
                
                @keyframes duckSilhouette {
                  0%, 100% { transform: translateY(0px) scale(1); }
                  50% { transform: translateY(-2px) scale(1.05); }
                }
                
                .duck-silhouette {
                  animation: duckSilhouette 2s ease-in-out infinite;
                }
                
                @keyframes waterRipple {
                  0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                  50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
                  100% { opacity: 0; transform: translate(-50%, -50%) scale(1.3); }
                }
                
                .water-ripple {
                  animation: waterRipple 3s ease-out infinite;
                }
                
                @keyframes waterDrop {
                  0% { opacity: 0; transform: translateY(-10px) scale(0.5); }
                  50% { opacity: 1; transform: translateY(0px) scale(1); }
                  100% { opacity: 0; transform: translateY(10px) scale(0.8); }
                }
                
                .water-drop {
                  animation: waterDrop 2s ease-in-out infinite;
                }
                
                @keyframes wetlandReed {
                  0%, 100% { transform: rotate(0deg) scale(1); }
                  50% { transform: rotate(3deg) scale(1.05); }
                }
                
                .wetland-reed {
                  animation: wetlandReed 3s ease-in-out infinite;
                }
                
                @keyframes waterBubble {
                  0%, 100% { opacity: 0.8; transform: scale(1); }
                  50% { opacity: 1; transform: scale(1.2); }
                }
                
                .water-bubble {
                  animation: waterBubble 2s ease-in-out infinite;
                }
                
                /* UNIQUE BBQ EFFECTS - Argentine Asado Theme */
                @keyframes smokeRise {
                  0% { opacity: 0; transform: translateY(20px) scale(0.8); }
                  50% { opacity: 0.8; transform: translateY(-10px) scale(1); }
                  100% { opacity: 0; transform: translateY(-40px) scale(1.2); }
                }
                
                .smoke-rise {
                  animation: smokeRise 3s ease-out infinite;
                }
                
                @keyframes fireSpark {
                  0% { opacity: 0; transform: translateY(0px) scale(0.5); }
                  25% { opacity: 1; transform: translateY(-5px) scale(1); }
                  50% { opacity: 0.8; transform: translateY(-8px) scale(1.2); }
                  75% { opacity: 0.6; transform: translateY(-10px) scale(0.8); }
                  100% { opacity: 0; transform: translateY(-15px) scale(0.3); }
                }
                
                .fire-spark {
                  animation: fireSpark 2s ease-out infinite;
                }
                
                @keyframes heatWave {
                  0%, 100% { opacity: 0.1; transform: scaleY(1) skewX(0deg); }
                  50% { opacity: 0.3; transform: scaleY(1.1) skewX(1deg); }
                }
                
                .heat-wave {
                  animation: heatWave 1.5s ease-in-out infinite;
                }
                
                @keyframes argentinaFlag {
                  0%, 100% { opacity: 0.8; transform: scaleY(1); }
                  50% { opacity: 1; transform: scaleY(1.1); }
                }
                
                .argentina-flag {
                  animation: argentinaFlag 1.8s ease-in-out infinite;
                }
                
                @keyframes flamePulse {
                  0%, 100% { opacity: 0.8; transform: scale(1); background-color: #dc2626; }
                  50% { opacity: 1; transform: scale(1.1); background-color: #f97316; }
                }
                
                .flame-pulse {
                  animation: flamePulse 1.5s ease-in-out infinite;
                }
                
                /* UNIQUE LODGE EFFECTS - Accommodation Theme */
                @keyframes lodgePine {
                  0%, 100% { transform: scale(1) rotate(0deg); }
                  50% { transform: scale(1.1) rotate(3deg); }
                }
                
                .lodge-pine {
                  animation: lodgePine 4s ease-in-out infinite;
                }
                
                .pine-tree {
                  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                }
                
                @keyframes lodgeCabin {
                  0%, 100% { transform: scale(1); opacity: 0.6; }
                  50% { transform: scale(1.15); opacity: 1; }
                }
                
                .lodge-cabin {
                  animation: lodgeCabin 3s ease-in-out infinite;
                }
                
                .cabin-roof {
                  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                }
                
                @keyframes countryWindmill {
                  0%, 100% { transform: translateX(-50%) rotate(0deg); }
                  50% { transform: translateX(-50%) rotate(5deg); }
                }
                
                .country-windmill {
                  animation: countryWindmill 3s ease-in-out infinite;
                }
                
                .windmill-body {
                  border-radius: 2px;
                }
                
                @keyframes windmillBlades {
                  0% { transform: translateX(-50%) rotate(0deg); }
                  100% { transform: translateX(-50%) rotate(360deg); }
                }
                
                .windmill-blades {
                  animation: windmillBlades 4s linear infinite;
                }
                
                @keyframes countryBarn {
                  0%, 100% { transform: scale(1); }
                  50% { transform: scale(1.1); }
                }
                
                .country-barn {
                  animation: countryBarn 5s ease-in-out infinite;
                }
                
                .barn-shape {
                  border-radius: 2px 2px 0 0;
                }
                
                @keyframes countryFence {
                  0%, 100% { transform: translateY(-50%) scaleY(1); }
                  50% { transform: translateY(-50%) scaleY(1.1); }
                }
                
                .country-fence {
                  animation: countryFence 4s ease-in-out infinite;
                }
                
                .fence-post {
                  border-radius: 1px;
                }
                
                /* Responsive Design */
                @media (max-width: 768px) {
                  .text-5xl { font-size: 2.25rem; }
                  .text-6xl { font-size: 2.75rem; }
                  
                  .carousel-continuous {
                    animation-duration: 20s;
                  }
                  
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
                  
                  /* Reduce flying elements and external decorations */
                  .flying-duck,
                  .fire-spark,
                  .water-ripple,
                  .smoke-rise,
                  .targeting-scope,
                  .bullet-impact,
                  .range-line,
                  .nature-leaf,
                  .nature-star,
                  .flying-bird,
                  .mountain-peak,
                  .lodge-pine,
                  .lodge-cabin,
                  .country-windmill,
                  .country-barn,
                  .country-fence {
                    display: none !important;
                  }
                  
                  /* Reduce spacing and padding to prevent overflow */
                  .relative.group {
                    margin: 0 !important;
                    padding: 0 !important;
                  }
                  
                  /* Ensure all images stay within bounds */
                  .accommodation-image-wrapper,
                  .relative.h-96,
                  .relative.h-\\[28rem\\],
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