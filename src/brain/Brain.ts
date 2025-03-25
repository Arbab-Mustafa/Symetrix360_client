import {
  AdminAuthData,
  AdminAuthError,
  AdminAuthRequest,
  BodyUploadBase64Media,
  BodyUploadMedia,
  CaseStudy,
  CheckHealthData,
  ContactInfo,
  CreateCaseStudyData,
  CreateCaseStudyError,
  CreateErpLogoData,
  CreateErpLogoError,
  CreateHeroContentData,
  CreateHeroContentError,
  CreateServiceData,
  CreateServiceError,
  CreateTeamMemberData,
  CreateTeamMemberError,
  CreateTestimonialData,
  CreateTestimonialError,
  DeleteCaseStudyData,
  DeleteCaseStudyError,
  DeleteCaseStudyParams,
  DeleteErpLogoData,
  DeleteErpLogoError,
  DeleteErpLogoParams,
  DeleteHeroContentData,
  DeleteHeroContentError,
  DeleteHeroContentParams,
  DeleteMediaData,
  DeleteMediaError,
  DeleteMediaParams,
  DeleteServiceData,
  DeleteServiceError,
  DeleteServiceParams,
  DeleteTeamMemberData,
  DeleteTeamMemberError,
  DeleteTeamMemberParams,
  DeleteTestimonialData,
  DeleteTestimonialError,
  DeleteTestimonialParams,
  ERPLogo,
  GetCaseStudiesData,
  GetContactInfoData,
  GetErpLogosData,
  GetHeroContentByPageData,
  GetHeroContentByPageError,
  GetHeroContentByPageParams,
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
  PublicGetHeroContentByPageError,
  PublicGetHeroContentByPageParams,
  PublicGetServicesData,
  PublicGetTeamMembersData,
  PublicGetTestimonialsData,
  Service,
  TeamMember,
  Testimonial,
  UpdateCaseStudyData,
  UpdateCaseStudyError,
  UpdateCaseStudyParams,
  UpdateContactInfoData,
  UpdateContactInfoError,
  UpdateErpLogoData,
  UpdateErpLogoError,
  UpdateErpLogoParams,
  UpdateHeroContentData,
  UpdateHeroContentError,
  UpdateHeroContentParams,
  UpdateServiceData,
  UpdateServiceError,
  UpdateServiceParams,
  UpdateTeamMemberData,
  UpdateTeamMemberError,
  UpdateTeamMemberParams,
  UpdateTestimonialData,
  UpdateTestimonialError,
  UpdateTestimonialParams,
  UploadBase64MediaData,
  UploadBase64MediaError,
  UploadMediaData,
  UploadMediaError,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Brain<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Check health of application. Returns 200 when OK, 500 when not.
   *
   * @name check_health
   * @summary Check Health
   * @request GET:/_healthz
   */
  check_health = (params: RequestParams = {}) =>
    this.request<CheckHealthData, any>({
      path: `/_healthz`,
      method: "GET",
      ...params,
    });

  /**
   * @description Authenticate admin user
   *
   * @tags dbtn/module:admin
   * @name admin_auth
   * @summary Admin Auth
   * @request POST:/routes/admin/auth
   */
  admin_auth = (data: AdminAuthRequest, params: RequestParams = {}) =>
    this.request<AdminAuthData, AdminAuthError>({
      path: `/routes/admin/auth`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Get all testimonials
   *
   * @tags dbtn/module:admin
   * @name get_testimonials
   * @summary Get Testimonials
   * @request GET:/routes/admin/testimonials
   */
  get_testimonials = (params: RequestParams = {}) =>
    this.request<GetTestimonialsData, any>({
      path: `/routes/admin/testimonials`,
      method: "GET",
      ...params,
    });

  /**
   * @description Create a new testimonial
   *
   * @tags dbtn/module:admin
   * @name create_testimonial
   * @summary Create Testimonial
   * @request POST:/routes/admin/testimonials
   */
  create_testimonial = (data: Testimonial, params: RequestParams = {}) =>
    this.request<CreateTestimonialData, CreateTestimonialError>({
      path: `/routes/admin/testimonials`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Update an existing testimonial
   *
   * @tags dbtn/module:admin
   * @name update_testimonial
   * @summary Update Testimonial
   * @request PUT:/routes/admin/testimonials/{testimonial_id}
   */
  update_testimonial = (
    { testimonialId, ...query }: UpdateTestimonialParams,
    data: Testimonial,
    params: RequestParams = {},
  ) =>
    this.request<UpdateTestimonialData, UpdateTestimonialError>({
      path: `/routes/admin/testimonials/${testimonialId}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete a testimonial
   *
   * @tags dbtn/module:admin
   * @name delete_testimonial
   * @summary Delete Testimonial
   * @request DELETE:/routes/admin/testimonials/{testimonial_id}
   */
  delete_testimonial = ({ testimonialId, ...query }: DeleteTestimonialParams, params: RequestParams = {}) =>
    this.request<DeleteTestimonialData, DeleteTestimonialError>({
      path: `/routes/admin/testimonials/${testimonialId}`,
      method: "DELETE",
      ...params,
    });

  /**
   * @description Get all services
   *
   * @tags dbtn/module:admin
   * @name get_services
   * @summary Get Services
   * @request GET:/routes/admin/services
   */
  get_services = (params: RequestParams = {}) =>
    this.request<GetServicesData, any>({
      path: `/routes/admin/services`,
      method: "GET",
      ...params,
    });

  /**
   * @description Create a new service
   *
   * @tags dbtn/module:admin
   * @name create_service
   * @summary Create Service
   * @request POST:/routes/admin/services
   */
  create_service = (data: Service, params: RequestParams = {}) =>
    this.request<CreateServiceData, CreateServiceError>({
      path: `/routes/admin/services`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Update an existing service
   *
   * @tags dbtn/module:admin
   * @name update_service
   * @summary Update Service
   * @request PUT:/routes/admin/services/{service_id}
   */
  update_service = ({ serviceId, ...query }: UpdateServiceParams, data: Service, params: RequestParams = {}) =>
    this.request<UpdateServiceData, UpdateServiceError>({
      path: `/routes/admin/services/${serviceId}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete a service
   *
   * @tags dbtn/module:admin
   * @name delete_service
   * @summary Delete Service
   * @request DELETE:/routes/admin/services/{service_id}
   */
  delete_service = ({ serviceId, ...query }: DeleteServiceParams, params: RequestParams = {}) =>
    this.request<DeleteServiceData, DeleteServiceError>({
      path: `/routes/admin/services/${serviceId}`,
      method: "DELETE",
      ...params,
    });

  /**
   * @description Get all case studies
   *
   * @tags dbtn/module:admin
   * @name get_case_studies
   * @summary Get Case Studies
   * @request GET:/routes/admin/case-studies
   */
  get_case_studies = (params: RequestParams = {}) =>
    this.request<GetCaseStudiesData, any>({
      path: `/routes/admin/case-studies`,
      method: "GET",
      ...params,
    });

  /**
   * @description Create a new case study
   *
   * @tags dbtn/module:admin
   * @name create_case_study
   * @summary Create Case Study
   * @request POST:/routes/admin/case-studies
   */
  create_case_study = (data: CaseStudy, params: RequestParams = {}) =>
    this.request<CreateCaseStudyData, CreateCaseStudyError>({
      path: `/routes/admin/case-studies`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Update an existing case study
   *
   * @tags dbtn/module:admin
   * @name update_case_study
   * @summary Update Case Study
   * @request PUT:/routes/admin/case-studies/{case_study_id}
   */
  update_case_study = ({ caseStudyId, ...query }: UpdateCaseStudyParams, data: CaseStudy, params: RequestParams = {}) =>
    this.request<UpdateCaseStudyData, UpdateCaseStudyError>({
      path: `/routes/admin/case-studies/${caseStudyId}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete a case study
   *
   * @tags dbtn/module:admin
   * @name delete_case_study
   * @summary Delete Case Study
   * @request DELETE:/routes/admin/case-studies/{case_study_id}
   */
  delete_case_study = ({ caseStudyId, ...query }: DeleteCaseStudyParams, params: RequestParams = {}) =>
    this.request<DeleteCaseStudyData, DeleteCaseStudyError>({
      path: `/routes/admin/case-studies/${caseStudyId}`,
      method: "DELETE",
      ...params,
    });

  /**
   * @description Get all team members
   *
   * @tags dbtn/module:admin
   * @name get_team_members
   * @summary Get Team Members
   * @request GET:/routes/admin/team-members
   */
  get_team_members = (params: RequestParams = {}) =>
    this.request<GetTeamMembersData, any>({
      path: `/routes/admin/team-members`,
      method: "GET",
      ...params,
    });

  /**
   * @description Create a new team member
   *
   * @tags dbtn/module:admin
   * @name create_team_member
   * @summary Create Team Member
   * @request POST:/routes/admin/team-members
   */
  create_team_member = (data: TeamMember, params: RequestParams = {}) =>
    this.request<CreateTeamMemberData, CreateTeamMemberError>({
      path: `/routes/admin/team-members`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Update an existing team member
   *
   * @tags dbtn/module:admin
   * @name update_team_member
   * @summary Update Team Member
   * @request PUT:/routes/admin/team-members/{team_member_id}
   */
  update_team_member = (
    { teamMemberId, ...query }: UpdateTeamMemberParams,
    data: TeamMember,
    params: RequestParams = {},
  ) =>
    this.request<UpdateTeamMemberData, UpdateTeamMemberError>({
      path: `/routes/admin/team-members/${teamMemberId}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete a team member
   *
   * @tags dbtn/module:admin
   * @name delete_team_member
   * @summary Delete Team Member
   * @request DELETE:/routes/admin/team-members/{team_member_id}
   */
  delete_team_member = ({ teamMemberId, ...query }: DeleteTeamMemberParams, params: RequestParams = {}) =>
    this.request<DeleteTeamMemberData, DeleteTeamMemberError>({
      path: `/routes/admin/team-members/${teamMemberId}`,
      method: "DELETE",
      ...params,
    });

  /**
   * @description Get all hero contents
   *
   * @tags dbtn/module:admin
   * @name get_hero_contents
   * @summary Get Hero Contents
   * @request GET:/routes/admin/hero-content
   */
  get_hero_contents = (params: RequestParams = {}) =>
    this.request<GetHeroContentsData, any>({
      path: `/routes/admin/hero-content`,
      method: "GET",
      ...params,
    });

  /**
   * @description Create a new hero content
   *
   * @tags dbtn/module:admin
   * @name create_hero_content
   * @summary Create Hero Content
   * @request POST:/routes/admin/hero-content
   */
  create_hero_content = (data: HeroContent, params: RequestParams = {}) =>
    this.request<CreateHeroContentData, CreateHeroContentError>({
      path: `/routes/admin/hero-content`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Get hero content for a specific page
   *
   * @tags dbtn/module:admin
   * @name get_hero_content_by_page
   * @summary Get Hero Content By Page
   * @request GET:/routes/admin/hero-content/{page}
   */
  get_hero_content_by_page = ({ page, ...query }: GetHeroContentByPageParams, params: RequestParams = {}) =>
    this.request<GetHeroContentByPageData, GetHeroContentByPageError>({
      path: `/routes/admin/hero-content/${page}`,
      method: "GET",
      ...params,
    });

  /**
   * @description Update an existing hero content
   *
   * @tags dbtn/module:admin
   * @name update_hero_content
   * @summary Update Hero Content
   * @request PUT:/routes/admin/hero-content/{hero_content_id}
   */
  update_hero_content = (
    { heroContentId, ...query }: UpdateHeroContentParams,
    data: HeroContent,
    params: RequestParams = {},
  ) =>
    this.request<UpdateHeroContentData, UpdateHeroContentError>({
      path: `/routes/admin/hero-content/${heroContentId}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete a hero content
   *
   * @tags dbtn/module:admin
   * @name delete_hero_content
   * @summary Delete Hero Content
   * @request DELETE:/routes/admin/hero-content/{hero_content_id}
   */
  delete_hero_content = ({ heroContentId, ...query }: DeleteHeroContentParams, params: RequestParams = {}) =>
    this.request<DeleteHeroContentData, DeleteHeroContentError>({
      path: `/routes/admin/hero-content/${heroContentId}`,
      method: "DELETE",
      ...params,
    });

  /**
   * @description Get contact info
   *
   * @tags dbtn/module:admin
   * @name get_contact_info
   * @summary Get Contact Info
   * @request GET:/routes/admin/contact-info
   */
  get_contact_info = (params: RequestParams = {}) =>
    this.request<GetContactInfoData, any>({
      path: `/routes/admin/contact-info`,
      method: "GET",
      ...params,
    });

  /**
   * @description Update contact info
   *
   * @tags dbtn/module:admin
   * @name update_contact_info
   * @summary Update Contact Info
   * @request PUT:/routes/admin/contact-info
   */
  update_contact_info = (data: ContactInfo, params: RequestParams = {}) =>
    this.request<UpdateContactInfoData, UpdateContactInfoError>({
      path: `/routes/admin/contact-info`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Get all ERP logos
   *
   * @tags dbtn/module:admin
   * @name get_erp_logos
   * @summary Get Erp Logos
   * @request GET:/routes/admin/erp-logos
   */
  get_erp_logos = (params: RequestParams = {}) =>
    this.request<GetErpLogosData, any>({
      path: `/routes/admin/erp-logos`,
      method: "GET",
      ...params,
    });

  /**
   * @description Create a new ERP logo
   *
   * @tags dbtn/module:admin
   * @name create_erp_logo
   * @summary Create Erp Logo
   * @request POST:/routes/admin/erp-logos
   */
  create_erp_logo = (data: ERPLogo, params: RequestParams = {}) =>
    this.request<CreateErpLogoData, CreateErpLogoError>({
      path: `/routes/admin/erp-logos`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Update an existing ERP logo
   *
   * @tags dbtn/module:admin
   * @name update_erp_logo
   * @summary Update Erp Logo
   * @request PUT:/routes/admin/erp-logos/{erp_logo_id}
   */
  update_erp_logo = ({ erpLogoId, ...query }: UpdateErpLogoParams, data: ERPLogo, params: RequestParams = {}) =>
    this.request<UpdateErpLogoData, UpdateErpLogoError>({
      path: `/routes/admin/erp-logos/${erpLogoId}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete an ERP logo
   *
   * @tags dbtn/module:admin
   * @name delete_erp_logo
   * @summary Delete Erp Logo
   * @request DELETE:/routes/admin/erp-logos/{erp_logo_id}
   */
  delete_erp_logo = ({ erpLogoId, ...query }: DeleteErpLogoParams, params: RequestParams = {}) =>
    this.request<DeleteErpLogoData, DeleteErpLogoError>({
      path: `/routes/admin/erp-logos/${erpLogoId}`,
      method: "DELETE",
      ...params,
    });

  /**
   * @description Get all services - public endpoint
   *
   * @tags dbtn/module:admin
   * @name public_get_services
   * @summary Public Get Services
   * @request GET:/routes/content/services
   */
  public_get_services = (params: RequestParams = {}) =>
    this.request<PublicGetServicesData, any>({
      path: `/routes/content/services`,
      method: "GET",
      ...params,
    });

  /**
   * @description Get all testimonials - public endpoint
   *
   * @tags dbtn/module:admin
   * @name public_get_testimonials
   * @summary Public Get Testimonials
   * @request GET:/routes/content/testimonials
   */
  public_get_testimonials = (params: RequestParams = {}) =>
    this.request<PublicGetTestimonialsData, any>({
      path: `/routes/content/testimonials`,
      method: "GET",
      ...params,
    });

  /**
   * @description Get all case studies - public endpoint
   *
   * @tags dbtn/module:admin
   * @name public_get_case_studies
   * @summary Public Get Case Studies
   * @request GET:/routes/content/case-studies
   */
  public_get_case_studies = (params: RequestParams = {}) =>
    this.request<PublicGetCaseStudiesData, any>({
      path: `/routes/content/case-studies`,
      method: "GET",
      ...params,
    });

  /**
   * @description Get all team members - public endpoint
   *
   * @tags dbtn/module:admin
   * @name public_get_team_members
   * @summary Public Get Team Members
   * @request GET:/routes/content/team-members
   */
  public_get_team_members = (params: RequestParams = {}) =>
    this.request<PublicGetTeamMembersData, any>({
      path: `/routes/content/team-members`,
      method: "GET",
      ...params,
    });

  /**
   * @description Get hero content for a specific page - public endpoint
   *
   * @tags dbtn/module:admin
   * @name public_get_hero_content_by_page
   * @summary Public Get Hero Content By Page
   * @request GET:/routes/content/hero-content/{page}
   */
  public_get_hero_content_by_page = (
    { page, ...query }: PublicGetHeroContentByPageParams,
    params: RequestParams = {},
  ) =>
    this.request<PublicGetHeroContentByPageData, PublicGetHeroContentByPageError>({
      path: `/routes/content/hero-content/${page}`,
      method: "GET",
      ...params,
    });

  /**
   * @description Get contact info - public endpoint
   *
   * @tags dbtn/module:admin
   * @name public_get_contact_info
   * @summary Public Get Contact Info
   * @request GET:/routes/content/contact-info
   */
  public_get_contact_info = (params: RequestParams = {}) =>
    this.request<PublicGetContactInfoData, any>({
      path: `/routes/content/contact-info`,
      method: "GET",
      ...params,
    });

  /**
   * @description Get all ERP logos - public endpoint
   *
   * @tags dbtn/module:admin
   * @name public_get_erp_logos
   * @summary Public Get Erp Logos
   * @request GET:/routes/content/erp-logos
   */
  public_get_erp_logos = (params: RequestParams = {}) =>
    this.request<PublicGetErpLogosData, any>({
      path: `/routes/content/erp-logos`,
      method: "GET",
      ...params,
    });

  /**
   * @description Upload a media file and return its URL
   *
   * @tags dbtn/module:media
   * @name upload_media
   * @summary Upload Media
   * @request POST:/routes/media/upload
   */
  upload_media = (data: BodyUploadMedia, params: RequestParams = {}) =>
    this.request<UploadMediaData, UploadMediaError>({
      path: `/routes/media/upload`,
      method: "POST",
      body: data,
      type: ContentType.FormData,
      ...params,
    });

  /**
   * @description List all media files
   *
   * @tags dbtn/module:media
   * @name list_media
   * @summary List Media
   * @request GET:/routes/media/list
   */
  list_media = (params: RequestParams = {}) =>
    this.request<ListMediaData, any>({
      path: `/routes/media/list`,
      method: "GET",
      ...params,
    });

  /**
   * @description Upload a media file as base64 string and return its URL
   *
   * @tags dbtn/module:media
   * @name upload_base64_media
   * @summary Upload Base64 Media
   * @request POST:/routes/media/upload-base64
   */
  upload_base64_media = (data: BodyUploadBase64Media, params: RequestParams = {}) =>
    this.request<UploadBase64MediaData, UploadBase64MediaError>({
      path: `/routes/media/upload-base64`,
      method: "POST",
      body: data,
      type: ContentType.UrlEncoded,
      ...params,
    });

  /**
   * @description Delete a media file by filename
   *
   * @tags dbtn/module:media
   * @name delete_media
   * @summary Delete Media
   * @request DELETE:/routes/media/{filename}
   */
  delete_media = ({ filename, ...query }: DeleteMediaParams, params: RequestParams = {}) =>
    this.request<DeleteMediaData, DeleteMediaError>({
      path: `/routes/media/${filename}`,
      method: "DELETE",
      ...params,
    });
}
