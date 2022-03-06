// The purpose of the file is tp provide a Formik wrapper around a
// TimezoneSelect component.
import React, { useMemo, useState } from 'react';
import TimezoneSelect, { allTimezones, ITimezoneOption } from 'react-timezone-select';
import type { ITimezone } from 'react-timezone-select';
import { useField } from 'formik';

export const TimezoneSelectWrapper = (props: any) => {
  const [field, state, { setValue }] = useField<string>(props.field.name);

  // Return an initial value for the timezone using 1. the props or 2. the browser's timezone
  const initialTimezone = useMemo(() => {
    if (state.value && state.value.length > 0) {
      return state.value;
    } else {
      return Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone;
    }
  }, [state.value]);

  const [tz, setTz] = useState<ITimezone>(initialTimezone);

  const onChange = (tz: any) => {
    setTz(tz);
    setValue(tz.value);
  };

  return (
    <div>
      <TimezoneSelect
        value={tz}
        onChange={onChange}
        timezones={{
          ...allTimezones,
        }}
        className="form-input"
      />
    </div>
  );
};
