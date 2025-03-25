import {
  AdminAuthData,
  AdminAuthRequest,
  BodyUploadBase64Media,
  BodyUploadMedia,
  CaseStudy,
  CheckHealthData,
  ContactInfo,
  CreateCaseStudyData,
  CreateErpLogoData,
  CreateHeroContentData,
  CreateServiceData,
  CreateTeamMemberData,
  CreateTestimonialData,
  DeleteCaseStudyData,
  DeleteErpLogoData,
  DeleteHeroContentData,
  DeleteMediaData,
  DeleteServiceData,
  DeleteTeamMemberData,
  DeleteTestimonialData,
  ERPLogo,
  GetCaseStudiesData,
  GetContactInfoData,
  GetErpLogosData,
  GetHeroContentByPageData,
  GetHeroContentsData,
  GetServicesData,
  GetTeamMembersData,
  GetTestimonialsData,
  HeroContent,
  ListMediaData,
  PublicGetCaseStudiesData,
  PublicGetContactInfoData,
  PublicGetErpLogosData,
  PublicGetHeroContentByPageData,
  PublicGetServicesData,
  PublicGetTeamMembersData,
  PublicGetTestimonialsData,
  Service,
  TeamMember,
  Testimonial,
  UpdateCaseStudyData,
  UpdateContactInfoData,
  UpdateErpLogoData,
  UpdateHeroContentData,
  UpdateServiceData,
  UpdateTeamMemberData,
  UpdateTestimonialData,
  UploadBase64MediaData,
  UploadMediaData,
} from "./data-contracts";

export namespace Brain {
  /**
   * @description Check health of application. Returns 200 when OK, 500 when not.
   * @name check_health
   * @summary Check Health
   * @request GET:/_healthz
   */
  export namespace check_health {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CheckHealthData;
  }

  /**
   * @description Authenticate admin user
   * @tags dbtn/module:admin
   * @name admin_auth
   * @summary Admin Auth
   * @request POST:/routes/admin/auth
   */
  export namespace admin_auth {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AdminAuthRequest;
    export type RequestHeaders = {};
    export type ResponseBody = AdminAuthData;
  }

  /**
   * @description Get all testimonials
   * @tags dbtn/module:admin
   * @name get_testimonials
   * @summary Get Testimonials
   * @request GET:/routes/admin/testimonials
   */
  export namespace get_testimonials {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetTestimonialsData;
  }

  /**
   * @description Create a new testimonial
   * @tags dbtn/module:admin
   * @name create_testimonial
   * @summary Create Testimonial
   * @request POST:/routes/admin/testimonials
   */
  export namespace create_testimonial {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Testimonial;
    export type RequestHeaders = {};
    export type ResponseBody = CreateTestimonialData;
  }

  /**
   * @description Update an existing testimonial
   * @tags dbtn/module:admin
   * @name update_testimonial
   * @summary Update Testimonial
   * @request PUT:/routes/admin/testimonials/{testimonial_id}
   */
  export namespace update_testimonial {
    export type RequestParams = {
      /** Testimonial Id */
      testimonialId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Testimonial;
    export type RequestHeaders = {};
    export type ResponseBody = UpdateTestimonialData;
  }

  /**
   * @description Delete a testimonial
   * @tags dbtn/module:admin
   * @name delete_testimonial
   * @summary Delete Testimonial
   * @request DELETE:/routes/admin/testimonials/{testimonial_id}
   */
  export namespace delete_testimonial {
    export type RequestParams = {
      /** Testimonial Id */
      testimonialId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteTestimonialData;
  }

  /**
   * @description Get all services
   * @tags dbtn/module:admin
   * @name get_services
   * @summary Get Services
   * @request GET:/routes/admin/services
   */
  export namespace get_services {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetServicesData;
  }

  /**
   * @description Create a new service
   * @tags dbtn/module:admin
   * @name create_service
   * @summary Create Service
   * @request POST:/routes/admin/services
   */
  export namespace create_service {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Service;
    export type RequestHeaders = {};
    export type ResponseBody = CreateServiceData;
  }

  /**
   * @description Update an existing service
   * @tags dbtn/module:admin
   * @name update_service
   * @summary Update Service
   * @request PUT:/routes/admin/services/{service_id}
   */
  export namespace update_service {
    export type RequestParams = {
      /** Service Id */
      serviceId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = Service;
    export type RequestHeaders = {};
    export type ResponseBody = UpdateServiceData;
  }

  /**
   * @description Delete a service
   * @tags dbtn/module:admin
   * @name delete_service
   * @summary Delete Service
   * @request DELETE:/routes/admin/services/{service_id}
   */
  export namespace delete_service {
    export type RequestParams = {
      /** Service Id */
      serviceId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteServiceData;
  }

  /**
   * @description Get all case studies
   * @tags dbtn/module:admin
   * @name get_case_studies
   * @summary Get Case Studies
   * @request GET:/routes/admin/case-studies
   */
  export namespace get_case_studies {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetCaseStudiesData;
  }

