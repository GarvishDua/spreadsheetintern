import React from 'react';

interface FunctionColumnProps {
  title: string;
  icon: string;
  bgColor: string;
  textColor: string;
  children: React.ReactNode;
}

export const FunctionColumn: React.FC<FunctionColumnProps> = ({ 
  title, 
  icon, 
  bgColor, 
  textColor, 
  children 
}) => {
  return (
    <div className="flex flex-col items-stretch justify-center">
      <div className="justify-center items-center flex min-h-8 w-full gap-2 h-8 px-4" style={{ backgroundColor: bgColor }}>
        <div className="rounded self-stretch flex items-center gap-1 my-auto px-1 py-0.5">
          <img
            src={icon}
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
            alt={`${title} icon`}
          />
          <div className="text-sm font-medium leading-none self-stretch my-auto" style={{ color: textColor }}>
            {title}
          </div>
          <button className="rounded self-stretch flex min-h-5 items-center gap-2 justify-center w-5 my-auto" aria-label={`${title} options`}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/e6bf41f96bef20f87a8cb7396500b8eeca02d9bd?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4 self-stretch my-auto"
              alt="Options icon"
            />
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};
