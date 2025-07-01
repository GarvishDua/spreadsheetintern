import React from 'react';
import { StatusConfig } from '@/types/spreadsheet';

interface StatusBadgeProps {
  status: string;
}

const statusConfigs: Record<string, StatusConfig> = {
  'In-process': {
    label: 'In-process',
    color: '#85640B',
    bgColor: '#FFF3D6'
  },
  'Need to start': {
    label: 'Need to start',
    color: '#64748b',
    bgColor: '#e2e8f0'
  },
  'Complete': {
    label: 'Complete',
    color: '#0A6E3D',
    bgColor: '#D3F2E3'
  },
  'Blocked': {
    label: 'Blocked',
    color: '#C22219',
    bgColor: '#FFE1DE'
  }
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const config = statusConfigs[status] || statusConfigs['Need to start'];
  
  return (
    <div className="justify-center items-center flex gap-2 px-2 py-1 rounded-full" 
         style={{ backgroundColor: config.bgColor }}>
      <div style={{ color: config.color }} className="text-xs font-medium whitespace-nowrap">
        {config.label}
      </div>
    </div>
  );
};
