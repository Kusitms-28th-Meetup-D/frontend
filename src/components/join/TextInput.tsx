import styled from 'styled-components';
import { InputProps } from '../../interface/Join';
import ErrorMessage from './ErrorMessage';

const TextInput = ({
  inputProps,
  onChangeFunc,
}: {
  inputProps: InputProps;
  onChangeFunc: any;
}) => {
  return (
    <InputContainer>
      <Label>{inputProps.label}</Label>
      <Input
        onChange={onChangeFunc}
        type="text"
        placeholder={inputProps.placeholder}
        name={inputProps.elemName}
      ></Input>
      <ErrorMessage errorText={inputProps.errorText} />
    </InputContainer>
  );
};
const InputContainer = styled.div`
  position: relative;

  width: 100%;
  height: 6rem;

  display: flex;
  justify-content: center;
  align-items: center;

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
const Input = styled.input`
  width: 100%;
  /* flex: 1; */

  color: ${(props) => props.theme.colors.gray80};
  ${(props) => props.theme.fonts.bodyL};

  border: none;
`;
export default TextInput;