  /**
   * @description Create a new case study
   * @tags dbtn/module:admin
   * @name create_case_study
   * @summary Create Case Study
   * @request POST:/routes/admin/case-studies
   */
  export namespace create_case_study {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CaseStudy;
    export type RequestHeaders = {};
    export type ResponseBody = CreateCaseStudyData;
  }

  /**
   * @description Update an existing case study
   * @tags dbtn/module:admin
   * @name update_case_study
   * @summary Update Case Study
   * @request PUT:/routes/admin/case-studies/{case_study_id}
   */
  export namespace update_case_study {
    export type RequestParams = {
      /** Case Study Id */
      caseStudyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CaseStudy;
    export type RequestHeaders = {};
    export type ResponseBody = UpdateCaseStudyData;
  }

  /**
   * @description Delete a case study
   * @tags dbtn/module:admin
   * @name delete_case_study
   * @summary Delete Case Study
   * @request DELETE:/routes/admin/case-studies/{case_study_id}
   */
  export namespace delete_case_study {
    export type RequestParams = {
      /** Case Study Id */
      caseStudyId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteCaseStudyData;
  }

  /**
   * @description Get all team members
   * @tags dbtn/module:admin
   * @name get_team_members
   * @summary Get Team Members
   * @request GET:/routes/admin/team-members
   */
  export namespace get_team_members {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetTeamMembersData;
  }

  /**
   * @description Create a new team member
   * @tags dbtn/module:admin
   * @name create_team_member
   * @summary Create Team Member
   * @request POST:/routes/admin/team-members
   */
  export namespace create_team_member {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TeamMember;
    export type RequestHeaders = {};
    export type ResponseBody = CreateTeamMemberData;
  }

  /**
   * @description Update an existing team member
   * @tags dbtn/module:admin
   * @name update_team_member
   * @summary Update Team Member
   * @request PUT:/routes/admin/team-members/{team_member_id}
   */
  export namespace update_team_member {
    export type RequestParams = {
      /** Team Member Id */
      teamMemberId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = TeamMember;
    export type RequestHeaders = {};
    export type ResponseBody = UpdateTeamMemberData;
  }

  /**
   * @description Delete a team member
   * @tags dbtn/module:admin
   * @name delete_team_member
   * @summary Delete Team Member
   * @request DELETE:/routes/admin/team-members/{team_member_id}
   */
  export namespace delete_team_member {
    export type RequestParams = {
      /** Team Member Id */
      teamMemberId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteTeamMemberData;
  }

  /**
   * @description Get all hero contents
   * @tags dbtn/module:admin
   * @name get_hero_contents
   * @summary Get Hero Contents
   * @request GET:/routes/admin/hero-content
   */
  export namespace get_hero_contents {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetHeroContentsData;
  }

  /**
   * @description Create a new hero content
   * @tags dbtn/module:admin
   * @name create_hero_content
   * @summary Create Hero Content
   * @request POST:/routes/admin/hero-content
   */
  export namespace create_hero_content {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = HeroContent;
    export type RequestHeaders = {};
    export type ResponseBody = CreateHeroContentData;
  }

  /**
   * @description Get hero content for a specific page
   * @tags dbtn/module:admin
   * @name get_hero_content_by_page
   * @summary Get Hero Content By Page
   * @request GET:/routes/admin/hero-content/{page}
   */
  export namespace get_hero_content_by_page {
    export type RequestParams = {
      /** Page */
      page: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetHeroContentByPageData;
  }

  /**
   * @description Update an existing hero content
   * @tags dbtn/module:admin
   * @name update_hero_content
   * @summary Update Hero Content
   * @request PUT:/routes/admin/hero-content/{hero_content_id}
   */
  export namespace update_hero_content {
    export type RequestParams = {
      /** Hero Content Id */
      heroContentId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = HeroContent;
    export type RequestHeaders = {};
    export type ResponseBody = UpdateHeroContentData;
  }

  /**
   * @description Delete a hero content
   * @tags dbtn/module:admin
   * @name delete_hero_content
   * @summary Delete Hero Content
   * @request DELETE:/routes/admin/hero-content/{hero_content_id}
   */
  export namespace delete_hero_content {
    export type RequestParams = {
      /** Hero Content Id */
      heroContentId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteHeroContentData;
  }

  /**
   * @description Get contact info
   * @tags dbtn/module:admin
   * @name get_contact_info
   * @summary Get Contact Info
   * @request GET:/routes/admin/contact-info
   */
  export namespace get_contact_info {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetContactInfoData;
  }

  /**
   * @description Update contact info
   * @tags dbtn/module:admin
   * @name update_contact_info
   * @summary Update Contact Info
   * @request PUT:/routes/admin/contact-info
   */
  export namespace update_contact_info {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ContactInfo;
    export type RequestHeaders = {};
    export type ResponseBody = UpdateContactInfoData;
  }

