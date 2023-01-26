import styled from 'styled-components';

const InputItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 1.8rem;
    font-weight: 600;
  }

  input {
    padding: 1.5rem;
    font-size: 2rem;
    border: 0.3rem solid #cca65c;
    color: #1a4264;
    font-weight: 700;
    border-radius: 0.5rem;
    outline: none;
  }
`;

const InputItem = ({ label, name, type, value, onChangeHandler }) => {
  return (
    <InputItemContainer className="input-team">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        id={name}
        onChange={onChangeHandler}
        required
      />
    </InputItemContainer>
  );
};

export default InputItem;
