
import React, { useState } from 'react';
import { SpreadsheetData } from '@/types/spreadsheet';

interface FilterDropdownProps {
  field: string;
  onFilter: (field: string, value: string) => void;
  data: SpreadsheetData[];
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({ field, onFilter, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterValue, setFilterValue] = useState('');

  const getUniqueValues = () => {
    const values = data.map(row => String(row[field as keyof SpreadsheetData]));
    return [...new Set(values)].filter(Boolean);
  };

  const handleFilter = (value: string) => {
    setFilterValue(value);
    onFilter(field, value);
    setIsOpen(false);
  };

  const clearFilter = () => {
    setFilterValue('');
    onFilter(field, '');
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded self-stretch flex items-center gap-2 w-5 my-auto p-1 hover:bg-gray-200"
        aria-label={`${field} filter options`}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/e089e1bde0c99915b6aab5249e499f95c9a002e0?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-3 self-stretch my-auto"
          alt="Dropdown arrow"
        />
      </button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-[100] min-w-40 max-h-60 overflow-y-auto">
          <div className="p-2 border-b">
            <input
              type="text"
              placeholder="Search..."
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              className="w-full px-2 py-1 text-xs border border-gray-300 rounded"
            />
          </div>
          <div className="py-1">
            <button
              onClick={clearFilter}
              className="w-full px-3 py-2 text-xs text-left hover:bg-gray-100"
            >
              Clear Filter
            </button>
            {getUniqueValues().map((value) => (
              <button
                key={value}
                onClick={() => handleFilter(value)}
                className="w-full px-3 py-2 text-xs text-left hover:bg-gray-100 truncate"
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
