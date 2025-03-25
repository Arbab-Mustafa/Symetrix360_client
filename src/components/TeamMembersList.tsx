import React from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon, TrashIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TeamMember } from "utils/types";

interface Props {
  teamMembers: TeamMember[];
  onEdit: (teamMember: TeamMember) => void;
  onDelete: (id: string) => void;
  onAdd: () => void;
  isLoading: boolean;
}

const TeamMembersList: React.FC<Props> = ({ teamMembers, onEdit, onDelete, onAdd, isLoading }) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Team Members</h3>
        <Button 
          onClick={onAdd}
          className="bg-gradient-to-r from-yellow-400 to-blue-500 hover:from-yellow-500 hover:to-blue-600 text-white"
        >
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Team Member
        </Button>
      </div>
      
      {isLoading ? (
        <div className="h-40 flex items-center justify-center">
          <p>Loading team members...</p>
        </div>
      ) : teamMembers.length === 0 ? (
        <div className="h-40 flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <div className="text-center">
            <p className="text-gray-500">No team members found</p>
            <Button 
              variant="link" 
              onClick={onAdd}
              className="mt-2 text-blue-500"
            >
              Add your first team member
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {teamMembers.map((teamMember) => (
            <Card key={teamMember.id} className="overflow-hidden h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                {teamMember.photo ? (
                  <img 
                    src={teamMember.photo} 
                    alt={teamMember.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                ) : (
                  <div className="bg-gradient-to-r from-gray-200 to-gray-300 w-full h-full flex items-center justify-center">
                    <p className="text-gray-500 font-medium">No Photo</p>
                  </div>
                )}
              </div>
              
              <CardContent className="p-4 flex-1 flex flex-col">
                <div>
                  <h4 className="font-semibold text-lg mb-1">{teamMember.name}</h4>
                  <Badge className="mb-3 bg-blue-100 text-blue-800 hover:bg-blue-200">
                    {teamMember.position}
                  </Badge>
                  <p className="text-gray-700 line-clamp-3 mb-4">{teamMember.bio}</p>
                </div>
                
                <div className="mt-auto flex justify-end gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => onEdit(teamMember)}
                  >
                    <Pencil1Icon className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-red-500 hover:text-red-700"
                    onClick={() => onDelete(teamMember.id)}
                  >
                    <TrashIcon className="h-4 w-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamMembersList;