import React from 'react';

import { FormFieldWrapper, Label, LabelText, Input } from './styles';

interface Props {
  label?: string;
  type?: 'input' | 'textarea' | 'color';
  name?: string;
  value?: any;
  onChange: (event: any) => void;
}

const FormField: React.FC<Props> = ({ label, type, name, value, onChange }) => {
  const tag = type;

  return (
    <div>
      <FormFieldWrapper>
        <Label>
          <Input
            as="input"
            type={type}
            value={value}
            name={name}
            onChange={onChange}
          />
          <LabelText>{label}:</LabelText>
        </Label>
      </FormFieldWrapper>
    </div>
  );
};

export default FormField;
