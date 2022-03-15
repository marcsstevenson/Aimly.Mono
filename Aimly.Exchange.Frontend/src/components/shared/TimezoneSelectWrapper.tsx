// The purpose of the file is tp provide a Formik wrapper around a
// TimezoneSelect component.
import React, { useMemo, useState } from 'react';
import timezones from 'timezones-list';
import { useField } from 'formik';
import { ComboboxOption, GenericCombobox } from 'components/shared/GenericCombobox';

interface ComboboxOptionWithTzCode extends ComboboxOption {
  tzCode: string;
}

export const TimezoneSelectWrapper = (props: any) => {
  const [field, state, { setValue }] = useField<string>(props.field.name);

  // Return an initial value for the timezone using 1. the props or 2. the browser's timezone
  const initialTimezoneValue = useMemo<string>(() => {
    if (state.initialValue && state.initialValue.length > 0) {
      return state.initialValue;
    } else {
      return Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone;
    }
  }, [state.initialValue]);

  const comboboxOptions: ComboboxOptionWithTzCode[] = useMemo<ComboboxOptionWithTzCode[]>(() => {
    return timezones.map((t, index) => {
      return { id: index, name: t.label, tzCode: t.tzCode };
    });
  }, []);

  const [selectedOption, setSelectedOption] = useState<ComboboxOptionWithTzCode>(
    // First try to match on the initial value if we have one
    comboboxOptions.find((option) => initialTimezoneValue === option.tzCode) ?? comboboxOptions[0]
  );

  const onChangeGenericCombobox = (option: ComboboxOption) => {
    const match = comboboxOptions[option.id];
    setValue(match.tzCode);
    setSelectedOption(match);
  };

  return (
    <div>
      <GenericCombobox
        options={comboboxOptions}
        initiallySelected={selectedOption}
        onChange={onChangeGenericCombobox}
      />
    </div>
  );
};
