/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocationCenter, Testimonial } from './types';

export const PARTNERS: string[] = [
  'Royal Canin',
  'Hill’s Pet Nutrition',
  'Zoetis',
  'Elanco',
  'Boehringer Ingelheim',
  'Idexx Laboratories',
  'Antech',
  'Merck Animal Health'
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Emily Harrison',
    petName: 'Cooper',
    petBreed: 'Golden Retriever',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
    quote: 'Heart + Paw completely transformed how I think about Cooper’s visits. The low-stress styling and calming lavender background cues kept him perfectly relaxed during his routine checkup!',
    role: 'Member since 2024'
  },
  {
    id: 't2',
    name: 'Julian Chen',
    petName: 'Luna',
    petBreed: 'Ragdoll Cat',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80',
    quote: 'As a selective cat owner, finding a veterinarian who truly understands feline stress is rare. The feline-only examination rooms and gentle touch therapy made all the difference for Luna.',
    role: 'Member since 2023'
  },
  {
    id: 't3',
    name: 'Olivia Martinez',
    petName: 'Jax',
    petBreed: 'French Bulldog',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    quote: 'The care plans are an absolute lifesaver. Fixed monthly installments mean I never have to hesitate or second-guess booking Jax in when his allergies flare up. Beautiful space, beautiful people!',
    role: 'Member since 2025'
  },
  {
    id: 't4',
    name: 'Dr. Katherine Wells',
    petName: 'Barnaby',
    petBreed: 'Corgi',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80',
    quote: 'As a veterinary professional, I joined the co-ownership program because Heart + Paw empowers clinical leaders. My practice blends beautiful natural design with true clinical sovereignty.',
    role: 'Partner Track Owner'
  }
];

export const LOCATIONS: LocationCenter[] = [
  {
    id: 'loc-1',
    name: 'Heart + Paw - Rittenhouse Square',
    address: '2201 Pine St, Philadelphia, PA 19103',
    phone: '(215) 555-0190',
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80',
    distance: '0.8 miles away',
    rating: 4.9,
    slots: ['09:15 AM', '10:30 AM', '11:45 AM', '02:00 PM', '03:45 PM'],
    features: ['Feline-Friendly Certified', 'Low-Stress Styling Station', 'Teletriage Equipped', 'Premium Care Lounge']
  },
  {
    id: 'loc-2',
    name: 'Heart + Paw - Cherry Hill',
    address: '2010 Route 70 West, Cherry Hill, NJ 08002',
    phone: '(856) 555-0219',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=600&q=80',
    distance: '4.2 miles away',
    rating: 4.8,
    slots: ['08:30 AM', '11:15 AM', '01:30 PM', '03:00 PM', '04:15 PM'],
    features: ['State-of-the-Art Surgical Suite', 'Comfort Boarding Suites', 'Grooming Spa', 'Outdoor Play Yard']
  },
  {
    id: 'loc-3',
    name: 'Heart + Paw - Baltimore Canton',
    address: '2813 O’Donnell St, Baltimore, MD 21224',
    phone: '(410) 555-0371',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80',
    distance: '12.6 miles away',
    rating: 4.9,
    slots: ['09:00 AM', '10:00 AM', '12:30 PM', '02:15 PM', '05:00 PM'],
    features: ['Advanced Dental Diagnostics', 'Hydrotherapy Suite', 'Separate Cat Waiting Area', '24/7 Urgent Care Wing']
  },
  {
    id: 'loc-4',
    name: 'Heart + Paw - East Nashville',
    address: '1006 Gallatin Ave, Nashville, TN 37206',
    phone: '(615) 555-0582',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=600&q=80',
    distance: '24.1 miles away',
    rating: 5.0,
    slots: ['10:45 AM', '11:30 AM', '01:45 PM', '03:30 PM', '04:45 PM'],
    features: ['Natural Light Play Parks', 'Integrated Care Plans', 'Aromatherapy Styling', 'Holistic Wellness Consultations']
  },
  {
    id: 'loc-5',
    name: 'Heart + Paw - Main Line Glen Mills',
    address: '100 Glen Mills Rd, Glen Mills, PA 19342',
    phone: '(610) 555-0450',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80',
    distance: '31.5 miles away',
    rating: 4.7,
    slots: ['08:00 AM', '09:30 AM', '11:00 AM', '02:30 PM', '04:00 PM'],
    features: ['Low-Stress Certified Staff', 'Acreage Play Grounds', 'Urgent Treatment Room', 'Full-Service Daycare Hub']
  }
];

export const TEAM_MEMBERS = [
  {
    name: 'Dr. Abigail Carter, DVM',
    role: 'Chief Medical Officer',
    specialty: 'Preventive Medicine & Feline Care',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&h=500&q=80',
    bio: 'Dr. Carter has over 15 years in veterinary leadership, designing warm spaces that prioritize pet behavior and low stress.'
  },
  {
    name: 'Dr. Marcus Vance, DVM',
    role: 'Director of Surgery',
    specialty: 'Orthopedic & Advanced Soft Tissue',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&h=500&q=80',
    bio: 'Dr. Vance focuses on minimally invasive surgery techniques, keeping our furry family members recovering safely in record time.'
  },
  {
    name: 'Elena Rostova, LVT',
    role: 'Lead Vet Technician',
    specialty: 'Fear-Free™ Behavior Specialist',
    image: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=400&h=500&q=80',
    bio: 'Elena ensures our pets feel nurtured and safe from the doorway onward, implementing positive reinforcement during all diagnostic touchpoints.'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Master Pet Stylist',
    specialty: 'Breed Specific Styling & Aromatherapy',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=500&q=80',
    bio: 'Sarah crafts luxurious bubble treatments and customized low-stress haircut plans for pups of all coat requirements and temperaments.'
  }
];

export const SERVICES_DATA = {
  'vet-care': {
    title: 'Veterinary Care',
    subtitle: 'Advanced clinics designed for tranquility and medical perfection.',
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1000&q=80',
    bullets: [
      {
        title: 'Preventive Screenings',
        desc: 'Advanced blood panels, diagnostic imaging, and proactive vitals tracking optimized for early stage diagnosis.'
      },
      {
        title: 'Clinical Laser & Orthopedics',
        desc: 'State-of-the-art pain management treatments and advanced bone/joint surgeries with accelerated healing parameters.'
      },
      {
        title: 'Fear-Free Certified Exams',
        desc: 'Designed with cat-only examination tables, calming diffusers, and sensory dividers so your pet feels entirely safe.'
      }
    ]
  },
  'style-groom': {
    title: 'Style & Grooming',
    subtitle: 'Nourishing skin therapy, customized stylish cuts, and bubble pampering.',
    image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=1000&q=80',
    bullets: [
      {
        title: 'Sensory Bubble Baths',
        desc: 'Aromatherapy lavender micro-bubble shampoo customized for dermal sensitivities, allergies, and complete relaxation.'
      },
      {
        title: 'Premium Styling & Shed-Magic',
        desc: 'Expert hair hand-stripping, coat profiling, and meticulous full deshedding treatments guided by natural styles.'
      },
      {
        title: 'Spampering Pedicure & Care',
        desc: 'Gentle nail grinding, pad hydration, protective wax coatings, and ear sanitization for complete hygiene.'
      }
    ]
  },
  'daycare': {
    title: 'State-of-the-Art Daycare',
    subtitle: 'Natural day play structured with active fitness, rest, and learning sessions.',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=80',
    bullets: [
      {
        title: 'Balanced Playgroups',
        desc: 'Stated by friendly size and temperament parameters. Pets are monitored 100% by certified veterinary behavior technicians.'
      },
      {
        title: 'Stimulating Mental Games',
        desc: 'Agility structures, scent puzzles, interactive basic training refreshers, and bubble catching sessions.'
      },
      {
        title: 'Cozy Den Naptime',
        desc: 'Quiet sensory light adjustment chambers, spelling white noise, orthopedic bean bag cushions for warm deep rest.'
      }
    ]
  },
  'boarding': {
    title: 'Comfort Boarding Suites',
    subtitle: 'Premium home-away-from-home suites with integrated veterinary oversight.',
    image: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&w=1000&q=80',
    bullets: [
      {
        title: 'Floor-to-Ceiling Luxury Rooms',
        desc: 'Ditch standard small metal crates. Enjoy clean glass private suites with custom ambient parameters and full ventilation.'
      },
      {
        title: 'Wellness Diagnostics & Feed',
        desc: 'Custom dietary planning and medications perfectly delivered, with diagnostic vet checkups built directly into stay duration.'
      },
      {
        title: 'Constant Play Passes',
        desc: 'Boarding pets automatically receive full invitations to our daycare agility fields and daily pampering treats.'
      }
    ]
  },
  'care-plans': {
    title: 'Heart + Paw Care Plans',
    subtitle: 'A single flat monthly subscription to unlock unlimited diagnostics, vaccines and preventative oversight.',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1000&q=80',
    bullets: [
      {
        title: 'Unlimited Free Office Visits',
        desc: 'Book as many consultations as you need. Ask about general queries, bumps, or health concerns at absolutely zero co-pay.'
      },
      {
        title: 'Full Annual Preventive Set',
        desc: 'All core vaccinations, diagnostic panels, internal checks and cleanings covered completely by your membership plan.'
      },
      {
        title: 'Stunning Member Discounts',
        desc: 'Get an automatic 10-15% discount across all styling packages, daycares, prescriptions, and complex boarding.'
      }
    ]
  },
  'pet-insurance': {
    title: 'Seamless Pet Insurance',
    subtitle: 'Instant digital claim filings, high-rate accident coverage, and ultimate security.',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1000&q=80',
    bullets: [
      {
        title: 'Ultimate 90% Reimbursement',
        desc: 'Shield your savings on unexpected emergency procedures, surgical stays, intensive support or specialized illness.'
      },
      {
        title: 'Zero Claims Paperwork',
        desc: 'Our staff files claims straight to insurance during check-out on our terminal. Funds deposit straight to you in 24 hours.'
      },
      {
        title: 'Broad Hereditary Inclusions',
        desc: 'Full coverage for genetic traits, chronic triggers, joint dysplasia, respiratory care, allergy issues, and much more.'
      }
    ]
  },
  'teletriage': {
    title: '24/7 Digital Teletriage',
    subtitle: 'Direct high-fidelity video consults with certified veterinarians anytime, anywhere.',
    image: 'https://images.unsplash.com/photo-1586083702768-190ae093d34d?auto=format&fit=crop&w=1000&q=80',
    bullets: [
      {
        title: 'Instant Chat Connections',
        desc: 'Skip long hours of worrying and waiting. Link to a live vet in under 3 minutes for advice on rashes, toxins, or tummy issues.'
      },
      {
        title: 'Prescription Digital Send',
        desc: 'When applicable, our licensed teletriage team sends orders straight to your nearest pharmacy location or home delivery.'
      },
      {
        title: 'True Emergency Coordination',
        desc: 'If a clinic visit is necessary, we notify your nearest local Heart + Paw hospital and precheck your diagnostics on route.'
      }
    ]
  },
  'urgent-care': {
    title: 'Urgent & Emergency Care',
    subtitle: 'Dedicated high-priority clinic wings equipped for acute trauma and intervention.',
    image: 'https://images.unsplash.com/photo-1491485880348-85d48a9e5312?auto=format&fit=crop&w=1000&q=80',
    bullets: [
      {
        title: 'Fast-Track Triage Line',
        desc: 'Instant physical check-ins. Toxic ingestions, bite wounds, breathing distress, or sudden limping are taken immediately.'
      },
      {
        title: 'In-House Advanced Lab',
        desc: 'Blood analyzers, precise point-of-care ultrasound, oxygen support and rapid x-ray capabilities fully staffed 24/7.'
      },
      {
        title: 'Specialized Trauma Directors',
        desc: 'Veterinary surgeons prepared instantly for dynamic clinical events, ensuring your beloved pet gets top-grade life support.'
      }
    ]
  }
};

