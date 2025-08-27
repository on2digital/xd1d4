export interface User {
  id: string;
  tenant_id: string;
  email: string;
  role: 'super_admin' | 'chamber_admin' | 'senior_lawyer' | 'junior_lawyer' | 'clerk' | 'client';
  name: string;
  phone?: string;
  language: 'bn' | 'en';
  telegram_chat_id?: string;
  created_at: string;
  updated_at: string;
}

export interface Tenant {
  id: string;
  name: string;
  plan: 'free' | 'pro' | 'enterprise';
  domain?: string;
  branding?: {
    logo_url?: string;
    primary_color?: string;
    secondary_color?: string;
  };
  created_at: string;
  updated_at: string;
}

export interface Case {
  id: string;
  tenant_id: string;
  case_number: string;
  title: string;
  court_type: 'hc' | 'sc' | 'district' | 'magistrate';
  case_type: string;
  status: 'active' | 'closed' | 'appealed' | 'settled';
  filing_date: string;
  client_id: string;
  assigned_lawyer_id: string;
  next_hearing_at?: string;
  court_room?: string;
  bench_details?: string;
  summary?: string;
  created_at: string;
  updated_at: string;
  client?: Client;
  assigned_lawyer?: User;
}

export interface Client {
  id: string;
  tenant_id: string;
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  billing_info?: any;
  created_at: string;
  updated_at: string;
}

export interface Document {
  id: string;
  tenant_id: string;
  case_id?: string;
  filename: string;
  mime_type: string;
  size: number;
  storage_url: string;
  version: number;
  processed_md?: string;
  ocr_text?: string;
  doc_type: 'pleading' | 'evidence' | 'order' | 'correspondence' | 'other';
  is_processed: boolean;
  uploaded_by: string;
  created_at: string;
  updated_at: string;
}

export interface Task {
  id: string;
  tenant_id: string;
  case_id?: string;
  title: string;
  description?: string;
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assigned_to?: string;
  due_date?: string;
  completed_at?: string;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface TimeEntry {
  id: string;
  tenant_id: string;
  case_id: string;
  user_id: string;
  minutes: number;
  rate: number;
  description: string;
  billable: boolean;
  invoice_id?: string;
  created_at: string;
}

export interface Invoice {
  id: string;
  tenant_id: string;
  client_id: string;
  invoice_number: string;
  issue_date: string;
  due_date: string;
  currency: string;
  subtotal: number;
  tax: number;
  total: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
  created_at: string;
  updated_at: string;
}

export interface Notification {
  id: string;
  tenant_id: string;
  user_id: string;
  type: 'hearing_reminder' | 'task_due' | 'payment_received' | 'document_shared' | 'case_update';
  channel: 'email' | 'sms' | 'telegram' | 'app';
  subject: string;
  content: string;
  sent_at?: string;
  delivery_status: 'pending' | 'sent' | 'delivered' | 'failed';
  related_case_id?: string;
  created_at: string;
}