/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Milestone, HelpCircle, Users, Award, ShieldCheck, Play, ArrowRight, Heart, Star, Layout, Briefcase, ChevronRight } from 'lucide-react';
import { PagePath } from '../types';

interface CoOwnershipViewProps {
  onNavigate: (page: PagePath) => void;
}

export default function CoOwnershipView({ onNavigate }: CoOwnershipViewProps) {
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'about-us' | 'careers' | 'students'>('overview');
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [downloadedGuide, setDownloadedGuide] = useState(false);

  // Sub tab navigation links mapping to specific site routes or scroll hooks
  const subNavbarItems = [
    { id: 'overview' as const, label: 'Partnership Overview' },
    { id: 'about-us' as const, label: 'Our Philosophy' },
    { id: 'careers' as const, label: 'Veterinary Careers' },
    { id: 'students' as const, label: 'Student Internships' }
  ];

  const handleSubTabClick = (tabId: 'overview' | 'about-us' | 'careers' | 'students') => {
    setActiveSubTab(tabId);
    if (tabId === 'about-us') onNavigate('/about');
    else if (tabId === 'careers') onNavigate('/careers');
    else if (tabId === 'students') onNavigate('/students');
  };

  const processSteps = [
    {
      step: '1',
      title: 'Discovery & Consultation',
      desc: 'Connect with our leadership to share clinical values, discuss co-ownership geography, and explore legal partnership parameters with zero debt obligation.'
    },
    {
      step: '2',
      title: 'Hospital Architectural Design',
      desc: 'Our design coordinators custom-architect your physical clinic, applying non-slip textured floors, soundproofing, and feline-only consulting zones in high-traffic spots.'
    },
    {
      step: '3',
      title: 'Recruiting Licensed LVTs',
      desc: 'We assist directly with human resources, legal payroll, and hiring high-performance veterinary technicians, freeing you to focus completely on clinical leadership.'
    },
    {
      step: '4',
      title: 'Vibrant Marketing & Launch',
      desc: 'We launch localized grandparent parent outreach, digital ad pipeline runs, and pre-booking campaigns, filling up your calendar for the Grand Opening.'
    },
    {
      step: '5',
      title: 'Medical Sovereignty & Profits',
      desc: 'You direct clinical pathways with true medical sovereignty. Enjoy an elevated base salary along with massive 49% practice equity distributions.'
    }
  ];

  const supportPillars = [
    {
      title: 'Administrative Backing',
      icon: Layout,
      desc: 'Full payroll coordination, billing terminals, digital veterinary CRM integrations, and ongoing supplier rate contracts.'
    },
    {
      title: 'Hospital Marketing',
      icon: Users,
      desc: 'Professional search rankings, local brand advertisements, leaf club newsletter programs, and custom social media profiles.'
    },
    {
      title: 'Technical HR Pipeline',
      icon: Award,
      desc: 'Continuous connection to national student residency programs, licensed LVTs candidate directories, and corporate recruiter assistance.'
    },
    {
      title: 'Legal Defense Guard',
      icon: ShieldCheck,
      desc: 'Compliance structures, clinical insurance parameters, credential auditing, and certified medical sovereignty charters.'
    }
  ];

  return (
    <div id="co-ownership-view" className="py-24 md:py-32 bg-[#FAF9F8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Secondary Sub Navbar */}
        <div className="flex justify-center border-b border-brand-primary/10 pb-4 mb-16 overflow-x-auto no-scrollbar">
          <div className="flex space-x-1 sm:space-x-4 bg-brand-bg-alt p-1.5 rounded-full border border-brand-primary/5">
            {subNavbarItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleSubTabClick(item.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  activeSubTab === item.id
                    ? 'bg-brand-primary text-white shadow-md'
                    : 'text-brand-text-muted hover:text-brand-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* HERO SECTION - Build Your Dream Practice */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-widest bg-brand-primary/10 px-3 py-1 rounded-full border border-brand-primary/10">
              CLINICAL JOINT VENTURES
            </span>
            <h1 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl lg:text-5xl tracking-tight text-brand-text-main leading-tight">
              Build Your Dream practice. <br />
              <span className="text-brand-primary font-bold italic">Co-Own</span> and Lead With Sovereignty.
            </h1>
            <p className="text-sm sm:text-base text-brand-text-muted leading-relaxed">
              Tired of standard, rigid corporate metric structures that treat patients like commodities and veterinarians like assembly line operators? HEART + PAW’s Co-Ownership program empowers world-class clinicians to build, co-own, and medically direct their dream clinics with 0% startup debt obligations.
            </p>
            <p className="text-sm text-brand-text-muted leading-relaxed">
              We align with you as clinical operating partners. We supply administrative backings—spanning legal audits, real estate buildout, payroll processing, and marketing campaigns—while you maintain 100% medical sovereignty to practice compassionate medicine.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onNavigate('/book')}
                className="bg-brand-primary hover:bg-[#4f46e5] hover:shadow-lg hover:shadow-brand-primary/20 text-white font-semibold text-xs px-8 py-3.5 rounded-full transition-all duration-300 w-full sm:w-auto text-center"
              >
                Apply for Partnership
              </button>
              <button
                onClick={() => {
                  const timeline = document.getElementById('partnership-timeline');
                  timeline?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-brand-primary/20 text-brand-primary hover:bg-brand-bg-main font-semibold text-xs px-8 py-3.5 rounded-full transition-all duration-300 w-full sm:w-auto text-center"
              >
                Explore 5-Step Process
              </button>
            </div>
          </div>

          {/* Visual Video Block Right */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-brand-primary/10 rounded-2xl rotate-2 translate-x-2 translate-y-3" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video group bg-slate-900 border border-brand-primary/10">
              {isPlayingVideo ? (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Co-Ownership presentation"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                    alt="Premium clean veterinary clinic room"
                    className="w-full h-full object-cover opacity-85 transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-text-main/20 flex flex-col items-center justify-center">
                    <button
                      onClick={() => setIsPlayingVideo(true)}
                      className="w-14 h-14 rounded-full bg-brand-primary text-white flex items-center justify-center shadow-lg hover:bg-brand-primary hover:scale-108 transition-all hover:shadow-brand-primary/50 relative cursor-pointer group"
                    >
                      <Play className="w-5 h-5 fill-white text-white ml-0.5 animate-float" />
                      <span className="absolute -inset-2 rounded-full border border-brand-primary/30 animate-pulse" />
                    </button>
                    <span className="block text-[10px] font-mono font-bold tracking-widest uppercase text-white mt-4 bg-black/40 px-3 py-1 rounded-full border border-white/10">
                      Watch Partner Video • 2:15
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* 5-STEP TIMELINE */}
        <section id="partnership-timeline" className="py-16 border-t border-brand-primary/5 mb-20 scroll-mt-20">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold text-brand-accent uppercase tracking-widest">
              STEP-BY-STEP PROCESS
            </span>
            <h2 className="font-display font-medium text-2xl sm:text-3xl md:text-3xl text-brand-text-main">
              The Path to Clinical Co-Ownership
            </h2>
            <p className="text-sm text-brand-text-muted">
              We guide you linearly from candidate review straight to Grand Opening. Here is what our jointly-sponsored plan timeline entails.
            </p>
          </div>

          <div className="relative">
            {/* Draw connecting background line (desktop) */}
            <div className="absolute left-[34px] lg:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-primary/60 via-brand-accent/50 to-brand-primary/10 hidden md:block" />

            <div className="space-y-12">
              {processSteps.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={step.step} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start relative">
                    
                    {/* Circle Indicator */}
                    <div className="md:col-span-1 md:col-start-6 flex items-center justify-center z-10">
                      <div className="w-10 h-10 rounded-full bg-brand-primary text-white font-display font-bold flex items-center justify-center shadow-md border-4 border-[#FAF9F8]">
                        {step.step}
                      </div>
                    </div>

                    {/* Step Block */}
                    <div className={`md:col-span-5 p-6 bg-white rounded-2xl border border-brand-primary/5 shadow-subtle ${
                      isEven ? 'md:col-start-1 text-left' : 'md:col-start-7 text-left'
                    }`}>
                      <h4 className="font-display font-bold text-sm sm:text-base text-brand-text-main mb-2">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SUPPORT PILLARS MODEL */}
        <section className="py-16 bg-brand-bg-alt/45 rounded-2xl border border-brand-primary/5 p-8 md:p-12 mb-20 text-center">
          <div className="max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-widest">
              OPERATIONAL SUPPORT STANDARDS
            </span>
            <h2 className="font-display font-medium text-2xl sm:text-3xl text-brand-text-main">
              We handle the chores, you heal pets
            </h2>
            <p className="text-sm text-brand-text-muted">
              Skip boring bookkeeping sheets and regulatory claims. Heart + Paw provides comprehensive operational infrastructure backings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportPillars.map(pillar => {
              const PillarIcon = pillar.icon;
              return (
                <div key={pillar.title} className="bg-white rounded-xl p-5 border border-brand-primary/5 text-left flex flex-col justify-between hover:shadow-card-hover transition-all duration-300">
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-brand-primary/15 text-brand-primary flex items-center justify-center mb-4">
                      <PillarIcon className="w-5 h-5" />
                    </div>
                    <h4 className="font-sans font-bold text-xs sm:text-sm text-brand-text-main mb-2 leading-tight">
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] leading-relaxed text-brand-text-muted">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="text-[10px] font-mono text-brand-primary tracking-wide font-bold uppercase mt-4">
                    ✓ Full Backing Included
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FINAL CALL TO ACTION BOX */}
        <div className="bg-[#0F172A] rounded-2xl text-white p-8 md:p-14 text-center border border-brand-primary/10 shadow-xl relative overflow-hidden">
          {/* Subtle glowing circular overlays */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-primary/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-accent/5 blur-[100px]" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-widest">
              TAKE THE SOVEREIGN TRACK NOW
            </span>
            <h3 className="font-display font-medium text-3xl sm:text-4xl">
              Partner with HEART + PAW.
            </h3>
            <p className="text-sm text-brand-warm leading-relaxed opacity-90 font-sans">
              Take complete clinical ownership of your veterinary future. Zero personal funding or debt burden required. Join a clinical layout styled for low pet stress & high veterinarian tranquility.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('/book')}
                className="bg-brand-primary hover:bg-[#4f46e5] px-8 py-3.5 rounded-full text-white font-semibold text-xs shadow-lg transition-all w-full sm:w-auto cursor-pointer"
              >
                Apply for Joint Venture
              </button>
              {downloadedGuide ? (
                <div className="bg-brand-primary/30 border border-brand-primary/40 text-brand-primary text-xs font-semibold px-6 py-3.5 rounded-full font-mono">
                  Guide Sent! partnerships@heartandpaw.com 🐾
                </div>
              ) : (
                <button
                  onClick={() => {
                    setDownloadedGuide(true);
                  }}
                  className="bg-white/10 hover:bg-white/25 border border-white/20 px-8 py-3.5 rounded-full text-white font-semibold text-xs transition-all w-full sm:w-auto cursor-pointer"
                >
                  Download Partner Guide
                </button>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
