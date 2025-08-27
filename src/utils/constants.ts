export const USER_ROLES = {
  SUPER_ADMIN: 'super_admin',
  CHAMBER_ADMIN: 'chamber_admin',
  SENIOR_LAWYER: 'senior_lawyer',
  JUNIOR_LAWYER: 'junior_lawyer',
  CLERK: 'clerk',
  CLIENT: 'client',
} as const;

export const CASE_STATUSES = {
  ACTIVE: 'active',
  CLOSED: 'closed',
  APPEALED: 'appealed',
  SETTLED: 'settled',
} as const;

export const COURT_TYPES = {
  HC: 'hc',
  SC: 'sc',
  DISTRICT: 'district',
  MAGISTRATE: 'magistrate',
  TRIBUNAL: 'tribunal',
} as const;

export const DOCUMENT_TYPES = {
  PLEADING: 'pleading',
  EVIDENCE: 'evidence',
  ORDER: 'order',
  CORRESPONDENCE: 'correspondence',
  OTHER: 'other',
} as const;

export const NOTIFICATION_TYPES = {
  HEARING_REMINDER: 'hearing_reminder',
  TASK_DUE: 'task_due',
  PAYMENT_RECEIVED: 'payment_received',
  DOCUMENT_SHARED: 'document_shared',
  CASE_UPDATE: 'case_update',
} as const;

export const NOTIFICATION_CHANNELS = {
  EMAIL: 'email',
  SMS: 'sms',
  TELEGRAM: 'telegram',
  APP: 'app',
} as const;

export const TASK_STATUSES = {
  PENDING: 'pending',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const;

export const TASK_PRIORITIES = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  URGENT: 'urgent',
} as const;

export const INVOICE_STATUSES = {
  DRAFT: 'draft',
  SENT: 'sent',
  PAID: 'paid',
  OVERDUE: 'overdue',
  CANCELLED: 'cancelled',
} as const;

export const SUBSCRIPTION_PLANS = {
  FREE: 'free',
  PRO: 'pro',
  ENTERPRISE: 'enterprise',
} as const;

export const LANGUAGES = {
  BENGALI: 'bn',
  ENGLISH: 'en',
} as const;

export const FILE_SIZE_LIMITS = {
  DOCUMENT: 50 * 1024 * 1024, // 50MB
  IMAGE: 10 * 1024 * 1024, // 10MB
  AVATAR: 2 * 1024 * 1024, // 2MB
} as const;

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
} as const;

export const API_ENDPOINTS = {
  AUTH: '/api/v1/auth',
  CASES: '/api/v1/cases',
  DOCUMENTS: '/api/v1/documents',
  CLIENTS: '/api/v1/clients',
  RESEARCH: '/api/v1/research',
  TIME_ENTRIES: '/api/v1/time-entries',
  INVOICES: '/api/v1/invoices',
  NOTIFICATIONS: '/api/v1/notifications',
  TENANTS: '/api/v1/tenants',
} as const;

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  FORBIDDEN: 'Access forbidden. Please contact your administrator.',
  NOT_FOUND: 'The requested resource was not found.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  SERVER_ERROR: 'An unexpected error occurred. Please try again later.',
} as const;

export const SUCCESS_MESSAGES = {
  CASE_CREATED: 'Case created successfully.',
  DOCUMENT_UPLOADED: 'Document uploaded and processing started.',
  INVOICE_SENT: 'Invoice sent successfully.',
  PROFILE_UPDATED: 'Profile updated successfully.',
  PASSWORD_CHANGED: 'Password changed successfully.',
} as const;