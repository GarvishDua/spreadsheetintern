
import React, { useState, useEffect } from 'react';
import { StatusBadge } from './StatusBadge';

interface EditableCellProps {
  value: string | number;
  type: 'text' | 'date' | 'status' | 'url' | 'currency' | 'priority';
  isSelected: boolean;
  onUpdate: (value: string | number) => void;
  onSelect: () => void;
  onDelete?: () => void;
}

export const EditableCell: React.FC<EditableCellProps> = ({
  value,
  type,
  isSelected,
  onUpdate,
  onSelect,
  onDelete
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(String(value || ''));

  useEffect(() => {
    setEditValue(String(value || ''));
  }, [value]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setEditValue(String(value || ''));
    } else if (e.key === 'Delete' || e.key === 'Backspace') {
      // Allow deletion for all types
      if (!isEditing) {
        onUpdate('');
      }
    }
  };

  const handleSave = () => {
    if (type === 'currency') {
      const numValue = parseFloat(editValue) || 0;
      onUpdate(numValue);
    } else {
      onUpdate(editValue);
    }
    setIsEditing(false);
  };

  const handleBlur = () => {
    handleSave();
  };

  const formatValue = (val: string | number) => {
    if (type === 'currency') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(Number(val) || 0);
    }
    return String(val || '');
  };

  if (isEditing) {
    return (
      <div className="justify-center items-center flex min-h-8 w-full gap-2 overflow-hidden text-xs h-8 bg-white px-2">
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="text-[#121212] text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto bg-transparent border-none outline-none"
          autoFocus
        />
      </div>
    );
  }

  const cellContent = () => {
    if (type === 'status' && value) {
      return <StatusBadge status={value as any} />;
    }
    
    if (type === 'priority' && value) {
      const priorityColors = {
        'High': 'bg-red-100 text-red-800',
        'Medium': 'bg-yellow-100 text-yellow-800',
        'Low': 'bg-green-100 text-green-800'
      };
      return (
        <span className={`px-2 py-1 rounded text-xs font-medium ${priorityColors[value as keyof typeof priorityColors] || 'bg-gray-100 text-gray-800'}`}>
          {value}
        </span>
      );
    }

    if (type === 'url' && value) {
      return (
        <a 
          href={String(value).startsWith('http') ? String(value) : `https://${value}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
          onClick={(e) => e.stopPropagation()}
        >
          {value}
        </a>
      );
    }

    return formatValue(value);
  };

  return (
    <div 
      className={`justify-center items-center flex min-h-8 w-full gap-2 overflow-hidden text-xs h-8 px-2 cursor-pointer ${
        isSelected ? 'bg-blue-50 border-2 border-blue-500' : 'bg-white hover:bg-gray-50'
      }`}
      onClick={onSelect}
      onDoubleClick={handleDoubleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="text-[#121212] text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto">
        {cellContent()}
      </div>
    </div>
  );
};
