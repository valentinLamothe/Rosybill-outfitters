import { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [isMobile, setIsMobile] = useState(false);
  
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    passengers: '',
    destination: '',
    details: ''
  });
  
  const [status, setStatus] = useState({ 
    loading: false, 
    ok: null, 
    msg: '' 
  });
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) return 'Name is required';
    if (name.trim().length < 2) return 'Name must be at least 2 characters';
    return '';
  };

  const validatePhone = (phone) => {
    if (!phone.trim()) return 'Phone number is required';
    const phoneRegex = /^[\+]?[\d\s\-\(\)]{8,}$/;
    if (!phoneRegex.test(phone)) return 'Please enter a valid phone number';
    return '';
  };

  const validateEmail = (email) => {
    if (!email.trim()) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return '';
  };

  const validateCheckIn = (checkIn) => {
    if (!checkIn.trim()) return 'Check-in date is required';
    
    // Get today's date as Date object for accurate comparison
    const today = new Date();
    const checkInDate = new Date(checkIn + 'T00:00:00');
    
    // Set today to start of day for fair comparison
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    
    // Allow today and future dates
    if (checkInDate < todayStart) {
      return 'Check-in date must be today or in the future';
    }
    return '';
  };

  const validateCheckOut = (checkOut, checkIn) => {
    if (!checkOut.trim()) return 'Check-out date is required';
    
    if (checkIn && checkOut) {
      // Convert dates to Date objects for accurate comparison
      const checkInDate = new Date(checkIn + 'T00:00:00');
      const checkOutDate = new Date(checkOut + 'T00:00:00');
      
      if (checkOutDate <= checkInDate) {
        return 'Check-out must be after check-in date';
      }
    }
    return '';
  };

  const validatePassengers = (passengers) => {
    if (!passengers.trim()) return 'Number of passengers is required';
    return '';
  };

  const validateDestination = (destination) => {
    if (!destination.trim()) return 'Destination is required';
    return '';
  };

  const validateCheckDates = (checkIn, checkOut) => {
    const errors = {};
    errors.checkIn = validateCheckIn(checkIn);
    errors.checkOut = validateCheckOut(checkOut, checkIn);
    return errors;
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return validateName(value);
      case 'phone':
        return validatePhone(value);
      case 'email':
        return validateEmail(value);
      case 'checkIn':
        return validateCheckIn(value);
      case 'checkOut':
        return validateCheckOut(value, form.checkIn);
      case 'passengers':
        return validatePassengers(value);
      case 'destination':
        return validateDestination(value);
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = { ...form, [name]: value };
    setForm(newForm);

    // Live validation
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    }

    // Special handling for date fields - validate both dates when one changes
    if (name === 'checkIn' || name === 'checkOut') {
      if (touched.checkIn || touched.checkOut) {
        const checkInError = validateCheckIn(name === 'checkIn' ? value : newForm.checkIn);
        const checkOutError = validateCheckOut(name === 'checkOut' ? value : newForm.checkOut, name === 'checkIn' ? value : newForm.checkIn);
        
        setErrors(prev => ({
          ...prev,
          checkIn: touched.checkIn ? checkInError : prev.checkIn,
          checkOut: touched.checkOut ? checkOutError : prev.checkOut
        }));
      }
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const validateAllFields = () => {
    const newErrors = {};
    newErrors.name = validateName(form.name);
    newErrors.phone = validatePhone(form.phone);
    newErrors.email = validateEmail(form.email);
    
    // Only validate these fields on desktop
    if (!isMobile) {
      newErrors.checkIn = validateCheckIn(form.checkIn);
      newErrors.checkOut = validateCheckOut(form.checkOut, form.checkIn);
      newErrors.passengers = validatePassengers(form.passengers);
      newErrors.destination = validateDestination(form.destination);
    }

    return newErrors;
  };

  const hasErrors = (errors) => {
    return Object.values(errors).some(error => error !== '');
  };

  // Check if form is valid for button state
  const isFormValid = () => {
    // Check required fields are filled (different for mobile vs desktop)
    let requiredFieldsFilled;
    
    if (isMobile) {
      // Mobile only requires: name, phone, email
      requiredFieldsFilled = 
        form.name.trim() && 
        form.phone.trim() && 
        form.email.trim();
    } else {
      // Desktop requires all fields
      requiredFieldsFilled = 
        form.name.trim() && 
        form.phone.trim() && 
        form.email.trim() &&
        form.checkIn.trim() &&
        form.checkOut.trim() &&
        form.passengers.trim() &&
        form.destination.trim();
    }
    
    // Check if there are any current validation errors
    // For untouched fields, validate them to check if they would have errors
    const currentErrors = { ...errors };
    
    // Validate required fields that might not have been touched yet
    if (!touched.name) currentErrors.name = validateName(form.name);
    if (!touched.phone) currentErrors.phone = validatePhone(form.phone);
    if (!touched.email) currentErrors.email = validateEmail(form.email);
    
    // Only validate these fields on desktop
    if (!isMobile) {
      if (!touched.checkIn) currentErrors.checkIn = validateCheckIn(form.checkIn);
      if (!touched.checkOut) currentErrors.checkOut = validateCheckOut(form.checkOut, form.checkIn);
      if (!touched.passengers) currentErrors.passengers = validatePassengers(form.passengers);
      if (!touched.destination) currentErrors.destination = validateDestination(form.destination);
    }
    
    const noErrors = !hasErrors(currentErrors);
    
    return requiredFieldsFilled && noErrors;
  };

  // Check if button should be disabled
  const isButtonDisabled = () => {
    return status.loading || !isFormValid();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const allErrors = validateAllFields();
    setErrors(allErrors);
    const touchedFields = {
      name: true,
      phone: true,
      email: true
    };
    
    // Only mark desktop fields as touched on desktop
    if (!isMobile) {
      touchedFields.checkIn = true;
      touchedFields.checkOut = true;
      touchedFields.passengers = true;
      touchedFields.destination = true;
    }
    
    setTouched(touchedFields);

    if (hasErrors(allErrors)) {
      setStatus({ 
        loading: false, 
        ok: false, 
        msg: 'Please fix the validation errors above before submitting your booking request.' 
      });
      return;
    }

    setStatus({ loading: true, ok: null, msg: '' });

    const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'YOUR_FORMSPREE_ID';
    const url = `https://formspree.io/f/${FORM_ID}`;

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json' 
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          checkIn: form.checkIn,
          checkOut: form.checkOut,
          passengers: form.passengers,
          destination: form.destination,
          details: form.details,
          source: 'rosybill-outfitters-website'
        }),
      });

      const data = await res.json();
      
      if (res.ok) {
        setStatus({ 
          loading: false, 
          ok: true, 
          msg: 'Booking request sent successfully! Our team will contact you soon to confirm your hunting adventure.' 
        });
        // Limpiar formulario y errores
        setForm({
          name: '',
          phone: '',
          email: '',
          checkIn: '',
          checkOut: '',
          passengers: '',
          destination: '',
          details: ''
        });
        setErrors({});
        setTouched({});
      } else {
        setStatus({ 
          loading: false, 
          ok: false, 
          msg: data.error || 'Failed to send your booking request. Please try again or contact us directly.' 
        });
      }
    } catch (err) {
      setStatus({ 
        loading: false, 
        ok: false, 
        msg: 'Connection error. Please check your internet connection and try again.' 
      });
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Book Your Adventure</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${
                errors.name && touched.name
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-amber-500'
              }`}
              placeholder="Your full name"
            />
            {errors.name && touched.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${
                errors.phone && touched.phone
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-amber-500'
              }`}
              placeholder="Your phone number"
            />
            {errors.phone && touched.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${
              errors.email && touched.email
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-amber-500'
            }`}
            placeholder="your.email@example.com"
          />
          {errors.email && touched.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Check In & Check Out - Desktop only */}
        {!isMobile && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Check In *</label>
              <input
                type="date"
                name="checkIn"
                value={form.checkIn}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${
                  errors.checkIn && touched.checkIn
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-amber-500'
                }`}
              />
              {errors.checkIn && touched.checkIn && (
                <p className="mt-1 text-sm text-red-600">{errors.checkIn}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Check Out *</label>
              <input
                type="date"
                name="checkOut"
                value={form.checkOut}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${
                  errors.checkOut && touched.checkOut
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-amber-500'
                }`}
              />
              {errors.checkOut && touched.checkOut && (
                <p className="mt-1 text-sm text-red-600">{errors.checkOut}</p>
              )}
            </div>
          </div>
        )}

        {/* Passengers & Destination - Desktop only */}
        {!isMobile && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Passengers *</label>
              <select
                name="passengers"
                value={form.passengers}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${
                  errors.passengers && touched.passengers
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-amber-500'
                }`}
              >
                <option value="">Select number</option>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5+">5+ People</option>
              </select>
              {errors.passengers && touched.passengers && (
                <p className="mt-1 text-sm text-red-600">{errors.passengers}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Destination *</label>
              <select
                name="destination"
                value={form.destination}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${
                  errors.destination && touched.destination
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-amber-500'
                }`}
              >
                <option value="">Select destination</option>
                <option value="cordoba">Córdoba - Dove Hunting</option>
                <option value="entre-rios">Entre Ríos - Duck Hunting</option>
                <option value="patagonia">Patagonia - Mixed Hunting</option>
                <option value="custom">Custom Package</option>
              </select>
              {errors.destination && touched.destination && (
                <p className="mt-1 text-sm text-red-600">{errors.destination}</p>
              )}
            </div>
          </div>
        )}

        {/* Details/Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {isMobile ? 'Message' : 'Additional Details'}
          </label>
          <textarea
            name="details"
            value={form.details}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
            placeholder={isMobile 
              ? "Tell us about your hunting interests and when you'd like to visit..."
              : "Tell us about your hunting experience, preferences, or special requests..."
            }
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isButtonDisabled()}
          className={`w-full py-4 px-8 rounded-lg font-bold text-lg transition-all duration-300 ${
            isButtonDisabled()
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-amber-600 hover:bg-amber-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
          }`}
        >
          {status.loading ? 'Sending...' : 'Book Now'}
        </button>

        {/* Validation Hint */}
        {!isFormValid() && !status.loading && (
          <div className="text-center">
            <p className="text-sm text-gray-500 italic">
              Please complete all required fields (*) correctly to enable booking
            </p>
          </div>
        )}

        {/* Status Messages */}
        {status.ok === true && (
          <div className="p-6 bg-green-100 border-2 border-green-300 rounded-lg shadow-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-green-800">{status.msg}</p>
              </div>
            </div>
          </div>
        )}
        
        {status.ok === false && (
          <div className="p-6 bg-red-100 border-2 border-red-300 rounded-lg shadow-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-red-800">{status.msg}</p>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
