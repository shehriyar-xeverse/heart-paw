/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { GraduationCap, Award, CheckCircle2, Heart, ArrowRight, Star, ShieldCheck, Mail } from 'lucide-react';
import { PagePath, StudentSubpage } from '../types';

interface StudentsViewProps {
  initialSubpage?: StudentSubpage;
  onNavigate: (page: PagePath) => void;
}

export default function StudentsView({ initialSubpage, onNavigate }: StudentsViewProps) {
  const [activeTab, setActiveTab] = useState<StudentSubpage>('techs-assistants');
  const [appliedAdmissions, setAppliedAdmissions] = useState(false);
  const [askedCounselor, setAskedCounselor] = useState(false);
  const [studentEmail, setStudentEmail] = useState('');

  // Sync state with dropdown triggers
  useEffect(() => {
    if (initialSubpage) {
      setActiveTab(initialSubpage);
    }
  }, [initialSubpage]);

  const tabsInfo = [
    { id: 'techs-assistants' as const, label: 'Vet Techs & Assistants Pathway' },
    { id: 'veterinarians' as const, label: 'Post-Graduate DVM Residency' }
  ];

  return (
    <div id="students-view" className="py-24 md:py-32 bg-[#FAF9F8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Block */}
        <div className="mb-14 text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-widest">
            STUDENT RESIDENCY & ACADEMICS
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-brand-text-main">
            Fueling Veterinary Futures
          </h2>
          <p className="text-sm text-brand-text-muted leading-relaxed">
            Every elite career starts with nurturing mentorship. Connect with certified specialist guides in beautiful clinical spaces.
          </p>
        </div>

        {/* Tab selector bar */}
        <div className="flex justify-center border-b border-brand-primary/10 pb-4 mb-16 overflow-x-auto no-scrollbar">
          <div className="flex space-x-1 sm:space-x-4 bg-brand-bg-alt p-1.5 rounded-full border border-brand-primary/5">
            {tabsInfo.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-brand-primary text-white shadow-md'
                    : 'text-brand-text-muted hover:text-brand-primary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* TAB CONTENT PARALLEL PATHWAYS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 text-left">
          
          <div className="lg:col-span-7 space-y-6">
            {activeTab === 'techs-assistants' ? (
              <>
                <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-widest">
                  LVT STUDENT INTERNSHIPS
                </span>
                <h3 className="font-display font-medium text-2xl sm:text-3.5xl text-brand-text-main leading-tight">
                  Accelerated Diagnostic Clinical Hours
                </h3>
                <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
                  Join our veterinary technologists during dynamic operations, advanced digital ultrasound imaging, dental cleanings, and Fear-Free™ pet assessments. Our program is backed by national technical academies. We ensure you complete your clinical hours in a spacious, warm environment with elite mentorship.
                </p>

                <div className="space-y-3.5">
                  {[
                    'Direct 1-on-1 assignments with physical Licensed Veterinary Technicians.',
                    'Fear-Free™ professional behavior certification covered entirely on us.',
                    'Free premium corporate uniform kits + custom stethoscopes.',
                    'Subsidized final national LVT examination fees.'
                  ].map((bullet) => (
                    <div key={bullet} className="flex items-start space-x-2.5 text-xs sm:text-sm text-brand-text-muted">
                      <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <span className="text-xs font-mono font-bold text-brand-accent uppercase tracking-widest">
                  DVM POST-GRAD ROTATIONS
                </span>
                <h3 className="font-display font-medium text-2xl sm:text-3.5xl text-brand-text-main leading-tight">
                  Advanced Surgical & Medical Residency
                </h3>
                <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
                  Take the sovereign lead in orthopedic trauma surgery, cardiology consults, soft tissue operations, and feline preventive medicine. Receive comprehensive mentorship from our master Chief Medical Directors while utilizing top-tier diagnostics in acoustic quiet examination rooms.
                </p>

                <div className="space-y-3.5">
                  {[
                    'Rotational slots spanning surgeries, clinical diagnostics and teletriage.',
                    'Direct guidance from CMO Dr. Abigail Carter and top surgical leaders.',
                    'Paid stipend packages matching national resident benchmarks.',
                    'Direct fast-track option to join our venture Co-Ownership track upon graduation.'
                  ].map((bullet) => (
                    <div key={bullet} className="flex items-start space-x-2.5 text-xs sm:text-sm text-brand-text-muted">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            <div className="pt-4">
              {appliedAdmissions ? (
                <div className="bg-brand-primary/10 border border-brand-primary/25 rounded-2xl p-4 text-xs text-brand-primary font-mono max-w-lg leading-relaxed">
                  <strong>✨ Application initiated!</strong> Please prepare your clinical transcripts and email them directly to <strong>academics@heartandpaw.com</strong>. We look forward to welcome you soon! 🌿🎓🐾
                </div>
              ) : (
                <button
                  onClick={() => {
                    setAppliedAdmissions(true);
                  }}
                  className="bg-brand-primary hover:bg-[#4f46e5] hover:shadow-lg text-white font-semibold text-xs px-8 py-3.5 rounded-full transition-all duration-300 inline-flex items-center space-x-1.5 cursor-pointer"
                >
                  <span>Apply for Student Program</span>
                  <ArrowRight className="w-4.5 h-4.5" />
                </button>
              )}
            </div>
          </div>

          {/* Visual card Right */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-brand-accent/15 rounded-2xl rotate-2 translate-x-2 translate-y-2" />
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5] group bg-brand-bg-alt">
              <img
                src={
                  activeTab === 'techs-assistants'
                    ? 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=800&q=80'
                    : 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80'
                }
                alt="Student training"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-brand-primary/10 text-left shadow-md">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                    <GraduationCap className="w-4.5 h-4.5 text-brand-primary" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-mono font-bold uppercase text-brand-primary tracking-widest">
                      ACCREDITED ROTATIONS
                    </h5>
                    <p className="text-[11px] font-bold text-brand-text-main leading-none mt-0.5">
                      Fear-Free™ Behavior Standard Training
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* GUIDANCE & INTAKE NEWSLETTER BOX */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-brand-primary/5 shadow-subtle text-left max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-3">
            <h4 className="font-display font-bold text-base md:text-lg text-brand-text-main">
              Unsure about which clinical residency best matches your path?
            </h4>
            <p className="text-xs text-brand-text-muted leading-relaxed">
              Drop your academic questions straight to our university relationships division. We arrange complimentary 15-minute consultations with our master technicians and surgical partners.
            </p>
          </div>
          <div className="md:col-span-5 w-full">
            {askedCounselor ? (
              <div className="bg-brand-primary/10 border border-brand-primary/25 rounded-xl p-4 text-xs text-brand-primary font-semibold font-mono text-center">
                Academics dispatch successful! A counselor will connect soon. 🎓🌿
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (studentEmail.trim()) {
                    setAskedCounselor(true);
                  }
                }}
                className="flex flex-col sm:flex-row gap-2.5 items-center w-full"
              >
                <input
                  type="email"
                  required
                  value={studentEmail}
                  onChange={(e) => setStudentEmail(e.target.value)}
                  placeholder="Your student email..."
                  className="w-full px-4 py-2 text-xs bg-brand-bg-main border border-brand-primary/15 rounded-lg focus:outline-none focus:border-brand-primary text-brand-text-main"
                />
                <button
                  type="submit"
                  className="bg-brand-primary hover:bg-[#4f46e5] text-white shrink-0 font-bold text-xs px-5 py-2.5 rounded-lg cursor-pointer transition-colors w-full sm:w-auto"
                >
                  Ask Counselor
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
