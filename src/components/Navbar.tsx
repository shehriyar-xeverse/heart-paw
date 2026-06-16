/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Heart, Sparkles, BookOpen, MapPin, Activity, Award, Briefcase, GraduationCap } from 'lucide-react';
import { PagePath, ServiceCategory, AboutSubpage, CareerSubpage } from '../types';

interface NavbarProps {
  currentPage: PagePath;
  onNavigate: (
    page: PagePath,
    extra?: {
      serviceCategory?: ServiceCategory;
      aboutSubpage?: AboutSubpage;
      careerSubpage?: CareerSubpage;
    }
  ) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'about' | 'careers' | 'students' | null>(null);
  
  // Mobile accordion expansions
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileCareersOpen, setMobileCareersOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (page: PagePath, extra?: any) => {
    onNavigate(page, extra);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const servicesDropdownItems: { label: string; id: ServiceCategory; icon: any; short: string }[] = [
    { label: 'Veterinary Care', id: 'vet-care', icon: Heart, short: 'Preventative & expert medical treatments' },
    { label: 'Style & Groom', id: 'style-groom', icon: Sparkles, short: 'Bubble spas & breed-specific styling' },
    { label: 'Daycare Services', id: 'daycare', icon: Activity, short: 'Active outdoor play & agility tracking' },
    { label: 'Care Boarding', id: 'boarding', icon: BookOpen, short: 'Overnight suites with vet checkups' },
    { label: 'Wellness Care Plans', id: 'care-plans', icon: Award, short: 'Unlimited checkups & preventative subscriptions' },
    { label: 'Pet Insurance', id: 'pet-insurance', icon: Heart, short: 'Direct claims settlement & 90% coverage' },
    { label: '24/7 Teletriage', id: 'teletriage', icon: Activity, short: 'Instant emergency video consultations' },
    { label: 'Urgent Care', id: 'urgent-care', icon: Heart, short: 'Primary urgent assistance & surgery' },
  ];

  const aboutDropdownItems: { label: string; id: AboutSubpage; icon: any; short: string }[] = [
    { label: 'Our Philosophy', id: 'philosophy', icon: Heart, short: 'Our Fear-Free™ healing commitments' },
    { label: 'Our Specialist Team', id: 'team', icon: Award, short: 'Meet our veterinary medical leaders' },
    { label: 'Our Locations', id: 'locations', icon: MapPin, short: 'Beautiful custom locations near you' },
    { label: 'Brand News & Press', id: 'press', icon: BookOpen, short: 'Media coverage and announcements' },
    { label: 'Community Events', id: 'events', icon: Sparkles, short: 'Workshops & local adoption gatherings' },
    { label: 'Wellness Blog', id: 'blog', icon: BookOpen, short: 'Tips & articles from pediatric vets' },
  ];

  const careersDropdownItems: { label: string; id: CareerSubpage; icon: any; short: string }[] = [
    { label: 'For Veterinarians', id: 'vets', icon: Award, short: 'DVM clinical sovereignty & high salaries' },
    { label: 'Veterinary Technicians', id: 'techs', icon: Activity, short: 'Nurturing LVTs & advanced diagnostics' },
    { label: 'Pet Stylists & Groomers', id: 'groomers', icon: Sparkles, short: 'Custom layout luxury spas' },
    { label: 'Client Support Staff', id: 'staff', icon: Heart, short: 'Lobby operations & coordination' },
    { label: 'Co-Own With Us', id: 'co-own', icon: Briefcase, short: 'Venture Operating Partner Program' },
  ];

  const useDarkNav = currentPage === '/' && !isScrolled;

  const linkColorClass = (page: PagePath) => {
    const isActive = currentPage === page;
    if (useDarkNav) {
      return isActive ? 'text-brand-accent font-semibold' : 'text-slate-100 hover:text-brand-accent';
    } else {
      return isActive ? 'text-brand-primary font-semibold' : 'text-brand-text-muted hover:text-brand-primary';
    }
  };

  const activeLineColorClass = useDarkNav ? 'bg-brand-accent' : 'bg-brand-primary';

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          useDarkNav
            ? 'h-20 bg-slate-950/40 backdrop-blur-md border-b border-white/10 shadow-lg'
            : isScrolled
              ? 'h-16 bg-[#FAF9F8]/95 backdrop-blur-lg shadow-md shadow-brand-primary/5 border-b border-brand-primary/10'
              : 'h-20 bg-[#FAF9F8]/80 backdrop-blur-md border-b border-brand-primary/5'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <div
            id="navbar-logo"
            onClick={() => handleLinkClick('/')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-brand-primary/40">
              {/* Cute customized Paw plus Heart icon */}
              <svg
                id="brand-icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5.5 h-5.5 text-white animate-float"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.5 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                <circle cx="8" cy="9" r="2.5" className="text-brand-accent fill-current" />
                <circle cx="16" cy="9" r="2.5" className="text-brand-accent fill-current" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-lg md:text-xl tracking-wider leading-tight select-none transition-colors ${useDarkNav ? 'text-white' : 'text-brand-text-main'}`}>
                HEART + PAW
              </span>
              <span className={`text-[9px] font-mono tracking-widest -mt-1 font-bold transition-colors ${useDarkNav ? 'text-brand-accent' : 'text-brand-primary'}`}>
                PET WELLNESS
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div id="desktop-nav" className="hidden lg:flex items-center space-x-6">
            <button
              onClick={() => handleLinkClick('/appointments')}
              className={`font-sans font-medium text-sm transition-colors relative py-2 ${linkColorClass('/appointments')}`}
            >
              Today’s Appointments
              {currentPage === '/appointments' && (
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${activeLineColorClass}`} />
              )}
            </button>

            <button
              onClick={() => handleLinkClick('/locations')}
              className={`font-sans font-medium text-sm transition-colors relative py-2 ${linkColorClass('/locations')}`}
            >
              Locations
              {currentPage === '/locations' && (
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${activeLineColorClass}`} />
              )}
            </button>

            {/* Services Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`font-sans font-medium text-sm transition-colors flex items-center space-x-1 ${
                  currentPage === '/services'
                    ? (useDarkNav ? 'text-brand-accent' : 'text-brand-primary')
                    : (useDarkNav ? 'text-slate-100 hover:text-brand-accent' : 'text-brand-text-muted hover:text-brand-primary')
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''} ${useDarkNav ? 'text-slate-300' : 'text-brand-text-muted'}`} />
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-[540px] bg-white rounded-xl shadow-card-strong border border-brand-primary/5 p-4 grid grid-cols-2 gap-2 animate-fade-in">
                  <div className="col-span-2 mb-2 pb-2 border-b border-brand-bg-alt">
                    <p className="text-xs font-mono text-brand-primary uppercase tracking-widest font-bold">Our Medical & Grooming Services</p>
                  </div>
                  {servicesDropdownItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleLinkClick('/services', { serviceCategory: item.id })}
                      className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-brand-bg-main text-left transition-all duration-200 group"
                    >
                      <div className="p-1.5 rounded-md bg-brand-bg-main text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                        <item.icon className="w-4 h-4 text-brand-primary group-hover:text-white" />
                      </div>
                      <div>
                        <span className="block font-sans font-semibold text-sm text-brand-text-main group-hover:text-brand-primary transition-colors">
                          {item.label}
                        </span>
                        <span className="block text-[11px] text-brand-text-muted leading-tight mt-0.5">
                          {item.short}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleLinkClick('/co-ownership')}
              className={`font-sans font-medium text-sm transition-colors relative py-2 ${linkColorClass('/co-ownership')}`}
            >
              Co-Ownership
              {currentPage === '/co-ownership' && (
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${activeLineColorClass}`} />
              )}
            </button>

            {/* About Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`font-sans font-medium text-sm transition-colors flex items-center space-x-1 ${
                  currentPage === '/about'
                    ? (useDarkNav ? 'text-brand-accent' : 'text-brand-primary')
                    : (useDarkNav ? 'text-slate-100 hover:text-brand-accent' : 'text-brand-text-muted hover:text-brand-primary')
                }`}
              >
                <span>About</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'about' ? 'rotate-180' : ''} ${useDarkNav ? 'text-slate-300' : 'text-brand-text-muted'}`} />
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute right-1/2 translate-x-1/3 top-full w-[480px] bg-white rounded-xl shadow-card-strong border border-brand-primary/5 p-4 grid grid-cols-2 gap-2">
                  <div className="col-span-2 mb-2 pb-2 border-b border-brand-bg-alt">
                    <p className="text-xs font-mono text-brand-accent uppercase tracking-widest font-bold font-display">Who We Are</p>
                  </div>
                  {aboutDropdownItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        if (item.id === 'locations') {
                          handleLinkClick('/locations');
                        } else {
                          handleLinkClick('/about', { aboutSubpage: item.id });
                        }
                      }}
                      className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-brand-bg-main text-left transition-all duration-200 group"
                    >
                      <div className="p-1.5 rounded-md bg-brand-bg-main text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block font-sans font-semibold text-sm text-brand-text-main group-hover:text-brand-primary transition-colors">
                          {item.label}
                        </span>
                        <span className="block text-[11px] text-brand-text-muted leading-tight mt-0.5">
                          {item.short}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Careers Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown('careers')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`font-sans font-medium text-sm transition-colors flex items-center space-x-1 ${
                  currentPage === '/careers' || currentPage === '/students'
                    ? (useDarkNav ? 'text-brand-accent' : 'text-brand-primary')
                    : (useDarkNav ? 'text-slate-100 hover:text-brand-accent' : 'text-brand-text-muted hover:text-brand-primary')
                }`}
              >
                <span>Careers</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'careers' ? 'rotate-180' : ''} ${useDarkNav ? 'text-slate-300' : 'text-brand-text-muted'}`} />
              </button>

              {activeDropdown === 'careers' && (
                <div className="absolute right-0 top-full w-[480px] bg-white rounded-xl shadow-card-strong border border-brand-primary/5 p-4 grid grid-cols-2 gap-2">
                  <div className="col-span-2 pb-1 text-xs font-mono text-brand-primary uppercase tracking-widest font-bold">
                    Join the Movement
                  </div>
                  <div className="col-span-2 mb-2 pb-2 border-b border-brand-bg-alt flex space-x-2">
                    <button
                      onClick={() => handleLinkClick('/students', { studentSubpage: 'techs-assistants' })}
                      className="text-[11px] flex items-center space-x-1 font-semibold border border-brand-primary/20 hover:border-brand-primary hover:bg-brand-bg-main rounded px-2 py-0.5 text-brand-primary"
                    >
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>Student Residency Programs</span>
                    </button>
                  </div>
                  {careersDropdownItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleLinkClick('/careers', { careerSubpage: item.id })}
                      className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-brand-bg-main text-left transition-all duration-200 group"
                    >
                      <div className="p-1.5 rounded-md bg-brand-bg-main text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block font-sans font-semibold text-sm text-brand-text-main group-hover:text-brand-primary transition-colors">
                          {item.label}
                        </span>
                        <span className="block text-[11px] text-brand-text-muted leading-tight mt-0.5">
                          {item.short}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Book Now Button CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => handleLinkClick('/book')}
              className="bg-brand-primary hover:bg-brand-primary/95 text-white text-sm font-sans font-semibold px-6 py-2.5 rounded-full shadow-md shadow-brand-primary/20 transition-all duration-300 hover:scale-[1.03]"
            >
              Book Now
            </button>
          </div>

          {/* Hamburger Menu Icon (Mobile) */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors focus:outline-none ${
                useDarkNav
                  ? 'text-white hover:bg-white/10'
                  : 'text-brand-text-main hover:bg-brand-bg-alt'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/45 backdrop-blur-xs transition-opacity animate-fade-in lg:hidden"
        />
      )}

      {/* Mobile Menu Drawer Panel */}
      <div
        className={`fixed top-0 bottom-0 left-0 w-[300px] max-w-[85vw] z-50 bg-white shadow-2xl flex flex-col transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 border-b border-brand-bg-alt flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center">
              <Heart className="w-4.5 h-4.5 text-white" />
            </div>
            <span className="font-display font-bold text-base tracking-wider text-brand-text-main">
              HEART + PAW
            </span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1.5 rounded-full hover:bg-brand-bg-alt text-brand-text-main"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable links list */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
          <button
            onClick={() => handleLinkClick('/appointments')}
            className="w-full text-left font-sans font-medium text-base text-brand-text-main py-2 hover:text-brand-primary transition-colors flex items-center justify-between"
          >
            <span>Today’s Appointments</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
          </button>

          <button
            onClick={() => handleLinkClick('/locations')}
            className="w-full text-left font-sans font-medium text-base text-brand-text-main py-2 hover:text-brand-primary transition-colors flex items-center justify-between"
          >
            <span>Locations</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
          </button>

          {/* Services Accordion */}
          <div className="border-b border-brand-bg-alt/30 pb-2">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full text-left font-sans font-medium text-base text-brand-text-main py-2 hover:text-brand-primary flex items-center justify-between transition-colors"
            >
              <span>Our Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="mt-1 pl-4 space-y-2 border-l-2 border-brand-primary/20">
                {servicesDropdownItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick('/services', { serviceCategory: item.id })}
                    className="w-full text-left py-1.5 text-sm text-brand-text-muted hover:text-brand-primary font-sans block"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleLinkClick('/co-ownership')}
            className="w-full text-left font-sans font-medium text-base text-brand-text-main py-2 hover:text-brand-primary transition-colors flex items-center justify-between"
          >
            <span>Co-Ownership System</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
          </button>

          {/* About Accordion */}
          <div className="border-b border-brand-bg-alt/30 pb-2">
            <button
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className="w-full text-left font-sans font-medium text-base text-brand-text-main py-2 hover:text-brand-primary flex items-center justify-between transition-colors"
            >
              <span>About Us</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileAboutOpen && (
              <div className="mt-1 pl-4 space-y-2 border-l-2 border-brand-accent/20">
                {aboutDropdownItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'locations') {
                        handleLinkClick('/locations');
                      } else {
                        handleLinkClick('/about', { aboutSubpage: item.id });
                      }
                    }}
                    className="w-full text-left py-1.5 text-sm text-brand-text-muted hover:text-brand-primary font-sans block"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Careers Accordion */}
          <div className="border-b border-brand-bg-alt/30 pb-2">
            <button
              onClick={() => setMobileCareersOpen(!mobileCareersOpen)}
              className="w-full text-left font-sans font-medium text-base text-brand-text-main py-2 hover:text-brand-primary flex items-center justify-between transition-colors"
            >
              <span>Careers & Vets</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileCareersOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileCareersOpen && (
              <div className="mt-1 pl-4 space-y-2 border-l-2 border-brand-primary/20 animate-fade-in">
                {careersDropdownItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick('/careers', { careerSubpage: item.id })}
                    className="w-full text-left py-1.5 text-sm text-brand-text-muted hover:text-brand-primary font-sans block"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => handleLinkClick('/students', { studentSubpage: 'techs-assistants' })}
                  className="w-full text-left py-1.5 text-sm font-semibold text-brand-primary block"
                >
                  Student Programs 🎓
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="p-4 border-t border-brand-bg-alt">
          <button
            onClick={() => handleLinkClick('/book')}
            className="w-full bg-brand-primary hover:bg-[#4f46e5] hover:shadow-lg text-white text-center font-semibold py-3 rounded-xl transition-all"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </>
  );
}
