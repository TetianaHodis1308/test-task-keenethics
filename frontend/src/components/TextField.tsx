import classNames from 'classnames';
import type { TextFieldProps } from '../types/TextFieldProps';

export const TextField = ({
  name,
  value,
  label = name,
  required = false,
  onChange = () => {},
  multiline = false,
  touched,
  onTouched = () => {},
}: TextFieldProps) => {
  const hasError = touched[name] && required && !value;

  const handleBlur = (
    e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>,
  ) => {
    onTouched({ ...touched, [e.target.name]: true });
  };
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div>
        {multiline ?
          <textarea
            id={name}
            name={name}
            placeholder="Ваша відповідь"
            value={value}
            required={required}
            aria-required={required}
            onChange={(event) => onChange(event, name)}
            onBlur={handleBlur}
            rows={4}
            className={classNames(
              'w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500',
              {
                'border-red-500': hasError,
              },
            )}
          />
        : <input
            type={name === 'email' ? 'email' : 'text'}
            id={name}
            name={name}
            className={classNames(
              'w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500',
              {
                'border-red-500': hasError,
              },
            )}
            placeholder="Ваша відповідь"
            value={value}
            onChange={(event) => onChange(event, name)}
            onBlur={handleBlur}
            required={required}
            aria-required={required}
          />
        }

        {hasError && (
          <p className="text-red-500 text-xs mt-0.5">{`${label} є обов'язковим полем введення`}</p>
        )}
      </div>
    </div>
  );
};
