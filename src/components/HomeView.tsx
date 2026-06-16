/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { Heart, Sparkles, Activity, ShieldCheck, Award, Star, ChevronDown, ChevronRight, ArrowRight, CheckCircle2, Milestone } from 'lucide-react';
import { PagePath, ServiceCategory, Testimonial } from '../types';
import { TESTIMONIALS, PARTNERS } from '../data';

interface HomeViewProps {
  onNavigate: (
    page: PagePath,
    extra?: { serviceCategory?: ServiceCategory }
  ) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [countPets, setCountPets] = useState(0);
  const [countClinics, setCountClinics] = useState(0);
  const [countGroomers, setCountGroomers] = useState(0);
  const [countSatisfaction, setCountSatisfaction] = useState(0);
  
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimatedStats, setHasAnimatedStats] = useState(false);

  // Auto sliding carousel for testimonials (4s interval)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Simple, elegant scroll-to-trigger animated counters
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedStats) {
          setHasAnimatedStats(true);
          
          // Animate counters
          let startPets = 0;
          let startClinics = 0;
          let startGroomers = 0;
          let startSatisfaction = 40;

          const petsEnd = 24500;
          const clinicsEnd = 5;
          const groomersEnd = 18;
          const satisfactionEnd = 99;

          const stepTime = 15;
          const timer = setInterval(() => {
            startPets += 482;
            startClinics += 1;
            startGroomers += 1;
            startSatisfaction += 2;

            if (startPets >= petsEnd) setCountPets(petsEnd);
            else setCountPets(startPets);

            if (startClinics >= clinicsEnd) setCountClinics(clinicsEnd);
            else setCountClinics(startClinics);

            if (startGroomers >= groomersEnd) setCountGroomers(groomersEnd);
            else setCountGroomers(startGroomers);

            if (startSatisfaction >= satisfactionEnd) {
              setCountSatisfaction(satisfactionEnd);
              clearInterval(timer);
            } else {
              setCountSatisfaction(startSatisfaction);
            }
          }, stepTime);
        }
      },
      { threshold: 0.15 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, [hasAnimatedStats]);

  // Scroll to section handler
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-intro-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const servicesPreview = [
    {
      title: 'Veterinary Care',
      id: 'vet-care' as ServiceCategory,
      icon: Heart,
      desc: 'Expert general practitioners & surgical specialists operating in Fear-Free™ quiet clinical spaces.',
      color: 'text-brand-primary bg-brand-primary/10',
      badge: 'Certified Experts'
    },
    {
      title: 'Style & Grooming',
      id: 'style-groom' as ServiceCategory,
      icon: Sparkles,
      desc: 'Skin therapy, micro-bubble mineral baths, breed-specific coiffure, and peaceful lavender aromatherapy.',
      color: 'text-brand-accent bg-brand-accent/10',
      badge: 'Calming Spa'
    },
    {
      title: 'Active Daycare',
      id: 'daycare' as ServiceCategory,
      icon: Activity,
      desc: 'Paved social fitness paths, indoor/outdoor agility playgrounds, adaptive playgroups, and deep nap dens.',
      color: 'text-amber-500 bg-amber-500/10',
      badge: 'Agility Play'
    },
    {
      title: 'Comfort Boarding',
      id: 'boarding' as ServiceCategory,
      icon: ShieldCheck,
      desc: 'Luxurious floor-to-ceiling clean glass suites with customized orthopedic beds and regular medical oversight.',
      color: 'text-emerald-600 bg-emerald-600/10',
      badge: '24/7 Monitored'
    }
  ];

  const whyChooseUsCards = [
    {
      title: 'Compassionate Medical Sovereignty',
      desc: 'We strip down toxic quota-based veterinary protocols. Our local doctors own the clinical directions of their practices completely, allowing them to treat your pet with pure undivided care.'
    },
    {
      title: 'Low-Stress Spaces by Design',
      desc: 'Clinics featuring state-of-the-art feline-only consulting tables, warm sensory lighting, and high-performance sound isolation properties to exclude standard, terror-inducing veterinary noise.'
    },
    {
      title: 'Care Plans Made Transparent',
      desc: 'Skip unexpected premium billing surprises. Our comprehensive Care Subscriptions let you access unlimited vet wellness consultations, checkups, vaccinations, and styling discounts for one simple fee.'
    }
  ];

  return (
    <div id="home-view" className="relative">
      
      {/* HERO SECTION WITH PREMIUM VIDEO BACKGROUND & GRADIENT CANVAS OVERLAYS */}
      <section 
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
      >
        {/* Cinematic Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1600&q=80"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 animate-kenburns opacity-95"
            style={{
              filter: 'brightness(0.9) contrast(1.05)',
            }}
          >
            <source src="https://res.cloudinary.com/dju25z9v3/video/upload/v1781629399/Enhancer-Ultra_HD-PixVerse_V6_Image_Text_540P_A_cinematic_emotio_1_p7nibg.mp4" type="video/mp4" />
          </video>
          
          {/* Smooth bottom transition fade into the next light section */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-bg-main to-transparent pointer-events-none z-10" />
        </div>

        {/* Content Container with Headline Stagger Reveal styling */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Heart className="w-4 h-4 text-brand-accent fill-current animate-pulse" />
            <span className="text-xs font-mono font-medium tracking-wider uppercase">Welcome to Fear-Free™ Pet Healing</span>
          </div>

          <h1 className="font-display font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight mb-6">
            Your pet’s health goes <br />
            <span className="text-brand-accent relative font-bold italic drop-shadow-sm">beyond</span> veterinary care.
          </h1>

          <p className="font-sans text-base sm:text-lg md:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed mb-10">
            Welcome to HEART + PAW—a tranquil, high-end sanctuary blending expert clinical veterinary medicine with luxury styling grooming salons & lively social sports playgrounds under one loving roof.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/book')}
              className="w-full sm:w-auto bg-brand-primary hover:bg-[#4f46e5] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-brand-primary/40 animate-glow-pulse"
            >
              Book Appointment
            </button>
            <button
              onClick={scrollToAbout}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.03]"
            >
              Explore Sanctuary
            </button>
          </div>

          {/* Bouncing Chevron Scroll Indicator */}
          <button 
            onClick={scrollToAbout}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 hover:text-white transition-colors cursor-pointer group"
          >
            <ChevronDown className="w-5 h-5 animate-bounce text-brand-primary" />
          </button>
        </div>
      </section>


      {/* 🐶 ABOUT SECTION: EMOTIONAL INTRO SPLIT */}
      <section 
        id="about-intro-section"
        className="py-20 md:py-28 bg-brand-bg-main border-b border-brand-primary/5 scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Block Right */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-brand-primary/10 rounded-2xl -rotate-3 translate-x-3 translate-y-3" />
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5] group">
                <img 
                  src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80" 
                  alt="Veterinarian speaking gently to dog" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-brand-primary/10 shadow-md">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-brand-bg-main flex items-center justify-center text-brand-primary">
                      <Heart className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-brand-primary uppercase tracking-wider font-bold">FEAR-FREE ENVIRONMENT</p>
                      <h4 className="text-xs font-bold text-brand-text-main">Dr. Abigail Carter, Chief Medical Officer</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Block Left */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-widest">Our Inspiring Philosophy</span>
              <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-brand-text-main leading-tight">
                Designed to make pets and their families feel instantly at ease.
              </h2>
              <p className="text-sm sm:text-base text-brand-text-muted leading-relaxed">
                When you walk through the doorway of a typical vet clinic, you’re greeted by harsh steel tables, fluorescent ceiling lights, high chemical smells, and standard clinical terror. At HEART + PAW, we set out to build a completely healing pet wellness ecosystem. 
              </p>
              <p className="text-sm sm:text-base text-brand-text-muted leading-relaxed">
                Our clinics are beautifully planned with warm natural wood elements, non-slip textured cork flooring, and customized low-stress treatment suites. We treat each pet with positive reinforcement techniques, so they leave carrying a happy heart and a clean paw.
              </p>

              {/* Little bullet checks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 dark:border-white/5 border-t border-brand-primary/5">
                <div className="flex items-center space-x-2 text-sm text-brand-text-muted">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span>Feline-Only Examination Zones</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-brand-text-muted">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                  <span>Aromatherapy Lavender Diffusers</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-brand-text-muted">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" />
                  <span>Interactive Glass Styling Cabins</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-brand-text-muted">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" />
                  <span>Sovereign Local Doctors Track</span>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onNavigate('/about')}
                  className="inline-flex items-center space-x-2 text-sm font-bold text-brand-primary hover:text-[#4f46e5] transition-colors group"
                >
                  <span>Explore Our Philosophy & Story</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 💚 SERVICES PREVIEW CARDS (4 CARDS) */}
      <section id="services-preview-section" className="py-20 md:py-28 bg-brand-bg-alt/45">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono font-bold text-brand-accent uppercase tracking-widest">COMPLETE PET HEALTH</span>
            <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-brand-text-main">
              Four care modules, one loving sanctuary.
            </h2>
            <p className="text-sm text-brand-text-muted">
              Select any of our modular care paths matching your pet’s active health requirements. Tap any specialty below to learn more, discover slots, and book directly.
            </p>
          </div>

          {/* Grid Layout Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 card-perspective">
            {servicesPreview.map((service, index) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.title}
                  onClick={() => onNavigate('/services', { serviceCategory: service.id })}
                  className="bg-white rounded-xl p-6 border border-brand-primary/10 shadow-subtle card-3d group cursor-pointer relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute top-4 right-4 bg-brand-bg-main text-brand-primary text-[10px] font-bold font-mono px-2.5 py-1 rounded-full border border-brand-primary/10 card-3d-child-md">
                    {service.badge}
                  </div>
                  
                  {/* Floating floating floating icon */}
                  <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-6 card-3d-child-xl`}>
                    <IconComp className="w-6 h-6 animate-float" />
                  </div>

                  <h3 className="font-display font-semibold text-base text-brand-text-main mb-2 group-hover:text-brand-primary transition-colors card-3d-child-lg">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs text-brand-text-muted leading-relaxed mb-6 card-3d-child-md">
                    {service.desc}
                  </p>

                  <div className="flex items-center space-x-1.5 text-xs font-bold text-brand-primary pt-4 border-t border-brand-bg-main group-hover:translate-x-1 transition-transform">
                    <span>Explore Specialty</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* 🐾 WHY CHOOSE US (TRUST CARDS + COUNTERS) */}
      <section 
        id="why-choose-us"
        ref={statsRef}
        className="py-20 md:py-28 bg-brand-bg-main"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Counters Banner Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 bg-white rounded-2xl p-8 border border-brand-primary/5 shadow-subtle">
            <div className="text-center p-4 border-r border-brand-bg-alt last:border-0">
              <span className="block text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-primary tracking-tight">
                {countPets.toLocaleString()}+
              </span>
              <span className="block text-xs font-mono font-bold tracking-wider text-brand-text-muted uppercase mt-2">
                Pets Restored & Treated
              </span>
            </div>
            <div className="text-center p-4 border-r border-brand-bg-alt last:border-0">
              <span className="block text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-accent tracking-tight">
                {countClinics} ★
              </span>
              <span className="block text-xs font-mono font-bold tracking-wider text-brand-text-muted uppercase mt-2">
                Active Cozy Hospitals
              </span>
            </div>
            <div className="text-center p-4 border-r border-brand-bg-alt last:border-0">
              <span className="block text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-primary tracking-tight">
                {countGroomers}+
              </span>
              <span className="block text-xs font-mono font-bold tracking-wider text-brand-text-muted uppercase mt-2">
                Certified Master Stylists
              </span>
            </div>
            <div className="text-center p-4 last:border-0">
              <span className="block text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brand-accent tracking-tight">
                {countSatisfaction}%
              </span>
              <span className="block text-xs font-mono font-bold tracking-wider text-brand-text-muted uppercase mt-2">
                Happy Tail-Wag Rate 🐾
              </span>
            </div>
          </div>

          {/* Details Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-widest">THE HEART + PAW PROMISE</span>
              <h2 className="font-display font-medium text-3xl md:text-4xl text-brand-text-main leading-tight">
                What sets our wellness network apart.
              </h2>
              <p className="text-sm text-brand-text-muted leading-relaxed">
                By investing in customized calming layout designs, hiring elite local veterinary leaders with absolute co-ownership shares, and simplifying healthcare subscriptions, we deliver premium clinical care.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/book')}
                  className="bg-brand-primary hover:bg-[#4f46e5] text-white text-xs font-semibold px-6 py-3 rounded-full shadow-md transition-all inline-flex items-center space-x-2"
                >
                  <span>Book Visit Now</span>
                  <CheckCircle2 className="w-4 h-4 text-brand-warm" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 card-perspective">
              {whyChooseUsCards.map((card, i) => (
                <div 
                  key={card.title} 
                  className="bg-white rounded-xl p-5 border border-brand-primary/10 shadow-subtle card-3d"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <p className="text-xs font-bold font-mono text-brand-primary uppercase tracking-wider mb-2 card-3d-child-md">0{i+1} • Core Pilar</p>
                  <h4 className="font-display font-bold text-sm text-brand-text-main mb-2 leading-snug card-3d-child-lg">
                    {card.title}
                  </h4>
                  <p className="text-xs text-brand-text-muted leading-relaxed card-3d-child-md">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* ⭐ TESTIMONIALS (AUTO CAROUSEL IN 4.5S) */}
      <section id="testimonials-section" className="py-20 md:py-28 bg-[#EDE9FE]/50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          
          <span className="inline-flex items-center justify-center p-2 rounded-full bg-brand-primary/10 text-brand-primary mb-6 animate-float">
            <Star className="w-8 h-8 fill-brand-primary text-brand-primary" />
          </span>

          <h2 className="font-display font-medium text-2xl sm:text-3xl md:text-4xl text-brand-text-main mb-2">
            Why pet parents stay in our family.
          </h2>
          <p className="text-xs font-mono text-brand-primary uppercase tracking-widest font-bold mb-12">
            HEAR THEIR EMOTIONAL STORIES
          </p>

          {/* Testimonial slider box with keyframes/fading effect */}
          <div className="relative bg-white rounded-2xl p-8 md:p-12 border border-brand-primary/5 shadow-lg min-h-[300px] flex flex-col justify-between items-center transition-all duration-500">
            {TESTIMONIALS.map((testimonial, idx) => {
              const isSelected = activeTestimonialIndex === idx;
              return (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-700 absolute inset-8 md:inset-12 flex flex-col items-center justify-center ${
                    isSelected ? 'opacity-100 scale-100 translate-y-0 z-10' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
                  }`}
                >
                  <p className="text-sm sm:text-base md:text-lg text-brand-text-main italic font-sans leading-relaxed max-w-2xl text-center mb-6">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center space-x-3.5 pt-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-brand-primary/10 shadow-md"
                    />
                    <div className="text-left">
                      <h4 className="font-sans font-bold text-sm text-brand-text-main leading-tight">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-brand-text-muted">
                        Parent to <span className="font-semibold text-brand-primary">{testimonial.petName}</span> ({testimonial.petBreed})
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slider dots indicators */}
          <div className="flex justify-center space-x-2 mt-8 z-20 position-relative">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonialIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeTestimonialIndex === index ? 'w-8 bg-brand-primary' : 'bg-brand-primary/30 hover:bg-brand-primary/60'
                }`}
              />
            ))}
          </div>

        </div>
      </section>


      {/* 🤝 PARTNER LOGOS CAROUSEL MARQUEE */}
      <section id="partners-section" className="py-12 bg-white border-t border-b border-brand-primary/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-6">
          <p className="text-[10px] font-mono uppercase tracking-widest text-brand-text-muted font-bold">
            Trusted Clinical Suppliers & Partners
          </p>
        </div>
        
        {/* Infinite Horizontal Running Marquee using custom animation classes */}
        <div className="relative w-full flex overflow-x-hidden pt-2 pb-2">
          <div className="animate-marquee flex whitespace-nowrap space-x-12 shrink-0">
            {PARTNERS.map((partner, index) => (
              <div 
                key={`p1-${index}`}
                className="inline-flex items-center justify-center font-display text-sm md:text-base font-semibold tracking-wider text-brand-text-muted hover:text-brand-primary grayscale hover:grayscale-0 transition-all duration-300 border border-brand-bg-alt px-5 py-2.5 rounded-full bg-brand-bg-main/60 shadow-subtle min-w-[160px] select-none"
              >
                🌿 {partner}
              </div>
            ))}
          </div>
          <div className="animate-marquee flex whitespace-nowrap space-x-12 shrink-0" aria-hidden="true">
            {PARTNERS.map((partner, index) => (
              <div 
                key={`p2-${index}`}
                className="inline-flex items-center justify-center font-display text-sm md:text-base font-semibold tracking-wider text-brand-text-muted hover:text-brand-primary grayscale hover:grayscale-0 transition-all duration-300 border border-brand-bg-alt px-5 py-2.5 rounded-full bg-brand-bg-main/60 shadow-subtle min-w-[160px] select-none"
              >
                🌿 {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Inject CSS keyframes inline for marquee and custom animations */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
          @keyframes kenburns {
            0% { transform: scale(1.02); }
            50% { transform: scale(1.10); }
            100% { transform: scale(1.02); }
          }
          .animate-kenburns {
            animation: kenburns 35s ease-in-out infinite;
          }
          @keyframes glowPulse {
            0%, 100% { box-shadow: 0 0 5px rgba(99, 102, 241, 0.4), 0 0 10px rgba(99, 102, 241, 0.2); }
            50% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.7), 0 0 30px rgba(251, 113, 133, 0.4); }
          }
          .animate-glow-pulse {
            animation: glowPulse 2.5s infinite ease-in-out;
          }
        `}</style>
      </section>

    </div>
  );
}
