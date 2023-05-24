import { Children, cloneElement, FC, isValidElement, PropsWithChildren, ReactNode } from 'react';
import cx from 'classnames';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import './styles.scss';

const FormItem: FC<
  PropsWithChildren<{
    name: string;
    label?: string;
    labelClassName?: string;
    required?: boolean;
    labelTooltip?: ReactNode;
    helpText?: ReactNode;
    description?: ReactNode;
    containerClassName?: string;
    showError?: boolean;
    errorClassName?: string;
    rightAction?: any;
  }>
> = ({
  name,
  label,
  labelClassName,
  required,
  labelTooltip,
  helpText,
  description,
  containerClassName,
  showError = true,
  errorClassName,
  children,
  rightAction,
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div
      className={cx(containerClassName, 'form-item', {
        'has-error': errors?.[name],
      })}
    >
      {label && (
        <div className={cx(labelClassName)}>
          <label className='font-bold flex items-center h-5'>
            {label}
            {required ? <span className='text-red-500'> *</span> : ''}
            {labelTooltip ?? ''}
          </label>
          {description && <div className='mt-2'>{description}</div>}
          {rightAction}
        </div>
      )}

      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          if (typeof child?.type === 'string') return child;
          return (
            <Controller
              name={name}
              control={control}
              render={({ field }) =>
                cloneElement<any>(child, {
                  field,
                  ...props,
                })
              }
            />
          );
        }
        return null;
      })}

      {showError && (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => <div className={cx('text-red-500 mt-2', errorClassName)}>{message}</div>}
        />
      )}
    </div>
  );
};

export default FormItem;
