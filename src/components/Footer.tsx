/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter, ShieldCheck } from 'lucide-react';
import { PagePath, ServiceCategory, AboutSubpage } from '../types';

interface FooterProps {
  onNavigate: (
    page: PagePath,
    extra?: {
      serviceCategory?: ServiceCategory;
      aboutSubpage?: AboutSubpage;
    }
  ) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [joinedNewsletter, setJoinedNewsletter] = useState(false);
  const [emailText, setEmailText] = useState('');

  return (
    <footer id="footer" className="bg-brand-bg-alt border-t border-brand-primary/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Block */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-brand-primary overflow-hidden flex items-center justify-center text-white">
                <Heart className="w-4.5 h-4.5" />
              </div>
              <span className="font-display font-bold text-lg tracking-wider text-brand-text-main">
                HEART + PAW
              </span>
            </div>
            <p className="text-sm text-brand-text-muted leading-relaxed">
              Redefining vet clinics by blending world-class clinical excellence with low-stress styling spas and sunny play parks. Healing pet-care built with compassion.
            </p>
            <div className="flex items-center space-x-3 text-brand-text-muted">
              <a href="#" className="p-2 bg-white rounded-full hover:text-brand-primary hover:shadow-subtle transition-all duration-200">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full hover:text-brand-primary hover:shadow-subtle transition-all duration-200">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full hover:text-brand-primary hover:shadow-subtle transition-all duration-200">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Core Services Links */}
          <div>
            <h4 className="text-xs font-mono font-bold text-brand-primary uppercase tracking-widest mb-4">
              Our Core Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/services', { serviceCategory: 'vet-care' })}
                  className="text-brand-text-muted hover:text-brand-primary transition-colors text-left"
                >
                  Preventative Vet Care
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services', { serviceCategory: 'style-groom' })}
                  className="text-brand-text-muted hover:text-brand-primary transition-colors text-left"
                >
                  Bubble Grooming Spa
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services', { serviceCategory: 'daycare' })}
                  className="text-brand-text-muted hover:text-brand-primary transition-colors text-left"
                >
                  Active Sports Daycare
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services', { serviceCategory: 'boarding' })}
                  className="text-brand-text-muted hover:text-brand-primary transition-colors text-left"
                >
                  Luxury Suite Boarding
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services', { serviceCategory: 'care-plans' })}
                  className="text-brand-text-muted hover:text-brand-primary transition-colors text-left"
                >
                  Pet Wellness Subscriptions
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-bold text-brand-accent uppercase tracking-widest mb-4">
              Company & Careers
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/about', { aboutSubpage: 'philosophy' })}
                  className="text-brand-text-muted hover:text-brand-primary transition-colors text-left"
                >
                  Fear-Free™ Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/co-ownership')}
                  className="text-brand-text-muted hover:text-brand-primary transition-colors text-left font-semibold"
                >
                  Co-Own A Clinic Practice
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/careers')}
                  className="text-brand-text-muted hover:text-brand-primary transition-colors text-left"
                >
                  Veterinary Career Options
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/students')}
                  className="text-brand-text-muted hover:text-brand-primary transition-colors text-left"
                >
                  Vet Tech Internships
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/locations')}
                  className="text-brand-text-muted hover:text-brand-primary transition-colors text-left"
                >
                  Explore Urgent Care Centers
                </button>
              </li>
            </ul>
          </div>

          {/* Emergency hours & Contact */}
          <div>
            <h4 className="text-xs font-mono font-bold text-brand-accent uppercase tracking-widest mb-4">
              Care Lines & Hours
            </h4>
            <div className="space-y-3.5 text-sm text-brand-text-muted">
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-brand-primary mt-0.5 shrink-0" />
                <div>
                  <span className="block font-semibold text-brand-text-main text-xs">Emergency Urgent Line:</span>
                  <span className="block font-mono text-xs font-bold text-brand-primary">1-800-HEARTPAW</span>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-brand-accent mt-0.5 shrink-0" />
                <span className="text-xs leading-relaxed">
                  Headquarters: 2201 Pine St, Philadelphia, PA 19103
                </span>
              </div>
              <div className="pt-2 border-t border-brand-text-muted/10">
                <span className="block text-[11px] font-bold uppercase tracking-wide text-brand-text-main mb-1">Clinic Work Hours:</span>
                <span className="block text-[11px] font-mono">Mon - Fri: 8:00 AM - 7:00 PM</span>
                <span className="block text-[11px] font-mono">Sat & Sun: 9:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Newsletter Sign-up Marquee bar */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-brand-primary/10 flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex items-center space-x-3 text-left">
            <div className="p-2 bg-brand-bg-main rounded-xl text-brand-primary">
              <Mail className="w-5 h-5 text-brand-primary" />
            </div>
            <div>
              <h5 className="font-sans font-bold text-sm text-brand-text-main">Join the Heart + Paw Leaf Club</h5>
              <p className="text-xs text-brand-text-muted">Receive smart veterinary tips, breed styling trends, and adoption alerts.</p>
            </div>
          </div>
          {joinedNewsletter ? (
            <div className="w-full md:w-auto text-right">
              <span className="inline-block text-xs font-semibold text-brand-primary bg-brand-primary/10 border border-brand-primary/20 rounded-lg px-4 py-2 font-mono">
                Welcome to the Leaf Club! Confirmation sent 🌿🐾
              </span>
            </div>
          ) : (
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                if (emailText.trim()) {
                  setJoinedNewsletter(true);
                }
              }}
              className="w-full md:w-auto flex items-center space-x-2"
            >
              <input
                type="email"
                required
                value={emailText}
                onChange={(e) => setEmailText(e.target.value)}
                placeholder="Your pet parent email..."
                className="px-3.5 py-1.5 text-xs rounded-lg border border-brand-primary/20 bg-[#FAF9F8] focus:border-brand-primary focus:outline-none w-full md:w-[220px] text-brand-text-main"
              />
              <button
                type="submit"
                className="bg-brand-primary hover:bg-[#4f46e5] px-4 py-1.5 rounded-lg text-white font-semibold text-xs transition-all shrink-0 cursor-pointer"
              >
                Join Us
              </button>
            </form>
          )}
        </div>

        {/* Bottom copyright declaration */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-brand-primary/5 pt-8 text-[11px] text-brand-text-muted gap-4">
          <div className="flex items-center space-x-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-primary" />
            <span>© {currentYear} HEART + PAW Pet Wellness Ecosystem. Fear-Free™ Certified Veterinary Network.</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-brand-primary">Privacy Policy</a>
            <a href="#" className="hover:text-brand-primary">Terms of Practice</a>
            <a href="#" className="hover:text-brand-primary">Clinical Sovereign Charter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
