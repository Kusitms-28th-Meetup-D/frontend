import styled from 'styled-components';
import { InputProps } from '../../interface/Join';
import React, { useState } from 'react';
import ErrorMessage from './ErrorMessage';

const TextAreaInput = ({
  inputProps,
  onChangeFunc,
}: {
  inputProps: InputProps;
  onChangeFunc: any;
}) => {
  const MIN_LENGTH = 10;
  const MAX_LENGTH = 140;
  const [text, setText] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    onChangeFunc(event);
  };
  return (
    <InputContainer>
      <Label>{inputProps.label}</Label>
      <Input
        placeholder={inputProps.placeholder}
        onChange={handleChange}
        minLength={MIN_LENGTH}
        maxLength={MAX_LENGTH}
        name={inputProps.elemName}
      ></Input>
      <LengthCount>
        {text.length}/{MAX_LENGTH}
      </LengthCount>
      <ErrorMessage errorText={inputProps.errorText} />
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

  color: ${(props) => props.theme.colors.gray80};
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
