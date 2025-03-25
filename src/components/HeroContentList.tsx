import React from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon, TrashIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { HeroContent } from "utils/types";

interface Props {
  heroContents: HeroContent[];
  onEdit: (content: HeroContent) => void;
  onDelete: (id: string) => void;
  onAdd: () => void;
  isLoading: boolean;
}

const HeroContentList: React.FC<Props> = ({ heroContents, onEdit, onDelete, onAdd, isLoading }) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Hero Content By Page</h3>
        <Button 
          onClick={onAdd}
          className="bg-gradient-to-r from-yellow-400 to-blue-500 hover:from-yellow-500 hover:to-blue-600 text-white"
        >
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Hero Content
        </Button>
      </div>
      
      {isLoading ? (
        <div className="h-40 flex items-center justify-center">
          <p>Loading hero content...</p>
        </div>
      ) : heroContents.length === 0 ? (
        <div className="h-40 flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <div className="text-center">
            <p className="text-gray-500">No hero content found</p>
            <Button 
              variant="link" 
              onClick={onAdd}
              className="mt-2 text-blue-500"
            >
              Add your first hero content
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {heroContents.map((content) => (
            <div 
              key={content.id} 
              className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-lg">{content.title}</h4>
                    <p className="text-sm text-blue-500">Page: {content.page}</p>
                  </div>
                  {content.backgroundImage && (
                    <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden">
                      <img 
                        src={content.backgroundImage} 
                        alt={`${content.page} background`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-2">{content.subtitle}</p>
                <p className="text-gray-500 text-sm line-clamp-2">{content.description}</p>
                
                <div className="mt-3 flex flex-wrap gap-2">
                  {content.primaryButtonText && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Button: {content.primaryButtonText}
                    </span>
                  )}
                  {content.secondaryButtonText && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Button: {content.secondaryButtonText}
                    </span>
                  )}
                </div>
              </div>
              <div className="border-t border-gray-200 px-4 py-3 bg-gray-50 flex justify-end space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onEdit(content)}
                >
                  <Pencil1Icon className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-red-500 hover:text-red-700"
                  onClick={() => onDelete(content.id)}
                >
                  <TrashIcon className="h-4 w-4 mr-1" />
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroContentList;