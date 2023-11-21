import styled from 'styled-components';
import { InputDataArray, InputProps } from '../../interface/Join';
import React, { useState } from 'react';

const TextAreaInput = ({
  inputProps,
  onChangeFunc,
  buttonActiveSetFunc,
  index,
}: {
  inputProps: InputProps;
  onChangeFunc: any;
  buttonActiveSetFunc: any;
  index: number;
}) => {
  const MAX_LENGTH = 140;
  const [text, setText] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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

    setText(event.target.value);
    onChangeFunc(event);
  };
  return (
    <InputContainer>
      <Label>{inputProps.label}</Label>
      <Input
        placeholder={inputProps.placeholder}
        onChange={handleChange}
        maxLength={MAX_LENGTH}
        name={inputProps.elemName}
      ></Input>
      <LengthCount>
        {text.length}/{MAX_LENGTH}
      </LengthCount>
    </InputContainer>
  );
};
const InputContainer = styled.div`
  position: relative;

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

  color: ${(props) => props.theme.colors.gray90};
  ${(props) => props.theme.fonts.bodyL};

  border: none;
  resize: none;
`;
const LengthCount = styled.div`
  position: absolute;
  right: 2rem;
  bottom: 2rem;

  color: ${(props) => props.theme.colors.gray50};
  ${(props) => props.theme.fonts.buttonXXS};
`;
export default TextAreaInput;
