/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Search, MapPin, Phone, Clock, ShieldCheck, Heart, AlertTriangle, ArrowRight, Star } from 'lucide-react';
import { PagePath, LocationCenter, ServiceCategory } from '../types';
import { LOCATIONS } from '../data';

interface AppointmentsViewProps {
  onNavigate: (
    page: PagePath,
    extra?: {
      preselectedCenter?: string;
      preselectedTimeSlot?: string;
      preselectedServiceCategory?: ServiceCategory;
    }
  ) => void;
}

export default function AppointmentsView({ onNavigate }: AppointmentsViewProps) {
  const [visitType, setVisitType] = useState<'wellness' | 'sick'>('wellness');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSlotMap, setSelectedSlotMap] = useState<Record<string, string>>({});

  // Filter locations based on search query
  const filteredLocations = LOCATIONS.filter(loc => 
    loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    loc.address.toLowerCase().includes(searchQuery.toLowerCase()) || 
    loc.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleSelectSlot = (locationId: string, slot: string) => {
    setSelectedSlotMap(prev => ({ ...prev, [locationId]: slot }));
  };

  const handleProceedBooking = (location: LocationCenter) => {
    const chosenSlot = selectedSlotMap[location.id] || location.slots[0];
    onNavigate('/book', {
      preselectedCenter: location.name,
      preselectedTimeSlot: chosenSlot,
      preselectedServiceCategory: visitType === 'sick' ? 'urgent-care' : 'vet-care'
    });
  };

  return (
    <div id="appointments-view" className="py-24 md:py-32 bg-[#FAF9F8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="mb-12 text-center md:text-left space-y-4">
          <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-widest">
            LIVE CLINIC APPOINTMENTS
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-brand-text-main">
            Today’s Open Care Slots
          </h2>
          <p className="text-sm text-brand-text-muted max-w-2xl leading-relaxed">
            Select your clinical visit category, view real-time open slots across our beautiful Fear-Free™ hospitals, and book instantly. 
          </p>
        </div>

        {/* Filter & Search Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Left: Toggles */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-brand-primary/5 shadow-subtle space-y-4">
            <h3 className="font-display font-bold text-xs font-mono uppercase tracking-wider text-brand-text-main">
              Select Your Reason for Visit
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Wellness button */}
              <button
                onClick={() => setVisitType('wellness')}
                className={`flex items-start space-x-3 p-4 rounded-xl text-left border transition-all duration-300 ${
                  visitType === 'wellness'
                    ? 'bg-brand-primary/10 border-brand-primary shadow-md shadow-brand-primary/5 text-brand-text-main'
                    : 'bg-transparent border-brand-primary/10 hover:border-brand-primary hover:bg-brand-bg-main text-brand-text-muted'
                }`}
              >
                <div className={`p-1.5 rounded-lg shrink-0 ${visitType === 'wellness' ? 'bg-brand-primary text-white' : 'bg-brand-bg-alt text-brand-primary'}`}>
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-sans font-bold text-xs sm:text-sm">Wellness Checkup 🌸</span>
                  <span className="block text-[10px] mt-0.5 leading-tight">Routine checks, styling & preventive plans</span>
                </div>
              </button>

              {/* Sick button */}
              <button
                onClick={() => setVisitType('sick')}
                className={`flex items-start space-x-3 p-4 rounded-xl text-left border transition-all duration-300 ${
                  visitType === 'sick'
                    ? 'bg-amber-500/10 border-amber-500 shadow-md shadow-amber-500/5 text-brand-text-main'
                    : 'bg-transparent border-brand-primary/10 hover:border-brand-primary hover:bg-brand-bg-main text-brand-text-muted'
                }`}
              >
                <div className={`p-1.5 rounded-lg shrink-0 ${visitType === 'sick' ? 'bg-amber-500 text-white' : 'bg-brand-bg-alt text-amber-500'}`}>
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-sans font-bold text-xs sm:text-sm">Sick Visit 🚨</span>
                  <span className="block text-[10px] mt-0.5 leading-tight">Urgent care, minor wounds & consultations</span>
                </div>
              </button>
            </div>
            
            <div className="rounded-xl bg-brand-bg-alt p-3.5 text-xs text-brand-text-muted flex items-start space-x-2">
              <ShieldCheck className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
              <span>
                {visitType === 'sick' 
                  ? 'High priority triage applies here. If your pet is in extreme acute distress, skip scheduling and proceed directly to our Baltimore Canton 24/7 Urgent Wing.'
                  : 'Booking a wellness appointment unlocks access to Fear-Free™ pre-treatment tips sent to you 2 hours before your schedule.'
                }
              </span>
            </div>
          </div>

          {/* Right: Search Input */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-brand-primary/5 shadow-subtle flex flex-col justify-center">
            <h3 className="font-display font-medium text-xs font-mono uppercase tracking-wider text-brand-text-main mb-3">
              Find Center Near Me
            </h3>
            
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by city, zipcode, or clinical certification (e.g. Feline, Maryland)..."
                className="w-full pl-11 pr-4 py-3 bg-[#FAF9F8] border border-brand-primary/10 rounded-xl focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary text-sm text-brand-text-main transition-all"
              />
              <Search className="w-5 h-5 text-brand-text-muted absolute left-4 top-3.5" />
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-[10px] text-brand-text-muted font-mono uppercase">Quick Filters:</span>
              {['Philadelphia', 'Nashville', 'Maryland', 'Feline-Friendly'].map(tag => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="text-[10px] border border-brand-primary/10 hover:border-brand-primary hover:bg-brand-bg-main px-2 py-0.5 rounded-full text-brand-primary transition-all font-semibold"
                >
                  {tag}
                </button>
              ))}
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-[10px] bg-brand-primary/15 hover:bg-brand-primary text-brand-text-main px-2 py-0.5 rounded-full transition-all font-bold"
                >
                  Clear search ×
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Center Cards Container Loop */}
        <div className="space-y-6">
          {filteredLocations.length > 0 ? (
            filteredLocations.map(location => {
              const activeSlot = selectedSlotMap[location.id] || location.slots[0];
              return (
                <div
                  key={location.id}
                  className="bg-white rounded-2xl overflow-hidden border border-brand-primary/5 shadow-subtle hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-0"
                >
                  {/* Left: Cozy picture zoom */}
                  <div className="md:col-span-4 relative h-48 md:h-auto overflow-hidden group">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-brand-primary/10 text-[10px] font-bold text-brand-primary shadow-xs">
                      📍 {location.distance}
                    </div>
                  </div>

                  {/* Right: Hospital parameters */}
                  <div className="md:col-span-8 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2.5">
                        <h3 className="font-display font-medium text-lg md:text-xl text-brand-text-main hover:text-brand-primary transition-colors">
                          {location.name}
                        </h3>
                        <div className="flex items-center space-x-1 text-xs font-semibold text-brand-accent bg-amber-500/5 px-2.5 py-1 rounded-full border border-amber-500/10 w-fit shrink-0">
                          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                          <span>{location.rating} Rating</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-brand-text-muted mb-6">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                          <span>{location.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-3.5 h-3.5 text-brand-primary" />
                          <span>{location.phone}</span>
                        </div>
                      </div>

                      {/* Open feature tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {location.features.slice(0, 3).map((f) => (
                          <span key={f} className="text-[10px] font-sans text-brand-text-muted bg-brand-bg-alt rounded-lg px-2 py-1 border border-brand-primary/5">
                            🌿 {f}
                          </span>
                        ))}
                      </div>

                      {/* Time Slots Section */}
                      <div className="space-y-2 mb-6">
                        <p className="text-[11px] font-mono tracking-widest text-brand-primary uppercase font-bold">
                          Available Timeslots (Today only)
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {location.slots.map((slot) => {
                            const isSelected = activeSlot === slot;
                            return (
                              <button
                                key={slot}
                                onClick={() => handleSelectSlot(location.id, slot)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                                  isSelected
                                    ? 'bg-brand-primary text-white scale-102 shadow-md shadow-brand-primary/25'
                                    : 'bg-brand-bg-alt hover:bg-brand-primary hover:text-white text-brand-text-main'
                                }`}
                              >
                                <Clock className="w-3.5 h-3.5 inline mr-1 -mt-0.5 opacity-80" />
                                {slot}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Book Action Block */}
                    <div className="pt-4 border-t border-brand-bg-alt flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-[11px] text-brand-text-muted italic">
                        Selected: <span className="font-semibold text-brand-text-main">{visitType === 'sick' ? 'Wellness Triage' : 'Clinical Care'}</span> • appointment slot at <span className="font-mono font-bold text-brand-primary">{activeSlot}</span>.
                      </p>
                      
                      <button
                        onClick={() => handleProceedBooking(location)}
                        className="w-full sm:w-auto bg-brand-primary hover:bg-[#4f46e5] text-white font-semibold text-xs px-6 py-2.5 rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center space-x-1.5 group"
                      >
                        <span>Confirm and Complete Book</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center border border-brand-primary/10">
              <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-4 animate-bounce" />
              <h4 className="font-display font-bold text-base text-brand-text-main">No locations found</h4>
              <p className="text-xs text-brand-text-muted mt-1 max-w-sm mx-auto">
                No hospitals match "{searchQuery}". Try updating your query or filter keywords using our tags above.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 bg-brand-primary hover:bg-[#4f46e5] text-white px-4 py-1.5 rounded-xl text-xs font-semibold"
              >
                Show All Areas
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
