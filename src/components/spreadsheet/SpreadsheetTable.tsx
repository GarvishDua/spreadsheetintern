import React from 'react';
import { TableColumn } from './TableColumn';
import { FunctionColumn } from './FunctionColumn';

const jobRequestData = [
  'Launch social media campaign for product XYZ',
  'Update press kit for company redesign',
  'Finalize user testing feedback for app update',
  'Design new features for the website',
  'Prepare financial report for Q4'
];

const submittedData = [
  '15-11-2024',
  '28-10-2024',
  '05-12-2024',
  '10-01-2025',
  '25-01-2025'
];

const statusData = [
  'In-process',
  'Need to start',
  'In-process',
  'Complete',
  'Blocked'
];

const submitterData = [
  'Aisha Patel',
  'Irfan Khan',
  'Mark Johnson',
  'Emily Green',
  'Jessica Brown'
];

const urlData = [
  'www.aishapatel.com',
  'www.irfankhanportfolio.com',
  'www.markjohnsondesigns.com',
  'www.emilygreenart.com',
  'www.jessicabrowncreative.com'
];

const assignedData = [
  'Sophie Choudhury',
  'Tejas Pandey',
  'Rachel Lee',
  'Tom Wright',
  'Kevin Smith'
];

const priorityData = ['Medium', 'High', 'Medium', 'Low', 'Low'];
const dueDateData = ['20-11-2024', '30-10-2024', '10-12-2024', '15-01-2025', '30-01-2025'];
const estValueData = [6200000, 3500000, 4750000, 5900000, 2800000];

export const SpreadsheetTable: React.FC = () => {
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
        {Array.from({ length: 25 }, (_, index) => (
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
        <TableColumn
          title="Job Request"
          icon="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/b81bcddf685fee52ceedab9ecec89062f32b6aba?placeholderIfAbsent=true"
          width="z-0 min-w-60 w-64"
          data={jobRequestData}
          type="text"
        />
        
        <TableColumn
          title="Submitted"
          icon="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/b49eeec444b1234a6d36e5b7250b0a8b3cb37fe8?placeholderIfAbsent=true"
          width="z-0 w-[124px]"
          data={submittedData}
          type="date"
        />
        
        <TableColumn
          title="Status"
          icon="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/ab14ea5932651394d199f5a75d26440d058c3207?placeholderIfAbsent=true"
          width="z-0 w-[124px]"
          data={statusData}
          type="status"
        />
        
        <TableColumn
          title="Submitter"
          icon="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/6817df46af5bb11d131e74a09a3132b2a58a7ec6?placeholderIfAbsent=true"
          width="z-0 w-[124px]"
          data={submitterData}
          type="text"
        />
      </div>

      {/* URL Column */}
      <TableColumn
        title="URL"
        icon="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/4c6d2dae59857d909c36383484a7e9049fedd2e1?placeholderIfAbsent=true"
        width="w-[124px]"
        data={urlData}
        type="url"
      />

      {/* ABC Function Column */}
      <div className="w-[124px]">
        <div className="justify-center items-center flex min-h-8 w-full gap-2 h-8 bg-[#D2E0D4] px-4">
          <div className="rounded self-stretch flex items-center gap-1 my-auto px-1 py-0.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/40afbf69a3542958fa4493f9c6793374bfa26a93?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              alt="ABC function icon"
            />
            <div className="text-[#505450] text-sm font-medium leading-none self-stretch my-auto">ABC</div>
            <button className="rounded self-stretch flex min-h-5 items-center gap-2 justify-center w-5 my-auto" aria-label="ABC function options">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/740b25ecb99bbb440cf728c16b4c9edbbd4f2036?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-4 self-stretch my-auto"
                alt="Options icon"
              />
            </button>
          </div>
        </div>
        
        <TableColumn
          title="Assigned"
          icon="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/1c4ecaa39d623b1b03ed2a7615002f51c0806fe4?placeholderIfAbsent=true"
          width="w-full max-w-[124px]"
          data={assignedData}
          type="text"
          bgColor="#E8F0E9"
          textColor="#666C66"
        />
      </div>

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
            {priorityData.map((priority, index) => (
              <div key={index} className="justify-center items-center flex min-h-8 w-full gap-2 overflow-hidden text-center h-8 bg-white px-2">
                <div className={`text-ellipsis self-stretch my-auto ${
                  priority === 'High' ? 'text-[#EF4D44]' : 
                  priority === 'Medium' ? 'text-[#C29210]' : 'text-[#1A8CFF]'
                }`}>
                  {priority}
                </div>
              </div>
            ))}
            {Array.from({ length: 19 }, (_, index) => (
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
            {dueDateData.map((date, index) => (
              <div key={index} className="justify-center items-center flex min-h-8 w-full gap-2 overflow-hidden whitespace-nowrap text-right h-8 bg-white px-2">
                <div className="text-[#121212] text-ellipsis self-stretch flex-1 shrink basis-[0%] my-auto">{date}</div>
              </div>
            ))}
            {Array.from({ length: 19 }, (_, index) => (
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
          {estValueData.map((value, index) => (
            <div key={index} className="justify-center items-center flex min-h-8 w-full gap-1 overflow-hidden whitespace-nowrap text-right h-8 bg-white px-2">
              <div className="text-[#121212] text-ellipsis font-normal self-stretch flex-1 shrink basis-[0%] my-auto">
                {value.toLocaleString()}
              </div>
              <div className="text-[#AFAFAF] text-ellipsis font-medium self-stretch my-auto">₹</div>
            </div>
          ))}
          {Array.from({ length: 19 }, (_, index) => (
            <div key={`value-filler-${index}`} className="flex min-h-8 w-full gap-2 h-8 bg-white py-2" />
          ))}
          <div className="flex min-h-3.5 w-full gap-2 h-8 bg-white py-2" />
        </div>
      </FunctionColumn>

      {/* Add column */}
      <div className="border overflow-hidden w-[124px] border-dashed border-[#CBCBCB]">
        <div className="justify-center items-center flex min-h-8 w-full gap-2 overflow-hidden h-8 bg-[#EEE] px-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/5892c516af1fe83227bb32d3fdad70dc5a2d748e?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-5 self-stretch my-auto"
            alt="Add column"
          />
        </div>
        {Array.from({ length: 25 }, (_, index) => (
          <div key={index} className="flex min-h-8 w-full gap-2 h-8 bg-white py-2" />
        ))}
        <div className="flex min-h-3.5 w-full gap-2 h-8 bg-white py-2" />
      </div>
    </main>
  );
};
