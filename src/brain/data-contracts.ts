/** AdminAuthRequest */
export interface AdminAuthRequest {
  /** Username */
  username: string;
  /** Password */
  password: string;
}

/** AuthResponse */
export interface AuthResponse {
  /** Success */
  success: boolean;
  /** Message */
  message: string;
}

/** Body_upload_base64_media */
export interface BodyUploadBase64Media {
  /** Filename */
  filename: string;
  /** Content Type */
  content_type: string;
  /** Base64 Data */
  base64_data: string;
}

/** Body_upload_media */
export interface BodyUploadMedia {
  /**
   * File
   * @format binary
   */
  file: File;
}

/** CaseStudy */
export interface CaseStudy {
  /** Id */
  id: string;
  /** Company */
  company: string;
  /** Challenge */
  challenge: string;
  /** Solution */
  solution: string;
  /** Results */
  results: string;
  /** Logo */
  logo?: string | null;
}

/** ContactInfo */
export interface ContactInfo {
  /** Id */
  id: string;
  /** Email */
  email: string;
  /** Phone */
  phone: string;
  /** Address */
  address?: string | null;
}

/** ERPLogo */
export interface ERPLogo {
  /** Id */
  id: string;
  /** Name */
  name: string;
  /** Logo */
  logo: string;
}

/** HTTPValidationError */
export interface HTTPValidationError {
  /** Detail */
  detail?: ValidationError[];
}

/** HealthResponse */
export interface HealthResponse {
  /** Status */
  status: string;
}

/** HeroContent */
export interface HeroContent {
  /** Id */
  id: string;
  /** Page */
  page: string;
  /** Title */
  title: string;
  /** Subtitle */
  subtitle: string;
  /** Description */
  description: string;
  /** Primarybuttontext */
  primaryButtonText: string;
  /** Primarybuttonlink */
  primaryButtonLink: string;
  /** Secondarybuttontext */
  secondaryButtonText?: string | null;
  /** Secondarybuttonlink */
  secondaryButtonLink?: string | null;
  /** Backgroundimage */
  backgroundImage?: string | null;
}

/** MediaListResponse */
export interface MediaListResponse {
  /** Items */
  items: MediaResponse[];
}

/** MediaResponse */
export interface MediaResponse {
  /** Id */
  id: string;
  /** Filename */
  filename: string;
  /** Contenttype */
  contentType: string;
  /** Url */
  url: string;
  /** Createdat */
  createdAt: string;
}

/** Service */
export interface Service {
  /** Id */
  id: string;
  /** Title */
  title: string;
  /** Description */
  description: string;
  /** Icon */
  icon: string;
}

/** TeamMember */
export interface TeamMember {
  /** Id */
  id: string;
  /** Name */
  name: string;
  /** Position */
  position: string;
  /** Bio */
  bio: string;
  /** Photo */
  photo: string;
}

/** Testimonial */
export interface Testimonial {
  /** Id */
  id: string;
  /** Author */
  author: string;
  /** Position */
  position: string;
  /** Quote */
  quote: string;
  /** Avatar */
  avatar: string;
}

/** ValidationError */
export interface ValidationError {
  /** Location */
  loc: (string | number)[];
  /** Message */
  msg: string;
  /** Error Type */
  type: string;
}

export type CheckHealthData = HealthResponse;

export type AdminAuthData = AuthResponse;

export type AdminAuthError = HTTPValidationError;

/** Response Get Testimonials */
export type GetTestimonialsData = Testimonial[];

export type CreateTestimonialData = Testimonial;

export type CreateTestimonialError = HTTPValidationError;

export interface UpdateTestimonialParams {
  /** Testimonial Id */
  testimonialId: string;
}

export type UpdateTestimonialData = Testimonial;

export type UpdateTestimonialError = HTTPValidationError;

export interface DeleteTestimonialParams {
  /** Testimonial Id */
  testimonialId: string;
}

/** Response Delete Testimonial */
export type DeleteTestimonialData = object;

export type DeleteTestimonialError = HTTPValidationError;

/** Response Get Services */
export type GetServicesData = Service[];

export type CreateServiceData = Service;

export type CreateServiceError = HTTPValidationError;

export interface UpdateServiceParams {
  /** Service Id */
  serviceId: string;
}

export type UpdateServiceData = Service;

export type UpdateServiceError = HTTPValidationError;

