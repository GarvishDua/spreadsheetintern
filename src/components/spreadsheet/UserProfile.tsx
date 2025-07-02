import React, { useState, useRef, useEffect } from 'react';

export const UserProfile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Mock user data - in real app this would come from auth context
  const user = {
    name: 'John Doe',
    email: 'john.doe@companyname.com',
    avatar: 'https://cdn.builder.io/api/v1/image/assets/0aed864de5054c59beaee32239f10d33/0de300cd80ed943f24f32f49e23c436dcc49d242?placeholderIfAbsent=true'
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMenuClick = (action: string) => {
    console.log(`${action} clicked`);
    setIsOpen(false);
    // In real app, implement actual functionality
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="items-center flex gap-2 bg-white hover:bg-gray-50 rounded-lg p-1.5 transition-colors"
      >
        <img
          src={user.avatar}
          className="aspect-[1] object-contain w-7 h-7 rounded-full"
          alt="User profile picture"
        />
        <div className="text-left w-14 max-w-[120px]">
          <div className="text-[#121212] text-xs leading-none truncate">{user.name}</div>
          <div className="text-[#757575] text-[10px] leading-[1.2] truncate">
            {user.email}
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-[1000] min-w-52">
          <div className="p-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <img
                src={user.avatar}
                className="w-10 h-10 rounded-full"
                alt="User profile"
              />
              <div>
                <div className="font-medium text-sm text-gray-900">{user.name}</div>
                <div className="text-xs text-gray-500">{user.email}</div>
              </div>
            </div>
          </div>
          
          <div className="py-1">
            <button
              onClick={() => handleMenuClick('Account')}
              className="w-full px-4 py-2 text-sm text-left hover:bg-gray-50 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Account
            </button>
            
            <button
              onClick={() => handleMenuClick('Settings')}
              className="w-full px-4 py-2 text-sm text-left hover:bg-gray-50 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </button>

            <button
              onClick={() => handleMenuClick('Help & feedback')}
              className="w-full px-4 py-2 text-sm text-left hover:bg-gray-50 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Help & feedback
            </button>

            <button
              onClick={() => handleMenuClick('Privacy Policy')}
              className="w-full px-4 py-2 text-sm text-left hover:bg-gray-50 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Privacy Policy
            </button>

            <button
              onClick={() => handleMenuClick('Terms of Service')}
              className="w-full px-4 py-2 text-sm text-left hover:bg-gray-50 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Terms of Service
            </button>
            
            <div className="border-t border-gray-100 my-1"></div>
            
            <button
              onClick={() => handleMenuClick('Sign out')}
              className="w-full px-4 py-2 text-sm text-left hover:bg-gray-50 flex items-center gap-2 text-red-600"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
