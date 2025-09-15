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
                <div className="h-96 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/cazadores_team.jpg"
                    alt="Rosybill Outfitters Team - Professional hunting guides and staff"
                    width={500}
                    height={384}
                    className="w-full h-full object-cover "
                    style={{ objectPosition: 'center 80%' }}
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-stone-800 mb-6">Expert Hunting Guides</h2>
                <div className="space-y-6 text-stone-600 leading-relaxed">
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
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-stone-800 mb-1 sm:mb-2">Duck Hunting</h3>
                      <p className="text-sm sm:text-base text-stone-600">Premium waterfowl hunting in Argentina&apos;s wetlands and marshes</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-stone-800 mb-1 sm:mb-2">Bird Hunting</h3>
                      <p className="text-sm sm:text-base text-stone-600">World-class dove shooting, duck hunting, and perdiz in prime flyways</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                      <Building className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-stone-800 mb-1 sm:mb-2">Hunting Lodges</h3>
                      <p className="text-sm sm:text-base text-stone-600">Traditional Argentine estancias with modern amenities and gourmet cuisine</p>
                    </div>
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
                <div className="h-[28rem] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/maxi_patos.jpg"
                    alt="Duck hunting experience - Professional guide with ducks at Rosybill Outfitters"
                    width={500}
                    height={384}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 40%' }}
                  />
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

              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/accomodation2.webp"
                  alt="Rosybill Outfitters Lodge 2"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/accomodation3.webp"
                  alt="Rosybill Outfitters Lodge 3"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
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
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src="/images/gaucho_asado.jpg"
                    alt="Traditional Argentine Gaucho Asado - Authentic BBQ Experience"
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover"
                    priority
                  />
                  {/* Overlay with title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Authentic Argentine Experience</h3>
                    <p className="text-white/90 text-sm">Traditional gaucho asado and premium Argentine hospitality</p>
                  </div>
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