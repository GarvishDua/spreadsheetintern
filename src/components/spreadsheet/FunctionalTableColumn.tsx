
import React from 'react';
import { EditableCell } from './EditableCell';
import { FilterDropdown } from './FilterDropdown';
import { SpreadsheetData } from '@/types/spreadsheet';

interface FunctionalTableColumnProps {
  title: string;
  field: keyof SpreadsheetData;
  icon: string;
  width: string;
  data: SpreadsheetData[];
  type: 'text' | 'date' | 'status' | 'url' | 'currency';
  bgColor?: string;
  textColor?: string;
  selectedCell: { row: number; col: string } | null;
  onUpdateCell: (rowIndex: number, field: keyof SpreadsheetData, value: string | number) => void;
  onSelectCell: (row: number, col: string) => void;
  onSort: (field: keyof SpreadsheetData) => void;
  onFilter: (field: string, value: string) => void;
}

export const FunctionalTableColumn: React.FC<FunctionalTableColumnProps> = ({ 
  title,
  field,
  icon, 
  width, 
  data, 
  type,
  bgColor = '#EEE',
  textColor = '#757575',
  selectedCell,
  onUpdateCell,
  onSelectCell,
  onSort,
  onFilter
}) => {
  return (
    <div className={width}>
      <div className="flex min-h-8 w-full gap-2 h-8 bg-white py-2" />
      
      <div className="items-center flex min-h-8 w-full gap-1 h-8 pl-2 pr-1" style={{ backgroundColor: bgColor }}>
        <div className="self-stretch flex items-center gap-1 text-xs font-semibold leading-none flex-1 shrink basis-[0%] my-auto" style={{ color: textColor }}>
          <img
            src={icon}
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
            alt={`${title} icon`}
          />
          <button
            onClick={() => onSort(field)}
            className="text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto hover:underline cursor-pointer text-left"
            style={{ color: textColor }}
          >
            {title}
          </button>
        </div>
        <FilterDropdown field={field as string} onFilter={onFilter} data={data} />
      </div>
      
      {data.map((row, index) => (
        <EditableCell
          key={`${field}-${index}`}
          value={row[field]}
          type={type}
          isSelected={selectedCell?.row === index && selectedCell?.col === field}
          onUpdate={(value) => onUpdateCell(index, field, value)}
          onSelect={() => onSelectCell(index, field as string)}
        />
      ))}
      
      {/* Filler cells */}
      {Array.from({ length: Math.max(0, 19 - data.length) }, (_, index) => (
        <div key={`filler-${index}`} className="flex min-h-8 w-full gap-2 h-8 bg-white py-2" />
      ))}
      
      <div className="flex min-h-3.5 w-full gap-2 h-8 bg-white py-2" />
    </div>
  );
};
