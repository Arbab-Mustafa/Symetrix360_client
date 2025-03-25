import brain from "brain";
import {
  Testimonial,
  Service,
  CaseStudy,
  TeamMember,
  HeroContent,
  ContactInfo,
  ERPLogo,
  MediaListResponse,
  MediaResponse
} from "utils/types";

// Content management API utilities
const contentApi = {
  // Testimonials
  async getTestimonials() {
    const response = await brain.get_testimonials();
    return response.json() as Promise<Testimonial[]>;
  },
  
  async createTestimonial(testimonial: Testimonial) {
    const response = await brain.create_testimonial(testimonial);
    return response.json() as Promise<Testimonial>;
  },
  
  async updateTestimonial(testimonial: Testimonial) {
    const response = await brain.update_testimonial({ testimonial_id: testimonial.id }, testimonial);
    return response.json() as Promise<Testimonial>;
  },
  
  async deleteTestimonial(id: string) {
    const response = await brain.delete_testimonial({ testimonial_id: id });
    return response.json();
  },
  
  // Services
  async getServices() {
    const response = await brain.get_services();
    return response.json() as Promise<Service[]>;
  },
  
  async createService(service: Service) {
    const response = await brain.create_service(service);
    return response.json() as Promise<Service>;
  },
  
  async updateService(service: Service) {
    const response = await brain.update_service({ service_id: service.id }, service);
    return response.json() as Promise<Service>;
  },
  
  async deleteService(id: string) {
    const response = await brain.delete_service({ service_id: id });
    return response.json();
  },
  
  // Case Studies
  async getCaseStudies() {
    const response = await brain.get_case_studies();
    return response.json() as Promise<CaseStudy[]>;
  },
  
  async createCaseStudy(caseStudy: CaseStudy) {
    const response = await brain.create_case_study(caseStudy);
    return response.json() as Promise<CaseStudy>;
  },
  
  async updateCaseStudy(caseStudy: CaseStudy) {
    const response = await brain.update_case_study({ case_study_id: caseStudy.id }, caseStudy);
    return response.json() as Promise<CaseStudy>;
  },
  
  async deleteCaseStudy(id: string) {
    const response = await brain.delete_case_study({ case_study_id: id });
    return response.json();
  },
  
  // Team Members
  async getTeamMembers() {
    const response = await brain.get_team_members();
    return response.json() as Promise<TeamMember[]>;
  },
  
  async createTeamMember(teamMember: TeamMember) {
    const response = await brain.create_team_member(teamMember);
    return response.json() as Promise<TeamMember>;
  },
  
  async updateTeamMember(teamMember: TeamMember) {
    const response = await brain.update_team_member({ team_member_id: teamMember.id }, teamMember);
    return response.json() as Promise<TeamMember>;
  },
  
  async deleteTeamMember(id: string) {
    const response = await brain.delete_team_member({ team_member_id: id });
    return response.json();
  },
  
  // Hero Content
  async getHeroContents() {
    const response = await brain.get_hero_contents();
    return response.json() as Promise<HeroContent[]>;
  },
  
  async getHeroContentByPage(page: string) {
    const response = await brain.get_hero_content_by_page({ page });
    return response.json() as Promise<HeroContent>;
  },
  
  async createHeroContent(heroContent: HeroContent) {
    const response = await brain.create_hero_content(heroContent);
    return response.json() as Promise<HeroContent>;
  },
  
  async updateHeroContent(heroContent: HeroContent) {
    const response = await brain.update_hero_content({ hero_content_id: heroContent.id }, heroContent);
    return response.json() as Promise<HeroContent>;
  },
  
  async deleteHeroContent(id: string) {
    const response = await brain.delete_hero_content({ hero_content_id: id });
    return response.json();
  },
  
  // Contact Info
  async getContactInfo() {
    const response = await brain.get_contact_info();
    return response.json() as Promise<ContactInfo>;
  },
  
  async updateContactInfo(contactInfo: ContactInfo) {
    const response = await brain.update_contact_info(contactInfo);
    return response.json() as Promise<ContactInfo>;
  },
  
  // ERP Logos
  async getERPLogos() {
    const response = await brain.get_erp_logos();
    return response.json() as Promise<ERPLogo[]>;
  },
  
  async createERPLogo(erpLogo: ERPLogo) {
    const response = await brain.create_erp_logo(erpLogo);
    return response.json() as Promise<ERPLogo>;
  },
  
  async updateERPLogo(erpLogo: ERPLogo) {
    const response = await brain.update_erp_logo({ erp_logo_id: erpLogo.id }, erpLogo);
    return response.json() as Promise<ERPLogo>;
  },
  
  async deleteERPLogo(id: string) {
    const response = await brain.delete_erp_logo({ erp_logo_id: id });
    return response.json();
  },
  
  // Media
  async uploadMedia(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await brain.upload_media(formData);
    return response.json();
  },
  
  async uploadBase64Media(filename: string, contentType: string, base64Data: string) {
    const formData = new FormData();
    formData.append('filename', filename);
    formData.append('content_type', contentType);
    formData.append('base64_data', base64Data);
    
    const response = await brain.upload_base64_media(formData);
    return response.json();
  },
  
  async listMedia() {
    const response = await brain.list_media();
    return response.json() as Promise<MediaListResponse>;
  },
  
  async deleteMedia(filename: string) {
    const response = await brain.delete_media({ filename });
    return response.json();
  }
};

export default contentApi;