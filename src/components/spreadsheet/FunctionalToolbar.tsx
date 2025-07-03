
import React, { useState } from 'react';
import { ColumnActionsMenu } from './ColumnActionsMenu';

interface Column {
  key: string;
  name: string;
  type: 'predefined' | 'custom';
  index?: number;
}

interface FunctionalToolbarProps {
  onAddRow: () => void;
  onExport: () => void;
  onImport: (file: File) => void;
  onAddColumn: () => void;
  onDeleteCustomColumn: (columnIndex: number) => void;
  onDeletePredefinedColumn: (columnKey: string) => void;
  onRenameCustomColumn: (columnIndex: number, newName: string) => void;
  onRenamePredefinedColumn: (columnKey: string, newName: string) => void;
  onSort: (field: string, direction: 'asc' | 'desc') => void;
  onFilter: (field: string, value: string) => void;
  allColumns: Column[];
}

export const FunctionalToolbar: React.FC<FunctionalToolbarProps> = ({
  onAddRow,
  onExport,
  onImport,
  onAddColumn,
  onDeleteCustomColumn,
  onDeletePredefinedColumn,
  onRenameCustomColumn,
  onRenamePredefinedColumn,
  onSort,
  onFilter,
  allColumns
}) => {
  const [showToolbar, setShowToolbar] = useState(true);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [selectedSortColumn, setSelectedSortColumn] = useState<string>('');
  const [selectedFilterColumn, setSelectedFilterColumn] = useState<string>('');
  const [filterValue, setFilterValue] = useState<string>('');
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImport(file);
    }
  };

  const handleSort = (field: string, direction: 'asc' | 'desc') => {
    onSort(field, direction);
    setSelectedSortColumn(field);
    setShowSortMenu(false);
  };

  const handleFilterApply = () => {
    if (selectedFilterColumn && filterValue) {
      onFilter(selectedFilterColumn, filterValue);
    }
    setShowFilterMenu(false);
  };

  const handleFilterClear = () => {
    if (selectedFilterColumn) {
      onFilter(selectedFilterColumn, '');
    }
    setFilterValue('');
    setShowFilterMenu(false);
  };

  return (
    <div className="bg-white border-b-[#EEE] border-b border-solid">
      <div className="items-center flex w-full gap-2 text-sm leading-none flex-wrap px-2 py-1.5 max-md:max-w-full">
        <button 
          onClick={() => setShowToolbar(!showToolbar)}
          className="justify-center items-center rounded self-stretch flex gap-1 text-[#121212] font-normal bg-white my-auto p-2 hover:bg-gray-50 transition-colors"
        >
          <span className="text-[#121212] self-stretch my-auto">Tool bar</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/538101e69dc18c456b432d6017bdc7f9822d1094?placeholderIfAbsent=true"
            className={`aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto transition-transform duration-200 ${showToolbar ? 'rotate-180' : ''}`}
            alt="Dropdown arrow"
          />
        </button>
        
        <div className="self-stretch flex w-px shrink-0 h-6 bg-[#EEE] my-auto" role="separator" />
      </div>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showToolbar ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="items-center flex w-full gap-2 text-sm leading-none flex-wrap px-2 py-1.5 max-md:max-w-full">
          <div className="self-stretch flex min-w-60 items-center gap-1 text-[#121212] font-normal flex-wrap flex-1 shrink basis-4 my-auto max-md:max-w-full">
            <button className="items-center self-stretch flex gap-1 bg-white my-auto pl-2 pr-3 py-2 rounded-md hover:bg-gray-50">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/9860df1c6a9687811ba2d20e2a65d34ead28bdc7?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                alt="Hide fields icon"
              />
              <span className="text-[#121212] self-stretch my-auto">Hide fields</span>
            </button>
            
            <div className="relative">
              <button 
                onClick={() => setShowSortMenu(!showSortMenu)}
                className="items-center self-stretch flex gap-1 whitespace-nowrap bg-white my-auto pl-2 pr-3 py-2 rounded-md hover:bg-gray-50"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/dd2173c3d4555e1e9d82cf5b4d8b42407f316503?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                  alt="Sort icon"
                />
                <span className="text-[#121212] self-stretch my-auto">Sort</span>
              </button>
              {showSortMenu && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-50 min-w-48">
                  <div className="p-2 border-b">
                    <select
                      value={selectedSortColumn}
                      onChange={(e) => setSelectedSortColumn(e.target.value)}
                      className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                    >
                      <option value="">Select column...</option>
                      {allColumns.map((column) => (
                        <option key={column.key} value={column.key}>
                          {column.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    onClick={() => selectedSortColumn && handleSort(selectedSortColumn, 'asc')}
                    disabled={!selectedSortColumn}
                    className="w-full px-3 py-2 text-sm text-left hover:bg-gray-100 disabled:opacity-50"
                  >
                    Sort A → Z
                  </button>
                  <button
                    onClick={() => selectedSortColumn && handleSort(selectedSortColumn, 'desc')}
                    disabled={!selectedSortColumn}
                    className="w-full px-3 py-2 text-sm text-left hover:bg-gray-100 disabled:opacity-50"
                  >
                    Sort Z → A
                  </button>
                </div>
              )}
            </div>
            
            <div className="relative">
              <button 
                onClick={() => setShowFilterMenu(!showFilterMenu)}
                className="items-center self-stretch flex gap-1 whitespace-nowrap bg-white my-auto pl-2 pr-3 py-2 rounded-md hover:bg-gray-50"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/9afd84bb9e48fe5d8497bad0e3838204b2a70d22?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                  alt="Filter icon"
                />
                <span className="text-[#121212] self-stretch my-auto">Filter</span>
              </button>
              {showFilterMenu && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-50 min-w-64">
                  <div className="p-3 space-y-3">
                    <select
                      value={selectedFilterColumn}
                      onChange={(e) => setSelectedFilterColumn(e.target.value)}
                      className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                    >
                      <option value="">Select column...</option>
                      {allColumns.map((column) => (
                        <option key={column.key} value={column.key}>
                          {column.name}
                        </option>
                      ))}
                    </select>
                    <input
                      type="text"
                      value={filterValue}
                      onChange={(e) => setFilterValue(e.target.value)}
                      placeholder="Filter value..."
                      className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={handleFilterApply}
                        disabled={!selectedFilterColumn || !filterValue}
                        className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 disabled:opacity-50"
                      >
                        Apply
                      </button>
                      <button
                        onClick={handleFilterClear}
                        className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded hover:bg-gray-300"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <button className="items-center self-stretch flex gap-1 bg-white my-auto pl-2 pr-3 py-2 rounded-md hover:bg-gray-50">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/e64a7381d31dbd01717c8617015775a5ba7a76b1?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                alt="Cell view icon"
              />
              <span className="text-[#121212] self-stretch my-auto">Cell view</span>
            </button>
          </div>
          
          <div className="self-stretch flex min-w-60 items-center gap-2 my-auto max-md:max-w-full">
            <div className="self-stretch flex min-w-60 gap-2 text-[#545454] font-normal whitespace-nowrap my-auto">
              <button 
                onClick={handleImportClick}
                className="items-center border flex gap-1 bg-white pl-2 pr-3 py-2 rounded-md border-solid border-[#EEE] hover:bg-gray-50"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/b63cb03c6944d84770befa29adaf796dc81dadc7?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                  alt="Import icon"
                />
                <span className="text-[#545454] self-stretch my-auto">Import</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv,.xlsx,.xls"
                onChange={handleFileChange}
                className="hidden"
              />
              
              <button 
                onClick={onExport}
                className="items-center border flex gap-1 bg-white pl-2 pr-3 py-2 rounded-md border-solid border-[#EEE] hover:bg-gray-50"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/85fd3a9cc95b2c3e53edeba77fd2b0125eb78f03?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                  alt="Export icon"
                />
                <span className="text-[#545454] self-stretch my-auto">Export</span>
              </button>
              
              <button className="items-center border flex gap-1 bg-white pl-2 pr-3 py-2 rounded-md border-solid border-[#EEE] hover:bg-gray-50">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/6fcb33bb6f655a5cf2f103edb220bc353f3d5c90?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                  alt="Share icon"
                />
                <span className="text-[#545454] self-stretch my-auto">Share</span>
              </button>
            </div>
            
            <ColumnActionsMenu
              onAddColumn={onAddColumn}
              onDeleteCustomColumn={onDeleteCustomColumn}
              onDeletePredefinedColumn={onDeletePredefinedColumn}
              onRenameCustomColumn={onRenameCustomColumn}
              onRenamePredefinedColumn={onRenamePredefinedColumn}
              allColumns={allColumns}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
