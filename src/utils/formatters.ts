export const formatCurrency = (amount: number, currency = 'BDT') => {
  if (currency === 'BDT') {
    return `৳${amount.toLocaleString('en-BD')}`;
  }
  return new Intl.NumberFormat('en-BD', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

export const formatDate = (date: string | Date, format = 'short') => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (format === 'short') {
    return dateObj.toLocaleDateString('en-BD', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }
  
  if (format === 'long') {
    return dateObj.toLocaleDateString('en-BD', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });
  }
  
  return dateObj.toLocaleDateString('en-BD');
};

export const formatTime = (date: string | Date) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleTimeString('en-BD', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};

export const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const formatPhoneNumber = (phone: string) => {
  // Format Bangladesh phone numbers
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('880')) {
    return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
  }
  if (cleaned.startsWith('01')) {
    return `+880 ${cleaned.slice(1, 4)} ${cleaned.slice(4)}`;
  }
  return phone;
};

export const truncateText = (text: string, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const getCaseTypeLabel = (caseType: string) => {
  const typeMap: Record<string, string> = {
    'writ': 'Writ Petition',
    'civil': 'Civil Suit',
    'criminal': 'Criminal Case',
    'appeal': 'Appeal',
    'revision': 'Revision',
    'misc': 'Miscellaneous',
  };
  return typeMap[caseType.toLowerCase()] || caseType;
};

export const getCourtTypeLabel = (courtType: string) => {
  const courtMap: Record<string, string> = {
    'hc': 'High Court Division',
    'sc': 'Supreme Court',
    'district': 'District Court',
    'magistrate': 'Magistrate Court',
    'tribunal': 'Tribunal',
  };
  return courtMap[courtType.toLowerCase()] || courtType;
};