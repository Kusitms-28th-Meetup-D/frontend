import styled from 'styled-components';
import { InputProps } from '../../interface/Join';

const TextAreaInput = ({ inputProps }: { inputProps: InputProps }) => {
  return (
    <InputContainer>
      <Label>{inputProps.label}</Label>
      <Input placeholder={inputProps.placeholder}></Input>
    </InputContainer>
  );
};
const InputContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  /* align-items: center; */

  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.gray20};
  background-color: white;

  padding: 1.4rem 2.4rem;
`;

const Label = styled.label`
  width: 12rem;
  color: ${(props) => props.theme.colors.gray80};
  ${(props) => props.theme.fonts.subtitleL};
`;
const Input = styled.textarea`
  width: 100%;
  min-height: 10rem;

  color: ${(props) => props.theme.colors.gray80};
  ${(props) => props.theme.fonts.bodyL};

  border: none;

`;
export default TextAreaInput;
