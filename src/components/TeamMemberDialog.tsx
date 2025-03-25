import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogDescription, DialogHeader, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TeamMember, MediaResponse } from "utils/types";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import contentApi from "utils/contentApi";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (teamMember: TeamMember) => void;
  teamMember?: TeamMember;
  isLoading: boolean;
}

const defaultTeamMember: TeamMember = {
  id: "",
  name: "",
  position: "",
  bio: "",
  photo: "",
};

const TeamMemberDialog: React.FC<Props> = ({ open, onClose, onSave, teamMember, isLoading }) => {
  const [formData, setFormData] = useState<TeamMember>(defaultTeamMember);
  const [mediaItems, setMediaItems] = useState<MediaResponse[]>([]);
  const [isLoadingMedia, setIsLoadingMedia] = useState(false);
  const [showMediaSelector, setShowMediaSelector] = useState(false);
  const isEditMode = Boolean(teamMember?.id);
  
  useEffect(() => {
    if (teamMember) {
      setFormData(teamMember);
    } else {
      setFormData({ ...defaultTeamMember, id: uuidv4() });
    }
  }, [teamMember, open]);
  
  // Load media items for photo selection
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim()) {
      toast.error("Please enter a name");
      return;
    }
    
    if (!formData.position.trim()) {
      toast.error("Please enter a position");
      return;
    }
    
    if (!formData.bio.trim()) {
      toast.error("Please enter a bio");
      return;
    }
    
    onSave(formData);
  };
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>{isEditMode ? "Edit Team Member" : "Add New Team Member"}</DialogTitle>
          <DialogDescription>
            {isEditMode 
              ? "Update the team member details below." 
              : "Fill in the details below to add a new team member."}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter team member name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="position">Position</Label>
            <Input
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="Enter position/title"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Enter a brief bio"
              rows={4}
              required
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="photo">Photo</Label>
              <Button 
                type="button" 
                variant="outline" 
                size="sm"
                onClick={() => setShowMediaSelector(!showMediaSelector)}
              >
                {showMediaSelector ? "Hide Photo Selector" : "Select Photo"}
              </Button>
            </div>
            
            {formData.photo && (
              <div className="mt-2 p-2 border rounded">
                <img 
                  src={formData.photo} 
                  alt="Selected photo" 
                  className="h-40 object-cover rounded w-full"
                />
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="sm"
                  className="mt-2 text-red-500"
                  onClick={() => setFormData(prev => ({ ...prev, photo: "" }))}
                >
                  Remove Photo
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
                        className={`cursor-pointer border rounded overflow-hidden ${formData.photo === item.url ? 'ring-2 ring-blue-500' : ''}`}
                        onClick={() => setFormData(prev => ({ ...prev, photo: item.url }))}
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
              {isLoading ? "Saving..." : isEditMode ? "Update Team Member" : "Add Team Member"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TeamMemberDialog;