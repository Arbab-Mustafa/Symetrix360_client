import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useAdminAuth from "utils/auth";
import { toast } from "sonner";
import contentApi from "utils/contentApi";
import { Service, MediaResponse, HeroContent, Testimonial, CaseStudy, TeamMember, ContactInfo, ERPLogo } from "utils/types";
import ServicesList from "components/ServicesList";
import ServiceDialog from "components/ServiceDialog";
import DeleteConfirmDialog from "components/DeleteConfirmDialog";
import MediaLibrary from "components/MediaLibrary";
import MediaUploadDialog from "components/MediaUploadDialog";
import HeroContentList from "components/HeroContentList";
import HeroContentDialog from "components/HeroContentDialog";
import TestimonialsList from "components/TestimonialsList";
import TestimonialDialog from "components/TestimonialDialog";
import CaseStudiesList from "components/CaseStudiesList";
import CaseStudyDialog from "components/CaseStudyDialog";
import TeamMembersList from "components/TeamMembersList";
import TeamMemberDialog from "components/TeamMemberDialog";
import ContactInfoForm from "components/ContactInfoForm";
import ERPLogosList from "components/ERPLogosList";
import ERPLogoDialog from "components/ERPLogoDialog";

// Define the content management tabs
const TABS = [
  { id: "services", label: "Services" },
  { id: "hero", label: "Hero Content" },
  { id: "testimonials", label: "Testimonials" },
  { id: "case-studies", label: "Case Studies" },
  { id: "team", label: "Team Members" },
  { id: "contact", label: "Contact Info" },
  { id: "logos", label: "ERP Logos" },
  { id: "media", label: "Media Library" },
];

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const auth = useAdminAuth();
  const [activeTab, setActiveTab] = useState("services");
  
  // Services state
  const [services, setServices] = useState<Service[]>([]);
  const [isServicesLoading, setIsServicesLoading] = useState(false);
  const [serviceDialogOpen, setServiceDialogOpen] = useState(false);
  const [currentService, setCurrentService] = useState<Service | undefined>(undefined);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [serviceToDelete, setServiceToDelete] = useState<string>("");
  const [isActionLoading, setIsActionLoading] = useState(false);
  
  // Media state
  const [mediaItems, setMediaItems] = useState<MediaResponse[]>([]);
  const [isMediaLoading, setIsMediaLoading] = useState(false);
  const [mediaUploadDialogOpen, setMediaUploadDialogOpen] = useState(false);
  const [mediaToDelete, setMediaToDelete] = useState<string>("");
  const [deleteMediaDialogOpen, setDeleteMediaDialogOpen] = useState(false);
  
  // Hero content state
  const [heroContents, setHeroContents] = useState<HeroContent[]>([]);
  const [isHeroContentLoading, setIsHeroContentLoading] = useState(false);
  const [heroContentDialogOpen, setHeroContentDialogOpen] = useState(false);
  const [currentHeroContent, setCurrentHeroContent] = useState<HeroContent | undefined>(undefined);
  const [heroContentToDelete, setHeroContentToDelete] = useState<string>("");
  const [deleteHeroContentDialogOpen, setDeleteHeroContentDialogOpen] = useState(false);
  
  // Testimonials state
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isTestimonialsLoading, setIsTestimonialsLoading] = useState(false);
  const [testimonialDialogOpen, setTestimonialDialogOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState<Testimonial | undefined>(undefined);
  const [testimonialToDelete, setTestimonialToDelete] = useState<string>("");
  const [deleteTestimonialDialogOpen, setDeleteTestimonialDialogOpen] = useState(false);
  
  // Case studies state
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [isCaseStudiesLoading, setIsCaseStudiesLoading] = useState(false);
  const [caseStudyDialogOpen, setCaseStudyDialogOpen] = useState(false);
  const [currentCaseStudy, setCurrentCaseStudy] = useState<CaseStudy | undefined>(undefined);
  const [caseStudyToDelete, setCaseStudyToDelete] = useState<string>("");
  const [deleteCaseStudyDialogOpen, setDeleteCaseStudyDialogOpen] = useState(false);
  
  // Team members state
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isTeamMembersLoading, setIsTeamMembersLoading] = useState(false);
  const [teamMemberDialogOpen, setTeamMemberDialogOpen] = useState(false);
  const [currentTeamMember, setCurrentTeamMember] = useState<TeamMember | undefined>(undefined);
  const [teamMemberToDelete, setTeamMemberToDelete] = useState<string>("");
  const [deleteTeamMemberDialogOpen, setDeleteTeamMemberDialogOpen] = useState(false);
  
  // Contact info state
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [isContactInfoLoading, setIsContactInfoLoading] = useState(false);
  const [contactInfoFormOpen, setContactInfoFormOpen] = useState(false);
  
  // ERP logos state
  const [erpLogos, setERPLogos] = useState<ERPLogo[]>([]);
  const [isERPLogosLoading, setIsERPLogosLoading] = useState(false);
  const [erpLogoDialogOpen, setERPLogoDialogOpen] = useState(false);
  const [currentERPLogo, setCurrentERPLogo] = useState<ERPLogo | undefined>(undefined);
  const [erpLogoToDelete, setERPLogoToDelete] = useState<string>("");
  const [deleteERPLogoDialogOpen, setDeleteERPLogoDialogOpen] = useState(false);
  
  // Check authentication on load
  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/Admin");
    }
  }, [auth.isAuthenticated, navigate]);
  
  // Load content based on active tab
  useEffect(() => {
    if (!auth.isAuthenticated) return;
    
    if (activeTab === "services") {
      loadServices();
    } else if (activeTab === "media") {
      loadMedia();
    } else if (activeTab === "hero") {
      loadHeroContents();
    } else if (activeTab === "testimonials") {
      loadTestimonials();
    } else if (activeTab === "case-studies") {
      loadCaseStudies();
    } else if (activeTab === "team") {
      loadTeamMembers();
    } else if (activeTab === "contact") {
      loadContactInfo();
    } else if (activeTab === "logos") {
      loadERPLogos();
    }
  }, [activeTab, auth.isAuthenticated]);
  
  const loadServices = async () => {
    setIsServicesLoading(true);
    try {
      const data = await contentApi.getServices();
      setServices(data);
    } catch (error) {
      console.error("Failed to load services:", error);
      toast.error("Failed to load services");
    } finally {
      setIsServicesLoading(false);
    }
  };
  
  const loadMedia = async () => {
    setIsMediaLoading(true);
    try {
      const data = await contentApi.listMedia();
      setMediaItems(data.items);
    } catch (error) {
      console.error("Failed to load media:", error);
      toast.error("Failed to load media");
    } finally {
      setIsMediaLoading(false);
    }
  };
  
  const loadHeroContents = async () => {
    setIsHeroContentLoading(true);
    try {
      const data = await contentApi.getHeroContents();
      setHeroContents(data);
    } catch (error) {
      console.error("Failed to load hero contents:", error);
      toast.error("Failed to load hero contents");
    } finally {
      setIsHeroContentLoading(false);
    }
  };
  
  const loadTestimonials = async () => {
    setIsTestimonialsLoading(true);
    try {
      const data = await contentApi.getTestimonials();
      setTestimonials(data);
    } catch (error) {
      console.error("Failed to load testimonials:", error);
      toast.error("Failed to load testimonials");
    } finally {
      setIsTestimonialsLoading(false);
    }
  };
  
  const loadCaseStudies = async () => {
    setIsCaseStudiesLoading(true);
    try {
      const data = await contentApi.getCaseStudies();
      setCaseStudies(data);
    } catch (error) {
      console.error("Failed to load case studies:", error);
      toast.error("Failed to load case studies");
    } finally {
      setIsCaseStudiesLoading(false);
    }
  };
  
  const loadTeamMembers = async () => {
    setIsTeamMembersLoading(true);
    try {
      const data = await contentApi.getTeamMembers();
      setTeamMembers(data);
    } catch (error) {
      console.error("Failed to load team members:", error);
      toast.error("Failed to load team members");
    } finally {
      setIsTeamMembersLoading(false);
    }
  };
  
  const loadContactInfo = async () => {
    setIsContactInfoLoading(true);
    try {
      const data = await contentApi.getContactInfo();
      setContactInfo(data);
    } catch (error) {
      console.error("Failed to load contact information:", error);
      toast.error("Failed to load contact information");
      // Create default contact info object if none exists
      setContactInfo({
        id: "contact-info",
        email: "",
        phone: "",
        address: ""
      });
    } finally {
      setIsContactInfoLoading(false);
    }
  };
  
  const loadERPLogos = async () => {
    setIsERPLogosLoading(true);
    try {
      const data = await contentApi.getERPLogos();
      setERPLogos(data);
    } catch (error) {
      console.error("Failed to load ERP logos:", error);
      toast.error("Failed to load ERP logos");
    } finally {
      setIsERPLogosLoading(false);
    }
  };
  
  const handleLogout = () => {
    auth.logout();
    toast.success("Logged out successfully");
    navigate("/Admin");
  };
  
  // Service management handlers
  const handleAddService = () => {
    setCurrentService(undefined);
    setServiceDialogOpen(true);
  };
  
  const handleEditService = (service: Service) => {
    setCurrentService(service);
    setServiceDialogOpen(true);
  };
  
  const handleDeleteServiceClick = (id: string) => {
    setServiceToDelete(id);
    setDeleteDialogOpen(true);
  };
  
  const handleSaveService = async (service: Service) => {
    setIsActionLoading(true);
    try {
      if (service.id && services.some(s => s.id === service.id)) {
        // Update existing service
        await contentApi.updateService(service);
        setServices(prev => prev.map(s => s.id === service.id ? service : s));
        toast.success("Service updated successfully");
      } else {
        // Create new service
        const newService = await contentApi.createService(service);
        setServices(prev => [...prev, newService]);
        toast.success("Service created successfully");
      }
      setServiceDialogOpen(false);
    } catch (error) {
      console.error("Failed to save service:", error);
      toast.error("Failed to save service");
    } finally {
      setIsActionLoading(false);
    }
  };
  
  const handleDeleteService = async () => {
    if (!serviceToDelete) return;
    
    setIsActionLoading(true);
    try {
      await contentApi.deleteService(serviceToDelete);
      setServices(prev => prev.filter(s => s.id !== serviceToDelete));
      toast.success("Service deleted successfully");
      setDeleteDialogOpen(false);
    } catch (error) {
      console.error("Failed to delete service:", error);
      toast.error("Failed to delete service");
    } finally {
      setIsActionLoading(false);
    }
  };
  
  // Media management handlers
  const handleUploadMedia = () => {
    setMediaUploadDialogOpen(true);
  };
  
  const handleDeleteMediaClick = (filename: string) => {
    setMediaToDelete(filename);
    setDeleteMediaDialogOpen(true);
  };
  
  const handleMediaUpload = async (file: File) => {
    setIsActionLoading(true);
    try {
      const response = await contentApi.uploadMedia(file);
      toast.success("Media uploaded successfully");
      // Reload media list
      await loadMedia();
      return response;
    } catch (error) {
      console.error("Failed to upload media:", error);
      toast.error("Failed to upload media");
      throw error;
    } finally {
      setIsActionLoading(false);
    }
  };
  
  const handleDeleteMedia = async () => {
    if (!mediaToDelete) return;
    
    setIsActionLoading(true);
    try {
      await contentApi.deleteMedia(mediaToDelete);
      setMediaItems(prev => prev.filter(item => item.filename !== mediaToDelete));
      toast.success("Media deleted successfully");
      setDeleteMediaDialogOpen(false);
    } catch (error) {
      console.error("Failed to delete media:", error);
      toast.error("Failed to delete media");
    } finally {
      setIsActionLoading(false);
    }
  };
  
  // Hero content management handlers
  const handleAddHeroContent = () => {
    setCurrentHeroContent(undefined);
    setHeroContentDialogOpen(true);
  };
  
  const handleEditHeroContent = (content: HeroContent) => {
    setCurrentHeroContent(content);
    setHeroContentDialogOpen(true);
  };
  
  const handleDeleteHeroContentClick = (id: string) => {
    setHeroContentToDelete(id);
    setDeleteHeroContentDialogOpen(true);
  };
  
  const handleSaveHeroContent = async (content: HeroContent) => {
    setIsActionLoading(true);
    try {
      if (content.id && heroContents.some(h => h.id === content.id)) {
        // Update existing hero content
        await contentApi.updateHeroContent(content);
        setHeroContents(prev => prev.map(h => h.id === content.id ? content : h));
        toast.success("Hero content updated successfully");
      } else {
        // Create new hero content
        const newContent = await contentApi.createHeroContent(content);
        setHeroContents(prev => [...prev, newContent]);
        toast.success("Hero content created successfully");
      }
      setHeroContentDialogOpen(false);
    } catch (error) {
      console.error("Failed to save hero content:", error);
      toast.error("Failed to save hero content");
    } finally {
      setIsActionLoading(false);
    }
  };
  
  const handleDeleteHeroContent = async () => {
    if (!heroContentToDelete) return;
    
    setIsActionLoading(true);
    try {
      await contentApi.deleteHeroContent(heroContentToDelete);
      setHeroContents(prev => prev.filter(h => h.id !== heroContentToDelete));
      toast.success("Hero content deleted successfully");
      setDeleteHeroContentDialogOpen(false);
    } catch (error) {
      console.error("Failed to delete hero content:", error);
      toast.error("Failed to delete hero content");
    } finally {
      setIsActionLoading(false);
    }
  };
  
  // Testimonials management handlers
  const handleAddTestimonial = () => {
    setCurrentTestimonial(undefined);
    setTestimonialDialogOpen(true);
  };
  
  const handleEditTestimonial = (testimonial: Testimonial) => {
    setCurrentTestimonial(testimonial);
    setTestimonialDialogOpen(true);
  };
  
  const handleDeleteTestimonialClick = (id: string) => {
    setTestimonialToDelete(id);
    setDeleteTestimonialDialogOpen(true);
  };
  
  const handleSaveTestimonial = async (testimonial: Testimonial) => {
    setIsActionLoading(true);
    try {
      if (testimonial.id && testimonials.some(t => t.id === testimonial.id)) {
        // Update existing testimonial
        await contentApi.updateTestimonial(testimonial);
        setTestimonials(prev => prev.map(t => t.id === testimonial.id ? testimonial : t));
        toast.success("Testimonial updated successfully");
      } else {
        // Create new testimonial
        const newTestimonial = await contentApi.createTestimonial(testimonial);
        setTestimonials(prev => [...prev, newTestimonial]);
        toast.success("Testimonial created successfully");
      }
      setTestimonialDialogOpen(false);
    } catch (error) {
      console.error("Failed to save testimonial:", error);
      toast.error("Failed to save testimonial");
    } finally {
      setIsActionLoading(false);
    }
  };
  
  const handleDeleteTestimonial = async () => {
    if (!testimonialToDelete) return;
    
    setIsActionLoading(true);
    try {
      await contentApi.deleteTestimonial(testimonialToDelete);
      setTestimonials(prev => prev.filter(t => t.id !== testimonialToDelete));
      toast.success("Testimonial deleted successfully");
      setDeleteTestimonialDialogOpen(false);
    } catch (error) {
      console.error("Failed to delete testimonial:", error);
      toast.error("Failed to delete testimonial");
    } finally {
      setIsActionLoading(false);
    }
  };
  
  // Case studies management handlers
  const handleAddCaseStudy = () => {
    setCurrentCaseStudy(undefined);
    setCaseStudyDialogOpen(true);
  };
  
  const handleEditCaseStudy = (caseStudy: CaseStudy) => {
    setCurrentCaseStudy(caseStudy);
    setCaseStudyDialogOpen(true);
  };
  
  const handleDeleteCaseStudyClick = (id: string) => {
    setCaseStudyToDelete(id);
    setDeleteCaseStudyDialogOpen(true);
  };
  
  const handleSaveCaseStudy = async (caseStudy: CaseStudy) => {
    setIsActionLoading(true);
    try {
      if (caseStudy.id && caseStudies.some(c => c.id === caseStudy.id)) {
        // Update existing case study
        await contentApi.updateCaseStudy(caseStudy);
        setCaseStudies(prev => prev.map(c => c.id === caseStudy.id ? caseStudy : c));
        toast.success("Case study updated successfully");
      } else {
        // Create new case study
        const newCaseStudy = await contentApi.createCaseStudy(caseStudy);
        setCaseStudies(prev => [...prev, newCaseStudy]);
        toast.success("Case study created successfully");
      }
      setCaseStudyDialogOpen(false);
    } catch (error) {
      console.error("Failed to save case study:", error);
      toast.error("Failed to save case study");
    } finally {
      setIsActionLoading(false);
    }
  };
  
  const handleDeleteCaseStudy = async () => {
    if (!caseStudyToDelete) return;
    
    setIsActionLoading(true);
    try {
      await contentApi.deleteCaseStudy(caseStudyToDelete);
      setCaseStudies(prev => prev.filter(c => c.id !== caseStudyToDelete));
      toast.success("Case study deleted successfully");
      setDeleteCaseStudyDialogOpen(false);
    } catch (error) {
      console.error("Failed to delete case study:", error);
      toast.error("Failed to delete case study");
    } finally {
      setIsActionLoading(false);
    }
  };
  
  // Team members management handlers
  const handleAddTeamMember = () => {
    setCurrentTeamMember(undefined);
    setTeamMemberDialogOpen(true);
  };
  
  const handleEditTeamMember = (teamMember: TeamMember) => {
    setCurrentTeamMember(teamMember);
    setTeamMemberDialogOpen(true);
  };
  
  const handleDeleteTeamMemberClick = (id: string) => {
    setTeamMemberToDelete(id);
    setDeleteTeamMemberDialogOpen(true);
  };
  
  const handleSaveTeamMember = async (teamMember: TeamMember) => {
    setIsActionLoading(true);
    try {
      if (teamMember.id && teamMembers.some(t => t.id === teamMember.id)) {
        // Update existing team member
        await contentApi.updateTeamMember(teamMember);
        setTeamMembers(prev => prev.map(t => t.id === teamMember.id ? teamMember : t));
        toast.success("Team member updated successfully");
      } else {
        // Create new team member
        const newTeamMember = await contentApi.createTeamMember(teamMember);
        setTeamMembers(prev => [...prev, newTeamMember]);
        toast.success("Team member created successfully");
      }
      setTeamMemberDialogOpen(false);
    } catch (error) {
      console.error("Failed to save team member:", error);
      toast.error("Failed to save team member");
    } finally {
      setIsActionLoading(false);
    }
  };
  
  const handleDeleteTeamMember = async () => {
    if (!teamMemberToDelete) return;
    
    setIsActionLoading(true);
    try {
      await contentApi.deleteTeamMember(teamMemberToDelete);
      setTeamMembers(prev => prev.filter(t => t.id !== teamMemberToDelete));
      toast.success("Team member deleted successfully");
      setDeleteTeamMemberDialogOpen(false);
    } catch (error) {
      console.error("Failed to delete team member:", error);
      toast.error("Failed to delete team member");
    } finally {
      setIsActionLoading(false);
    }
  };
  
  // Contact info management handlers
  const handleEditContactInfo = () => {
    setContactInfoFormOpen(true);
  };
  
  const handleSaveContactInfo = async (info: ContactInfo) => {
    setIsActionLoading(true);
    try {
      const updatedInfo = await contentApi.updateContactInfo(info);
      setContactInfo(updatedInfo);
      toast.success("Contact information updated successfully");
      setContactInfoFormOpen(false);
    } catch (error) {
      console.error("Failed to update contact information:", error);
      toast.error("Failed to update contact information");
    } finally {
      setIsActionLoading(false);
    }
  };
  
  // ERP logos management handlers
  const handleAddERPLogo = () => {
    setCurrentERPLogo(undefined);
    setERPLogoDialogOpen(true);
  };
  
  const handleEditERPLogo = (erpLogo: ERPLogo) => {
    setCurrentERPLogo(erpLogo);
    setERPLogoDialogOpen(true);
  };
  
  const handleDeleteERPLogoClick = (id: string) => {
    setERPLogoToDelete(id);
    setDeleteERPLogoDialogOpen(true);
  };
  
  const handleSaveERPLogo = async (erpLogo: ERPLogo) => {
    setIsActionLoading(true);
    try {
      if (erpLogo.id && erpLogos.some(e => e.id === erpLogo.id)) {
        // Update existing ERP logo
        await contentApi.updateERPLogo(erpLogo);
        setERPLogos(prev => prev.map(e => e.id === erpLogo.id ? erpLogo : e));
        toast.success("ERP logo updated successfully");
      } else {
        // Create new ERP logo
        const newERPLogo = await contentApi.createERPLogo(erpLogo);
        setERPLogos(prev => [...prev, newERPLogo]);
        toast.success("ERP logo created successfully");
      }
      setERPLogoDialogOpen(false);
    } catch (error) {
      console.error("Failed to save ERP logo:", error);
      toast.error("Failed to save ERP logo");
    } finally {
      setIsActionLoading(false);
    }
  };
  
  const handleDeleteERPLogo = async () => {
    if (!erpLogoToDelete) return;
    
    setIsActionLoading(true);
    try {
      await contentApi.deleteERPLogo(erpLogoToDelete);
      setERPLogos(prev => prev.filter(e => e.id !== erpLogoToDelete));
      toast.success("ERP logo deleted successfully");
      setDeleteERPLogoDialogOpen(false);
    } catch (error) {
      console.error("Failed to delete ERP logo:", error);
      toast.error("Failed to delete ERP logo");
    } finally {
      setIsActionLoading(false);
    }
  };
  
  if (!auth.isAuthenticated) {
    return null; // Prevent rendering if not authenticated
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">SyMatrix360 Content Management</h1>
          <div className="flex space-x-4">
            <Button variant="outline" onClick={() => navigate("/")}>
              Preview Site
            </Button>
            <Button variant="ghost" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="p-4 bg-gray-100">
              <TabsList className="grid grid-cols-4 md:grid-cols-8 gap-2">
                {TABS.map((tab) => (
                  <TabsTrigger 
                    key={tab.id} 
                    value={tab.id}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-400 data-[state=active]:to-blue-500 data-[state=active]:text-white"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <Separator />
            
            <div className="p-6">
              <TabsContent value="services" className="space-y-4">
                <h2 className="text-2xl font-bold">Services Management</h2>
                <p className="text-gray-500">Manage the services displayed on your website.</p>
                
                <ServicesList 
                  services={services}
                  onAdd={handleAddService}
                  onEdit={handleEditService}
                  onDelete={handleDeleteServiceClick}
                  isLoading={isServicesLoading}
                />
              </TabsContent>
              
              <TabsContent value="hero" className="space-y-4">
                <h2 className="text-2xl font-bold">Hero Content Management</h2>
                <p className="text-gray-500">Manage the hero sections for each page of your website.</p>
                <HeroContentList 
                  heroContents={heroContents}
                  onAdd={handleAddHeroContent}
                  onEdit={handleEditHeroContent}
                  onDelete={handleDeleteHeroContentClick}
                  isLoading={isHeroContentLoading}
                />
              </TabsContent>
              
              <TabsContent value="testimonials" className="space-y-4">
                <h2 className="text-2xl font-bold">Testimonials Management</h2>
                <p className="text-gray-500">Manage client testimonials displayed on your website.</p>
                <TestimonialsList 
                  testimonials={testimonials}
                  onAdd={handleAddTestimonial}
                  onEdit={handleEditTestimonial}
                  onDelete={handleDeleteTestimonialClick}
                  isLoading={isTestimonialsLoading}
                />
              </TabsContent>
              
              <TabsContent value="case-studies" className="space-y-4">
                <h2 className="text-2xl font-bold">Case Studies Management</h2>
                <p className="text-gray-500">Manage client success stories and implementation case studies.</p>
                <CaseStudiesList 
                  caseStudies={caseStudies}
                  onAdd={handleAddCaseStudy}
                  onEdit={handleEditCaseStudy}
                  onDelete={handleDeleteCaseStudyClick}
                  isLoading={isCaseStudiesLoading}
                />
              </TabsContent>
              
              <TabsContent value="team" className="space-y-4">
                <h2 className="text-2xl font-bold">Team Members Management</h2>
                <p className="text-gray-500">Manage team members displayed on the About Us page.</p>
                <TeamMembersList 
                  teamMembers={teamMembers}
                  onAdd={handleAddTeamMember}
                  onEdit={handleEditTeamMember}
                  onDelete={handleDeleteTeamMemberClick}
                  isLoading={isTeamMembersLoading}
                />
              </TabsContent>
              
              <TabsContent value="contact" className="space-y-4">
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="text-gray-500">Manage contact information displayed on your website.</p>
                
                {isContactInfoLoading ? (
                  <div className="h-60 flex items-center justify-center">
                    <p>Loading contact information...</p>
                  </div>
                ) : (
                  <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium mb-1">Company Contact Details</h3>
                        <p className="text-gray-500 text-sm">These details will be displayed in the website footer and contact page.</p>
                      </div>
                      <Button 
                        onClick={handleEditContactInfo}
                        className="bg-gradient-to-r from-yellow-400 to-blue-500 hover:from-yellow-500 hover:to-blue-600 text-white"
                      >
                        Edit Contact Info
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 border-t border-gray-100 pt-4">
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-gray-500">Email Address</p>
                        <p className="text-base">{contactInfo?.email || "Not set"}</p>
                      </div>
                      
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-gray-500">Phone Number</p>
                        <p className="text-base">{contactInfo?.phone || "Not set"}</p>
                      </div>
                      
                      <div className="space-y-1 md:col-span-2">
                        <p className="text-sm font-medium text-gray-500">Address</p>
                        <p className="text-base whitespace-pre-wrap">{contactInfo?.address || "Not set"}</p>
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="logos" className="space-y-4">
                <h2 className="text-2xl font-bold">ERP Logos Management</h2>
                <p className="text-gray-500">Manage ERP system logos displayed on your website.</p>
                <ERPLogosList 
                  erpLogos={erpLogos}
                  onAdd={handleAddERPLogo}
                  onEdit={handleEditERPLogo}
                  onDelete={handleDeleteERPLogoClick}
                  isLoading={isERPLogosLoading}
                />
              </TabsContent>
              
              <TabsContent value="media" className="space-y-4">
                <h2 className="text-2xl font-bold">Media Library</h2>
                <p className="text-gray-500">Upload and manage images and other media files.</p>
                <MediaLibrary 
                  mediaItems={mediaItems}
                  onUpload={handleUploadMedia}
                  onDelete={handleDeleteMediaClick}
                  isLoading={isMediaLoading}
                />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} SyMatrix360 Admin Dashboard. All rights reserved.
        </div>
      </footer>
      
      {/* Dialogs */}
      <ServiceDialog 
        open={serviceDialogOpen}
        onClose={() => setServiceDialogOpen(false)}
        onSave={handleSaveService}
        service={currentService}
        isLoading={isActionLoading}
      />
      
      <DeleteConfirmDialog 
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={handleDeleteService}
        title="Delete Service"
        description="Are you sure you want to delete this service? This action cannot be undone."
        isLoading={isActionLoading}
      />
      
      <MediaUploadDialog
        open={mediaUploadDialogOpen}
        onClose={() => setMediaUploadDialogOpen(false)}
        onUpload={handleMediaUpload}
        isLoading={isActionLoading}
      />
      
      <DeleteConfirmDialog 
        open={deleteMediaDialogOpen}
        onClose={() => setDeleteMediaDialogOpen(false)}
        onConfirm={handleDeleteMedia}
        title="Delete Media"
        description="Are you sure you want to delete this media file? This action cannot be undone."
        isLoading={isActionLoading}
      />
      
      <HeroContentDialog 
        open={heroContentDialogOpen}
        onClose={() => setHeroContentDialogOpen(false)}
        onSave={handleSaveHeroContent}
        content={currentHeroContent}
        isLoading={isActionLoading}
      />
      
      <DeleteConfirmDialog 
        open={deleteHeroContentDialogOpen}
        onClose={() => setDeleteHeroContentDialogOpen(false)}
        onConfirm={handleDeleteHeroContent}
        title="Delete Hero Content"
        description="Are you sure you want to delete this hero content? This action cannot be undone."
        isLoading={isActionLoading}
      />
      
      <TestimonialDialog 
        open={testimonialDialogOpen}
        onClose={() => setTestimonialDialogOpen(false)}
        onSave={handleSaveTestimonial}
        testimonial={currentTestimonial}
        isLoading={isActionLoading}
      />
      
      <DeleteConfirmDialog 
        open={deleteTestimonialDialogOpen}
        onClose={() => setDeleteTestimonialDialogOpen(false)}
        onConfirm={handleDeleteTestimonial}
        title="Delete Testimonial"
        description="Are you sure you want to delete this testimonial? This action cannot be undone."
        isLoading={isActionLoading}
      />
      
      <CaseStudyDialog 
        open={caseStudyDialogOpen}
        onClose={() => setCaseStudyDialogOpen(false)}
        onSave={handleSaveCaseStudy}
        caseStudy={currentCaseStudy}
        isLoading={isActionLoading}
      />
      
      <DeleteConfirmDialog 
        open={deleteCaseStudyDialogOpen}
        onClose={() => setDeleteCaseStudyDialogOpen(false)}
        onConfirm={handleDeleteCaseStudy}
        title="Delete Case Study"
        description="Are you sure you want to delete this case study? This action cannot be undone."
        isLoading={isActionLoading}
      />
      
      <TeamMemberDialog 
        open={teamMemberDialogOpen}
        onClose={() => setTeamMemberDialogOpen(false)}
        onSave={handleSaveTeamMember}
        teamMember={currentTeamMember}
        isLoading={isActionLoading}
      />
      
      <DeleteConfirmDialog 
        open={deleteTeamMemberDialogOpen}
        onClose={() => setDeleteTeamMemberDialogOpen(false)}
        onConfirm={handleDeleteTeamMember}
        title="Delete Team Member"
        description="Are you sure you want to delete this team member? This action cannot be undone."
        isLoading={isActionLoading}
      />
      
      <ContactInfoForm 
        open={contactInfoFormOpen}
        onClose={() => setContactInfoFormOpen(false)}
        onSave={handleSaveContactInfo}
        contactInfo={contactInfo}
        isLoading={isActionLoading}
      />
      
      <ERPLogoDialog 
        open={erpLogoDialogOpen}
        onClose={() => setERPLogoDialogOpen(false)}
        onSave={handleSaveERPLogo}
        erpLogo={currentERPLogo}
        isLoading={isActionLoading}
      />
      
      <DeleteConfirmDialog 
        open={deleteERPLogoDialogOpen}
        onClose={() => setDeleteERPLogoDialogOpen(false)}
        onConfirm={handleDeleteERPLogo}
        title="Delete ERP Logo"
        description="Are you sure you want to delete this ERP logo? This action cannot be undone."
        isLoading={isActionLoading}
      />
    </div>
  );
};

export default AdminDashboard;