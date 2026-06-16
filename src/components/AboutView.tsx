/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Heart, Star, Award, Compass, Sparkles, CheckCircle2, ChevronRight, UserCheck } from 'lucide-react';
import { PagePath, AboutSubpage } from '../types';
import { TEAM_MEMBERS } from '../data';

interface AboutViewProps {
  initialSubpage?: AboutSubpage;
  onNavigate: (page: PagePath) => void;
}

export default function AboutView({ initialSubpage, onNavigate }: AboutViewProps) {
  const [activeTab, setActiveTab] = useState<AboutSubpage>('philosophy');

  // Sync state with dropdown triggers
  useEffect(() => {
    if (initialSubpage) {
      setActiveTab(initialSubpage);
    }
  }, [initialSubpage]);

  const tabsInfo = [
    { id: 'philosophy' as const, label: 'Our Philosophy' },
    { id: 'team' as const, label: 'Meet the Specialists' },
    { id: 'press' as const, label: 'Press & Media' },
    { id: 'events' as const, label: 'Community Events' },
    { id: 'blog' as const, label: 'Leaf Blog' }
  ];

  return (
    <div id="about-view" className="py-24 md:py-32 bg-[#FAF9F8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic header */}
        <div className="mb-14 text-center max-w-2xl mx-auto space-y-4 animate-fade-in">
          <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-widest">
            HEART + PAW BIOGRAPHY
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-brand-text-main">
            Compassionate Healing
          </h2>
          <p className="text-sm text-brand-text-muted leading-relaxed">
            Redefining vet clinics through emotional storytelling, natural elements, Fear-Free™ certifications, and direct staff co-ownership.
          </p>
        </div>

        {/* Tab selection bar */}
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

        {/* TAB 1: OUR PHILOSOPHY COMPONENT */}
        {activeTab === 'philosophy' && (
          <div className="space-y-20">
            {/* Storytelling split layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6 text-left">
                <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-widest">
                  OUR SACRED COMMITTMENT
                </span>
                <h3 className="font-display font-medium text-2xl sm:text-4xl text-brand-text-main leading-tight">
                  Because clinical excellence should feel calming.
                </h3>
                <p className="text-sm sm:text-base text-brand-text-muted leading-relaxed">
                  Every pet is a cherished element of the family tree. When they feel anxious or stressed, so do you. Standard clinical veterinary environments fail to respect safety behavior cues. 
                </p>
                <p className="text-sm sm:text-base text-brand-text-muted leading-relaxed">
                  We designed our network from scratch to address patient fear. Heart + Paw features separate dog and cat entrance bays, textured quiet examination tables, specialized white-noise acoustics, and low-stress handling tracks. Our staff is fully Fear-Free™ behavior certified, validating our caring vision.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-brand-primary/10">
                  <div className="flex items-start space-x-2 text-xs sm:text-sm text-brand-text-muted">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                    <span>Clinical sovereignty for local doctors.</span>
                  </div>
                  <div className="flex items-start space-x-2 text-xs sm:text-sm text-brand-text-muted">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                    <span>0% startup debt partnering trackers.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="absolute inset-0 bg-brand-warm rounded-2xl rotate-2 translate-x-2 translate-y-2" />
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-square group">
                  <img
                    src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80"
                    alt="Active dogs looking happy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Core Values row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-brand-primary/10">
              <div className="space-y-3 p-4 bg-white rounded-xl border border-brand-primary/5 shadow-subtle">
                <div className="p-2.5 bg-brand-accent/15 text-brand-accent w-fit rounded-lg">
                  <Compass className="w-5 h-5 text-brand-accent" />
                </div>
                <h4 className="font-sans font-bold text-sm text-brand-text-main">Continuous Discovery</h4>
                <p className="text-xs text-brand-text-muted leading-relaxed">
                  Veterinary wisdom triggers proactive wellness results. We cover and subsidize 100% of staff continuing education tracks.
                </p>
              </div>
              <div className="space-y-3 p-4 bg-white rounded-xl border border-brand-primary/5 shadow-subtle">
                <div className="p-2.5 bg-brand-accent/15 text-brand-accent w-fit rounded-lg">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="font-sans font-bold text-sm text-brand-text-main">Vibrant Communities</h4>
                <p className="text-xs text-brand-text-muted leading-relaxed">
                  We are local operating hubs. We organize organic pet play dates, free vaccination seminars, and local adoption weekends.
                </p>
              </div>
              <div className="space-y-3 p-4 bg-white rounded-xl border border-brand-primary/5 shadow-subtle">
                <div className="p-2.5 bg-brand-accent/15 text-brand-accent w-fit rounded-lg">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-sans font-bold text-sm text-brand-text-main">Natural Environments</h4>
                <p className="text-xs text-brand-text-muted leading-relaxed">
                  Our architecture promotes healing. Soft natural wood textures, cork pathways, and quiet sensory daylight waiting rooms.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SPECIALIST TEAM CARDS COMPONENT */}
        {activeTab === 'team' && (
          <div>
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
              <span className="text-xs font-mono font-bold text-brand-accent uppercase tracking-widest">
                MEET OUR MEDICAL LEADERS
              </span>
              <h3 className="font-display font-medium text-2xl sm:text-3xl text-brand-text-main">
                Heart + Paw Specialist Team
              </h3>
              <p className="text-sm text-brand-text-muted">
                Our collaborative clinicians and master styling specialists carry decades of veterinary care leadership.
              </p>
            </div>

            {/* Grid display with custom zoom Reveals on hover */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {TEAM_MEMBERS.map(member => (
                <div
                  key={member.name}
                  className="bg-white rounded-2xl overflow-hidden border border-brand-primary/5 shadow-subtle hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 text-left">
                      <p className="text-[11px] text-brand-warm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                    <div className="absolute top-3 left-3 bg-[#0F172A]/90 backdrop-blur-xs text-xs font-bold text-brand-warm py-1 px-3 rounded-full border border-brand-primary/20 shadow-xs">
                      {member.role}
                    </div>
                  </div>

                  <div className="p-5 text-left border-t border-brand-bg-alt flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-sans font-bold text-sm text-brand-text-main group-hover:text-brand-primary transition-colors leading-tight">
                        {member.name}
                      </h4>
                      <p className="text-xs text-brand-text-muted font-mono tracking-wide mt-1">
                        Specialty: {member.specialty}
                      </p>
                    </div>
                    
                    <div className="pt-3 border-t border-brand-bg-alt mt-4 flex items-center justify-between text-[11px] text-brand-accent font-bold font-mono">
                      <span>Certified Fear-Free™ Practitioner</span>
                      <UserCheck className="w-4 h-4 text-brand-primary" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: PRESS COMPONENT */}
        {activeTab === 'press' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { title: 'Heart + Paw recognized as Leading Fear-Free Clinic Group', source: 'Vet Practice News', date: 'May 14, 2026', readTime: '4 min read' },
              { title: 'Why clinical co-ownership keeps local veterinary practices sovereign', source: 'DVM Leadership Press', date: 'April 20, 2026', readTime: '6 min read' },
              { title: 'Redefining groom styling: Lavender micro-bubble dermal therapies', source: 'Pet Styling Quarterly', date: 'March 11, 2026', readTime: '5 min read' }
            ].map(article => (
              <div key={article.title} className="bg-white rounded-xl p-6 border border-brand-primary/5 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between h-56">
                <div>
                  <span className="text-[10px] text-brand-primary font-mono tracking-widest font-bold uppercase block mb-2">{article.source}</span>
                  <h4 className="font-sans font-bold text-sm text-brand-text-main mb-3 line-clamp-3">{article.title}</h4>
                </div>
                <div className="flex justify-between items-center text-[11px] text-brand-text-muted pt-3 border-t border-brand-bg-alt">
                  <span>{article.date}</span>
                  <span className="font-mono">{article.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: EVENTS COMPONENT */}
        {activeTab === 'events' && (
          <div className="space-y-6 text-left">
            {[
              { name: 'Puppy Social Agility Hours', loc: 'East Nashville Clinic', time: 'Every Saturday, 10:00 AM', desc: 'Complimentary outdoor play blocks for puppies under 12 months. Monitored by certified behavior technicians.' },
              { name: 'Feline Anxiety Reduction Workshop', loc: 'Rittenhouse Square Lobby', time: 'June 27, 2026, 6:00 PM', desc: 'Join Dr. Abigail Carter as she delivers expert sensory tips representing modern fear reduction targets.' }
            ].map(evt => (
              <div key={evt.name} className="bg-white rounded-xl p-6 border border-brand-primary/5 shadow-subtle flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="space-y-1 max-w-xl">
                  <span className="bg-brand-primary/10 text-brand-primary text-[10px] font-bold font-mono px-2.5 py-1 rounded w-fit inline-block">{evt.loc}</span>
                  <h4 className="font-sans font-bold text-base text-brand-text-main pt-1">{evt.name}</h4>
                  <p className="text-xs text-brand-text-muted">{evt.desc}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="block text-xs font-bold text-brand-accent font-mono">{evt.time}</span>
                  <button className="mt-2 bg-brand-primary hover:bg-[#4f46e5] text-white px-4 py-1.5 rounded-lg text-[11px] font-semibold transition-all">RSVP Spot</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 5: BLOG COMPONENT */}
        {activeTab === 'blog' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {[
              { title: 'The Science of Cat Stress: Lavender & Acoustic Dividers', desc: 'Discover how specialized feline consultation tables and soothing background white-noise frequencies alter pet amygdala responses.', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80' },
              { title: 'Choosing Care Plans: Unlimited Offices Visits Decoupled', desc: 'Unpack the operational mathematics of veterinary co-pays and explore how monthly wellness subscriptions optimize early detection diagnostics.', image: 'https://images.unsplash.com/photo-1535268647977-a403b69fc756?auto=format&fit=crop&w=600&q=80' }
            ].map(post => (
              <div key={post.title} className="bg-white rounded-2xl overflow-hidden border border-brand-primary/5 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col group">
                <div className="h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" />
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="font-sans font-bold text-base text-brand-text-main group-hover:text-brand-primary transition-colors leading-snug">{post.title}</h4>
                  <p className="text-xs text-brand-text-muted leading-relaxed">{post.desc}</p>
                  <button className="text-xs font-bold text-brand-primary hover:text-[#4f46e5] inline-flex items-center space-x-1 pt-3">
                    <span>Read Full Post</span>
                    <ChevronRight className="w-4.5 h-4.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
