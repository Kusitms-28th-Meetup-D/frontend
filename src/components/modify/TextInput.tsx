import styled from 'styled-components';
import { InputDataArray, InputProps } from '../../interface/Join';

const TextInput = ({
  inputProps,
  onChangeFunc,
  buttonActiveSetFunc,
  index,
  value,
}: {
  inputProps: InputProps;
  onChangeFunc: any;
  buttonActiveSetFunc: any;
  index: number;
  value?: string;
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 0)
      buttonActiveSetFunc((curr: InputDataArray) => {
        const newArr = [...curr];
        newArr[index] = true;
        return newArr;
      });
    else {
      buttonActiveSetFunc((curr: InputDataArray) => {
        const newArr = [...curr];
        newArr[index] = false;
        return newArr;
      });
    }
    onChangeFunc(event);
  };
  return (
    <InputContainer>
      <Label>{inputProps.label}</Label>
      <Input
        onChange={handleChange}
        type="text"
        placeholder={inputProps.placeholder}
        name={inputProps.elemName}
        value={value}
      ></Input>
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
