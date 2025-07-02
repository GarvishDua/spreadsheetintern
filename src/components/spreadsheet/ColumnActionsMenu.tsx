
import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Column {
  key: string;
  name: string;
  type: 'predefined' | 'custom';
  index?: number;
}

interface ColumnActionsMenuProps {
  onAddColumn: () => void;
  onDeleteCustomColumn: (columnIndex: number) => void;
  onDeletePredefinedColumn: (columnKey: string) => void;
  onRenameCustomColumn: (columnIndex: number, newName: string) => void;
  onRenamePredefinedColumn: (columnKey: string, newName: string) => void;
  allColumns: Column[];
}

export const ColumnActionsMenu: React.FC<ColumnActionsMenuProps> = ({
  onAddColumn,
  onDeleteCustomColumn,
  onDeletePredefinedColumn,
  onRenameCustomColumn,
  onRenamePredefinedColumn,
  allColumns
}) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showRenameDialog, setShowRenameDialog] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState<Column | null>(null);
  const [newColumnName, setNewColumnName] = useState('');
  const [actionType, setActionType] = useState<'delete' | 'rename' | null>(null);

  const handleDeleteColumn = () => {
    setActionType('delete');
    setShowDeleteDialog(true);
  };

  const handleRenameColumn = () => {
    setActionType('rename');
    setShowRenameDialog(true);
  };

  const selectColumnForAction = (column: Column, action: 'delete' | 'rename') => {
    setSelectedColumn(column);
    if (action === 'delete') {
      setShowDeleteDialog(false);
      // Show confirmation dialog
      setTimeout(() => {
        setShowDeleteDialog(true);
      }, 100);
    } else {
      setShowRenameDialog(false);
      setNewColumnName(column.name);
      setTimeout(() => {
        setShowRenameDialog(true);
      }, 100);
    }
  };

  const confirmDelete = () => {
    if (selectedColumn) {
      if (selectedColumn.type === 'custom' && selectedColumn.index !== undefined) {
        onDeleteCustomColumn(selectedColumn.index);
      } else if (selectedColumn.type === 'predefined') {
        onDeletePredefinedColumn(selectedColumn.key);
      }
    }
    setShowDeleteDialog(false);
    setSelectedColumn(null);
    setActionType(null);
  };

  const confirmRename = () => {
    if (selectedColumn && newColumnName.trim()) {
      if (selectedColumn.type === 'custom' && selectedColumn.index !== undefined) {
        onRenameCustomColumn(selectedColumn.index, newColumnName);
      } else if (selectedColumn.type === 'predefined') {
        onRenamePredefinedColumn(selectedColumn.key, newColumnName);
      }
    }
    setShowRenameDialog(false);
    setSelectedColumn(null);
    setActionType(null);
    setNewColumnName('');
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="justify-center items-center self-stretch flex gap-1 overflow-hidden text-white font-medium bg-[#4B6A4F] hover:bg-[#3d5540] my-auto px-6 py-2 rounded-md max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/94c3e57cef7c076e9385a016fcc1065fa509c355?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
              alt="Add column icon"
            />
            <span className="text-white text-ellipsis self-stretch my-auto">New Action</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg z-50">
          <DropdownMenuItem onClick={onAddColumn} className="cursor-pointer">
            <span>Add New Column</span>
          </DropdownMenuItem>
          {allColumns.length > 0 && (
            <>
              <DropdownMenuItem onClick={handleDeleteColumn} className="cursor-pointer">
                <span>Delete Column</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleRenameColumn} className="cursor-pointer">
                <span>Rename Column</span>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Column Selection Dialog for Delete */}
      {showDeleteDialog && actionType === 'delete' && !selectedColumn && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full max-h-96 overflow-y-auto">
            <h3 className="text-lg font-medium mb-4">Select Column to Delete</h3>
            <div className="space-y-2">
              {allColumns.map((column) => (
                <button
                  key={column.key}
                  onClick={() => selectColumnForAction(column, 'delete')}
                  className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded border"
                >
                  {column.name} {column.type === 'predefined' ? '(Built-in)' : '(Custom)'}
                </button>
              ))}
            </div>
            <div className="flex gap-2 justify-end mt-4">
              <button
                onClick={() => {
                  setShowDeleteDialog(false);
                  setActionType(null);
                }}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Column Selection Dialog for Rename */}
      {showRenameDialog && actionType === 'rename' && !selectedColumn && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full max-h-96 overflow-y-auto">
            <h3 className="text-lg font-medium mb-4">Select Column to Rename</h3>
            <div className="space-y-2">
              {allColumns.map((column) => (
                <button
                  key={column.key}
                  onClick={() => selectColumnForAction(column, 'rename')}
                  className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded border"
                >
                  {column.name} {column.type === 'predefined' ? '(Built-in)' : '(Custom)'}
                </button>
              ))}
            </div>
            <div className="flex gap-2 justify-end mt-4">
              <button
                onClick={() => {
                  setShowRenameDialog(false);
                  setActionType(null);
                }}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {showDeleteDialog && selectedColumn && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-medium mb-4">Delete Column</h3>
            <p className="text-gray-600 mb-4">
              Are you sure you want to delete "{selectedColumn.name}"? This action cannot be undone.
            </p>
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => {
                  setShowDeleteDialog(false);
                  setSelectedColumn(null);
                  setActionType(null);
                }}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Rename Dialog */}
      {showRenameDialog && selectedColumn && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-medium mb-4">Rename Column</h3>
            <p className="text-sm text-gray-600 mb-2">Current name: {selectedColumn.name}</p>
            <input
              type="text"
              value={newColumnName}
              onChange={(e) => setNewColumnName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter new column name"
            />
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => {
                  setShowRenameDialog(false);
                  setSelectedColumn(null);
                  setActionType(null);
                  setNewColumnName('');
                }}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmRename}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Rename
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
