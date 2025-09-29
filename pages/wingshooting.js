import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Building, Crosshair, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { FiFlag } from 'react-icons/fi';
import { MdDinnerDining } from 'react-icons/md';
import { useState, useEffect } from 'react';

export default function Wingshooting() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  // Array de imágenes en orden: outside 1-5, luego inside 1-3
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

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === houseImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? houseImages.length - 1 : prevIndex - 1
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

  // Auto-advance carousel
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
        <title>Wingshooting - Rosybill Outfitters</title>
        <meta name="description" content="Premier wingshooting experiences in Argentina - Buenos Aires, Entre Rios, and Cordoba hunting territories." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rosybill-outfitters.vercel.app/wingshooting" />
        <meta property="og:title" content="Wingshooting Argentina - Rosybill Outfitters" />
        <meta property="og:description" content="Premier wingshooting experiences in Argentina - Buenos Aires, Entre Rios, and Cordoba hunting territories with expert guides." />
        <meta property="og:image" content="https://rosybill-outfitters.vercel.app/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Rosybill Outfitters" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://rosybill-outfitters.vercel.app/wingshooting" />
        <meta name="twitter:title" content="Wingshooting Argentina - Rosybill Outfitters" />
        <meta name="twitter:description" content="Premier wingshooting experiences in Argentina - Buenos Aires, Entre Rios, and Cordoba hunting territories with expert guides." />
        <meta name="twitter:image" content="https://rosybill-outfitters.vercel.app/og-image.jpg" />
        
        {/* Additional Meta */}
        <meta name="theme-color" content="#ea580c" />
        <meta name="author" content="Rosybill Outfitters" />
        <meta name="keywords" content="wingshooting, argentina, duck hunting, dove hunting, buenos aires, entre rios, cordoba, hunting guides, outfitters" />
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
              {/* Buenos Aires - with Carousel */}
              <div className="bg-stone-50 rounded-lg overflow-hidden shadow-md">
                <div 
                  className="h-64 relative group cursor-grab active:cursor-grabbing"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {/* Carousel Container */}
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={houseImages[currentImageIndex]}
                      alt={`Buenos Aires Hunting Lodge - ${currentImageIndex < 5 ? 'Outside' : 'Inside'} ${currentImageIndex < 5 ? currentImageIndex + 1 : currentImageIndex - 4}`}
                      width={400}
                      height={256}
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
                    
                    {/* Desktop Navigation Arrows */}
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
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-stone-800 mb-3">Buenos Aires</h3>
                  <p className="text-stone-600 mb-4">(Ducks and Partridge)</p>
                  <p className="text-stone-700">
                    Hunt premium waterfowl and upland game birds in Buenos Aires province. 
                    Traditional estancia with expert guides and authentic Argentine hospitality.
                  </p>
                  <p className="text-sm text-stone-500 mt-3 italic">
                    {currentImageIndex < 5 ? '🏡 Outside view' : '🏠 Inside view'}
                  </p>
                </div>
              </div>

              {/* Entre Rios */}
              <div className="accommodation-card group bg-stone-50 rounded-lg overflow-hidden shadow-md cursor-pointer relative">
                {/* Nature-themed decorative elements */}
                <div className="absolute -top-2 -left-2 opacity-0 group-hover:opacity-80 transition-all duration-700 nature-leaf">
                  <div className="w-4 h-4 bg-green-600 leaf-shape transform -rotate-12"></div>
                </div>
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-70 transition-all duration-700 nature-leaf" style={{animationDelay: '0.3s'}}>
                  <div className="w-3 h-3 bg-green-700 leaf-shape transform rotate-45"></div>
                </div>
                <div className="absolute -bottom-2 -left-2 opacity-0 group-hover:opacity-60 transition-all duration-700 nature-star">
                  <div className="w-2 h-2 bg-yellow-400 star-shape"></div>
                </div>
                <div className="absolute -bottom-2 -right-2 opacity-0 group-hover:opacity-75 transition-all duration-700 nature-star" style={{animationDelay: '0.5s'}}>
                  <div className="w-2.5 h-2.5 bg-amber-500 star-shape"></div>
                </div>
                
                <div className="accommodation-image-wrapper h-64 overflow-hidden relative">
                  {/* Forest border effect */}
                  <div className="absolute inset-0 border-4 border-green-600/30 group-hover:border-green-500/60 transition-all duration-500 rounded-lg"></div>
                  
                  <Image
                    src="/images/accomodation2.webp"
                    alt="Entre Rios Hunting Lodge"
                    width={400}
                    height={256}
                    className="accommodation-image w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110 group-hover:saturate-110"
                  />
                  
                  {/* Nature-themed overlay */}
                  <div className="accommodation-overlay absolute inset-0 bg-gradient-to-t from-green-900/70 via-transparent to-emerald-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-xl mb-1">Entre Ríos Territory</h3>
                      <p className="text-white/90 text-sm">World-renowned dove hunting destination</p>
                    </div>
                  </div>
                  
                  {/* Wind effect indicator */}
                  <div className="absolute top-4 right-4 bg-green-800/80 backdrop-blur-sm text-green-200 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-4 group-hover:translate-x-0">
                    🌿 NATURAL HABITAT
                  </div>
                </div>
                <div className="p-6 transition-all duration-300 group-hover:bg-stone-100">
                  <h3 className="text-xl font-semibold text-stone-800 mb-3">Entre Ríos</h3>
                  <p className="text-stone-600 mb-4">(Doves)</p>
                  {/* Desktop description */}
                  <p className="hidden md:block text-stone-700">
                    World-renowned dove hunting in Entre Ríos province. 
                    High-volume shooting opportunities in prime agricultural areas with luxury accommodations.
                  </p>
                  {/* Mobile description */}
                  <p className="md:hidden text-stone-700 text-sm">
                    World-renowned dove hunting. High-volume shooting in agricultural areas.
                  </p>
                </div>
              </div>

              {/* Cordoba */}
              <div className="accommodation-card group bg-stone-50 rounded-lg overflow-hidden shadow-md cursor-pointer relative">
                {/* Mountain/sky themed decorative elements */}
                <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-all duration-1000 pointer-events-none">
                  {/* Flying birds silhouettes */}
                  <div className="absolute top-2 left-6 w-3 h-1 bg-slate-700 flying-bird transform -rotate-12"></div>
                  <div className="absolute top-4 right-8 w-2 h-1 bg-slate-600 flying-bird transform rotate-6" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-6 left-8 w-2.5 h-1 bg-slate-700 flying-bird transform -rotate-3" style={{animationDelay: '1s'}}></div>
                </div>
                
                {/* Mountain peaks decoration */}
                <div className="absolute -top-3 left-1/4 opacity-0 group-hover:opacity-70 transition-all duration-700 mountain-peak">
                  <div className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-stone-600"></div>
                </div>
                <div className="absolute -top-2 right-1/3 opacity-0 group-hover:opacity-60 transition-all duration-700 mountain-peak" style={{animationDelay: '0.3s'}}>
                  <div className="w-0 h-0 border-l-3 border-r-3 border-b-5 border-l-transparent border-r-transparent border-b-stone-700"></div>
                </div>
                
                <div className="accommodation-image-wrapper h-64 overflow-hidden relative">
                  {/* Sky border effect */}
                  <div className="absolute inset-0 border-4 border-blue-600/30 group-hover:border-sky-500/60 transition-all duration-500 rounded-lg"></div>
                  
                  <Image
                    src="/images/accomodation3.webp"
                    alt="Cordoba Hunting Lodge"
                    width={400}
                    height={256}
                    className="accommodation-image w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-105"
                  />
                  
                  {/* Sky-themed overlay */}
                  <div className="accommodation-overlay absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-sky-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-xl mb-1">Córdoba Territory</h3>
                      <p className="text-white/90 text-sm">Dove shooting capital of the world</p>
                    </div>
                  </div>
                  
                  {/* Wind condition indicator */}
                  <div className="absolute top-4 right-4 bg-blue-800/80 backdrop-blur-sm text-blue-200 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-4 group-hover:translate-x-0">
                    🕊️ DOVE CAPITAL
                  </div>
                  
                  {/* Cloud decoration */}
                  <div className="absolute top-6 left-4 opacity-0 group-hover:opacity-60 transition-all duration-800 cloud-float">
                    <div className="w-8 h-3 bg-white/70 rounded-full relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-white/70 rounded-full"></div>
                      <div className="absolute -right-1 -top-1 w-3 h-3 bg-white/70 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="p-6 transition-all duration-300 group-hover:bg-stone-100">
                  <h3 className="text-xl font-semibold text-stone-800 mb-3">Córdoba</h3>
                  <p className="text-stone-600 mb-4">(Doves)</p>
                  {/* Desktop description */}
                  <p className="hidden md:block text-stone-700">
                    The dove shooting capital of the world. 
                    Experience unlimited shooting opportunities in Córdoba&apos;s legendary hunting fields.
                  </p>
                  {/* Mobile description */}
                  <p className="md:hidden text-stone-700 text-sm">
                    Dove shooting capital. Unlimited opportunities in legendary fields.
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
         
         /* UNIQUE NATURE EFFECTS - Lodge Theme */
         @keyframes natureLeaf {
           0%, 100% { transform: rotate(0deg) scale(1); }
           50% { transform: rotate(10deg) scale(1.1); }
         }
         
         .nature-leaf {
           animation: natureLeaf 3s ease-in-out infinite;
         }
         
         .leaf-shape {
           border-radius: 0 100% 0 100%;
         }
         
         @keyframes natureStar {
           0%, 100% { opacity: 0.6; transform: scale(1) rotate(0deg); }
           50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
         }
         
         .nature-star {
           animation: natureStar 2s ease-in-out infinite;
         }
         
         .star-shape {
           clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
         }
         
         @keyframes flyingBird {
           0% { opacity: 0; transform: translateX(-15px) translateY(3px) rotate(-10deg); }
           50% { opacity: 0.8; transform: translateX(0px) translateY(0px) rotate(0deg); }
           100% { opacity: 0; transform: translateX(15px) translateY(-3px) rotate(10deg); }
         }
         
         .flying-bird {
           animation: flyingBird 3s ease-in-out infinite;
           border-radius: 0 50% 50% 0;
         }
         
         @keyframes mountainPeak {
           0%, 100% { transform: translateY(0px) scale(1); }
           50% { transform: translateY(-2px) scale(1.05); }
         }
         
         .mountain-peak {
           animation: mountainPeak 4s ease-in-out infinite;
         }
         
         @keyframes cloudFloat {
           0%, 100% { transform: translateX(0px) translateY(0px); opacity: 0.6; }
           50% { transform: translateX(5px) translateY(-2px); opacity: 1; }
         }
         
         .cloud-float {
           animation: cloudFloat 5s ease-in-out infinite;
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
          
          /* Reduce nature and outdoor elements */
          .nature-leaf,
          .nature-star,
          .flying-bird,
          .mountain-peak,
          .cloud-float {
            display: none !important;
          }
          
          /* Reduce spacing and padding to prevent overflow */
          .relative.group {
            margin: 0 !important;
            padding: 0 !important;
          }
          
          /* Ensure all images stay within bounds */
          .accommodation-image-wrapper,
          .relative.h-64,
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
