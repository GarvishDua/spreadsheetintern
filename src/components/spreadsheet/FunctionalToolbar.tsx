
import React, { useState } from 'react';
import { ColumnActionsMenu } from './ColumnActionsMenu';

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
  allColumns: any[];
  isVisible: boolean;
  onToggleVisibility: () => void;
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
  allColumns,
  isVisible,
  onToggleVisibility
}) => {
  const [importFile, setImportFile] = useState<File | null>(null);

  const handleImportChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImportFile(file);
      onImport(file);
    }
  };

  return (
    <>
      {/* Toggle button - always visible */}
      <div className="flex justify-start p-2 bg-white border-b">
        <button
          onClick={onToggleVisibility}
          className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors"
        >
          {isVisible ? 'Hide Toolbar' : 'Show Toolbar'}
        </button>
      </div>
      
      {/* Animated toolbar */}
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
        isVisible ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <section className="items-stretch flex w-full gap-2 overflow-hidden bg-white px-5 py-2 max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <button
            onClick={onAddRow}
            className="justify-center items-center flex gap-2 px-3 py-2 text-xs font-medium leading-none text-neutral-800 bg-gray-100 hover:bg-gray-200 rounded transition-colors"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/5892c516af1fe83227bb32d3fdad70dc5a2d748e?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4"
              alt="Add"
            />
            <span>Add Row</span>
          </button>

          <button
            onClick={onExport}
            className="justify-center items-center flex gap-2 px-3 py-2 text-xs font-medium leading-none text-neutral-800 bg-gray-100 hover:bg-gray-200 rounded transition-colors"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/abc123def456?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4"
              alt="Export"
            />
            <span>Export</span>
          </button>

          <label className="justify-center items-center flex gap-2 px-3 py-2 text-xs font-medium leading-none text-neutral-800 bg-gray-100 hover:bg-gray-200 rounded transition-colors cursor-pointer">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/def456abc123?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4"
              alt="Import"
            />
            <span>Import</span>
            <input
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={handleImportChange}
              className="hidden"
            />
          </label>

          <ColumnActionsMenu
            onAddColumn={onAddColumn}
            onDeleteCustomColumn={onDeleteCustomColumn}
            onDeletePredefinedColumn={onDeletePredefinedColumn}
            onRenameCustomColumn={onRenameCustomColumn}
            onRenamePredefinedColumn={onRenamePredefinedColumn}
            allColumns={allColumns}
          />

          <div className="flex-1" />
        </section>
      </div>
    </>
  );
};
