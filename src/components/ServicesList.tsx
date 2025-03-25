import React from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon, TrashIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { Service } from "utils/types";

interface Props {
  services: Service[];
  onEdit: (service: Service) => void;
  onDelete: (id: string) => void;
  onAdd: () => void;
  isLoading: boolean;
}

const ServicesList: React.FC<Props> = ({ services, onEdit, onDelete, onAdd, isLoading }) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Services List</h3>
        <Button 
          onClick={onAdd}
          className="bg-gradient-to-r from-yellow-400 to-blue-500 hover:from-yellow-500 hover:to-blue-600 text-white"
        >
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Service
        </Button>
      </div>
      
      {isLoading ? (
        <div className="h-40 flex items-center justify-center">
          <p>Loading services...</p>
        </div>
      ) : services.length === 0 ? (
        <div className="h-40 flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <div className="text-center">
            <p className="text-gray-500">No services found</p>
            <Button 
              variant="link" 
              onClick={onAdd}
              className="mt-2 text-blue-500"
            >
              Add your first service
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-4">
                <div className="mb-3 text-blue-500">
                  {/* This would ideally be the actual icon component */}
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-lg mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm line-clamp-3">{service.description}</p>
              </div>
              <div className="border-t border-gray-200 px-4 py-3 bg-gray-50 flex justify-end space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onEdit(service)}
                >
                  <Pencil1Icon className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-red-500 hover:text-red-700"
                  onClick={() => onDelete(service.id)}
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

export default ServicesList;