// <Radio 
//  name="telecom"
//  option="telecomOptions"

//  state={state}
//  setState={setState}

//  title="기존 통신사"
//  helpMessage={"현재 이용중인 통신사를 선택하세요."}

// /> 

import React from 'react';
// 개발자 라이브러리
import { handleInputChange } from '../../utils/input';
// css
import { GlobalRadio } from '../../styles/components/input/radio';
// images
import { ReactComponent as CheckOff } from '../../images/common/btn-check-off.svg';
import { ReactComponent as CheckOn } from '../../images/common/btn-check-on.svg';

const Radio = ({
  title,
  helpMessage,

  name, 
  option, // ex) { code: '옵션1', name: 'name' }

  state,
  setState,
  onChange,

  nameKind,
  valueKind,

  kind,
  display,
  margin,
  wrapMargin,
  borderColor,
}) => {
  return (
    <GlobalRadio
      className={kind ? kind : ''}
      display={display}
      margin={margin}
      wrapMargin={wrapMargin}
      borderColor={borderColor}
    >
      { title && (
        <h2 className='global-radio-title'>{title}</h2>
      )}

      <div className='global-radio-content'>
        {state[option]?.map((list, index) => {
          const radioName = list[`${nameKind}`] || list.name || '';
          const radioValue = list[`${valueKind}`] || list.code || '';

          return (
            <div key={index} className="global-radio-wrap">
              <label>
                <div className='svg'>
                  {state[name] === radioValue ? (
                    <CheckOn fill="#e83f6f"/>
                    ) : (
                    <CheckOff stroke="#828282" />
                  )}
                </div>
                
                <input
                  type="radio"
                  name={name}
                  defaultValue={radioValue}
                  checked={name === radioValue ? true : false}
                  onChange={(e) => 
                    onChange ? onChange : handleInputChange(e, state, setState)
                  }
                />
                <p className="radio-item">{radioName}</p>
              </label>
            </div>
          );
        })}
      </div>

      { helpMessage && (
        <span className='global-radio-help'>{helpMessage}</span>
      )}
    </GlobalRadio>
  );
};

export default Radio;
