import React from 'react';

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
            <span className="text-[#AFAFAF] self-stretch my-auto">Workspace</span>
          </li>
          <li aria-hidden="true">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/d9c77d277da026d074cefd17cb036d4872048116?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
              alt="Breadcrumb separator"
            />
          </li>
          <li className="self-stretch flex items-center gap-2 text-sm text-[#AFAFAF] font-medium leading-none justify-center my-auto">
            <span className="text-[#AFAFAF] self-stretch my-auto">Folder 2</span>
          </li>
          <li aria-hidden="true">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/d9c77d277da026d074cefd17cb036d4872048116?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
              alt="Breadcrumb separator"
            />
          </li>
          <li className="self-stretch flex items-center gap-2 justify-center my-auto" aria-current="page">
            <span className="text-[#121212] text-sm font-medium leading-none self-stretch my-auto">
              Spreadsheet 3
            </span>
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
        
        <div className="items-center self-stretch flex gap-2 bg-white my-auto pl-2 pr-3 py-1.5 rounded-lg">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/0de300cd80ed943f24f32f49e23c436dcc49d242?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-7 self-stretch shrink-0 my-auto rounded-[50%]"
            alt="User profile picture"
          />
          <div className="self-stretch w-14 max-w-[120px] my-auto">
            <div className="text-[#121212] text-xs leading-none">John Doe</div>
            <div className="text-[#757575] text-ellipsis text-[10px] leading-[1.2]">
              john.doe@companyname.com
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
