import React from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon, TrashIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "utils/types";

interface Props {
  testimonials: Testimonial[];
  onEdit: (testimonial: Testimonial) => void;
  onDelete: (id: string) => void;
  onAdd: () => void;
  isLoading: boolean;
}

const TestimonialsList: React.FC<Props> = ({ testimonials, onEdit, onDelete, onAdd, isLoading }) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Client Testimonials</h3>
        <Button 
          onClick={onAdd}
          className="bg-gradient-to-r from-yellow-400 to-blue-500 hover:from-yellow-500 hover:to-blue-600 text-white"
        >
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Testimonial
        </Button>
      </div>
      
      {isLoading ? (
        <div className="h-40 flex items-center justify-center">
          <p>Loading testimonials...</p>
        </div>
      ) : testimonials.length === 0 ? (
        <div className="h-40 flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <div className="text-center">
            <p className="text-gray-500">No testimonials found</p>
            <Button 
              variant="link" 
              onClick={onAdd}
              className="mt-2 text-blue-500"
            >
              Add your first testimonial
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden h-full flex flex-col">
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <div className="flex items-center mb-3">
                    {testimonial.clientImage ? (
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                        <img 
                          src={testimonial.clientImage} 
                          alt={testimonial.clientName} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-medium">
                          {testimonial.clientName.split(" ").map(n => n[0]).join("").toUpperCase()}
                        </span>
                      </div>
                    )}
                    <div>
                      <h4 className="font-medium text-gray-900">{testimonial.clientName}</h4>
                      <p className="text-sm text-gray-500">{testimonial.clientCompany}</p>
                    </div>
                  </div>
                  <div className="text-yellow-500 flex items-center mb-3">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg 
                        key={index} 
                        className={`h-4 w-4 ${index < testimonial.rating ? 'text-yellow-500 fill-current' : 'text-gray-300 fill-current'}`} 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 italic flex-1">"{testimonial.quote}"</blockquote>
                <div className="mt-4 flex justify-end gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => onEdit(testimonial)}
                  >
                    <Pencil1Icon className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-red-500 hover:text-red-700"
                    onClick={() => onDelete(testimonial.id)}
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

export default TestimonialsList;