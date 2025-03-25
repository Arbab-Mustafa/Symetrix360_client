import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogDescription, DialogHeader, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Testimonial, MediaResponse } from "utils/types";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import contentApi from "utils/contentApi";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (testimonial: Testimonial) => void;
  testimonial?: Testimonial;
  isLoading: boolean;
}

const defaultTestimonial: Testimonial = {
  id: "",
  clientName: "",
  clientCompany: "",
  clientImage: "",
  quote: "",
  rating: 5,
};

const TestimonialDialog: React.FC<Props> = ({ open, onClose, onSave, testimonial, isLoading }) => {
  const [formData, setFormData] = useState<Testimonial>(defaultTestimonial);
  const [mediaItems, setMediaItems] = useState<MediaResponse[]>([]);
  const [isLoadingMedia, setIsLoadingMedia] = useState(false);
  const [showMediaSelector, setShowMediaSelector] = useState(false);
  const isEditMode = Boolean(testimonial?.id);
  
  useEffect(() => {
    if (testimonial) {
      setFormData(testimonial);
    } else {
      setFormData({ ...defaultTestimonial, id: uuidv4() });
    }
  }, [testimonial, open]);
  
  // Load media items for client image selection
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
  
  const handleRatingChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      rating: parseInt(value),
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.clientName.trim()) {
      toast.error("Please enter the client name");
      return;
    }
    
    if (!formData.quote.trim()) {
      toast.error("Please enter the testimonial quote");
      return;
    }
    
    onSave(formData);
  };
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{isEditMode ? "Edit Testimonial" : "Add New Testimonial"}</DialogTitle>
          <DialogDescription>
            {isEditMode 
              ? "Update the testimonial details below." 
              : "Fill in the testimonial details below to create a new client testimonial."}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
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
            <Label htmlFor="clientCompany">Company / Position</Label>
            <Input
              id="clientCompany"
              name="clientCompany"
              value={formData.clientCompany}
              onChange={handleChange}
              placeholder="Enter client company or position"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="quote">Testimonial Quote</Label>
            <Textarea
              id="quote"
              name="quote"
              value={formData.quote}
              onChange={handleChange}
              placeholder="Enter client testimonial quote"
              rows={4}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label>Rating</Label>
            <RadioGroup
              value={formData.rating.toString()}
              onValueChange={handleRatingChange}
              className="flex space-x-2"
            >
              {[1, 2, 3, 4, 5].map((rating) => (
                <div key={rating} className="flex items-center space-x-1">
                  <RadioGroupItem value={rating.toString()} id={`rating-${rating}`} />
                  <Label htmlFor={`rating-${rating}`} className="cursor-pointer">{rating}</Label>
                </div>
              ))}
            </RadioGroup>
            <div className="flex mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg 
                  key={star}
                  className={`h-5 w-5 ${star <= formData.rating ? 'text-yellow-500 fill-current' : 'text-gray-300 fill-current'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="clientImage">Client Image (Optional)</Label>
              <Button 
                type="button" 
                variant="outline" 
                size="sm"
                onClick={() => setShowMediaSelector(!showMediaSelector)}
              >
                {showMediaSelector ? "Hide Image Selector" : "Select Image"}
              </Button>
            </div>
            
            {formData.clientImage && (
              <div className="mt-2 p-2 border rounded flex items-center space-x-3">
                <img 
                  src={formData.clientImage} 
                  alt="Selected client" 
                  className="h-16 w-16 rounded-full object-cover"
                />
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="sm"
                  className="text-red-500"
                  onClick={() => setFormData(prev => ({ ...prev, clientImage: "" }))}
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
                        className={`cursor-pointer border rounded-full overflow-hidden h-16 w-16 ${formData.clientImage === item.url ? 'ring-2 ring-blue-500' : ''}`}
                        onClick={() => setFormData(prev => ({ ...prev, clientImage: item.url }))}
                      >
                        <img 
                          src={item.url} 
                          alt={item.filename}
                          className="w-full h-full object-cover"
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
              {isLoading ? "Saving..." : isEditMode ? "Update Testimonial" : "Add Testimonial"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TestimonialDialog;