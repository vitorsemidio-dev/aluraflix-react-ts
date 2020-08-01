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
  suggestions?: string[];
}

const FormField: React.FC<Props> = ({
  fieldId,
  label,
  type,
  name,
  value,
  handleChange,
  suggestions = [],
}) => {
  const isTextArea = type === 'textarea';
  const hasSuggestions = !!suggestions;
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
              list={hasSuggestions ? `suggestionsFor_${fieldId}` : undefined}
              autoComplete={hasSuggestions ? 'off' : 'on'}
            />
          )}
          <LabelText>{label}</LabelText>
          {hasSuggestions && (
            <datalist id={`suggestionsFor_${fieldId}`}>
              {suggestions.map((suggestion) => (
                <option
                  key={`suggestionsFor_${fieldId}_option${suggestion}`}
                  value={suggestion}
                >
                  {suggestion}
                </option>
              ))}
            </datalist>
          )}
        </Label>
      </FormFieldWrapper>
    </div>
  );
};

export default FormField;
