export interface SpreadsheetData {
  id: number;
  jobRequest: string;
  submitted: string;
  status: 'In-process' | 'Need to start' | 'Complete' | 'Blocked';
  submitter: string;
  url: string;
  assigned: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  estValue: number;
}

export interface StatusConfig {
  label: string;
  color: string;
  bgColor: string;
}

export interface ColumnConfig {
  key: string;
  title: string;
  icon: string;
  width: string;
  type: 'text' | 'date' | 'status' | 'url' | 'currency';
}

export interface FunctionColumnConfig {
  title: string;
  icon: string;
  bgColor: string;
  textColor: string;
  columns: ColumnConfig[];
}
