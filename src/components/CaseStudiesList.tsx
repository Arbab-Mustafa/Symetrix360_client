import React from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon, TrashIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CaseStudy } from "utils/types";

interface Props {
  caseStudies: CaseStudy[];
  onEdit: (caseStudy: CaseStudy) => void;
  onDelete: (id: string) => void;
  onAdd: () => void;
  isLoading: boolean;
}

const CaseStudiesList: React.FC<Props> = ({ caseStudies, onEdit, onDelete, onAdd, isLoading }) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Case Studies</h3>
        <Button 
          onClick={onAdd}
          className="bg-gradient-to-r from-yellow-400 to-blue-500 hover:from-yellow-500 hover:to-blue-600 text-white"
        >
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Case Study
        </Button>
      </div>
      
      {isLoading ? (
        <div className="h-40 flex items-center justify-center">
          <p>Loading case studies...</p>
        </div>
      ) : caseStudies.length === 0 ? (
        <div className="h-40 flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <div className="text-center">
            <p className="text-gray-500">No case studies found</p>
            <Button 
              variant="link" 
              onClick={onAdd}
              className="mt-2 text-blue-500"
            >
              Add your first case study
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudies.map((caseStudy) => (
            <Card key={caseStudy.id} className="overflow-hidden h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                {caseStudy.coverImage ? (
                  <img 
                    src={caseStudy.coverImage} 
                    alt={caseStudy.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                ) : (
                  <div className="bg-gradient-to-r from-gray-200 to-gray-300 w-full h-full flex items-center justify-center">
                    <p className="text-gray-500 font-medium">No Image</p>
                  </div>
                )}
                
                {caseStudy.erpSystem && (
                  <Badge 
                    className="absolute top-2 right-2 bg-white text-blue-600"
                  >
                    {caseStudy.erpSystem}
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6 flex-1 flex flex-col">
                <div>
                  <h4 className="font-semibold text-lg mb-1 line-clamp-2">{caseStudy.title}</h4>
                  <p className="text-sm text-gray-500 mb-3">{caseStudy.clientName}</p>
                  <p className="text-gray-700 line-clamp-3 mb-4">{caseStudy.summary}</p>
                </div>
                
                <div className="mt-auto">
                  {caseStudy.tags && caseStudy.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {caseStudy.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => onEdit(caseStudy)}
                    >
                      <Pencil1Icon className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-red-500 hover:text-red-700"
                      onClick={() => onDelete(caseStudy.id)}
                    >
                      <TrashIcon className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default CaseStudiesList;