export const CAREERS_JOBS = [
  {
    subpage: 'vets',
    title: 'Associate Veterinarian (DVM)',
    locations: ['Philadelphia, PA', 'Canton, MD', 'Nashville, TN'],
    salary: '$140k - $200k + Equity Program',
    desc: 'Lead critical diagnosis and preventative care with true medical autonomy. Heart + Paw spaces are beautifully customized to reduce patient fear and veterinary burnout, featuring modern diagnostics, highly collaborative veterinary technicians, and natural aesthetics.',
    benefits: ['Full Fear-Free Certification Covered', 'Unlimited CE Contribution Budget', 'Clinical Autonomy (No rigid corporate formulas)', '401k Matching + Full Dental & Health Plan']
  },
  {
    subpage: 'techs',
    title: 'Licensed Veterinary Technician (LVT)',
    locations: ['Philadelphia, PA', 'Cherry Hill, NJ', 'Glen Mills, PA'],
    salary: '$28 - $38 / Hour',
    desc: 'Perform advanced diagnostics, surgical assisting, and patient care alongside our collaborative Doctors of Veterinary Medicine. Benefit from a nurse-centric structure that maximizes your training, with zero requirements for cross-reception tasks.',
    benefits: ['Subsidized Vet Tech Licensing Fees', 'Low-Stress Pet Handling Seminars', 'Comfort lounge amenities & free meal snacks', 'Clear career escalation structures (Level I to Director)']
  },
  {
    subpage: 'groomers',
    title: 'Professional Pet Groomer / Stylist',
    locations: ['Cherry Hill, NJ', 'Nashville, TN', 'Glen Mills, PA'],
    salary: '55% High Commission + Tips Guarantee',
    desc: 'Provide luxurious breed styling, sensory micro-bubble cleaning treatments, and premium skin therapy plans. Join a state-of-the-art spa featuring lift-assisted stainless steel tubs, quiet infrared-dryer cabins, and full booking assistant coordinators.',
    benefits: ['Consistent high-volume pre-booked pipeline', 'Free custom shears & state of the art clipper replacements', 'Dedicated bath prep assistants for high safety', 'Excellent health insurance benefits']
  },
  {
    subpage: 'staff',
    title: 'Pet Care Coordinator (Client Support)',
    locations: ['Rittenhouse, PA', 'Baltimore, MD', 'Nashville, TN'],
    salary: '$20 - $26 / Hour',
    desc: 'Serve as the soothing heart of our hospitality. Guide pet parents through their premium low-stress checkup visits, assist with digital care plan enrollments, and manage modern communication streams inside our beautiful lobbies.',
    benefits: ['Direct corporate training and software courses', 'Pet care healthcare benefits and grooming discounts', 'Vibrant, positive team atmosphere with premium uniforms', 'Flexible scheduling with night & weekend rotation caps']
  },
  {
    subpage: 'co-own',
    title: 'Venture Operating Partner (Shared Equity)',
    locations: ['All Eastern Expansion Territories'],
    salary: '$180k Base + 49% Practice Ownership Value',
    desc: 'Build, recruit and operate your dream veterinary facility under our premier co-ownership network. Receive comprehensive operational backings (real estate, payroll, marketing) while maintaining clinical sovereign control and receiving direct equity distributions of your center, matching high entrepreneurial standards.',
    benefits: ['Zero personal startup funding or debt obligations needed', 'Comprehensive legal and compliance defense support', 'Corporate human resources pipeline to recruit technicians', 'Pristine, state of the art custom hospital architectures']
  }
];
