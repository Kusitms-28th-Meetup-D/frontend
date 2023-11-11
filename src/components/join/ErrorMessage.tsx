import styled from 'styled-components';

const ErrorMessage = ({ errorText }: { errorText: string }) => {
  return <ErrorText>{errorText}</ErrorText>;
};
const ErrorText = styled.div`
  position: absolute;
  bottom: -2rem;
  left: 12.6rem;
  color: ${(props) => props.theme.colors.error60};
  ${(props) => props.theme.fonts.bodyXXS};
`;
export default ErrorMessage;
