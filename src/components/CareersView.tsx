/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { Award, Briefcase, Sparkles, Activity, Heart, ShieldCheck, CheckCircle2, UserPlus, X } from 'lucide-react';
import { PagePath, CareerSubpage } from '../types';
import { CAREERS_JOBS } from '../data';

interface CareersViewProps {
  initialSubpage?: CareerSubpage;
  onNavigate: (page: PagePath) => void;
}

export default function CareersView({ initialSubpage, onNavigate }: CareersViewProps) {
  const [activeTab, setActiveTab] = useState<CareerSubpage>('vets');
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applyFormSubmitted, setApplyFormSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');
  
  // Form input states
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantRole, setApplicantRole] = useState('');
  const [applicantPortfolio, setApplicantPortfolio] = useState('');

  // Sync state with dropdown subpage trigger
  useEffect(() => {
    if (initialSubpage) {
      setActiveTab(initialSubpage);
    }
  }, [initialSubpage]);

  const careerTabsList = [
    { id: 'vets' as const, label: 'For Veterinarians (DVM)', icon: Award },
    { id: 'techs' as const, label: 'Vet Technicians (LVT)', icon: Activity },
    { id: 'groomers' as const, label: 'Professional Groomers', icon: Sparkles },
    { id: 'staff' as const, label: 'Client Support Coordinator', icon: Heart },
    { id: 'co-own' as const, label: 'Operating Venture Partner', icon: Briefcase }
  ];

  // Filter job description based on active tab
  const activeJob = CAREERS_JOBS.find(job => job.subpage === activeTab) || CAREERS_JOBS[0];

  const handleApplyClick = (jobTitle: string) => {
    setApplicantRole(jobTitle);
    setShowApplyModal(true);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!applicantName.trim() || !applicantEmail.trim() || !applicantPhone.trim()) {
      setValidationError("Please fill out all mandatory details (Name, Email, and Phone). 🐾");
      return;
    }
    setValidationError('');
    setApplyFormSubmitted(true);
  };

  const resetForm = () => {
    setApplicantName('');
    setApplicantEmail('');
    setApplicantPhone('');
    setApplicantPortfolio('');
    setValidationError('');
    setApplyFormSubmitted(false);
    setShowApplyModal(false);
  };

  return (
    <div id="careers-view" className="py-24 md:py-32 bg-[#FAF9F8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header Block */}
        <div className="mb-14 text-center max-w-2xl mx-auto space-y-4 animate-fade-in">
          <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-widest">
            JOIN A COLLABORATIVE MOVEMENT
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-brand-text-main">
            Where Caregivers Flourish
          </h2>
          <p className="text-sm text-brand-text-muted leading-relaxed">
            Standard corporate metrics breed burnout. At Heart + Paw, we empower our clinical staff with absolute sovereignty, lovely natural workspaces, and premium rewards.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex justify-center border-b border-brand-primary/10 pb-4 mb-16 overflow-x-auto no-scrollbar">
          <div className="flex space-x-1 sm:space-x-4 bg-brand-bg-alt p-1.5 rounded-full border border-brand-primary/5">
            {careerTabsList.map(tab => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-300 flex items-center space-x-2 cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-brand-primary text-white shadow-md'
                      : 'text-brand-text-muted hover:text-brand-primary'
                  }`}
                >
                  <IconComponent className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE ROLE DETAILED DISPLAY COLLATERAL */}
        <div className="bg-white rounded-2xl p-6 md:p-10 border border-brand-primary/5 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Role details Left */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-brand-accent font-bold uppercase">
                ACTIVE POSITION OPPORTUNITY
              </span>
              <h3 className="font-display font-medium text-2xl sm:text-3xl text-brand-text-main mt-1">
                {activeJob.title}
              </h3>
              <div className="flex flex-wrap gap-2.5 mt-3 text-xs text-brand-text-muted font-semibold">
                <span className="bg-brand-bg-main border border-brand-primary/15 rounded px-2.5 py-0.5 text-brand-primary">
                  📍 {activeJob.locations.join(' | ')}
                </span>
                <span className="bg-brand-bg-main border border-brand-primary/15 rounded px-2.5 py-0.5 text-brand-primary font-mono">
                  💰 {activeJob.salary}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
              {activeJob.desc}
            </p>

            <button
              onClick={() => handleApplyClick(activeJob.title)}
              className="bg-brand-primary hover:bg-[#4f46e5] hover:shadow-lg text-white font-semibold text-xs px-8 py-3.5 rounded-full transition-all duration-300 inline-flex items-center space-x-2 cursor-pointer scale-102"
            >
              <UserPlus className="w-4.5 h-4.5" />
              <span>Apply for this role</span>
            </button>
          </div>

          {/* Benefits Bullet Details Right */}
          <div className="lg:col-span-5 bg-brand-bg-main rounded-2xl p-6 md:p-8 border border-brand-primary/5 space-y-6 text-left">
            <h4 className="text-[11px] font-mono font-bold tracking-widest text-brand-primary uppercase">
              Exclusive Member Benefits & Rewards
            </h4>
            
            <ul className="space-y-4">
              {activeJob.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start space-x-3 text-xs sm:text-sm text-brand-text-muted">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-4 border-t border-brand-primary/10 flex items-center space-x-3 text-brand-text-muted text-[11px]">
              <ShieldCheck className="w-5 h-5 text-brand-accent" />
              <span>DVM clinical equity vesting structures fully co-designed under our corporate legal charters.</span>
            </div>
          </div>

        </div>

      </div>

      {/* DETAILED APPLICANT SUBMISSION CONTROL MODAL */}
      {showApplyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden border border-brand-primary/15 shadow-card-strong animate-fade-in relative p-6 md:p-8">
            
            <button
              onClick={resetForm}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-brand-bg-alt text-brand-text-muted transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!applyFormSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-5 text-left">
                <div className="mb-4">
                  <span className="text-[10px] font-mono tracking-widest text-brand-primary font-bold uppercase block">JOIN HEART + PAW</span>
                  <h4 className="font-display font-bold text-lg md:text-xl text-brand-text-main mt-0.5">Submit Application</h4>
                  <p className="text-[11px] text-brand-text-muted">Applying for: <span className="font-serif font-bold text-brand-primary">{applicantRole}</span></p>
                  {validationError && (
                    <div className="mt-2 text-xs text-rose-600 bg-rose-50 border border-rose-100 rounded-md p-2 font-medium">
                      {validationError}
                    </div>
                  )}
                </div>

                {/* Floating label inputs */}
                <div className="space-y-4">
                  <div className="relative">
                    <label className="block text-xs font-mono font-semibold text-brand-text-muted mb-1 uppercase tracking-wider">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2 text-xs bg-[#FAF9F8] border border-brand-primary/15 rounded-lg focus:outline-none focus:border-brand-primary text-brand-text-main transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-brand-text-muted mb-1 uppercase tracking-wider">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="jane.doe@example.com"
                        className="w-full px-3.5 py-2 text-xs bg-[#FAF9F8] border border-brand-primary/15 rounded-lg focus:outline-none focus:border-brand-primary text-brand-text-main transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-semibold text-brand-text-muted mb-1 uppercase tracking-wider">Phone number *</label>
                      <input
                        type="tel"
                        required
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="(555) 019-2831"
                        className="w-full px-3.5 py-2 text-xs bg-[#FAF9F8] border border-brand-primary/15 rounded-lg focus:outline-none focus:border-brand-primary text-brand-text-main transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-brand-text-muted mb-1 uppercase tracking-wider">CV Resume / Portfolio URL</label>
                    <input
                      type="url"
                      value={applicantPortfolio}
                      onChange={(e) => setApplicantPortfolio(e.target.value)}
                      placeholder="https://linkedin.com/in/janedoe"
                      className="w-full px-3.5 py-2 text-xs bg-[#FAF9F8] border border-brand-primary/15 rounded-lg focus:outline-none focus:border-brand-primary text-brand-text-main transition-colors"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-bg-alt flex justify-end gap-3.5">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 hover:bg-brand-bg-alt/45 rounded-lg text-xs font-semibold text-brand-text-muted transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-brand-primary hover:bg-[#4f46e5] px-6 py-2 rounded-lg text-xs font-semibold text-white shadow-md active:scale-95 cursor-pointer transition-colors"
                  >
                    Submit Resume
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/15 text-brand-primary flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                </div>
                <h4 className="font-display font-medium text-lg text-brand-text-main">Application Received!</h4>
                <p className="text-xs text-brand-text-muted max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-brand-text-main">{applicantName}</span>. We've compiled your profile and our veterinary operations recruiters will reach out to you within 48 business hours. 🐾🌿
                </p>
                <button
                  onClick={resetForm}
                  className="bg-brand-primary hover:bg-[#4f46e5] text-white text-xs font-bold px-6 py-2 rounded-xl"
                >
                  Confirm & Dismiss
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
