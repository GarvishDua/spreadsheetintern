
import React, { useState, useRef, useEffect } from 'react';
import { StatusBadge } from './StatusBadge';

interface EditableCellProps {
  value: any;
  type: 'text' | 'date' | 'status' | 'url' | 'currency';
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
  const [editValue, setEditValue] = useState(String(value));
  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
    if (isEditing && selectRef.current) {
      selectRef.current.focus();
    }
  }, [isEditing]);

  const handleDoubleClick = () => {
    setEditValue(String(value));
    setIsEditing(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setEditValue(String(value));
    }
  };

  const handleSave = () => {
    const newValue = type === 'currency' ? parseFloat(editValue) || 0 : editValue;
    onUpdate(newValue);
    setIsEditing(false);
  };

  const cellClasses = `justify-center items-center flex min-h-8 w-full gap-2 overflow-hidden text-xs leading-none h-8 bg-white px-2 cursor-pointer hover:bg-gray-50 ${
    isSelected ? 'border shadow-[0px_0px_4px_-2px_rgba(10,110,61,0.60),0px_0px_12px_0px_rgba(10,110,61,0.22)] border-solid border-[#6C8B70]' : ''
  }`;

  if (isEditing) {
    // Special dropdown for status and priority
    if (type === 'status') {
      return (
        <div className={cellClasses}>
          <select
            ref={selectRef}
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSave}
            className="w-full h-full bg-transparent border-none outline-none text-xs"
          >
            <option value="In-process">In-process</option>
            <option value="Need to start">Need to start</option>
            <option value="Complete">Complete</option>
            <option value="Blocked">Blocked</option>
          </select>
        </div>
      );
    }

    // Special dropdown for priority (when field name is priority)
    if (String(value) === 'High' || String(value) === 'Medium' || String(value) === 'Low') {
      return (
        <div className={cellClasses}>
          <select
            ref={selectRef}
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSave}
            className="w-full h-full bg-transparent border-none outline-none text-xs"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      );
    }

    return (
      <div className={cellClasses}>
        <input
          ref={inputRef}
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleSave}
          className="w-full h-full bg-transparent border-none outline-none text-xs"
        />
      </div>
    );
  }

  const renderContent = () => {
    switch (type) {
      case 'status':
        return <StatusBadge status={String(value)} />;
      case 'url':
        return (
          <div className="text-[#121212] text-ellipsis underline decoration-solid decoration-auto underline-offset-auto self-stretch flex-1 shrink basis-[0%] my-auto">
            {String(value)}
          </div>
        );
      case 'date':
        return (
          <div className="text-[#121212] text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto text-right">
            {String(value)}
          </div>
        );
      case 'currency':
        return (
          <>
            <div className="text-[#121212] text-ellipsis font-normal self-stretch flex-1 shrink basis-[0%] my-auto text-right">
              {Number(value).toLocaleString()}
            </div>
            <div className="text-[#AFAFAF] text-ellipsis font-medium self-stretch my-auto">₹</div>
          </>
        );
      default:
        // Handle priority colors for text type
        if (String(value) === 'High' || String(value) === 'Medium' || String(value) === 'Low') {
          return (
            <div className={`text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto ${
              String(value) === 'High' ? 'text-[#EF4D44]' : 
              String(value) === 'Medium' ? 'text-[#C29210]' : 'text-[#1A8CFF]'
            }`}>
              {String(value)}
            </div>
          );
        }
        return (
          <div className="text-[#121212] text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto">
            {String(value)}
          </div>
        );
    }
  };

  return (
    <div 
      className={cellClasses}
      onClick={onSelect}
      onDoubleClick={handleDoubleClick}
    >
      {renderContent()}
    </div>
  );
};
