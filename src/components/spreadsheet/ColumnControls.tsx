
import React, { useState } from 'react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Eye, EyeOff, Maximize2 } from 'lucide-react';

interface ColumnControlsProps {
  columnKey: string;
  isVisible: boolean;
  width?: number;
  onToggleVisibility: (columnKey: string) => void;
  onResizeColumn: (columnKey: string, width: number) => void;
}

export const ColumnControls: React.FC<ColumnControlsProps> = ({
  columnKey,
  isVisible,
  width = 124,
  onToggleVisibility,
  onResizeColumn
}) => {
  const [isResizing, setIsResizing] = useState(false);
  const [tempWidth, setTempWidth] = useState(width);

  const handleResize = () => {
    setIsResizing(true);
  };

  const handleResizeSubmit = () => {
    onResizeColumn(columnKey, tempWidth);
    setIsResizing(false);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-1 hover:bg-gray-200 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreHorizontal className="h-3 w-3" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem onClick={() => onToggleVisibility(columnKey)}>
          {isVisible ? (
            <>
              <EyeOff className="mr-2 h-4 w-4" />
              Hide Column
            </>
          ) : (
            <>
              <Eye className="mr-2 h-4 w-4" />
              Show Column
            </>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleResize}>
          <Maximize2 className="mr-2 h-4 w-4" />
          Resize Column
        </DropdownMenuItem>
      </DropdownMenuContent>
      
      {isResizing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Resize Column</h3>
            <div className="flex items-center gap-4">
              <label htmlFor="width" className="text-sm">Width (px):</label>
              <input
                id="width"
                type="number"
                value={tempWidth}
                onChange={(e) => setTempWidth(Number(e.target.value))}
                className="border rounded px-2 py-1 w-20"
                min="50"
                max="500"
              />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setIsResizing(false)}
                className="px-3 py-1 text-sm border rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleResizeSubmit}
                className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </DropdownMenu>
  );
};
