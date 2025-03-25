import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogDescription, DialogHeader, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CaseStudy, MediaResponse } from "utils/types";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import contentApi from "utils/contentApi";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (caseStudy: CaseStudy) => void;
  caseStudy?: CaseStudy;
  isLoading: boolean;
}

const defaultCaseStudy: CaseStudy = {
  id: "",
  title: "",
  clientName: "",
  erpSystem: "SAP ByDesign",
  coverImage: "",
  summary: "",
  challenge: "",
  solution: "",
  results: "",
  tags: [],
};

const ERP_SYSTEMS = [
  { value: "SAP ByDesign", label: "SAP ByDesign" },
  { value: "SAP S/4 HANA", label: "SAP S/4 HANA" },
  { value: "Acumatica", label: "Acumatica" },
];

const CaseStudyDialog: React.FC<Props> = ({ open, onClose, onSave, caseStudy, isLoading }) => {
  const [formData, setFormData] = useState<CaseStudy>(defaultCaseStudy);
  const [mediaItems, setMediaItems] = useState<MediaResponse[]>([]);
  const [isLoadingMedia, setIsLoadingMedia] = useState(false);
  const [showMediaSelector, setShowMediaSelector] = useState(false);
  const [tagInput, setTagInput] = useState("");
  const isEditMode = Boolean(caseStudy?.id);
  
  useEffect(() => {
    if (caseStudy) {
      setFormData(caseStudy);
    } else {
      setFormData({ ...defaultCaseStudy, id: uuidv4() });
    }
  }, [caseStudy, open]);
  
  // Load media items for cover image selection
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
      toast.error("Failed to load media for image selection");
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
  
  const handleAddTag = () => {
    if (!tagInput.trim()) return;
    
    if (!formData.tags) {
      setFormData(prev => ({ ...prev, tags: [tagInput.trim()] }));
    } else if (!formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({ ...prev, tags: [...prev.tags!, tagInput.trim()] }));
    }
    
    setTagInput("");
  };
  
  const handleRemoveTag = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags?.filter(t => t !== tag) || [],
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title.trim()) {
      toast.error("Please enter a title");
      return;
    }
    
    if (!formData.clientName.trim()) {
      toast.error("Please enter a client name");
      return;
    }
    
    if (!formData.summary.trim()) {
      toast.error("Please enter a summary");
      return;
    }
    
    onSave(formData);
  };
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditMode ? "Edit Case Study" : "Add New Case Study"}</DialogTitle>
          <DialogDescription>
            {isEditMode 
              ? "Update the case study details below." 
              : "Fill in the details below to create a new client success story."}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="title">Case Study Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter case study title"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="clientName">Client Name</Label>
            <Input
              id="clientName"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              placeholder="Enter client name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="erpSystem">ERP System</Label>
            <Select 
              value={formData.erpSystem} 
              onValueChange={(value) => handleSelectChange("erpSystem", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select ERP system" />
              </SelectTrigger>
              <SelectContent>
                {ERP_SYSTEMS.map((erp) => (
                  <SelectItem key={erp.value} value={erp.value}>
                    {erp.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="summary">Summary</Label>
            <Textarea
              id="summary"
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              placeholder="Brief overview of the case study"
              rows={2}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="challenge">Challenge</Label>
            <Textarea
              id="challenge"
              name="challenge"
              value={formData.challenge}
              onChange={handleChange}
              placeholder="Describe the challenges faced by the client"
              rows={3}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="solution">Solution</Label>
            <Textarea
              id="solution"
              name="solution"
              value={formData.solution}
              onChange={handleChange}
              placeholder="Describe the solution implemented"
              rows={3}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="results">Results</Label>
            <Textarea
              id="results"
              name="results"
              value={formData.results}
              onChange={handleChange}
              placeholder="Describe the outcomes and benefits"
              rows={3}
            />
          </div>
          
          <div className="space-y-2">
            <Label>Tags</Label>
            <div className="flex">
              <Input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                placeholder="Add tags (e.g., Financial, Manufacturing)"
                className="flex-1"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddTag();
                  }
                }}
              />
              <Button 
                type="button" 
                onClick={handleAddTag}
                className="ml-2"
              >
                Add
              </Button>
            </div>
            
            {formData.tags && formData.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {formData.tags.map((tag, index) => (
                  <div 
                    key={index} 
                    className="flex items-center bg-gray-100 px-2 py-1 rounded text-sm"
                  >
                    {tag}
                    <button
                      type="button"
                      className="ml-1 text-red-500 hover:text-red-700"
                      onClick={() => handleRemoveTag(tag)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="coverImage">Cover Image</Label>
              <Button 
                type="button" 
                variant="outline" 
                size="sm"
                onClick={() => setShowMediaSelector(!showMediaSelector)}
              >
                {showMediaSelector ? "Hide Image Selector" : "Select Image"}
              </Button>
            </div>
            
            {formData.coverImage && (
              <div className="mt-2 p-2 border rounded">
                <img 
                  src={formData.coverImage} 
                  alt="Selected cover" 
                  className="h-40 object-cover rounded w-full"
                />
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="sm"
                  className="mt-2 text-red-500"
                  onClick={() => setFormData(prev => ({ ...prev, coverImage: "" }))}
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
                        className={`cursor-pointer border rounded overflow-hidden ${formData.coverImage === item.url ? 'ring-2 ring-blue-500' : ''}`}
                        onClick={() => setFormData(prev => ({ ...prev, coverImage: item.url }))}
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
              {isLoading ? "Saving..." : isEditMode ? "Update Case Study" : "Add Case Study"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudyDialog;