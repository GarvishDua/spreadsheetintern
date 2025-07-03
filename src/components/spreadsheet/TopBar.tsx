import React from 'react';
import { UserProfile } from './UserProfile';

export const TopBar: React.FC = () => {
  return (
    <header className="justify-between items-center flex w-full gap-[40px_100px] overflow-hidden flex-wrap bg-white px-4 py-2 border-b-[#EEE] border-b border-solid max-md:max-w-full">
      <nav className="self-stretch flex min-w-60 items-center gap-4 justify-center my-auto" aria-label="Breadcrumb">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/5f622799dd4642db9c9f0a428d0ddf1adfa6a185?placeholderIfAbsent=true"
          className="aspect-[1/1] object-contain w-6 self-stretch shrink-0 my-auto"
          alt="Home icon"
        />
        <ol className="self-stretch flex min-w-60 items-center gap-1 my-auto">
          <li className="self-stretch flex items-center gap-2 text-sm text-[#AFAFAF] font-medium whitespace-nowrap leading-none justify-center my-auto">
            <button className="text-[#AFAFAF] self-stretch my-auto hover:text-[#757575] cursor-pointer transition-colors">
              Workspace
            </button>
          </li>
          <li aria-hidden="true">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/d9c77d277da026d074cefd17cb036d4872048116?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
              alt="Breadcrumb separator"
            />
          </li>
          <li className="self-stretch flex items-center gap-2 text-sm text-[#AFAFAF] font-medium leading-none justify-center my-auto">
            <button className="text-[#AFAFAF] self-stretch my-auto hover:text-[#757575] cursor-pointer transition-colors">
              Folder 2
            </button>
          </li>
          <li aria-hidden="true">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/d9c77d277da026d074cefd17cb036d4872048116?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
              alt="Breadcrumb separator"
            />
          </li>
          <li className="self-stretch flex items-center gap-2 justify-center my-auto" aria-current="page">
            <button className="text-[#121212] text-sm font-medium leading-none self-stretch my-auto cursor-pointer">
              Spreadsheet 3
            </button>
            <button className="rounded self-stretch flex min-h-6 items-center gap-2 justify-center w-6 my-auto" aria-label="Edit spreadsheet name">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/496fe36ae7d91955bfe0d05771c55be562f1aec7?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5 self-stretch my-auto"
                alt="Edit icon"
              />
            </button>
          </li>
        </ol>
      </nav>
      
      <div className="self-stretch flex min-w-60 items-center gap-1 font-normal my-auto">
        <div className="items-center self-stretch flex gap-2 overflow-hidden text-xs text-[#757575] leading-none bg-[#F6F6F6] my-auto p-3 rounded-md">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/9947b5891171ed92a4e96ccc517faffa736bd680?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
            alt="Search icon"
          />
          <input
            type="search"
            placeholder="Search within sheet"
            className="text-[#757575] text-ellipsis self-stretch my-auto bg-transparent border-none outline-none"
            aria-label="Search within sheet"
          />
        </div>
        
        <button className="items-center self-stretch flex gap-3 text-[10px] text-[#F6F6F6] font-medium whitespace-nowrap leading-[1.6] w-10 h-10 bg-white my-auto pl-2 pr-0.5 py-2 rounded-lg" aria-label="Notifications">
          <div className="justify-center items-center self-stretch flex min-h-4 w-4 flex-col h-4 bg-[#4B6A4F] my-auto rounded-[100px] border-2 border-solid border-white">
            <span className="text-[#F6F6F6]" aria-label="2 notifications">2</span>
          </div>
        </button>
        
        <UserProfile />
      </div>
    </header>
  );
};
