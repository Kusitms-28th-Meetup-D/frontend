import styled from 'styled-components';
import { InputProps } from '../../interface/Join';

const TextInput = ({ inputProps }: { inputProps: InputProps }) => {
  return (
    <InputContainer>
      <Label>{inputProps.label}</Label>
      <Input type="text" placeholder={inputProps.placeholder}></Input>
    </InputContainer>
  );
};
const InputContainer = styled.div`
  width: 100%;
  height: 6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.gray20};
  background-color: white;
`;

const Label = styled.label`
  width: 10rem;
  color: ${(props) => props.theme.colors.gray80};
  ${(props) => props.theme.fonts.subtitleL};

  margin: 0 2.4rem;
`;
const Input = styled.input`
  width: 100%;
  /* flex: 1; */

  color: ${(props) => props.theme.colors.gray80};
  ${(props) => props.theme.fonts.bodyL};
`;
export default TextInput;
