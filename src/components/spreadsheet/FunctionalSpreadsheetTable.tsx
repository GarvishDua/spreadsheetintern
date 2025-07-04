
import React from 'react';
import { FunctionalTableColumn } from './FunctionalTableColumn';
import { ColumnControls } from './ColumnControls';
import { useSpreadsheet } from '@/hooks/useSpreadsheet';

export const FunctionalSpreadsheetTable: React.FC = () => {
  const { 
    data, 
    selectedCell, 
    updateCell, 
    selectCell, 
    sortData, 
    filterData, 
    getFilteredData,
    addColumn,
    customColumns,
    updateCustomColumnName,
    updateCustomColumnData,
    addRow,
    deleteRow,
    getPredefinedColumnDisplayName,
    hiddenColumns,
    columnWidths,
    navigateCell,
    toggleColumnVisibility,
    updateColumnWidth
  } = useSpreadsheet();

  const filteredData = getFilteredData();

  const getColumnWidth = (columnKey: string, defaultWidth: string) => {
    const customWidth = columnWidths[columnKey];
    return customWidth ? `${customWidth}px` : defaultWidth;
  };

  return (
    <main className="items-stretch flex min-h-[872px] w-full gap-px overflow-x-auto bg-[#F6F6F6] max-md:max-w-full">
      {/* Row numbers column */}
      <div className="w-8 flex-shrink-0 max-md:hidden">
        <div className="fill-white flex min-h-8 w-full h-8" />
        <div className="items-center flex min-h-8 w-8 gap-1 h-8 bg-[#EEE] pl-2 pr-1">
          <div className="self-stretch flex w-full items-center gap-1 flex-1 shrink basis-[0%] my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/c969fc2267a27a202738263f8db89b3de4427c0c?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch my-auto"
              alt="Row selector"
            />
          </div>
        </div>
        {Array.from({ length: Math.max(100, filteredData.length + 20) }, (_, index) => (
          <div key={index} className="justify-center items-center flex w-8 flex-col overflow-hidden text-sm text-[#757575] font-normal whitespace-nowrap text-center leading-none h-8 bg-white px-[3px] border-b border-gray-100">
            <div className="text-[#757575]">{index + 1}</div>
          </div>
        ))}
        {/* Add row button */}
        <button 
          onClick={addRow}
          className="justify-center items-center hover:bg-gray-100 flex w-8 flex-col overflow-hidden h-8 bg-[#F6F6F6] px-[3px] border-b border-gray-100"
          title="Add row"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/5892c516af1fe83227bb32d3fdad70dc5a2d748e?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 self-stretch my-auto"
            alt="Add row"
          />
        </button>
      </div>

      {/* Main columns - no wrapping */}
      <div className="flex items-stretch gap-px h-full min-w-0">
        {/* Data columns */}
        {!hiddenColumns.includes('jobRequest') && (
          <FunctionalTableColumn
            title={getPredefinedColumnDisplayName("jobRequest")}
            field="jobRequest"
            icon="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/b81bcddf685fee52ceedab9ecec89062f32b6aba?placeholderIfAbsent=true"
            width="min-w-60 w-64 flex-shrink-0"
            customWidth={columnWidths.jobRequest}
            data={filteredData}
            type="text"
            selectedCell={selectedCell}
            onUpdateCell={updateCell}
            onSelectCell={selectCell}
            onSort={sortData}
            onFilter={filterData}
            onAddRow={addRow}
            onDeleteRow={deleteRow}
            onNavigateCell={navigateCell}
            onToggleVisibility={toggleColumnVisibility}
            onResizeColumn={updateColumnWidth}
          />
        )}
        
        {!hiddenColumns.includes('submitted') && (
          <FunctionalTableColumn
            title={getPredefinedColumnDisplayName("submitted")}
            field="submitted"
            icon="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/b49eeec444b1234a6d36e5b7250b0a8b3cb37fe8?placeholderIfAbsent=true"
            width={getColumnWidth('submitted', 'w-[124px] flex-shrink-0')}
            customWidth={columnWidths.submitted}
            data={filteredData}
            type="date"
            selectedCell={selectedCell}
            onUpdateCell={updateCell}
            onSelectCell={selectCell}
            onSort={sortData}
            onFilter={filterData}
            onAddRow={addRow}
            onDeleteRow={deleteRow}
            onNavigateCell={navigateCell}
            onToggleVisibility={toggleColumnVisibility}
            onResizeColumn={updateColumnWidth}
          />
        )}
        
        {!hiddenColumns.includes('status') && (
          <FunctionalTableColumn
            title={getPredefinedColumnDisplayName("status")}
            field="status"
            icon="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/ab14ea5932651394d199f5a75d26440d058c3207?placeholderIfAbsent=true"
            width={getColumnWidth('status', 'w-[124px] flex-shrink-0')}
            customWidth={columnWidths.status}
            data={filteredData}
            type="status"
            selectedCell={selectedCell}
            onUpdateCell={updateCell}
            onSelectCell={selectCell}
            onSort={sortData}
            onFilter={filterData}
            onAddRow={addRow}
            onDeleteRow={deleteRow}
            onNavigateCell={navigateCell}
            onToggleVisibility={toggleColumnVisibility}
            onResizeColumn={updateColumnWidth}
          />
        )}
        
        {!hiddenColumns.includes('submitter') && (
          <FunctionalTableColumn
            title={getPredefinedColumnDisplayName("submitter")}
            field="submitter"
            icon="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/6817df46af5bb11d131e74a09a3132b2a58a7ec6?placeholderIfAbsent=true"
            width={getColumnWidth('submitter', 'w-[124px] flex-shrink-0')}
            customWidth={columnWidths.submitter}
            data={filteredData}
            type="text"
            selectedCell={selectedCell}
            onUpdateCell={updateCell}
            onSelectCell={selectCell}
            onSort={sortData}
            onFilter={filterData}
            onAddRow={addRow}
            onDeleteRow={deleteRow}
            onNavigateCell={navigateCell}
            onToggleVisibility={toggleColumnVisibility}
            onResizeColumn={updateColumnWidth}
          />
        )}
        
        {!hiddenColumns.includes('url') && (
          <FunctionalTableColumn
            title={getPredefinedColumnDisplayName("url")}
            field="url"
            icon="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/4c6d2dae59857d909c36383484a7e9049fedd2e1?placeholderIfAbsent=true"
            width={getColumnWidth('url', 'w-[124px] flex-shrink-0')}
            customWidth={columnWidths.url}
            data={filteredData}
            type="url"
            selectedCell={selectedCell}
            onUpdateCell={updateCell}
            onSelectCell={selectCell}
            onSort={sortData}
            onFilter={filterData}
            onAddRow={addRow}
            onDeleteRow={deleteRow}
            onNavigateCell={navigateCell}
            onToggleVisibility={toggleColumnVisibility}
            onResizeColumn={updateColumnWidth}
          />
        )}

        {!hiddenColumns.includes('assigned') && (
          <FunctionalTableColumn
            title={getPredefinedColumnDisplayName("assigned")}
            field="assigned"
            icon="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/1c4ecaa39d623b1b03ed2a7615002f51c0806fe4?placeholderIfAbsent=true"
            width={getColumnWidth('assigned', 'w-[124px] flex-shrink-0')}
            customWidth={columnWidths.assigned}
            data={filteredData}
            type="text"
            bgColor="#E8F0E9"
            textColor="#666C66"
            selectedCell={selectedCell}
            onUpdateCell={updateCell}
            onSelectCell={selectCell}
            onSort={sortData}
            onFilter={filterData}
            onAddRow={addRow}
            onDeleteRow={deleteRow}
            onNavigateCell={navigateCell}
            onToggleVisibility={toggleColumnVisibility}
            onResizeColumn={updateColumnWidth}
          />
        )}

        {!hiddenColumns.includes('priority') && (
          <FunctionalTableColumn
            title={getPredefinedColumnDisplayName("priority")}
            field="priority"
            icon="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/34581e26dbfbba34a69c34509081720fa152bb61?placeholderIfAbsent=true"
            width={getColumnWidth('priority', 'w-[124px] flex-shrink-0')}
            customWidth={columnWidths.priority}
            data={filteredData}
            type="priority"
            bgColor="#EAE3FC"
            textColor="#655C80"
            selectedCell={selectedCell}
            onUpdateCell={updateCell}
            onSelectCell={selectCell}
            onSort={sortData}
            onFilter={filterData}
            onAddRow={addRow}
            onDeleteRow={deleteRow}
            onNavigateCell={navigateCell}
            onToggleVisibility={toggleColumnVisibility}
            onResizeColumn={updateColumnWidth}
          />
        )}
        
        {!hiddenColumns.includes('dueDate') && (
          <FunctionalTableColumn
            title={getPredefinedColumnDisplayName("dueDate")}
            field="dueDate"
            icon="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/b49eeec444b1234a6d36e5b7250b0a8b3cb37fe8?placeholderIfAbsent=true"
            width={getColumnWidth('dueDate', 'w-[124px] flex-shrink-0')}
            customWidth={columnWidths.dueDate}
            data={filteredData}
            type="date"
            bgColor="#EAE3FC"
            textColor="#655C80"
            selectedCell={selectedCell}
            onUpdateCell={updateCell}
            onSelectCell={selectCell}
            onSort={sortData}
            onFilter={filterData}
            onAddRow={addRow}
            onDeleteRow={deleteRow}
            onNavigateCell={navigateCell}
            onToggleVisibility={toggleColumnVisibility}
            onResizeColumn={updateColumnWidth}
          />
        )}

        {!hiddenColumns.includes('estValue') && (
          <FunctionalTableColumn
            title={getPredefinedColumnDisplayName("estValue")}
            field="estValue"
            icon="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/8a41883192674f8b4caa1e387e0ae048ffa42dff?placeholderIfAbsent=true"
            width={getColumnWidth('estValue', 'w-[124px] flex-shrink-0')}
            customWidth={columnWidths.estValue}
            data={filteredData}
            type="currency"
            bgColor="#FFE9E0"
            textColor="#8C6C62"
            selectedCell={selectedCell}
            onUpdateCell={updateCell}
            onSelectCell={selectCell}
            onSort={sortData}
            onFilter={filterData}
            onAddRow={addRow}
            onDeleteRow={deleteRow}
            onNavigateCell={navigateCell}
            onToggleVisibility={toggleColumnVisibility}
            onResizeColumn={updateColumnWidth}
          />
        )}

        {/* Custom columns */}
        {customColumns.map((column, colIndex) => (
          <div key={colIndex} className={getColumnWidth(`custom_${colIndex}`, 'w-[124px] flex-shrink-0')}>
            <div className="flex min-h-8 w-full gap-2 h-8 bg-white py-2" />
            <div className="items-center flex min-h-8 w-full gap-1 h-8 bg-[#EEE] pl-2 pr-1 group">
              <div className="self-stretch flex w-full items-center gap-1 flex-1 shrink basis-[0%] my-auto">
                <input
                  type="text"
                  value={column.name}
                  onChange={(e) => updateCustomColumnName(colIndex, e.target.value)}
                  className="text-[#757575] text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto text-xs font-semibold bg-transparent border-none outline-none"
                  placeholder="Column name"
                />
              </div>
              <ColumnControls
                columnKey={`custom_${colIndex}`}
                isVisible={true}
                width={columnWidths[`custom_${colIndex}`]}
                onToggleVisibility={toggleColumnVisibility}
                onResizeColumn={updateColumnWidth}
              />
            </div>
            {Array.from({ length: Math.max(100, filteredData.length + 20) }, (_, rowIndex) => (
              <div key={rowIndex} className="border-b border-gray-100">
                <div className="justify-center items-center flex min-h-8 w-full gap-2 overflow-hidden text-xs h-8 bg-white px-2">
                  <input
                    type="text"
                    value={column.data[rowIndex] || ''}
                    onChange={(e) => updateCustomColumnData(colIndex, rowIndex, e.target.value)}
                    className="text-[#121212] text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto bg-transparent border-none outline-none"
                    placeholder=""
                    onClick={() => selectCell(rowIndex, `custom_${colIndex}`)}
                  />
                </div>
              </div>
            ))}
            {/* Add row button for this column */}
            <button 
              onClick={addRow}
              className="justify-center items-center hover:bg-gray-100 flex min-h-8 w-full gap-2 overflow-hidden h-8 bg-[#F6F6F6] px-2 border-b border-gray-100"
              title="Add row"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/5892c516af1fe83227bb32d3fdad70dc5a2d748e?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch my-auto"
                alt="Add row"
              />
            </button>
          </div>
        ))}

        {/* Add column button - adjacent to last column */}
        <div className="w-[40px] flex-shrink-0 flex flex-col">
          <div className="flex min-h-8 w-full h-8 bg-white py-2" />
          <button 
            onClick={addColumn}
            className="justify-center items-center hover:bg-gray-100 flex min-h-8 w-full gap-2 overflow-hidden h-8 bg-[#F6F6F6] px-2 border-l border-gray-200"
            title="Add column"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/5892c516af1fe83227bb32d3dfad70dc5a2d748e?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-5 self-stretch my-auto"
              alt="Add column"
            />
          </button>
          {Array.from({ length: Math.max(100, filteredData.length + 20) }, (_, index) => (
            <div key={index} className="flex min-h-8 w-full gap-2 h-8 bg-white py-2 border-b border-gray-100" />
          ))}
          {/* Add row button */}
          <button 
            onClick={addRow}
            className="justify-center items-center hover:bg-gray-100 flex min-h-8 w-full gap-2 overflow-hidden h-8 bg-[#F6F6F6] px-2 border-b border-gray-100"
            title="Add row"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/5892c516af1fe83227bb32d3dfad70dc5a2d748e?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch my-auto"
              alt="Add row"
            />
          </button>
        </div>
      </div>
    </main>
  );
};
