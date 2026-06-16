/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MapPin, Phone, Star, ShieldCheck, Heart, Clock, X, Search, Navigation } from 'lucide-react';
import { PagePath, LocationCenter } from '../types';
import { LOCATIONS } from '../data';

interface LocationsViewProps {
  onNavigate: (page: PagePath, extra?: any) => void;
}

export default function LocationsView({ onNavigate }: LocationsViewProps) {
  const [selectedLocation, setSelectedLocation] = useState<LocationCenter | null>(null);
  const [filterRegion, setFilterRegion] = useState<'all' | 'pa' | 'nj' | 'md' | 'tn'>('all');
  const [query, setQuery] = useState('');

  const regionLocations = LOCATIONS.filter(loc => {
    if (filterRegion === 'all') return true;
    if (filterRegion === 'pa') return loc.address.includes('PA');
    if (filterRegion === 'nj') return loc.address.includes('NJ');
    if (filterRegion === 'md') return loc.address.includes('MD');
    if (filterRegion === 'tn') return loc.address.includes('TN');
    return true;
  });

  const finalLocations = regionLocations.filter(loc =>
    loc.name.toLowerCase().includes(query.toLowerCase()) ||
    loc.address.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div id="locations-view" className="py-24 md:py-32 bg-[#FAF9F8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="mb-12 text-center max-w-3xl mx-auto space-y-4 animate-fade-in">
          <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-widest">
            STATE-OF-THE-ART CLINICS
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-brand-text-main">
            Our Care Sanctuary Network
          </h2>
          <p className="text-sm text-brand-text-muted leading-relaxed">
            Every Heart + Paw hospital is custom-architected in calming soft tones. Complete with sound insulation, non-slip textured floors, and sensory lavender diffusers.
          </p>
        </div>

        {/* Filter and Area Lookups Bar */}
        <div className="bg-white rounded-2xl p-4 mb-10 border border-brand-primary/5 shadow-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'All Regions', code: 'all' as const },
              { label: 'Pennsylvania', code: 'pa' as const },
              { label: 'New Jersey', code: 'nj' as const },
              { label: 'Maryland', code: 'md' as const },
              { label: 'Tennessee', code: 'tn' as const }
            ].map(tab => (
              <button
                key={tab.code}
                onClick={() => setFilterRegion(tab.code)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  filterRegion === tab.code
                    ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/20'
                    : 'bg-brand-bg-alt hover:bg-brand-primary hover:text-white text-brand-text-main'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search city, zip or street..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#FAF9F8] border border-brand-primary/10 rounded-lg focus:outline-none focus:border-brand-primary text-brand-text-main"
            />
            <Search className="w-4 h-4 text-brand-text-muted absolute left-3 top-2" />
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {finalLocations.map((loc) => (
            <div
              key={loc.id}
              className="bg-white rounded-2xl overflow-hidden border border-brand-primary/5 shadow-subtle hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Block */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-brand-primary text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full shadow-md">
                  Active Clean Clinic
                </div>
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-amber-500 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-lg flex items-center space-x-1 border border-brand-primary/5">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{loc.rating} Rating</span>
                </div>
              </div>

              {/* Content Panel */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-display font-medium text-lg text-brand-text-main group-hover:text-brand-primary transition-colors leading-snug">
                    {loc.name}
                  </h3>
                  <div className="space-y-1 mt-2 text-xs text-brand-text-muted">
                    <p className="flex items-start space-x-1.5">
                      <MapPin className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
                      <span>{loc.address}</span>
                    </p>
                    <p className="flex items-center space-x-1.5">
                      <Phone className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                      <span>{loc.phone}</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {loc.features.slice(0, 2).map(f => (
                      <span key={f} className="text-[9px] font-mono font-bold text-brand-text-muted bg-[#FAF9F8] border border-brand-primary/10 rounded-md px-2 py-0.5">
                        ✓ {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-bg-alt flex items-center justify-between gap-2.5">
                  <button
                    onClick={() => setSelectedLocation(loc)}
                    className="text-xs font-bold text-brand-primary hover:text-[#4f46e5] border-b-2 border-transparent hover:border-brand-primary transition-all pb-0.5"
                  >
                    Clinical Specs →
                  </button>
                  <button
                    onClick={() => onNavigate('/book', { preselectedCenter: loc.name })}
                    className="bg-brand-primary hover:bg-[#4f46e5] hover:shadow-md text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all"
                  >
                    Book Center
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Details Slide-out Modal Backdrop */}
      {selectedLocation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden border border-brand-primary/15 shadow-card-strong animate-fade-in relative">
            
            {/* Modal Image Header */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={selectedLocation.image}
                alt={selectedLocation.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <button
                onClick={() => setSelectedLocation(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-[10px] font-mono tracking-widest text-brand-primary font-bold uppercase block">CERTIFIED CLINICAL FACILITY</span>
                <h4 className="font-display font-bold text-lg md:text-xl">{selectedLocation.name}</h4>
              </div>
            </div>

            {/* Modal Specs Info */}
            <div className="p-6 md:p-8 space-y-6">
              
              {/* Address details */}
              <div className="space-y-2 text-xs md:text-sm text-brand-text-muted border-b border-brand-primary/10 pb-4">
                <p className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-brand-primary" />
                  <span>{selectedLocation.address}</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-brand-primary" />
                  <span>{selectedLocation.phone}</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-brand-accent" />
                  <span>Clinical Hours: Mon-Fri: 8AM-7PM | Sat-Sun: 9AM-5PM</span>
                </p>
              </div>

              {/* Complete Features */}
              <div className="space-y-3">
                <h5 className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-text-main">
                  Hospital Specialties & Certifications
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-brand-text-muted">
                  {selectedLocation.features.map(feat => (
                    <li key={feat} className="flex items-center space-x-1.5 bg-brand-bg-main p-1.5 rounded-lg border border-brand-primary/5">
                      <ShieldCheck className="w-4 h-4 text-brand-primary shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                  <li className="flex items-center space-x-1.5 bg-brand-bg-main p-1.5 rounded-lg border border-brand-primary/5">
                    <Heart className="w-4 h-4 text-brand-accent shrink-0 fill-brand-accent/10" />
                    <span>Certified Healing Design™</span>
                  </li>
                  <li className="flex items-center space-x-1.5 bg-brand-bg-main p-1.5 rounded-lg border border-brand-primary/5">
                    <Star className="w-4 h-4 text-amber-500 shrink-0 fill-amber-500/10" />
                    <span>Low Stress Certified Staff</span>
                  </li>
                </ul>
              </div>

              {/* Modal Button CTAs */}
              <div className="pt-6 border-t border-brand-bg-alt flex justify-end gap-3">
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="px-5 py-2 hover:bg-brand-bg-alt/45 rounded-xl text-xs font-semibold text-brand-text-muted transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onNavigate('/book', { preselectedCenter: selectedLocation.name });
                    setSelectedLocation(null);
                  }}
                  className="bg-brand-primary hover:bg-[#4f46e5] px-5 py-2 rounded-xl text-xs font-semibold text-white shadow-md transition-all active:scale-95"
                >
                  Book This Center
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