export interface DeleteServiceParams {
  /** Service Id */
  serviceId: string;
}

/** Response Delete Service */
export type DeleteServiceData = object;

export type DeleteServiceError = HTTPValidationError;

/** Response Get Case Studies */
export type GetCaseStudiesData = CaseStudy[];

export type CreateCaseStudyData = CaseStudy;

export type CreateCaseStudyError = HTTPValidationError;

export interface UpdateCaseStudyParams {
  /** Case Study Id */
  caseStudyId: string;
}

export type UpdateCaseStudyData = CaseStudy;

export type UpdateCaseStudyError = HTTPValidationError;

export interface DeleteCaseStudyParams {
  /** Case Study Id */
  caseStudyId: string;
}

/** Response Delete Case Study */
export type DeleteCaseStudyData = object;

export type DeleteCaseStudyError = HTTPValidationError;

/** Response Get Team Members */
export type GetTeamMembersData = TeamMember[];

export type CreateTeamMemberData = TeamMember;

export type CreateTeamMemberError = HTTPValidationError;

export interface UpdateTeamMemberParams {
  /** Team Member Id */
  teamMemberId: string;
}

export type UpdateTeamMemberData = TeamMember;

export type UpdateTeamMemberError = HTTPValidationError;

export interface DeleteTeamMemberParams {
  /** Team Member Id */
  teamMemberId: string;
}

/** Response Delete Team Member */
export type DeleteTeamMemberData = object;

export type DeleteTeamMemberError = HTTPValidationError;

/** Response Get Hero Contents */
export type GetHeroContentsData = HeroContent[];

export type CreateHeroContentData = HeroContent;

export type CreateHeroContentError = HTTPValidationError;

export interface GetHeroContentByPageParams {
  /** Page */
  page: string;
}

export type GetHeroContentByPageData = HeroContent;

export type GetHeroContentByPageError = HTTPValidationError;

export interface UpdateHeroContentParams {
  /** Hero Content Id */
  heroContentId: string;
}

export type UpdateHeroContentData = HeroContent;

export type UpdateHeroContentError = HTTPValidationError;

export interface DeleteHeroContentParams {
  /** Hero Content Id */
  heroContentId: string;
}

/** Response Delete Hero Content */
export type DeleteHeroContentData = object;

export type DeleteHeroContentError = HTTPValidationError;

export type GetContactInfoData = ContactInfo;

export type UpdateContactInfoData = ContactInfo;

export type UpdateContactInfoError = HTTPValidationError;

/** Response Get Erp Logos */
export type GetErpLogosData = ERPLogo[];

export type CreateErpLogoData = ERPLogo;

export type CreateErpLogoError = HTTPValidationError;

export interface UpdateErpLogoParams {
  /** Erp Logo Id */
  erpLogoId: string;
}

export type UpdateErpLogoData = ERPLogo;

export type UpdateErpLogoError = HTTPValidationError;

export interface DeleteErpLogoParams {
  /** Erp Logo Id */
  erpLogoId: string;
}

/** Response Delete Erp Logo */
export type DeleteErpLogoData = object;

export type DeleteErpLogoError = HTTPValidationError;

/** Response Public Get Services */
export type PublicGetServicesData = Service[];

/** Response Public Get Testimonials */
export type PublicGetTestimonialsData = Testimonial[];

/** Response Public Get Case Studies */
export type PublicGetCaseStudiesData = CaseStudy[];

/** Response Public Get Team Members */
export type PublicGetTeamMembersData = TeamMember[];

export interface PublicGetHeroContentByPageParams {
  /** Page */
  page: string;
}

export type PublicGetHeroContentByPageData = HeroContent;

export type PublicGetHeroContentByPageError = HTTPValidationError;

export type PublicGetContactInfoData = ContactInfo;

/** Response Public Get Erp Logos */
export type PublicGetErpLogosData = ERPLogo[];

export type UploadMediaData = MediaResponse;

export type UploadMediaError = HTTPValidationError;

export type ListMediaData = MediaListResponse;

export type UploadBase64MediaData = MediaResponse;

export type UploadBase64MediaError = HTTPValidationError;

export interface DeleteMediaParams {
  /** Filename */
  filename: string;
}

/** Response Delete Media */
export type DeleteMediaData = object;

export type DeleteMediaError = HTTPValidationError;
