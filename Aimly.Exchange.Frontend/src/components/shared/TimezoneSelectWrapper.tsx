// The purpose of the file is tp provide a Formik wrapper around a
// TimezoneSelect component.
import React, { useMemo } from 'react';
import timezones from 'timezones-list';
import { ComboboxOption } from 'components/shared/GenericCombobox';
import { GenericComboboxWrapper } from 'components/shared/GenericComboboxWrapper';

// interface ComboboxOption<string> extends ComboboxOption {
//   tzCode: string;
// }

export const TimezoneSelectWrapper = (props: any) => {
  const comboboxOptions: ComboboxOption<string>[] = useMemo<ComboboxOption<string>[]>(() => {
    return timezones.map((t, index) => {
      return { id: index, label: t.label, value: t.tzCode };
    });
  }, []);

  return <GenericComboboxWrapper comboboxOptions={comboboxOptions} {...props} />;
};
