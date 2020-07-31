import React from 'react';

interface IHookForm {
  handleSubmit: (eventSubmit: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  clearForm: () => void;
  setValues: (key: string, value: string) => void;
}

function useForm(initialValues: any): IHookForm {
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
    setCategory(initialValues);
  }

  function handleSubmit(eventSubmit: React.FormEvent<HTMLFormElement>) {
    eventSubmit.preventDefault();
    setCategories([...categories, category]);
    setCategory(initialValues);
  }
  return {
    handleSubmit,
    handleChange,
    categories,
    category,
    setCategories,
    clearForm,
  };
}
