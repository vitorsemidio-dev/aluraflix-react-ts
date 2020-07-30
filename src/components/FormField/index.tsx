import React from 'react';

import { FormFieldWrapper, Label, LabelText, Input, TextArea } from './styles';

interface Props {
  fieldId: string;
  label?: string;
  type?: 'input' | 'textarea' | 'color';
  name?: string;
  value?: any;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

const FormField: React.FC<Props> = ({
  fieldId,
  label,
  type,
  name,
  value,
  handleChange,
}) => {
  const isTextArea = type === 'textarea';
  return (
    <div>
      <FormFieldWrapper>
        <Label htmlFor={fieldId}>
          {isTextArea ? (
            <TextArea
              id={fieldId}
              value={value}
              name={name}
              onChange={handleChange}
            />
          ) : (
            <Input
              id={fieldId}
              type={type}
              value={value}
              name={name}
              onChange={handleChange}
            />
          )}
          <LabelText>{label}:</LabelText>
        </Label>
      </FormFieldWrapper>
    </div>
  );
};

export default FormField;
