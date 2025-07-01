import React from 'react';

export const Toolbar: React.FC = () => {
  return (
    <div className="items-center flex w-full gap-2 text-sm leading-none flex-wrap bg-white px-2 py-1.5 border-b-[#EEE] border-b border-solid max-md:max-w-full">
      <button className="justify-center items-center rounded self-stretch flex gap-1 text-[#121212] font-normal bg-white my-auto p-2">
        <span className="text-[#121212] self-stretch my-auto">Tool bar</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/538101e69dc18c456b432d6017bdc7f9822d1094?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
          alt="Dropdown arrow"
        />
      </button>
      
      <div className="self-stretch flex w-px shrink-0 h-6 bg-[#EEE] my-auto" role="separator" />
      
      <div className="self-stretch flex min-w-60 items-center gap-1 text-[#121212] font-normal flex-wrap flex-1 shrink basis-4 my-auto max-md:max-w-full">
        <button className="items-center self-stretch flex gap-1 bg-white my-auto pl-2 pr-3 py-2 rounded-md">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/9860df1c6a9687811ba2d20e2a65d34ead28bdc7?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            alt="Hide fields icon"
          />
          <span className="text-[#121212] self-stretch my-auto">Hide fields</span>
        </button>
        
        <button className="items-center self-stretch flex gap-1 whitespace-nowrap bg-white my-auto pl-2 pr-3 py-2 rounded-md">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/dd2173c3d4555e1e9d82cf5b4d8b42407f316503?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            alt="Sort icon"
          />
          <span className="text-[#121212] self-stretch my-auto">Sort</span>
        </button>
        
        <button className="items-center self-stretch flex gap-1 whitespace-nowrap bg-white my-auto pl-2 pr-3 py-2 rounded-md">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/9afd84bb9e48fe5d8497bad0e3838204b2a70d22?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            alt="Filter icon"
          />
          <span className="text-[#121212] self-stretch my-auto">Filter</span>
        </button>
        
        <button className="items-center self-stretch flex gap-1 bg-white my-auto pl-2 pr-3 py-2 rounded-md">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/e64a7381d31dbd01717c8617015775a5ba7a76b1?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            alt="Cell view icon"
          />
          <span className="text-[#121212] self-stretch my-auto">Cell view</span>
        </button>
      </div>
      
      <div className="self-stretch flex min-w-60 items-center gap-2 my-auto max-md:max-w-full">
        <div className="self-stretch flex min-w-60 gap-2 text-[#545454] font-normal whitespace-nowrap my-auto">
          <button className="items-center border flex gap-1 bg-white pl-2 pr-3 py-2 rounded-md border-solid border-[#EEE]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/b63cb03c6944d84770befa29adaf796dc81dadc7?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
              alt="Import icon"
            />
            <span className="text-[#545454] self-stretch my-auto">Import</span>
          </button>
          
          <button className="items-center border flex gap-1 bg-white pl-2 pr-3 py-2 rounded-md border-solid border-[#EEE]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/85fd3a9cc95b2c3e53edeba77fd2b0125eb78f03?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
              alt="Export icon"
            />
            <span className="text-[#545454] self-stretch my-auto">Export</span>
          </button>
          
          <button className="items-center border flex gap-1 bg-white pl-2 pr-3 py-2 rounded-md border-solid border-[#EEE]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/6fcb33bb6f655a5cf2f103edb220bc353f3d5c90?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
              alt="Share icon"
            />
            <span className="text-[#545454] self-stretch my-auto">Share</span>
          </button>
        </div>
        
        <button className="justify-center items-center self-stretch flex gap-1 overflow-hidden text-white font-medium bg-[#4B6A4F] my-auto px-6 py-2 rounded-md max-md:px-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/94c3e57cef7c076e9385a016fcc1065fa509c355?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            alt="New action icon"
          />
          <span className="text-white text-ellipsis self-stretch my-auto">New Action</span>
        </button>
      </div>
    </div>
  );
};
