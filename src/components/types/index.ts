export interface IBaseFormInput<T> {
  label?: string;
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  description?: string;
  value?: T;
}

export interface IBaseFormInputWithAutocomplete {
  autocomplete?: string;
}

export interface IBaseFormInputWithPlaceholder {
  placeholder?: string;
}

export interface IFormTextInput
  extends IBaseFormInput<string>,
    IBaseFormInputWithPlaceholder,
    IBaseFormInputWithAutocomplete {
}

export interface IFormCheckboxInput
  extends IBaseFormInput<boolean>,
    IBaseFormInputWithAutocomplete {
  confirm?: {
    header?: string;
    message?: string;
    accept: string;
    reject?: string;
  };
}

export interface VFormInputBaseProps {
  isInvalid?: boolean;
  errors?: string[];
  readonly?: boolean;
  name?: string;
  notFloatLabel?: boolean;
  hideErrors?: boolean;
  isHidden?: boolean;
}