  /**
   * @description Get all ERP logos
   * @tags dbtn/module:admin
   * @name get_erp_logos
   * @summary Get Erp Logos
   * @request GET:/routes/admin/erp-logos
   */
  export namespace get_erp_logos {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetErpLogosData;
  }

  /**
   * @description Create a new ERP logo
   * @tags dbtn/module:admin
   * @name create_erp_logo
   * @summary Create Erp Logo
   * @request POST:/routes/admin/erp-logos
   */
  export namespace create_erp_logo {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ERPLogo;
    export type RequestHeaders = {};
    export type ResponseBody = CreateErpLogoData;
  }

  /**
   * @description Update an existing ERP logo
   * @tags dbtn/module:admin
   * @name update_erp_logo
   * @summary Update Erp Logo
   * @request PUT:/routes/admin/erp-logos/{erp_logo_id}
   */
  export namespace update_erp_logo {
    export type RequestParams = {
      /** Erp Logo Id */
      erpLogoId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ERPLogo;
    export type RequestHeaders = {};
    export type ResponseBody = UpdateErpLogoData;
  }

  /**
   * @description Delete an ERP logo
   * @tags dbtn/module:admin
   * @name delete_erp_logo
   * @summary Delete Erp Logo
   * @request DELETE:/routes/admin/erp-logos/{erp_logo_id}
   */
  export namespace delete_erp_logo {
    export type RequestParams = {
      /** Erp Logo Id */
      erpLogoId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteErpLogoData;
  }

  /**
   * @description Get all services - public endpoint
   * @tags dbtn/module:admin
   * @name public_get_services
   * @summary Public Get Services
   * @request GET:/routes/content/services
   */
  export namespace public_get_services {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PublicGetServicesData;
  }

  /**
   * @description Get all testimonials - public endpoint
   * @tags dbtn/module:admin
   * @name public_get_testimonials
   * @summary Public Get Testimonials
   * @request GET:/routes/content/testimonials
   */
  export namespace public_get_testimonials {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PublicGetTestimonialsData;
  }

  /**
   * @description Get all case studies - public endpoint
   * @tags dbtn/module:admin
   * @name public_get_case_studies
   * @summary Public Get Case Studies
   * @request GET:/routes/content/case-studies
   */
  export namespace public_get_case_studies {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PublicGetCaseStudiesData;
  }

  /**
   * @description Get all team members - public endpoint
   * @tags dbtn/module:admin
   * @name public_get_team_members
   * @summary Public Get Team Members
   * @request GET:/routes/content/team-members
   */
  export namespace public_get_team_members {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PublicGetTeamMembersData;
  }

  /**
   * @description Get hero content for a specific page - public endpoint
   * @tags dbtn/module:admin
   * @name public_get_hero_content_by_page
   * @summary Public Get Hero Content By Page
   * @request GET:/routes/content/hero-content/{page}
   */
  export namespace public_get_hero_content_by_page {
    export type RequestParams = {
      /** Page */
      page: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PublicGetHeroContentByPageData;
  }

  /**
   * @description Get contact info - public endpoint
   * @tags dbtn/module:admin
   * @name public_get_contact_info
   * @summary Public Get Contact Info
   * @request GET:/routes/content/contact-info
   */
  export namespace public_get_contact_info {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PublicGetContactInfoData;
  }

  /**
   * @description Get all ERP logos - public endpoint
   * @tags dbtn/module:admin
   * @name public_get_erp_logos
   * @summary Public Get Erp Logos
   * @request GET:/routes/content/erp-logos
   */
  export namespace public_get_erp_logos {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PublicGetErpLogosData;
  }

  /**
   * @description Upload a media file and return its URL
   * @tags dbtn/module:media
   * @name upload_media
   * @summary Upload Media
   * @request POST:/routes/media/upload
   */
  export namespace upload_media {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BodyUploadMedia;
    export type RequestHeaders = {};
    export type ResponseBody = UploadMediaData;
  }

  /**
   * @description List all media files
   * @tags dbtn/module:media
   * @name list_media
   * @summary List Media
   * @request GET:/routes/media/list
   */
  export namespace list_media {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListMediaData;
  }

  /**
   * @description Upload a media file as base64 string and return its URL
   * @tags dbtn/module:media
   * @name upload_base64_media
   * @summary Upload Base64 Media
   * @request POST:/routes/media/upload-base64
   */
  export namespace upload_base64_media {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BodyUploadBase64Media;
    export type RequestHeaders = {};
    export type ResponseBody = UploadBase64MediaData;
  }

  /**
   * @description Delete a media file by filename
   * @tags dbtn/module:media
   * @name delete_media
   * @summary Delete Media
   * @request DELETE:/routes/media/{filename}
   */
  export namespace delete_media {
    export type RequestParams = {
      /** Filename */
      filename: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteMediaData;
  }
}
