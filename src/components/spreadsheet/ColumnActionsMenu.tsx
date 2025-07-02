
import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface ColumnActionsMenuProps {
  onAddColumn: () => void;
  onDeleteColumn: (columnIndex: number) => void;
  onRenameColumn: (columnIndex: number, newName: string) => void;
  customColumnsCount: number;
}

export const ColumnActionsMenu: React.FC<ColumnActionsMenuProps> = ({
  onAddColumn,
  onDeleteColumn,
  onRenameColumn,
  customColumnsCount
}) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showRenameDialog, setShowRenameDialog] = useState(false);
  const [selectedColumnIndex, setSelectedColumnIndex] = useState<number>(0);
  const [newColumnName, setNewColumnName] = useState('');

  const handleDeleteColumn = (columnIndex: number) => {
    setSelectedColumnIndex(columnIndex);
    setShowDeleteDialog(true);
  };

  const handleRenameColumn = (columnIndex: number) => {
    setSelectedColumnIndex(columnIndex);
    setNewColumnName(`Column ${columnIndex + 1}`);
    setShowRenameDialog(true);
  };

  const confirmDelete = () => {
    onDeleteColumn(selectedColumnIndex);
    setShowDeleteDialog(false);
  };

  const confirmRename = () => {
    onRenameColumn(selectedColumnIndex, newColumnName);
    setShowRenameDialog(false);
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
          {customColumnsCount > 0 && (
            <>
              <DropdownMenuItem className="cursor-pointer">
                <div className="w-full">
                  <div className="font-medium text-gray-700 mb-1">Delete Column</div>
                  {Array.from({ length: customColumnsCount }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDeleteColumn(index)}
                      className="block w-full text-left px-2 py-1 text-sm hover:bg-gray-100 rounded"
                    >
                      Delete Column {index + 1}
                    </button>
                  ))}
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <div className="w-full">
                  <div className="font-medium text-gray-700 mb-1">Rename Column</div>
                  {Array.from({ length: customColumnsCount }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => handleRenameColumn(index)}
                      className="block w-full text-left px-2 py-1 text-sm hover:bg-gray-100 rounded"
                    >
                      Rename Column {index + 1}
                    </button>
                  ))}
                </div>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Delete Confirmation Dialog */}
      {showDeleteDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-medium mb-4">Delete Column</h3>
            <p className="text-gray-600 mb-4">
              Are you sure you want to delete Column {selectedColumnIndex + 1}? This action cannot be undone.
            </p>
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setShowDeleteDialog(false)}
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
      {showRenameDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-medium mb-4">Rename Column</h3>
            <input
              type="text"
              value={newColumnName}
              onChange={(e) => setNewColumnName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter new column name"
            />
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setShowRenameDialog(false)}
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
