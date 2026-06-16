/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { Calendar, CheckCircle2, AlertTriangle, User, Heart, Sparkles, Activity, ShieldCheck, Clock, MapPin, X, ArrowRight, ArrowLeft } from 'lucide-react';
import { PagePath, ServiceCategory } from '../types';
import { LOCATIONS } from '../data';

interface BookNowViewProps {
  preselectedCenter?: string;
  preselectedTimeSlot?: string;
  preselectedServiceCategory?: ServiceCategory;
  onNavigate: (page: PagePath) => void;
}

export default function BookNowView({
  preselectedCenter,
  preselectedTimeSlot,
  preselectedServiceCategory,
  onNavigate
}: BookNowViewProps) {
  // Wizard steps: 1 = Pet Details, 2 = Specialty & Center, 3 = Confirm
  const [step, setStep] = useState(1);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Form parameters
  const [petName, setPetName] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [petAge, setPetAge] = useState('adult'); // puppy, adult, senior
  const [petType, setPetType] = useState('dog');   // dog, cat, other
  
  const [selectedCenter, setSelectedCenter] = useState('');
  const [servicesCategory, setServicesCategory] = useState<ServiceCategory>('vet-care');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  const [parentName, setParentName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [parentPhone, setParentPhone] = useState('');

  // Sync pre-selected inputs
  useEffect(() => {
    if (preselectedCenter) {
      setSelectedCenter(preselectedCenter);
    } else {
      setSelectedCenter(LOCATIONS[0].name);
    }

    if (preselectedTimeSlot) {
      setSelectedTimeSlot(preselectedTimeSlot);
    } else {
      setSelectedTimeSlot(LOCATIONS[0].slots[0]);
    }

    if (preselectedServiceCategory) {
      setServicesCategory(preselectedServiceCategory);
    }
  }, [preselectedCenter, preselectedTimeSlot, preselectedServiceCategory]);

  const activeHospital = LOCATIONS.find(loc => loc.name === selectedCenter) || LOCATIONS[0];

  const handleNextStep = () => {
    if (step === 1) {
      if (!petName.trim() || !petBreed.trim()) {
        setValidationError("Please specify your lovely pet's name and breed. 🐾");
        return;
      }
      setValidationError('');
      setStep(2);
    } else if (step === 2) {
      if (!selectedCenter || !selectedTimeSlot) {
        setValidationError("Please choose your nearest custom center and active slot.");
        return;
      }
      setValidationError('');
      setStep(3);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setValidationError('');
      setStep(prev => prev - 1);
    }
  };

  const handleFinalSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!parentName.trim() || !parentEmail.trim() || !parentPhone.trim()) {
      setValidationError("Please fill out your parent contact details to complete the ticket. 🐾");
      return;
    }
    setValidationError('');
    setShowInvoiceModal(true);
  };

  const handleResetBooking = () => {
    // Zero out states
    setPetName('');
    setPetBreed('');
    setParentName('');
    setParentEmail('');
    setParentPhone('');
    setValidationError('');
    setStep(1);
    setShowInvoiceModal(false);
    onNavigate('/');
  };

  const servicesMap: Record<ServiceCategory, { label: string; icon: any; desc: string }> = {
    'vet-care': { label: 'Veterinary Care Checkup', icon: Heart, desc: 'Fear-Free routine exam & diagnostics' },
    'style-groom': { label: 'Style & Grooming Spa', icon: Sparkles, desc: 'Lavender bubble bath & coat styling' },
    'daycare': { label: 'Active Sports Daycare', icon: Activity, desc: 'Social playtime & agility fitness' },
    'boarding': { label: 'Comfort Boarding Suite', icon: ShieldCheck, desc: 'Luxury overnight stay with clinical guides' },
    'care-plans': { label: 'Wellness Subscriptions Activation', icon: Heart, desc: 'Set up flat fee monthly office contracts' },
    'pet-insurance': { label: 'Insurance Direct Claims Integration', icon: Heart, desc: 'Submit coverage files in-clinic' },
    'teletriage': { label: '24/7 Digital Consultation Prep', icon: Clock, desc: 'Prep digital diagnostics feed' },
    'urgent-care': { label: 'High Priority Triage Visit', icon: AlertTriangle, desc: 'Acute trauma or medical therapy treatment' }
  };

  return (
    <div id="booking-now-view" className="py-24 md:py-32 bg-[#FAF9F8] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        
        {/* Title */}
        <div className="mb-10 text-center space-y-3">
          <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-widest">
            COZY RESERVATION GATEWAY
          </span>
          <h2 className="font-display font-medium text-3xl text-brand-text-main">
            Schedule a Healing Visit
          </h2>
          
          {/* Progress Indicator */}
          <div className="flex items-center justify-center space-x-2 pt-4">
            {[
              { num: 1, text: 'Pet Details' },
              { num: 2, text: 'Center & Schedule' },
              { num: 3, text: 'Contact Information' }
            ].map((pStep) => (
              <div key={pStep.num} className="flex items-center space-x-2 text-xs font-semibold">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center font-mono ${
                  step >= pStep.num ? 'bg-brand-primary text-white' : 'bg-brand-bg-alt text-brand-text-muted border border-brand-primary/10'
                }`}>
                  {pStep.num}
                </div>
                <span className={step >= pStep.num ? 'text-brand-text-main' : 'text-brand-text-muted hidden sm:inline'}>
                  {pStep.text}
                </span>
                {pStep.num < 3 && <span className="text-brand-primary/25 font-mono">→</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Wizard Main Content Card */}
        <div className="bg-white rounded-2xl border border-brand-primary/5 shadow-md p-6 md:p-10 text-left">
          
          {validationError && (
            <div className="mb-6 p-4 bg-rose-50 border border-rose-100 rounded-xl text-xs font-semibold text-rose-600 flex items-start space-x-2.5 animate-pulse">
              <span className="text-sm">⚠️</span>
              <span>{validationError}</span>
            </div>
          )}
          
          {/* STEP 1: PET PARAMETERS */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="border-b border-brand-bg-alt pb-3">
                <h3 className="font-display font-bold text-base text-brand-text-main">Tell Us About Your Beautiful Pet</h3>
                <p className="text-xs text-brand-text-muted mt-0.5">Let's customized the sensory elements based on your pet's needs.</p>
              </div>

              {/* Pet Type toggler */}
              <div>
                <label className="block text-xs font-mono font-bold text-brand-text-muted mb-2 uppercase tracking-widest">Species</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { code: 'dog', label: 'Sprightly Pup 🐶' },
                    { code: 'cat', label: 'Cozy Kitty 🐱' },
                    { code: 'other', label: 'Small Companion 🐹' }
                  ].map(spec => (
                    <button
                      key={spec.code}
                      type="button"
                      onClick={() => setPetType(spec.code)}
                      className={`px-4 py-3 rounded-xl border font-sans text-xs sm:text-sm font-semibold text-center transition-all ${
                        petType === spec.code
                          ? 'bg-brand-primary/10 border-brand-primary text-brand-text-main shadow-sm'
                          : 'bg-transparent border-brand-primary/10 hover:border-brand-primary text-brand-text-muted'
                      }`}
                    >
                      {spec.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pet Name & Breed Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-brand-text-muted mb-1 uppercase tracking-widest">Pet Name *</label>
                  <input
                    type="text"
                    required
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    placeholder="e.g. Cooper"
                    className="w-full px-4 py-2.5 text-xs bg-[#FAF9F8] border border-brand-primary/15 rounded-xl focus:outline-none focus:border-brand-primary text-brand-text-main"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold text-brand-text-muted mb-1 uppercase tracking-widest">Breed *</label>
                  <input
                    type="text"
                    required
                    value={petBreed}
                    onChange={(e) => setPetBreed(e.target.value)}
                    placeholder="e.g. Golden Retriever"
                    className="w-full px-4 py-2.5 text-xs bg-[#FAF9F8] border border-brand-primary/15 rounded-xl focus:outline-none focus:border-brand-primary text-brand-text-main"
                  />
                </div>
              </div>

              {/* Pet Age range */}
              <div>
                <label className="block text-xs font-mono font-bold text-brand-text-muted mb-2 uppercase tracking-wide">Pet Age Stage</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { code: 'puppy', label: 'Junior (Under 1 Year)' },
                    { code: 'adult', label: 'Adult (1 to 7 Years)' },
                    { code: 'senior', label: 'Senior (7+ Years)' }
                  ].map(ageStage => (
                    <button
                      key={ageStage.code}
                      type="button"
                      onClick={() => setPetAge(ageStage.code)}
                      className={`px-3 py-2.5 rounded-lg border text-[11px] font-semibold text-center transition-all ${
                        petAge === ageStage.code
                          ? 'bg-brand-primary/10 border-brand-primary text-brand-text-main shadow-xs'
                          : 'bg-transparent border-brand-primary/10 hover:border-brand-primary text-brand-text-muted'
                      }`}
                    >
                      {ageStage.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6 border-t border-brand-bg-alt flex justify-end">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="bg-brand-primary hover:bg-[#4f46e5] hover:shadow-md text-white font-semibold text-xs px-8 py-3 rounded-xl transition-all inline-flex items-center space-x-1.5 group cursor-pointer"
                >
                  <span>Set Schedule</span>
                  <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          )}


          {/* STEP 2: CATEGORY, HOSPITAL AND OPEN SLOTS */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="border-b border-brand-bg-alt pb-3">
                <h3 className="font-display font-bold text-base text-brand-text-main">Select Care category & Schedule</h3>
                <p className="text-xs text-brand-text-muted mt-0.5">Choose your medical specialty, hospital spot, and available hours.</p>
              </div>

              {/* Service Category Grid Selection */}
              <div>
                <label className="block text-xs font-mono font-bold text-brand-text-muted mb-2 uppercase tracking-widest">Specialty Care Category</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {(Object.keys(servicesMap) as ServiceCategory[]).slice(0, 4).map(sev => {
                    const sevInfo = servicesMap[sev];
                    const S_Icon = sevInfo.icon;
                    const isSelected = servicesCategory === sev;
                    return (
                      <button
                        key={sev}
                        type="button"
                        onClick={() => setServicesCategory(sev)}
                        className={`p-3 rounded-xl border text-left flex flex-col justify-between h-28 transition-all ${
                          isSelected
                            ? 'bg-brand-primary/10 border-brand-primary shadow-sm'
                            : 'bg-transparent border-brand-primary/10 hover:border-brand-primary text-brand-text-muted'
                        }`}
                      >
                        <div className={`p-1.5 rounded-lg w-fit ${isSelected ? 'bg-brand-primary text-white' : 'bg-brand-bg-alt text-brand-primary'}`}>
                          <S_Icon className="w-4 h-4" />
                        </div>
                        <span className="block text-[11px] font-sans font-bold leading-none">{sevInfo.label.split(' ')[0]} Care</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Hospital Center Selection Dropdown */}
              <div>
                <label className="block text-xs font-mono font-bold text-brand-text-muted mb-1.5 uppercase tracking-widest">Select Nearest Hospital Center</label>
                <select
                  value={selectedCenter}
                  onChange={(e) => setSelectedCenter(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs bg-[#FAF9F8] border border-brand-primary/15 rounded-xl text-brand-text-main focus:outline-none focus:border-brand-primary font-sans font-medium"
                >
                  {LOCATIONS.map(loc => (
                    <option key={loc.id} value={loc.name}>
                      📍 {loc.name} ({loc.address.split(',')[1]})
                    </option>
                  ))}
                </select>
              </div>

              {/* Schedule time slots list */}
              <div>
                <label className="block text-xs font-mono font-bold text-brand-text-muted mb-2 uppercase tracking-widest">Available Time slots (Today Only)</label>
                <div className="flex flex-wrap gap-2">
                  {activeHospital.slots.map(slot => {
                    const isSelected = selectedTimeSlot === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`px-3 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                          isSelected
                            ? 'bg-brand-primary text-white scale-102 shadow-md'
                            : 'bg-brand-bg-alt hover:bg-brand-primary hover:text-white text-brand-text-main'
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5 inline mr-1 -mt-0.5" />
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6 border-t border-brand-bg-alt flex justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="border border-brand-primary/10 text-brand-text-muted hover:bg-brand-bg-alt px-5 py-2.5 rounded-xl text-xs font-semibold transition-all inline-flex items-center space-x-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Go Back</span>
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="bg-brand-primary hover:bg-[#4f46e5] hover:shadow-md text-white font-semibold text-xs px-8 py-3 rounded-xl transition-all inline-flex items-center space-x-1.5 group cursor-pointer"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          )}


          {/* STEP 3: CONTACT INFORMATION FORM */}
          {step === 3 && (
            <form onSubmit={handleFinalSubmit} className="space-y-6">
              <div className="border-b border-brand-bg-alt pb-3">
                <h3 className="font-display font-bold text-base text-brand-text-main">Parent Contact Details</h3>
                <p className="text-xs text-brand-text-muted mt-0.5">We will send appointment alerts and Fear-Free™ tips straight here.</p>
              </div>

              {/* Input grid */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-brand-text-muted mb-1 uppercase tracking-wider">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2.5 text-xs bg-[#FAF9F8] border border-brand-primary/15 rounded-xl focus:outline-none focus:border-brand-primary text-brand-text-main"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-brand-text-muted mb-1 uppercase tracking-wider">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={parentEmail}
                      onChange={(e) => setParentEmail(e.target.value)}
                      placeholder="john.doe@example.com"
                      className="w-full px-4 py-2.5 text-xs bg-[#FAF9F8] border border-brand-primary/15 rounded-xl focus:outline-none focus:border-brand-primary text-brand-text-main"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-brand-text-muted mb-1 uppercase tracking-wider">Phone number *</label>
                    <input
                      type="tel"
                      required
                      value={parentPhone}
                      onChange={(e) => setParentPhone(e.target.value)}
                      placeholder="(555) 019-2090"
                      className="w-full px-4 py-2.5 text-xs bg-[#FAF9F8] border border-brand-primary/15 rounded-xl focus:outline-none focus:border-brand-primary text-brand-text-main"
                    />
                  </div>
                </div>
              </div>

              {/* Static mini ticket */}
              <div className="bg-brand-bg-alt/45 p-5 rounded-2xl border border-brand-primary/15 text-xs text-brand-text-muted space-y-2">
                <span className="text-[9px] font-mono font-bold text-brand-primary tracking-widest uppercase">SCHEDULE TICKETS SUMMARY</span>
                <p className="font-bold text-brand-text-main">
                  🌿 {petName} the <span className="text-brand-primary">{petBreed}</span> ({petType} stage: {petAge})
                </p>
                <p>
                  📍 Center: {selectedCenter} • Category: {servicesMap[servicesCategory]?.label}
                </p>
                <p className="font-mono font-bold text-brand-primary">
                  ⏰ Scheduled Open Slot: {selectedTimeSlot}
                </p>
              </div>

              {/* Actions */}
              <div className="pt-6 border-t border-brand-bg-alt flex justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="border border-brand-primary/10 text-brand-text-muted hover:bg-brand-bg-alt px-5 py-2.5 rounded-xl text-xs font-semibold transition-all inline-flex items-center space-x-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Go Back</span>
                </button>
                <button
                  type="submit"
                  className="bg-brand-primary hover:bg-[#4f46e5] text-white font-semibold text-xs px-8 py-3 rounded-xl transition-all shadow-md shadow-brand-primary/25 active:scale-95 cursor-pointer inline-flex items-center space-x-1.5"
                >
                  <span>Complete Booking Visit 🐾</span>
                </button>
              </div>
            </form>
          )}

        </div>

      </div>

      {/* CHIC TICKET RESERVATION SUCCESS BANNER MODAL */}
      {showInvoiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden border border-brand-primary/15 shadow-2xl animate-fade-in relative p-6 md:p-8">
            
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-brand-primary/15 text-brand-primary flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-6 h-6 text-brand-primary" />
              </div>
              
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest text-brand-primary font-bold uppercase block">BOOKING CONFIRMED</span>
                <h4 className="font-display font-medium text-xl text-brand-text-main">Your Ticket is Active!</h4>
                <p className="text-xs text-brand-text-muted">We have saved your slot and reserved your Fear-Free clinical team.</p>
              </div>

              {/* Detailed stylish Receipt ticket */}
              <div className="border border-dashed border-brand-primary/30 p-5 rounded-xl bg-brand-bg-main space-y-3.5 text-left text-xs text-brand-text-muted mt-4">
                <div className="flex justify-between border-b border-brand-primary/10 pb-2">
                  <span className="font-mono text-[10px]">TICKET ID:</span>
                  <span className="font-mono text-[10px] font-bold text-brand-primary">HP-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                
                <div className="space-y-1.5">
                  <p className="text-[11px] font-mono text-brand-text-muted">PATIENT PARAMETERS:</p>
                  <p className="font-sans font-bold text-brand-text-main">🐾 {petName} the {petBreed} ({petAge})</p>
                </div>

                <div className="space-y-1.5">
                  <p className="text-[11px] font-mono text-brand-text-muted">HOSPITAL CENTER:</p>
                  <p className="font-sans font-bold text-brand-text-main">📍 {selectedCenter}</p>
                </div>

                <div className="space-y-1.5">
                  <p className="text-[11px] font-mono text-brand-text-muted">CARE CATEGORY:</p>
                  <p className="font-sans font-bold text-brand-text-main">🌿 {servicesMap[servicesCategory]?.label}</p>
                </div>

                <div className="space-y-1.5 border-t border-brand-primary/10 pt-2 flex justify-between items-center bg-brand-primary/5 p-2 rounded-lg">
                  <span className="font-mono text-[11px] font-bold text-brand-primary leading-none">TIME SLOT:</span>
                  <span className="font-mono text-sm font-bold text-brand-primary leading-none">{selectedTimeSlot} (Today)</span>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-bg-alt flex flex-col space-y-2.5">
                <p className="text-[10px] text-brand-text-muted leading-relaxed font-sans">
                  A digital confirmation slip along with our custom behavior preparation instructions has been dispatched straight to <span className="font-semibold text-brand-text-main">{parentEmail}</span>. See you and {petName} soon!
                </p>
                
                <button
                  type="button"
                  onClick={handleResetBooking}
                  className="bg-brand-primary hover:bg-[#4f46e5] text-white text-xs font-bold py-3 rounded-lg transition-transform cursor-pointer"
                >
                  Dismiss & Return Home
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
