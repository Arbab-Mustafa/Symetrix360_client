import React from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon, TrashIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { Card, CardContent } from "@/components/ui/card";
import { ERPLogo } from "utils/types";

interface Props {
  erpLogos: ERPLogo[];
  onEdit: (erpLogo: ERPLogo) => void;
  onDelete: (id: string) => void;
  onAdd: () => void;
  isLoading: boolean;
}

const ERPLogosList: React.FC<Props> = ({ erpLogos, onEdit, onDelete, onAdd, isLoading }) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">ERP System Logos</h3>
        <Button 
          onClick={onAdd}
          className="bg-gradient-to-r from-yellow-400 to-blue-500 hover:from-yellow-500 hover:to-blue-600 text-white"
        >
          <PlusIcon className="mr-2 h-4 w-4" />
          Add ERP Logo
        </Button>
      </div>
      
      {isLoading ? (
        <div className="h-40 flex items-center justify-center">
          <p>Loading ERP logos...</p>
        </div>
      ) : erpLogos.length === 0 ? (
        <div className="h-40 flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <div className="text-center">
            <p className="text-gray-500">No ERP logos found</p>
            <Button 
              variant="link" 
              onClick={onAdd}
              className="mt-2 text-blue-500"
            >
              Add your first ERP logo
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {erpLogos.map((erpLogo) => (
            <Card key={erpLogo.id} className="overflow-hidden h-full flex flex-col">
              <div className="relative h-36 overflow-hidden bg-gray-50 flex items-center justify-center p-4">
                {erpLogo.logo ? (
                  <img 
                    src={erpLogo.logo} 
                    alt={erpLogo.name} 
                    className="max-h-full max-w-full object-contain transition-transform hover:scale-105"
                  />
                ) : (
                  <div className="bg-gradient-to-r from-gray-200 to-gray-300 w-full h-full flex items-center justify-center">
                    <p className="text-gray-500 font-medium">No Logo</p>
                  </div>
                )}
              </div>
              
              <CardContent className="p-4 flex-1 flex flex-col">
                <div>
                  <h4 className="font-semibold text-lg mb-1">{erpLogo.name}</h4>
                </div>
                
                <div className="mt-auto flex justify-end gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => onEdit(erpLogo)}
                  >
                    <Pencil1Icon className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-red-500 hover:text-red-700"
                    onClick={() => onDelete(erpLogo.id)}
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

export default ERPLogosList;