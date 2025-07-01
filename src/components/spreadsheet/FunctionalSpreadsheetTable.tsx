
import React from 'react';
import { FunctionalTableColumn } from './FunctionalTableColumn';
import { FunctionColumn } from './FunctionColumn';
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
    customColumns
  } = useSpreadsheet();

  const filteredData = getFilteredData();

  return (
    <main className="items-stretch flex min-h-[872px] w-full gap-px overflow-hidden flex-wrap bg-[#F6F6F6] max-md:max-w-full">
      {/* Row numbers column */}
      <div className="w-8 max-md:hidden">
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
        {Array.from({ length: Math.max(25, filteredData.length + 5) }, (_, index) => (
          <div key={index} className="justify-center items-center flex w-8 flex-col overflow-hidden text-sm text-[#757575] font-normal whitespace-nowrap text-center leading-none h-8 bg-white px-[3px]">
            <div className="text-[#757575]">{index + 1}</div>
          </div>
        ))}
      </div>

      {/* Main table content */}
      <div className="relative flex min-w-60 items-stretch gap-px h-full max-md:max-w-full">
        {/* Grouped columns header */}
        <div className="items-center absolute z-0 flex min-w-60 min-h-8 w-[631px] gap-2 overflow-hidden text-xs text-[#545454] font-normal leading-none flex-wrap h-8 bg-[#E2E2E2] px-2 py-1 top-0 inset-x-0 max-md:max-w-full">
          <div className="items-center rounded self-stretch flex gap-1 bg-[#EEE] my-auto p-1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/74062749cd139ea98092fe39d5f6b239e9939c6f?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              alt="Link icon"
            />
            <div className="text-[#545454] self-stretch my-auto">Q3 Financial Overview</div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/c100ca763ec4aff47165d43cd2b97ea5344b6eef?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
            alt="External link"
          />
        </div>

        {/* Data columns */}
        <FunctionalTableColumn
          title="Job Request"
          field="jobRequest"
          icon="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/b81bcddf685fee52ceedab9ecec89062f32b6aba?placeholderIfAbsent=true"
          width="z-0 min-w-60 w-64"
          data={filteredData}
          type="text"
          selectedCell={selectedCell}
          onUpdateCell={updateCell}
          onSelectCell={selectCell}
          onSort={sortData}
          onFilter={filterData}
        />
        
        <FunctionalTableColumn
          title="Submitted"
          field="submitted"
          icon="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/b49eeec444b1234a6d36e5b7250b0a8b3cb37fe8?placeholderIfAbsent=true"
          width="z-0 w-[124px]"
          data={filteredData}
          type="date"
          selectedCell={selectedCell}
          onUpdateCell={updateCell}
          onSelectCell={selectCell}
          onSort={sortData}
          onFilter={filterData}
        />
        
        <FunctionalTableColumn
          title="Status"
          field="status"
          icon="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/ab14ea5932651394d199f5a75d26440d058c3207?placeholderIfAbsent=true"
          width="z-0 w-[124px]"
          data={filteredData}
          type="status"
          selectedCell={selectedCell}
          onUpdateCell={updateCell}
          onSelectCell={selectCell}
          onSort={sortData}
          onFilter={filterData}
        />
        
        <FunctionalTableColumn
          title="Submitter"
          field="submitter"
          icon="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/6817df46af5bb11d131e74a09a3132b2a58a7ec6?placeholderIfAbsent=true"
          width="z-0 w-[124px]"
          data={filteredData}
          type="text"
          selectedCell={selectedCell}
          onUpdateCell={updateCell}
          onSelectCell={selectCell}
          onSort={sortData}
          onFilter={filterData}
        />
      </div>

      {/* URL Column */}
      <FunctionalTableColumn
        title="URL"
        field="url"
        icon="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/4c6d2dae59857d909c36383484a7e9049fedd2e1?placeholderIfAbsent=true"
        width="w-[124px]"
        data={filteredData}
        type="url"
        selectedCell={selectedCell}
        onUpdateCell={updateCell}
        onSelectCell={selectCell}
        onSort={sortData}
        onFilter={filterData}
      />

      {/* ABC Function Column - Fixed cell gap issue */}
      <FunctionColumn
        title="ABC"
        icon="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/40afbf69a3542958fa4493f9c6793374bfa26a93?placeholderIfAbsent=true"
        bgColor="#D2E0D4"
        textColor="#505450"
      >
        <FunctionalTableColumn
          title="Assigned"
          field="assigned"
          icon="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/1c4ecaa39d623b1b03ed2a7615002f51c0806fe4?placeholderIfAbsent=true"
          width="w-[124px]"
          data={filteredData}
          type="text"
          bgColor="#E8F0E9"
          textColor="#666C66"
          selectedCell={selectedCell}
          onUpdateCell={updateCell}
          onSelectCell={selectCell}
          onSort={sortData}
          onFilter={filterData}
        />
      </FunctionColumn>

      {/* Answer a question Function Column */}
      <FunctionColumn
        title="Answer a question"
        icon="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/34581e26dbfbba34a69c34509081720fa152bb61?placeholderIfAbsent=true"
        bgColor="#DCCFFC"
        textColor="#463E59"
      >
        <div className="flex w-full items-stretch gap-px text-xs leading-none flex-1 h-full">
          {/* Priority column */}
          <div className="font-semibold whitespace-nowrap flex-1 shrink basis-[0%]">
            <div className="items-center flex min-h-8 w-full gap-1 text-[#655C80] h-8 bg-[#EAE3FC] pl-2 pr-1">
              <div className="self-stretch flex w-full items-center gap-1 flex-1 shrink basis-[0%] my-auto">
                <div className="text-[#655C80] text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto">Priority</div>
              </div>
            </div>
            {filteredData.map((row, index) => (
              <div key={index} className="justify-center items-center flex min-h-8 w-full gap-2 overflow-hidden text-center h-8 bg-white px-2">
                <div className={`text-ellipsis self-stretch my-auto ${
                  row.priority === 'High' ? 'text-[#EF4D44]' : 
                  row.priority === 'Medium' ? 'text-[#C29210]' : 'text-[#1A8CFF]'
                }`}>
                  {row.priority}
                </div>
              </div>
            ))}
            {Array.from({ length: Math.max(0, 19 - filteredData.length) }, (_, index) => (
              <div key={`priority-filler-${index}`} className="flex min-h-8 w-full gap-2 h-8 bg-white py-2" />
            ))}
            <div className="flex min-h-3.5 w-full gap-2 h-8 bg-white py-2" />
          </div>
          
          {/* Due Date column */}
          <div className="text-[#121212] font-normal flex-1 shrink basis-[0%]">
            <div className="items-center flex min-h-8 w-full gap-1 text-[#655C80] font-semibold h-8 bg-[#EAE3FC] pl-2 pr-1">
              <div className="self-stretch flex w-full items-center gap-1 flex-1 shrink basis-[0%] my-auto">
                <div className="text-[#655C80] text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto">Due Date</div>
              </div>
            </div>
            {filteredData.map((row, index) => (
              <div key={index} className="justify-center items-center flex min-h-8 w-full gap-2 overflow-hidden whitespace-nowrap text-right h-8 bg-white px-2">
                <div className="text-[#121212] text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto">{row.dueDate}</div>
              </div>
            ))}
            {Array.from({ length: Math.max(0, 19 - filteredData.length) }, (_, index) => (
              <div key={`date-filler-${index}`} className="flex min-h-8 w-full gap-2 h-8 bg-white py-2" />
            ))}
            <div className="flex min-h-3.5 w-full gap-2 h-8 bg-white py-2" />
          </div>
        </div>
      </FunctionColumn>

      {/* Extract Function Column */}
      <FunctionColumn
        title="Extract"
        icon="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/8a41883192674f8b4caa1e387e0ae048ffa42dff?placeholderIfAbsent=true"
        bgColor="#FAC2AF"
        textColor="#695149"
      >
        <div className="w-full max-w-[124px] text-xs leading-none flex-1">
          <div className="items-center flex min-h-8 w-full gap-1 text-[#8C6C62] font-semibold h-8 bg-[#FFE9E0] pl-2 pr-1">
            <div className="self-stretch flex w-full items-center gap-1 flex-1 shrink basis-[0%] my-auto">
              <div className="text-[#8C6C62] text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto">Est. Value</div>
            </div>
          </div>
          {filteredData.map((row, index) => (
            <div key={index} className="justify-center items-center flex min-h-8 w-full gap-1 overflow-hidden whitespace-nowrap text-right h-8 bg-white px-2">
              <div className="text-[#121212] text-ellipsis font-normal self-stretch flex-1 shrink basis-[0%] my-auto">
                {row.estValue.toLocaleString()}
              </div>
              <div className="text-[#AFAFAF] text-ellipsis font-medium self-stretch my-auto">₹</div>
            </div>
          ))}
          {Array.from({ length: Math.max(0, 19 - filteredData.length) }, (_, index) => (
            <div key={`value-filler-${index}`} className="flex min-h-8 w-full gap-2 h-8 bg-white py-2" />
          ))}
          <div className="flex min-h-3.5 w-full gap-2 h-8 bg-white py-2" />
        </div>
      </FunctionColumn>

      {/* Custom columns */}
      {customColumns.map((column, colIndex) => (
        <div key={colIndex} className="w-[124px]">
          <div className="flex min-h-8 w-full gap-2 h-8 bg-white py-2" />
          <div className="items-center flex min-h-8 w-full gap-1 h-8 bg-[#EEE] pl-2 pr-1">
            <div className="self-stretch flex w-full items-center gap-1 flex-1 shrink basis-[0%] my-auto">
              <div className="text-[#757575] text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto text-xs font-semibold">
                {column.name}
              </div>
            </div>
          </div>
          {filteredData.map((_, rowIndex) => (
            <div key={rowIndex} className="justify-center items-center flex min-h-8 w-full gap-2 overflow-hidden text-xs h-8 bg-white px-2">
              <div className="text-[#121212] text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto">
                {column.data[rowIndex] || ''}
              </div>
            </div>
          ))}
          {Array.from({ length: Math.max(0, 19 - filteredData.length) }, (_, index) => (
            <div key={`custom-filler-${index}`} className="flex min-h-8 w-full gap-2 h-8 bg-white py-2" />
          ))}
          <div className="flex min-h-3.5 w-full gap-2 h-8 bg-white py-2" />
        </div>
      ))}

      {/* Add column button - adjacent to last column */}
      <div className="w-[40px] flex flex-col">
        <div className="flex min-h-8 w-full h-8 bg-white py-2" />
        <button 
          onClick={addColumn}
          className="justify-center items-center hover:bg-gray-100 flex min-h-8 w-full gap-2 overflow-hidden h-8 bg-[#F6F6F6] px-2 border-l border-gray-200"
          title="Add column"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/5892c516af1fe83227bb32d3fdad70dc5a2d748e?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-5 self-stretch my-auto"
            alt="Add column"
          />
        </button>
        {Array.from({ length: Math.max(24, filteredData.length + 5) }, (_, index) => (
          <div key={index} className="flex min-h-8 w-full gap-2 h-8 bg-white py-2" />
        ))}
        <div className="flex min-h-3.5 w-full gap-2 h-8 bg-white py-2" />
      </div>
    </main>
  );
};
