
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
    deleteColumn, 
    renameColumn, 
    customColumns 
  } = useSpreadsheet();

  const handleImport = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      console.log('Imported file content:', text);
    };
    reader.readAsText(file);
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
          onDeleteColumn={deleteColumn}
          onRenameColumn={renameColumn}
          customColumnsCount={customColumns.length}
        />
        <FunctionalSpreadsheetTable />
        <ViewTabs />
      </div>
    </div>
  );
};

export default Index;
