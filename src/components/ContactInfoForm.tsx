import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogDescription, DialogHeader, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ContactInfo } from "utils/types";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (contactInfo: ContactInfo) => void;
  contactInfo: ContactInfo | null;
  isLoading: boolean;
}

const defaultContactInfo: ContactInfo = {
  id: "contact-info", // We'll use a fixed ID for contact info
  email: "",
  phone: "",
  address: "",
};

const ContactInfoForm: React.FC<Props> = ({ open, onClose, onSave, contactInfo, isLoading }) => {
  const [formData, setFormData] = useState<ContactInfo>(defaultContactInfo);
  
  useEffect(() => {
    if (contactInfo) {
      setFormData(contactInfo);
    } else {
      setFormData(defaultContactInfo);
    }
  }, [contactInfo, open]);
  
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
    if (!formData.email.trim()) {
      alert("Please enter an email address");
      return;
    }
    
    if (!formData.phone.trim()) {
      alert("Please enter a phone number");
      return;
    }
    
    onSave(formData);
  };
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Contact Information</DialogTitle>
          <DialogDescription>
            Update your company's contact information that will be displayed throughout the website.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter company email address"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter company phone number"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address">Address (Optional)</Label>
            <Textarea
              id="address"
              name="address"
              value={formData.address || ""}
              onChange={handleChange}
              placeholder="Enter company address"
              rows={3}
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
              {isLoading ? "Saving..." : "Update Contact Information"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactInfoForm;