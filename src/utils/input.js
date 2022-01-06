export const handleInputChange = (e, state, setState) => {
  const value = e.target.value;

  setState({
    ...state,
    [e.target.name]: value,
  });
};