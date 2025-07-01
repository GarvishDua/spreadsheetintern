import React from 'react';
import { StatusBadge } from './StatusBadge';

interface TableColumnProps {
  title: string;
  icon: string;
  width: string;
  data: any[];
  type: 'text' | 'date' | 'status' | 'url' | 'currency';
  bgColor?: string;
  textColor?: string;
}

export const TableColumn: React.FC<TableColumnProps> = ({ 
  title, 
  icon, 
  width, 
  data, 
  type,
  bgColor = '#EEE',
  textColor = '#757575'
}) => {
  const renderCell = (value: any, index: number) => {
    const isSelected = index === 7; // 8th row (0-indexed) has special styling
    const cellClasses = `justify-center items-center flex min-h-8 w-full gap-2 overflow-hidden text-xs leading-none h-8 bg-white px-2 ${
      isSelected ? 'border shadow-[0px_0px_4px_-2px_rgba(10,110,61,0.60),0px_0px_12px_0px_rgba(10,110,61,0.22)] border-solid border-[#6C8B70]' : ''
    }`;

    switch (type) {
      case 'status':
        return (
          <div className={cellClasses}>
            <StatusBadge status={value} />
          </div>
        );
      case 'url':
        return (
          <div className={`${cellClasses} text-[#121212] font-normal whitespace-nowrap underline`}>
            <div className="text-[#121212] text-ellipsis underline decoration-solid decoration-auto underline-offset-auto self-stretch flex-1 shrink basis-[0%] my-auto">
              {value}
            </div>
          </div>
        );
      case 'date':
        return (
          <div className={`${cellClasses} text-[#121212] font-normal whitespace-nowrap text-right`}>
            <div className="text-[#121212] text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto">
              {value}
            </div>
          </div>
        );
      case 'currency':
        return (
          <div className={`${cellClasses} text-[#121212] font-normal whitespace-nowrap text-right`}>
            <div className="text-[#121212] text-ellipsis font-normal self-stretch flex-1 shrink basis-[0%] my-auto">
              {value.toLocaleString()}
            </div>
            <div className="text-[#AFAFAF] text-ellipsis font-medium self-stretch my-auto">₹</div>
          </div>
        );
      default:
        return (
          <div className={`${cellClasses} text-[#121212] font-normal`}>
            <div className="text-[#121212] text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto">
              {value}
            </div>
          </div>
        );
    }
  };

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
          <div className="text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto" style={{ color: textColor }}>
            {title}
          </div>
        </div>
        <button className="rounded self-stretch flex items-center gap-2 w-5 my-auto p-1" aria-label={`${title} options`}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/e089e1bde0c99915b6aab5249e499f95c9a002e0?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-3 self-stretch my-auto"
            alt="Dropdown arrow"
          />
        </button>
      </div>
      
      {data.map((value, index) => (
        <React.Fragment key={index}>
          {renderCell(value, index)}
        </React.Fragment>
      ))}
      
      {/* Filler cells */}
      {Array.from({ length: 19 }, (_, index) => (
        <div key={`filler-${index}`} className="flex min-h-8 w-full gap-2 h-8 bg-white py-2" />
      ))}
      
      <div className="flex min-h-3.5 w-full gap-2 h-8 bg-white py-2" />
    </div>
  );
};
