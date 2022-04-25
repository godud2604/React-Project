import React, { useRef } from 'react';
// 개발자 라이브러리
import { handleInputChange, handlePhone } from '../../../../../utils/input';
// components
import { Radio, Input } from '../../../../input';
import { Toast } from '../../../../modal';
// images
import { ReactComponent as Phone } from '../../../../../images/common/icon-phone02.svg';


const PhoneToast = ({
  state,
  setState,

}) => {
  const phoneRef = useRef();

  return (
    <Toast
      closeClick={(e) => {
        e.stopPropagation(); // 버블링현상 방지
        setState({ ...state, isToast: false });
      }}
      title="휴대폰 상담 신청"
      btnTxt="휴대폰 상담 신청하기"
      btnKind="btn_09"
      btnImgSrc={<Phone fill='white' width="14px" height="18px" />}
    >
      <Input
        name="userName"
        value={state.userName || ''}
        onChange={(e) => handleInputChange(e, state, setState)}
        title="이름"
        
        margin="0 0 40px 0"
        focusBorder="1px solid #E83F6F"
        cursorColor="#E83F6F"
      />
      <Input
        type="tel"
        ref={phoneRef}
        name="hpNo"
        value={state.hpNo || ''}
        onChange={(e) => handlePhone(e, phoneRef, state, setState)}

        title="휴대폰 번호"
        helpMessage={"숫자만 입력하세요."}

        margin="0 0 40px 0"

        focusBorder="1px solid #E83F6F"
        cursorColor="#E83F6F"
      />

      <Radio 
        name="telecom"
        option="telecomOptions"

        state={state}
        setState={setState}

        title="기존 통신사"
        helpMessage={"현재 이용중인 통신사를 선택하세요."}
      />

    </Toast>
  );
};

export default PhoneToast;