import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogDescription, DialogHeader, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Service } from "utils/types";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (service: Service) => void;
  service?: Service;
  isLoading: boolean;
}

const defaultService: Service = {
  id: "",
  title: "",
  description: "",
  icon: "⚙️", // Default icon
};

const ServiceDialog: React.FC<Props> = ({ open, onClose, onSave, service, isLoading }) => {
  const [formData, setFormData] = useState<Service>(defaultService);
  const isEditMode = Boolean(service?.id);
  
  useEffect(() => {
    if (service) {
      setFormData(service);
    } else {
      setFormData({ ...defaultService, id: uuidv4() });
    }
  }, [service, open]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title.trim()) {
      toast.error("Please enter a service title");
      return;
    }
    
    if (!formData.description.trim()) {
      toast.error("Please enter a service description");
      return;
    }
    
    onSave(formData);
  };

  // Common icon options
  const iconOptions = ["⚙️", "🔧", "📊", "🔐", "🔄", "📈", "📝", "🤝"];
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{isEditMode ? "Edit Service" : "Add New Service"}</DialogTitle>
          <DialogDescription>
            {isEditMode 
              ? "Update the service details below." 
              : "Fill in the service details below to create a new service."}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="title">Service Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter service title"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="icon">Icon</Label>
            <div className="flex flex-wrap gap-2">
              {iconOptions.map((icon) => (
                <Button
                  key={icon}
                  type="button"
                  variant={formData.icon === icon ? "default" : "outline"}
                  className="w-10 h-10 p-0"
                  onClick={() => setFormData((prev) => ({ ...prev, icon }))}
                >
                  {icon}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter service description"
              rows={4}
              required
            />
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
              {isLoading ? "Saving..." : isEditMode ? "Update Service" : "Add Service"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDialog;