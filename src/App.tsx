/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundEffect from './components/BackgroundEffect';

// Views
import HomeView from './components/HomeView';
import AppointmentsView from './components/AppointmentsView';
import LocationsView from './components/LocationsView';
import ServicesView from './components/ServicesView';
import CoOwnershipView from './components/CoOwnershipView';
import AboutView from './components/AboutView';
import CareersView from './components/CareersView';
import StudentsView from './components/StudentsView';
import BookNowView from './components/BookNowView';

import { PagePath, ServiceCategory, AboutSubpage, CareerSubpage, StudentSubpage } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PagePath>('/');
  const [transitioning, setTransitioning] = useState(false);
  
  // Cross-page state linkage
  const [activeServiceCategory, setActiveServiceCategory] = useState<ServiceCategory>('vet-care');
  const [activeAboutSubpage, setActiveAboutSubpage] = useState<AboutSubpage>('philosophy');
  const [activeCareerSubpage, setActiveCareerSubpage] = useState<CareerSubpage>('vets');
  const [activeStudentSubpage, setActiveStudentSubpage] = useState<StudentSubpage>('techs-assistants');

  // Preselected parameters for Book Now wizard
  const [preselectedCenter, setPreselectedCenter] = useState<string | undefined>(undefined);
  const [preselectedTimeSlot, setPreselectedTimeSlot] = useState<string | undefined>(undefined);
  const [preselectedServiceCategory, setPreselectedServiceCategory] = useState<ServiceCategory | undefined>(undefined);

  // Scroll to block helper
  const triggerScrollReset = () => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  };

  // Master navigation handler with transition and scroll locks
  const handleNavigate = (
    page: PagePath,
    extra?: {
      serviceCategory?: ServiceCategory;
      aboutSubpage?: AboutSubpage;
      careerSubpage?: CareerSubpage;
      studentSubpage?: StudentSubpage;
      preselectedCenter?: string;
      preselectedTimeSlot?: string;
      preselectedServiceCategory?: ServiceCategory;
    }
  ) => {
    setTransitioning(true);
    
    setTimeout(() => {
      // Direct linkages
      if (extra?.serviceCategory) {
        setActiveServiceCategory(extra.serviceCategory);
      }
      if (extra?.aboutSubpage) {
        setActiveAboutSubpage(extra.aboutSubpage);
      }
      if (extra?.careerSubpage) {
        setActiveCareerSubpage(extra.careerSubpage);
      }
      if (extra?.studentSubpage) {
        setActiveStudentSubpage(extra.studentSubpage);
      }

      // Preselections for booking
      if (page === '/book') {
        setPreselectedCenter(extra?.preselectedCenter);
        setPreselectedTimeSlot(extra?.preselectedTimeSlot);
        setPreselectedServiceCategory(extra?.preselectedServiceCategory);
      }

      setCurrentPage(page);
      triggerScrollReset();
      setTransitioning(false);
    }, 250); // Fluid 250ms page fading transition duration
  };

  return (
    <div id="root-brand-layout" className="relative min-h-screen flex flex-col justify-between selection:bg-brand-primary/20 selection:text-brand-primary">
      
      {/* Floating natural background blobs */}
      <BackgroundEffect />

      {/* Responsive master top navigation header bar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Dynamic View rendering switch with sliding transitions */}
      <main 
        id="main-viewport" 
        className={`flex-grow transition-opacity duration-300 ${transitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
      >
        {currentPage === '/' && (
          <HomeView onNavigate={(page, extra) => handleNavigate(page, extra)} />
        )}
        
        {currentPage === '/appointments' && (
          <AppointmentsView onNavigate={(page, extra) => handleNavigate(page, extra)} />
        )}

        {currentPage === '/locations' && (
          <LocationsView onNavigate={(page, extra) => handleNavigate(page, extra)} />
        )}

        {currentPage === '/services' && (
          <ServicesView 
            activeCategory={activeServiceCategory} 
            onSelectCategory={setActiveServiceCategory} 
            onNavigate={(page, extra) => handleNavigate(page, extra)}
          />
        )}

        {currentPage === '/co-ownership' && (
          <CoOwnershipView onNavigate={(page) => handleNavigate(page)} />
        )}

        {currentPage === '/about' && (
          <AboutView 
            initialSubpage={activeAboutSubpage} 
            onNavigate={(page) => handleNavigate(page)} 
          />
        )}

        {currentPage === '/careers' && (
          <CareersView 
            initialSubpage={activeCareerSubpage} 
            onNavigate={(page) => handleNavigate(page)} 
          />
        )}

        {currentPage === '/students' && (
          <StudentsView 
            initialSubpage={activeStudentSubpage} 
            onNavigate={(page) => handleNavigate(page)} 
          />
        )}

        {currentPage === '/book' && (
          <BookNowView 
            preselectedCenter={preselectedCenter}
            preselectedTimeSlot={preselectedTimeSlot}
            preselectedServiceCategory={preselectedServiceCategory}
            onNavigate={(page) => handleNavigate(page)}
          />
        )}
      </main>

      {/* Harmonious brand bottom footer blocks */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
