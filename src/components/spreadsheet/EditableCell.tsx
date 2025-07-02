import React, { useState, useRef, useEffect } from 'react';
import { StatusBadge } from './StatusBadge';

interface EditableCellProps {
  value: string | number;
  type: 'text' | 'date' | 'status' | 'url' | 'currency' | 'priority';
  isSelected: boolean;
  onUpdate: (value: string | number) => void;
  onSelect: () => void;
}

export const EditableCell: React.FC<EditableCellProps> = ({
  value,
  type,
  isSelected,
  onUpdate,
  onSelect
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value?.toString() || '');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setEditValue(value?.toString() || '');
  }, [value]);

  const statusOptions = ['In-process', 'Need to start', 'Complete', 'Blocked'];
  const priorityOptions = ['High', 'Medium', 'Low'];

  const handleSave = () => {
    if (type === 'currency') {
      onUpdate(parseFloat(editValue) || 0);
    } else {
      onUpdate(editValue);
    }
    setIsEditing(false);
  };

  const handleDropdownSelect = (option: string) => {
    onUpdate(option);
    setShowDropdown(false);
  };

  const renderValue = () => {
    if (type === 'currency') {
      return (value as number).toLocaleString();
    }
    return value?.toString() || '';
  };

  const cellClasses = `justify-center items-center flex min-h-8 w-full gap-2 overflow-hidden text-xs leading-none h-8 bg-white px-2 relative ${
    isSelected ? 'border shadow-[0px_0px_4px_-2px_rgba(10,110,61,0.60),0px_0px_12px_0px_rgba(10,110,61,0.22)] border-solid border-[#6C8B70]' : ''
  }`;

  if (type === 'status' || type === 'priority') {
    const options = type === 'status' ? statusOptions : priorityOptions;
    
    return (
      <div className={cellClasses} onClick={onSelect} ref={dropdownRef}>
        <div className="relative w-full">
          {type === 'status' ? (
            <StatusBadge status={value as any} />
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowDropdown(!showDropdown);
              }}
              className="text-[#121212] text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto w-full text-left"
            >
              {value || 'Select...'}
            </button>
          )}
          
          {showDropdown && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-[100] min-w-full">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDropdownSelect(option);
                  }}
                  className="w-full px-3 py-2 text-sm text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={cellClasses} onClick={onSelect}>
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSave();
            if (e.key === 'Escape') {
              setEditValue(value?.toString() || '');
              setIsEditing(false);
            }
          }}
          className="w-full bg-transparent border-none outline-none text-[#121212] text-xs"
          autoFocus
        />
      ) : (
        <div 
          className="text-[#121212] text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto cursor-pointer w-full"
          onDoubleClick={() => setIsEditing(true)}
        >
          {renderValue()}
        </div>
      )}
    </div>
  );
};
