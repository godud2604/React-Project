import React, { forwardRef } from 'react';
// 개발자 라이브러리
import theme from '../../styles/utils/theme';
// css
import { GlobalInput } from '../../styles/components/input/input';
// images
import { ReactComponent as Error } from '../../images/common/check-error.svg';
import { ReactComponent as Success } from '../../images/common/check-success.svg';
import { ReactComponent as Search } from '../../images/common/btn-search.svg';


const Input = forwardRef(({
  type,
  name,
  value,
  kind,

  onClick,
  onChange,
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
  searchIcon,

  width,
  height,
  margin,
  padding,
  cursorColor, 

  focusBorder,
  border,
  borderRadius,
}, ref) => {

  return (
    <GlobalInput 
      className={kind ? kind : 'global-input-01'}
      margin={margin}

      width={width}
      height={height}
      padding={padding}
      cursorColor={cursorColor}

      focusBorder={focusBorder}
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
          readOnly={readOnly ? readOnly : false}
          required={required ? required : true}
          placeholder={placeholder}
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
        { searchIcon && (
          <div className="global-input-icon">
            <Search 
              fill={`${theme.colors.gray3}`}
              width="18px"
              height="18px"
            />
          </div>
        )}
      </div>

      {helpMessage && <span className='help-message message'>{helpMessage}</span>}
      {errorMessage && <span className='error-message message'>{errorMessage}</span>}
    </GlobalInput>
  );
});


export default Input;
