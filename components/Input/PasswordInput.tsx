import React from 'react';
import classnames from 'classnames';
import { InputProps } from 'antd';
import Password from 'antd/lib/input/Password';
import './styles/index.scss';

export interface typeInput extends InputProps {
  field?: any;
  onBlur?: any;
  onChange?: any;
}

export const PasswordInput: React.FC<typeInput> = (props: typeInput) => {
  const { className, field, onBlur, onChange, ...rest } = props;

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value.trim() !== field?.value) field?.onChange(e.target.value.trim());
    field?.onBlur();
    if (onBlur) onBlur();
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    field && field?.onChange(e);
    onChange && onChange(e);
  };

  return (
    <Password
      {...field}
      {...rest}
      onChange={handleOnChange}
      onBlur={handleBlur}
      className={classnames(`input-component`, className)}
    />
  );
};
