import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogDescription, DialogHeader, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HeroContent, MediaResponse } from "utils/types";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import contentApi from "utils/contentApi";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (content: HeroContent) => void;
  content?: HeroContent;
  isLoading: boolean;
}

const defaultContent: HeroContent = {
  id: "",
  page: "home",
  title: "",
  subtitle: "",
  description: "",
  primaryButtonText: "Learn More",
  primaryButtonLink: "/",
  secondaryButtonText: "",
  secondaryButtonLink: "",
  backgroundImage: "",
};

const PAGES = [
  { value: "home", label: "Home Page" },
  { value: "sapbydesign", label: "SAP ByDesign Page" },
  { value: "saphana", label: "SAP S/4 HANA Page" },
  { value: "acumatica", label: "Acumatica Page" },
  { value: "about", label: "About Us Page" },
];

const HeroContentDialog: React.FC<Props> = ({ open, onClose, onSave, content, isLoading }) => {
  const [formData, setFormData] = useState<HeroContent>(defaultContent);
  const [mediaItems, setMediaItems] = useState<MediaResponse[]>([]);
  const [isLoadingMedia, setIsLoadingMedia] = useState(false);
  const [showMediaSelector, setShowMediaSelector] = useState(false);
  const isEditMode = Boolean(content?.id);
  
  useEffect(() => {
    if (content) {
      setFormData(content);
    } else {
      setFormData({ ...defaultContent, id: uuidv4() });
    }
  }, [content, open]);
  
  // Load media items for background image selection
  useEffect(() => {
    if (open && showMediaSelector) {
      loadMedia();
    }
  }, [open, showMediaSelector]);
  
  const loadMedia = async () => {
    setIsLoadingMedia(true);
    try {
      const response = await contentApi.listMedia();
      setMediaItems(response.items.filter(item => item.contentType.startsWith("image/")));
    } catch (error) {
      console.error("Failed to load media:", error);
      toast.error("Failed to load media for background selection");
    } finally {
      setIsLoadingMedia(false);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title.trim()) {
      toast.error("Please enter a title");
      return;
    }
    
    if (!formData.description.trim()) {
      toast.error("Please enter a description");
      return;
    }
    
    onSave(formData);
  };
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditMode ? "Edit Hero Content" : "Add New Hero Content"}</DialogTitle>
          <DialogDescription>
            {isEditMode 
              ? "Update the hero content details below." 
              : "Fill in the hero content details below to create new hero section content."}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="page">Page</Label>
            <Select 
              value={formData.page} 
              onValueChange={(value) => handleSelectChange("page", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a page" />
              </SelectTrigger>
              <SelectContent>
                {PAGES.map((page) => (
                  <SelectItem key={page.value} value={page.value}>
                    {page.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter hero title"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subtitle">Subtitle</Label>
            <Input
              id="subtitle"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
              placeholder="Enter hero subtitle"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter hero description"
              rows={3}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="primaryButtonText">Primary Button Text</Label>
              <Input
                id="primaryButtonText"
                name="primaryButtonText"
                value={formData.primaryButtonText}
                onChange={handleChange}
                placeholder="Enter button text"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="primaryButtonLink">Primary Button Link</Label>
              <Input
                id="primaryButtonLink"
                name="primaryButtonLink"
                value={formData.primaryButtonLink}
                onChange={handleChange}
                placeholder="Enter button link"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="secondaryButtonText">Secondary Button Text (Optional)</Label>
              <Input
                id="secondaryButtonText"
                name="secondaryButtonText"
                value={formData.secondaryButtonText || ""}
                onChange={handleChange}
                placeholder="Enter secondary button text"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="secondaryButtonLink">Secondary Button Link (Optional)</Label>
              <Input
                id="secondaryButtonLink"
                name="secondaryButtonLink"
                value={formData.secondaryButtonLink || ""}
                onChange={handleChange}
                placeholder="Enter secondary button link"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="backgroundImage">Background Image (Optional)</Label>
              <Button 
                type="button" 
                variant="outline" 
                size="sm"
                onClick={() => setShowMediaSelector(!showMediaSelector)}
              >
                {showMediaSelector ? "Hide Image Selector" : "Select Image"}
              </Button>
            </div>
            
            {formData.backgroundImage && (
              <div className="mt-2 p-2 border rounded">
                <img 
                  src={formData.backgroundImage} 
                  alt="Selected background" 
                  className="h-40 object-cover rounded"
                />
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="sm"
                  className="mt-2 text-red-500"
                  onClick={() => setFormData(prev => ({ ...prev, backgroundImage: "" }))}
                >
                  Remove Image
                </Button>
              </div>
            )}
            
            {showMediaSelector && (
              <div className="mt-2 border rounded p-3 max-h-40 overflow-y-auto">
                {isLoadingMedia ? (
                  <p className="text-center py-4">Loading images...</p>
                ) : mediaItems.length === 0 ? (
                  <p className="text-center py-4">No images available. Upload images in the Media tab.</p>
                ) : (
                  <div className="grid grid-cols-4 gap-2">
                    {mediaItems.map((item) => (
                      <div 
                        key={item.id} 
                        className={`cursor-pointer border rounded overflow-hidden ${formData.backgroundImage === item.url ? 'ring-2 ring-blue-500' : ''}`}
                        onClick={() => setFormData(prev => ({ ...prev, backgroundImage: item.url }))}
                      >
                        <img 
                          src={item.url} 
                          alt={item.filename}
                          className="w-full h-16 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          
          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="bg-gradient-to-r from-yellow-400 to-blue-500 hover:from-yellow-500 hover:to-blue-600 text-white"
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : isEditMode ? "Update Content" : "Add Content"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default HeroContentDialog;