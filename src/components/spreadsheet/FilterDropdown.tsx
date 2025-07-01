
import React, { useState } from 'react';

interface FilterDropdownProps {
  field: string;
  onFilter: (field: string, value: string) => void;
  data: any[];
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({ field, onFilter, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterValue, setFilterValue] = useState('');

  const uniqueValues = Array.from(new Set(data.map(row => String(row[field as keyof typeof row]))));

  const handleFilterChange = (value: string) => {
    setFilterValue(value);
    onFilter(field, value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-3 h-3 flex items-center justify-center"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/e089e1bde0c99915b6aab5249e499f95c9a002e0?placeholderIfAbsent=true"
          className="w-full h-full"
          alt="Filter"
        />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-50 min-w-32">
          <input
            type="text"
            placeholder="Filter..."
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            className="w-full px-2 py-1 text-xs border-b"
          />
          <div className="max-h-32 overflow-y-auto">
            <button
              onClick={() => handleFilterChange('')}
              className="w-full px-2 py-1 text-xs text-left hover:bg-gray-100"
            >
              (All)
            </button>
            {uniqueValues.slice(0, 10).map((value, index) => (
              <button
                key={index}
                onClick={() => handleFilterChange(value)}
                className="w-full px-2 py-1 text-xs text-left hover:bg-gray-100 truncate"
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
