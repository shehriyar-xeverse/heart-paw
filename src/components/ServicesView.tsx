/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Heart, Sparkles, Activity, ShieldCheck, Award, Eye, Flame, MapPin, ArrowRight, HelpCircle } from 'lucide-react';
import { PagePath, ServiceCategory } from '../types';
import { SERVICES_DATA } from '../data';

interface ServicesViewProps {
  activeCategory: ServiceCategory;
  onSelectCategory: (category: ServiceCategory) => void;
  onNavigate: (page: PagePath, extra?: { preselectedServiceCategory?: ServiceCategory }) => void;
}

export default function ServicesView({ activeCategory, onSelectCategory, onNavigate }: ServicesViewProps) {
  
  // Mapping categories to nice Lucide icons
  const categoriesList = [
    { id: 'vet-care' as ServiceCategory, label: 'Veterinary Clinics', icon: Heart, short: 'Preventative medicine & surgery' },
    { id: 'style-groom' as ServiceCategory, label: 'Style & Groom Spa', icon: Sparkles, short: 'Aromatherapy mineral bubble baths' },
    { id: 'daycare' as ServiceCategory, label: 'Active Daycare', icon: Activity, short: 'Social agility & brain puzzles' },
    { id: 'boarding' as ServiceCategory, label: 'Comfort Boarding', icon: ShieldCheck, short: 'Spacious glass hotel suites' },
    { id: 'care-plans' as ServiceCategory, label: 'Wellness Subscriptions', icon: Award, short: 'Unlimited checkups & care plans' },
    { id: 'pet-insurance' as ServiceCategory, label: 'Pet Insurance', icon: HelpCircle, short: 'Accidents cover & 90% payouts' },
    { id: 'teletriage' as ServiceCategory, label: '24/7 Teletriage', icon: Eye, short: 'Direct video vet advice' },
    { id: 'urgent-care' as ServiceCategory, label: 'Urgent Care Line', icon: Flame, short: 'Trauma support & fast assist' }
  ];

  const currentCategoryData = SERVICES_DATA[activeCategory] || SERVICES_DATA['vet-care'];

  return (
    <div id="services-view" className="py-24 md:py-32 bg-[#FAF9F8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Title Section */}
        <div className="mb-14 text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-widest">
            OUR COMPASSIONATE CARE ECOSYSTEM
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-brand-text-main">
            Wellness Built with Compassion
          </h2>
          <p className="text-sm text-brand-text-muted leading-relaxed">
            Select an area below to inspect specialized features, explore medical advantages, or trigger an instant health/styling reservation.
          </p>
        </div>

        {/* Dual Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Category Tabs Sidebar */}
          <div className="lg:col-span-4 space-y-3.5 bg-white rounded-2xl p-5 border border-brand-primary/5 shadow-subtle">
            <h3 className="font-mono text-[11px] font-bold tracking-widest uppercase text-brand-text-muted mb-3 px-2">
              Explore Our Healthcare Specialities
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              {categoriesList.map((category) => {
                const isSelected = activeCategory === category.id;
                const TabIcon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => onSelectCategory(category.id)}
                    className={`flex items-start space-x-3.5 p-3 rounded-xl text-left border transition-all duration-300 relative group cursor-pointer ${
                      isSelected
                        ? 'bg-brand-primary/10 border-brand-primary shadow-md shadow-brand-primary/5'
                        : 'bg-transparent border-transparent hover:border-brand-primary/20 hover:bg-brand-bg-main'
                    }`}
                  >
                    {/* Active dynamic visual bar indicator */}
                    {isSelected && (
                      <span className="absolute left-0 top-3 bottom-3 w-1 bg-brand-primary rounded-full" />
                    )}

                    <div className={`p-2 rounded-lg shrink-0 ${
                      isSelected ? 'bg-brand-primary text-white' : 'bg-brand-bg-alt text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors'
                    }`}>
                      <TabIcon className="w-4.5 h-4.5" />
                    </div>

                    <div className="leading-tight">
                      <span className={`block text-xs font-bold font-sans ${
                        isSelected ? 'text-brand-text-main' : 'text-brand-text-muted group-hover:text-brand-primary transition-colors'
                      }`}>
                        {category.label}
                      </span>
                      <span className="block text-[10px] text-brand-text-muted mt-0.5 max-w-[210px] truncate leading-tight">
                        {category.short}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Active Category Detailed View Panel */}
          <div className="lg:col-span-8 bg-white rounded-2xl overflow-hidden border border-brand-primary/5 shadow-md flex flex-col justify-between min-h-[600px] animate-fade-in relative">
            
            {/* Category Sub Hero */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={currentCategoryData.image}
                alt={currentCategoryData.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <span className="text-[10px] font-mono tracking-widest text-brand-primary uppercase font-bold bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 inline-block mb-2">
                  HEART + PAW ADVANTAGES
                </span>
                <h3 className="font-display font-medium text-2xl sm:text-3xl leading-snug">
                  {currentCategoryData.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed mt-1 max-w-xl font-sans">
                  {currentCategoryData.subtitle}
                </p>
              </div>
            </div>

            {/* Specialty Clinical Bullets */}
            <div className="p-6 md:p-8 space-y-6 flex-1">
              <h4 className="text-[11px] font-mono font-bold tracking-widest uppercase text-brand-primary">
                What Makes Heart + Paw Different
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentCategoryData.bullets.map((bullet, idx) => (
                  <div
                    key={bullet.title}
                    className="bg-brand-bg-main p-4 rounded-xl border border-brand-primary/5 flex flex-col justify-between group hover:shadow-subtle hover:-translate-y-1 transition-all"
                  >
                    <div className="space-y-2">
                      <div className="w-7 h-7 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center font-display font-bold text-xs">
                        0{idx + 1}
                      </div>
                      <h5 className="font-sans font-bold text-xs sm:text-sm text-brand-text-main group-hover:text-brand-primary transition-colors">
                        {bullet.title}
                      </h5>
                      <p className="text-[11px] leading-relaxed text-brand-text-muted">
                        {bullet.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call To Action Block */}
            <div className="p-6 md:p-8 bg-brand-bg-alt border-t border-brand-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <h5 className="text-xs font-bold text-brand-text-main">Ready to book clinical oversight or styling packages?</h5>
                <p className="text-[11px] text-brand-text-muted">Pick a time segment at your nearest Heart + Paw center instantly.</p>
              </div>
              
              <button
                onClick={() => onNavigate('/book', { preselectedServiceCategory: activeCategory })}
                className="w-full sm:w-auto bg-brand-primary hover:bg-[#4f46e5] hover:shadow-md text-white text-xs font-semibold px-6 py-3 rounded-full transition-all flex items-center justify-center space-x-1.5 group cursor-pointer"
              >
                <span>Book This Service Category</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
