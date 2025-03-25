import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrashIcon } from "@radix-ui/react-icons";
import { MediaResponse } from "utils/types";

interface Props {
  mediaItems: MediaResponse[];
  onDelete: (filename: string) => void;
  onUpload: () => void;
  isLoading: boolean;
}

const MediaLibrary: React.FC<Props> = ({ mediaItems, onDelete, onUpload, isLoading }) => {
  const [selectedItem, setSelectedItem] = useState<MediaResponse | null>(null);
  
  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      alert("URL copied to clipboard!");
    });
  };
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Media Files</h3>
        <Button 
          onClick={onUpload}
          className="bg-gradient-to-r from-yellow-400 to-blue-500 hover:from-yellow-500 hover:to-blue-600 text-white"
        >
          Upload Media
        </Button>
      </div>
      
      {isLoading ? (
        <div className="h-40 flex items-center justify-center">
          <p>Loading media...</p>
        </div>
      ) : mediaItems.length === 0 ? (
        <div className="h-40 flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <div className="text-center">
            <p className="text-gray-500">No media files found</p>
            <Button 
              variant="link" 
              onClick={onUpload}
              className="mt-2 text-blue-500"
            >
              Upload your first media file
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mediaItems.map((item) => (
            <Card 
              key={item.id} 
              className={`overflow-hidden hover:shadow-md transition-shadow cursor-pointer ${selectedItem?.id === item.id ? 'ring-2 ring-blue-500' : ''}`}
              onClick={() => setSelectedItem(item)}
            >
              <div className="aspect-square relative bg-gray-100 overflow-hidden">
                {item.contentType.startsWith("image/") ? (
                  <img 
                    src={item.url} 
                    alt={item.filename}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    <span className="text-gray-500 text-xs p-2 text-center">{item.filename}</span>
                  </div>
                )}
                <Button 
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 w-6 h-6 opacity-80 hover:opacity-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(item.filename);
                  }}
                >
                  <TrashIcon className="h-3 w-3" />
                </Button>
              </div>
              <CardContent className="p-2">
                <p className="text-xs truncate" title={item.filename}>{item.filename}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      
      {selectedItem && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium mb-2">Selected Media</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              {selectedItem.contentType.startsWith("image/") ? (
                <div className="aspect-video bg-gray-100 rounded overflow-hidden">
                  <img 
                    src={selectedItem.url} 
                    alt={selectedItem.filename}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="aspect-video bg-gray-100 rounded flex items-center justify-center">
                  <p>File Preview Not Available</p>
                </div>
              )}
            </div>
            <div className="space-y-2">
              <div>
                <p className="text-sm font-medium">Filename:</p>
                <p className="text-sm">{selectedItem.filename}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Type:</p>
                <p className="text-sm">{selectedItem.contentType}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Created:</p>
                <p className="text-sm">{new Date(selectedItem.createdAt).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm font-medium">URL:</p>
                <div className="flex">
                  <input 
                    type="text" 
                    value={selectedItem.url} 
                    readOnly 
                    className="text-sm flex-1 p-1 border rounded-l" 
                  />
                  <Button 
                    className="rounded-l-none" 
                    onClick={() => handleCopyUrl(selectedItem.url)}
                  >
                    Copy
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaLibrary;