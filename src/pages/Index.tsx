
import React from 'react';
import { TopBar } from '@/components/spreadsheet/TopBar';
import { FunctionalToolbar } from '@/components/spreadsheet/FunctionalToolbar';
import { FunctionalSpreadsheetTable } from '@/components/spreadsheet/FunctionalSpreadsheetTable';
import { ViewTabs } from '@/components/spreadsheet/ViewTabs';
import { useSpreadsheet } from '@/hooks/useSpreadsheet';

const Index = () => {
  const { 
    addRow, 
    exportToCSV, 
    addColumn, 
    deleteCustomColumn,
    deletePredefinedColumn,
    renameCustomColumn,
    renamePredefinedColumn,
    sortData,
    filterData,
    getAllColumns,
    isToolbarVisible,
    toggleToolbar
  } = useSpreadsheet();

  const handleImport = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      console.log('Imported file content:', text);
    };
    reader.readAsText(file);
  };

  const handleSort = (field: string, direction: 'asc' | 'desc') => {
    sortData(field as any);
  };

  const handleFilter = (field: string, value: string) => {
    filterData(field, value);
  };

  const handleShowHideFields = () => {
    console.log('Show hide fields functionality');
    // This could open a modal or dropdown to show/hide columns
  };

  const handleShowSort = () => {
    console.log('Show sort functionality');
    // This could open a sort dialog
  };

  const handleShowFilter = () => {
    console.log('Show filter functionality');
    // This could open a filter dialog
  };

  const handleShowCellView = () => {
    console.log('Show cell view functionality'); 
    // This could change the cell view mode
  };

  return (
    <div className="flex overflow-hidden bg-white min-h-screen">
      <div className="w-[1440px] overflow-hidden bg-slate-50 max-md:max-w-full">
        <TopBar />
        <FunctionalToolbar 
          onAddRow={addRow}
          onExport={exportToCSV}
          onImport={handleImport}
          onAddColumn={addColumn}
          onDeleteCustomColumn={deleteCustomColumn}
          onDeletePredefinedColumn={deletePredefinedColumn}
          onRenameCustomColumn={renameCustomColumn}
          onRenamePredefinedColumn={renamePredefinedColumn}
          onSort={handleSort}
          onFilter={handleFilter}
          allColumns={getAllColumns()}
          isVisible={isToolbarVisible}
          onToggleVisibility={toggleToolbar}
          onShowHideFields={handleShowHideFields}
          onShowSort={handleShowSort}
          onShowFilter={handleShowFilter}
          onShowCellView={handleShowCellView}
        />
        <FunctionalSpreadsheetTable />
        <ViewTabs />
      </div>
    </div>
  );
};

export default Index;
