// input onChange
export const handleInputChange = (e, state, setState) => {
  const value = e.target.value;

  setState({
    ...state,
    [e.target.name]: value,
  });
};

// 휴대폰 입력 시, "-" 자동 생성
export const handlePhone = (e, ref, state, setState) => {
  const value = ref.current.value.replace(/\D+/g, "");
  const numberLength = 11;

  let result;
  result = "";  

  for (let i = 0; i < value.length && i < numberLength; i++) {
    switch (i) {
      case 3:
        result += "-";
        break;
      case 7:
        result += "-";
        break;

      default:
        break;
    }

    result += value[i];
  }

  ref.current.value = result;

  setState({
    ...state,
    [e.target.name]: e.target.value,
  });
};
