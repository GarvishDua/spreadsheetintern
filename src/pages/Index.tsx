import React from 'react';
import { TopBar } from '@/components/spreadsheet/TopBar';
import { Toolbar } from '@/components/spreadsheet/Toolbar';
import { SpreadsheetTable } from '@/components/spreadsheet/SpreadsheetTable';
import { ViewTabs } from '@/components/spreadsheet/ViewTabs';

const Index = () => {
  return (
    <div className="flex overflow-hidden bg-white min-h-screen">
      <div className="w-[1440px] overflow-hidden bg-slate-50 max-md:max-w-full">
        <TopBar />
        <Toolbar />
        <SpreadsheetTable />
        <ViewTabs />
      </div>
    </div>
  );
};

export default Index;
