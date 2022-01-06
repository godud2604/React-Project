import React from 'react';
// components
import { Input } from '.';
import { Button } from '../modal';
// css
import { GlobalInputBtn } from '../../../styles/components/common/input/inputBtn';

const InputBtn = ({ 
  margin,

  ipTitle,
  ipWd,
  ipHt,
  ipHelpMessage,

  btnKind,
  btnTxt,
  btnWd,
  btnHt,

}) => {
  return (
    <GlobalInputBtn margin={margin}>
      <Input 
        title={ipTitle}
        width={ipWd}
        height={ipHt}
        helpMessage={ipHelpMessage}
      />
      <Button 
        kind={btnKind}
        children={btnTxt}
        width={btnWd}
        height={btnHt}
      />
    </GlobalInputBtn>
  );
};

export default InputBtn;