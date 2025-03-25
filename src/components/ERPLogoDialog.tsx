import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogDescription, DialogHeader, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ERPLogo, MediaResponse } from "utils/types";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import contentApi from "utils/contentApi";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (erpLogo: ERPLogo) => void;
  erpLogo?: ERPLogo;
  isLoading: boolean;
}

const defaultERPLogo: ERPLogo = {
  id: "",
  name: "",
  logo: "",
};

const ERPLogoDialog: React.FC<Props> = ({ open, onClose, onSave, erpLogo, isLoading }) => {
  const [formData, setFormData] = useState<ERPLogo>(defaultERPLogo);
  const [mediaItems, setMediaItems] = useState<MediaResponse[]>([]);
  const [isLoadingMedia, setIsLoadingMedia] = useState(false);
  const [showMediaSelector, setShowMediaSelector] = useState(false);
  const isEditMode = Boolean(erpLogo?.id);
  
  useEffect(() => {
    if (erpLogo) {
      setFormData(erpLogo);
    } else {
      setFormData({ ...defaultERPLogo, id: uuidv4() });
    }
  }, [erpLogo, open]);
  
  // Load media items for logo selection
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
      toast.error("Failed to load media for logo selection");
    } finally {
      setIsLoadingMedia(false);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim()) {
      toast.error("Please enter a name for the ERP system");
      return;
    }
    
    if (!formData.logo) {
      toast.error("Please select a logo image");
      return;
    }
    
    onSave(formData);
  };
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{isEditMode ? "Edit ERP Logo" : "Add New ERP Logo"}</DialogTitle>
          <DialogDescription>
            {isEditMode 
              ? "Update the ERP system logo details below." 
              : "Add a new ERP system logo to be displayed on your website."}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">ERP System Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter ERP system name (e.g., SAP ByDesign)"
              required
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="logo">Logo Image</Label>
              <Button 
                type="button" 
                variant="outline" 
                size="sm"
                onClick={() => setShowMediaSelector(!showMediaSelector)}
              >
                {showMediaSelector ? "Hide Image Selector" : "Select Logo Image"}
              </Button>
            </div>
            
            {formData.logo && (
              <div className="mt-2 p-4 border rounded bg-gray-50 flex justify-center">
                <div className="h-28 flex items-center">
                  <img 
                    src={formData.logo} 
                    alt="Selected logo" 
                    className="max-h-full object-contain"
                  />
                </div>
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
                        className={`cursor-pointer border rounded overflow-hidden ${formData.logo === item.url ? 'ring-2 ring-blue-500' : ''}`}
                        onClick={() => setFormData(prev => ({ ...prev, logo: item.url }))}
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
              {isLoading ? "Saving..." : isEditMode ? "Update ERP Logo" : "Add ERP Logo"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ERPLogoDialog;