
import React, { useState, useRef, useEffect } from 'react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Eye, EyeOff } from 'lucide-react';

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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startWidth, setStartWidth] = useState(width);
  const resizeHandleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const deltaX = e.clientX - startX;
      const newWidth = Math.max(50, Math.min(500, startWidth + deltaX));
      onResizeColumn(columnKey, newWidth);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isDragging, startX, startWidth, columnKey, onResizeColumn]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    setStartX(e.clientX);
    setStartWidth(width);
  };

  return (
    <div className="flex items-center">
      {/* Resize handle */}
      <div
        ref={resizeHandleRef}
        className="w-1 h-6 cursor-col-resize hover:bg-blue-500 bg-transparent border-r border-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
        onMouseDown={handleMouseDown}
        title="Drag to resize column"
      />
      
      {/* Column menu */}
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
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
