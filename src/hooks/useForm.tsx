import React, { useState } from 'react';

interface IHookForm<T> {
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  clearForm: () => void;
  values: T;
}

export default function useForm<T>(initialValues: T): IHookForm<T> {
  const [values, setValues] = useState<T>(initialValues);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const key = event.target.getAttribute('name') || '';
    const { value } = event.target;
    setValues({
      ...values,
      [key]: value,
    });
  }

  function clearForm() {
    setValues(initialValues);
  }

  return {
    handleChange,
    values,
    clearForm,
  };
}
