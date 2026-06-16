/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PagePath =
  | '/'
  | '/appointments'
  | '/locations'
  | '/services'
  | '/co-ownership'
  | '/about'
  | '/careers'
  | '/students'
  | '/book';

export type ServiceCategory =
  | 'vet-care'
  | 'style-groom'
  | 'daycare'
  | 'boarding'
  | 'care-plans'
  | 'pet-insurance'
  | 'teletriage'
  | 'urgent-care';

export type AboutSubpage =
  | 'philosophy'
  | 'team'
  | 'locations'
  | 'press'
  | 'events'
  | 'blog';

export type CareerSubpage =
  | 'vets'
  | 'techs'
  | 'groomers'
  | 'staff'
  | 'co-own';

export type StudentSubpage =
  | 'techs-assistants'
  | 'veterinarians';

export interface DropdownItem {
  label: string;
  subPath: string;
  desc?: string;
}

export interface NavigationState {
  currentPage: PagePath;
  activeServiceCategory?: ServiceCategory;
  activeAboutSubpage?: AboutSubpage;
  activeCareerSubpage?: CareerSubpage;
  activeStudentSubpage?: StudentSubpage;
}

export interface LocationCenter {
  id: string;
  name: string;
  address: string;
  phone: string;
  image: string;
  slots: string[];
  features: string[];
  distance?: string;
  rating?: number;
}

export interface PartnerLogo {
  name: string;
  logoUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  petName: string;
  petBreed: string;
  avatar: string;
  quote: string;
  role: string;
}
