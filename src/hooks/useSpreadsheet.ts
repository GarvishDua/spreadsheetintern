
import { useState, useCallback } from 'react';
import { SpreadsheetData } from '@/types/spreadsheet';

export interface Cell {
  value: string | number;
  formula?: string;
  type: 'text' | 'number' | 'formula';
}

export interface SpreadsheetState {
  data: SpreadsheetData[];
  selectedCell: { row: number; col: string } | null;
  sortConfig: { key: string; direction: 'asc' | 'desc' } | null;
  filterConfig: { [key: string]: string };
  customColumns: { name: string; data: string[] }[];
  hiddenColumns: string[];
  predefinedColumnNames: { [key: string]: string };
}

// Define predefined columns that can be managed
export const PREDEFINED_COLUMNS = [
  { key: 'jobRequest', name: 'Job Request' },
  { key: 'submitted', name: 'Submitted' },
  { key: 'status', name: 'Status' },
  { key: 'submitter', name: 'Submitter' },
  { key: 'url', name: 'URL' },
  { key: 'assigned', name: 'ABC' },
  { key: 'priority', name: 'Priority' },
  { key: 'dueDate', name: 'Due Date' },
  { key: 'estValue', name: 'Est. Value' }
];

export const useSpreadsheet = () => {
  const [state, setState] = useState<SpreadsheetState>({
    data: [
      {
        id: 1,
        jobRequest: 'Launch social media campaign for product XYZ',
        submitted: '15-11-2024',
        status: 'In-process',
        submitter: 'Aisha Patel',
        url: 'www.aishapatel.com',
        assigned: 'Sophie Choudhury',
        priority: 'Medium',
        dueDate: '20-11-2024',
        estValue: 6200000
      },
      {
        id: 2,
        jobRequest: 'Update press kit for company redesign',
        submitted: '28-10-2024',
        status: 'Need to start',
        submitter: 'Irfan Khan',
        url: 'www.irfankhanportfolio.com',
        assigned: 'Tejas Pandey',
        priority: 'High',
        dueDate: '30-10-2024',
        estValue: 3500000
      },
      {
        id: 3,
        jobRequest: 'Finalize user testing feedback for app update',
        submitted: '05-12-2024',
        status: 'In-process',
        submitter: 'Mark Johnson',
        url: 'www.markjohnsondesigns.com',
        assigned: 'Rachel Lee',
        priority: 'Medium',
        dueDate: '10-12-2024',
        estValue: 4750000
      },
      {
        id: 4,
        jobRequest: 'Design new features for the website',
        submitted: '10-01-2025',
        status: 'Complete',
        submitter: 'Emily Green',
        url: 'www.emilygreenart.com',
        assigned: 'Tom Wright',
        priority: 'Low',
        dueDate: '15-01-2025',
        estValue: 5900000
      },
      {
        id: 5,
        jobRequest: 'Prepare financial report for Q4',
        submitted: '25-01-2025',
        status: 'Blocked',
        submitter: 'Jessica Brown',
        url: 'www.jessicabrowncreative.com',
        assigned: 'Kevin Smith',
        priority: 'Low',
        dueDate: '30-01-2025',
        estValue: 2800000
      }
    ],
    selectedCell: null,
    sortConfig: null,
    filterConfig: {},
    customColumns: [],
    hiddenColumns: [],
    predefinedColumnNames: {}
  });

  const updateCell = useCallback((rowIndex: number, field: keyof SpreadsheetData, value: string | number) => {
    setState(prev => ({
      ...prev,
      data: prev.data.map((row, index) => 
        index === rowIndex ? { ...row, [field]: value } : row
      )
    }));
  }, []);

  const addRow = useCallback(() => {
    const newRow: SpreadsheetData = {
      id: Math.max(...state.data.map(r => r.id)) + 1,
      jobRequest: '',
      submitted: new Date().toLocaleDateString('en-GB'),
      status: 'Need to start',
      submitter: '',
      url: '',
      assigned: '',
      priority: 'Medium',
      dueDate: '',
      estValue: 0
    };
    
    setState(prev => ({
      ...prev,
      data: [...prev.data, newRow],
      customColumns: prev.customColumns.map(col => ({
        ...col,
        data: [...col.data, '']
      }))
    }));
  }, [state.data]);

  const addColumn = useCallback(() => {
    const columnName = `Column ${state.customColumns.length + 1}`;
    const newColumn = Array(Math.max(100, state.data.length + 20)).fill('');
    
    setState(prev => ({
      ...prev,
      customColumns: [...prev.customColumns, { name: columnName, data: newColumn }]
    }));
  }, [state.customColumns.length, state.data.length]);

  const updateCustomColumnName = useCallback((columnIndex: number, newName: string) => {
    setState(prev => ({
      ...prev,
      customColumns: prev.customColumns.map((col, index) => 
        index === columnIndex ? { ...col, name: newName } : col
      )
    }));
  }, []);

  const updateCustomColumnData = useCallback((columnIndex: number, rowIndex: number, value: string) => {
    setState(prev => ({
      ...prev,
      customColumns: prev.customColumns.map((col, index) => 
        index === columnIndex 
          ? { 
              ...col, 
              data: col.data.map((data, dataIndex) => {
                if (dataIndex === rowIndex) return value;
                return data;
              })
            }
          : col
      )
    }));
  }, []);

  const deleteCustomColumn = useCallback((columnIndex: number) => {
    setState(prev => ({
      ...prev,
      customColumns: prev.customColumns.filter((_, index) => index !== columnIndex)
    }));
  }, []);

  const deletePredefinedColumn = useCallback((columnKey: string) => {
    setState(prev => ({
      ...prev,
      hiddenColumns: [...prev.hiddenColumns, columnKey]
    }));
  }, []);

  const renamePredefinedColumn = useCallback((columnKey: string, newName: string) => {
    setState(prev => ({
      ...prev,
      predefinedColumnNames: {
        ...prev.predefinedColumnNames,
        [columnKey]: newName
      }
    }));
  }, []);

  const renameCustomColumn = useCallback((columnIndex: number, newName: string) => {
    updateCustomColumnName(columnIndex, newName);
  }, [updateCustomColumnName]);

  const getAllColumns = useCallback(() => {
    const predefinedCols = PREDEFINED_COLUMNS
      .filter(col => !state.hiddenColumns.includes(col.key))
      .map(col => ({ 
        ...col, 
        name: state.predefinedColumnNames[col.key] || col.name,
        type: 'predefined' as const 
      }));
    
    const customCols = state.customColumns.map((col, index) => ({
      key: `custom_${index}`,
      name: col.name,
      type: 'custom' as const,
      index
    }));

    return [...predefinedCols, ...customCols];
  }, [state.hiddenColumns, state.customColumns, state.predefinedColumnNames]);

  const deleteRow = useCallback((rowIndex: number) => {
    setState(prev => ({
      ...prev,
      data: prev.data.filter((_, index) => index !== rowIndex),
      customColumns: prev.customColumns.map(col => ({
        ...col,
        data: col.data.filter((_, index) => index !== rowIndex)
      }))
    }));
  }, []);

  const sortData = useCallback((key: keyof SpreadsheetData) => {
    setState(prev => {
      const direction = prev.sortConfig?.key === key && prev.sortConfig.direction === 'asc' ? 'desc' : 'asc';
      const sortedData = [...prev.data].sort((a, b) => {
        if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
        if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
        return 0;
      });
      
      return {
        ...prev,
        data: sortedData,
        sortConfig: { key: key as string, direction }
      };
    });
  }, []);

  const filterData = useCallback((field: string, value: string) => {
    setState(prev => ({
      ...prev,
      filterConfig: { ...prev.filterConfig, [field]: value }
    }));
  }, []);

  const getFilteredData = useCallback(() => {
    let filtered = state.data;
    
    Object.entries(state.filterConfig).forEach(([field, value]) => {
      if (value) {
        filtered = filtered.filter(row => 
          String(row[field as keyof SpreadsheetData]).toLowerCase().includes(value.toLowerCase())
        );
      }
    });
    
    return filtered;
  }, [state.data, state.filterConfig]);

  const selectCell = useCallback((row: number, col: string) => {
    setState(prev => ({
      ...prev,
      selectedCell: { row, col }
    }));
  }, []);

  const exportToCSV = useCallback(() => {
    const headers = Object.keys(state.data[0] || {});
    const csvContent = [
      headers.join(','),
      ...state.data.map(row => headers.map(header => `"${row[header as keyof SpreadsheetData]}"`).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'spreadsheet.csv';
    a.click();
    URL.revokeObjectURL(url);
  }, [state.data]);

  const getPredefinedColumnDisplayName = useCallback((columnKey: string) => {
    return state.predefinedColumnNames[columnKey] || PREDEFINED_COLUMNS.find(col => col.key === columnKey)?.name || columnKey;
  }, [state.predefinedColumnNames]);

  return {
    ...state,
    updateCell,
    addRow,
    addColumn,
    updateCustomColumnName,
    updateCustomColumnData,
    deleteCustomColumn,
    deletePredefinedColumn,
    renamePredefinedColumn,
    renameCustomColumn,
    deleteRow,
    sortData,
    filterData,
    getFilteredData,
    selectCell,
    exportToCSV,
    getAllColumns,
    getPredefinedColumnDisplayName
  };
};
