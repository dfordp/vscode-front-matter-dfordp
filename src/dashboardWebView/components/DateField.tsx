import { format, parseJSON } from 'date-fns';
import * as React from 'react';

export interface IDateFieldProps {
  value: Date | string;
}

export const DateField: React.FunctionComponent<IDateFieldProps> = ({value}: React.PropsWithChildren<IDateFieldProps>) => {
  const [ dateValue, setDateValue ] = React.useState<string>("");

  React.useEffect(() => {
    try {
      const parsedValue = typeof value === 'string' ? parseJSON(value) : value;
      const dateString = format(parsedValue, 'yyyy-MM-dd');
      setDateValue(dateString);
    } catch (e) {
      // Date is invalid
    }
  }, [value]);

  if (!dateValue) {
    return null;
  }

  return (
    <span className={`text-vulcan-100 dark:text-whisper-900 text-xs`}>{dateValue}</span>
  );
};