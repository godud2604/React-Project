import React from 'react';
// 개발자 라이브러리
import theme from '../../../styles/theme';
// css
import { GlobalInput } from '../../../styles/components/common/input/input';
// images
import { ReactComponent as Error } from '../../../images/common/check-error.svg';
import { ReactComponent as Success } from '../../../images/common/check-success.svg';

const Input = ({
  type,
  name,
  value,
  kind,

  onClick,
  onChange,
  ref,
  readOnly,
  required,
  maxLength,
  minLength,

  title,
  placeholder,
  helpMessage,
  errorMessage,
  successIcon,
  errorIcon,

  width,
  height,
  margin,
  padding,
  border,
  borderRadius,
}) => {
  return (
    <GlobalInput 
      className={kind ? kind : 'global-input-01'}
      margin={margin}

      width={width}
      height={height}
      padding={padding}
      border={border}
    >
      <label className='global-input-title'>{title}</label>
      <div className='global-input-wrap'>
        <input
          className="global-input-place"
          type={type ? type : 'text'}
          name={name}
          value={value}
          onChange={onChange}

          onClick={onClick}
          ref={ref}
          readOnly={readOnly}
          required={required ? required : true}
          placeholder={placeholder}
          autoComplete="none"
          maxLength={maxLength}
          minLength={minLength}

          width={width}
          height={height}
          margin={margin}
          padding={padding}
          border={border}
          radious={borderRadius}
        />

        { successIcon && (
          <div className="global-input-icon">
            <Success 
              fill={`${theme.colors.blue2}`}
            />
          </div>
        )}
        { errorIcon && (
          <div className="global-input-icon">
            <Error 
              fill={`${theme.colors.red}`}
            />
          </div>
        )}

      </div>

      {helpMessage && <span className='help-message message'>{helpMessage}</span>}
      {errorMessage && <span className='error-message message'>{errorMessage}</span>}
    </GlobalInput>
  );
};


export default Input;
