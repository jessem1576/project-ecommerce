
"use client";

import { useState, useEffect } from 'react';

interface FormattedDateProps {
  dateString: string;
  options?: Intl.DateTimeFormatOptions;
  className?: string;
}

const FormattedDate: React.FC<FormattedDateProps> = ({ dateString, options, className }) => {
  const [clientFormattedDate, setClientFormattedDate] = useState<string>('');

  useEffect(() => {
    // This will only run on the client, after initial hydration
    // The 'undefined' for locale uses the browser's default locale
    setClientFormattedDate(new Date(dateString).toLocaleDateString(undefined, options));
  }, [dateString, options]);

  // During server render and initial client render,
  // return the original dateString or a non-locale specific format to prevent mismatch.
  // If clientFormattedDate is not yet set, fall back to the original date string.
  // This ensures server and client initial render match.
  return <span className={className}>{clientFormattedDate || dateString}</span>;
};

export default FormattedDate;
