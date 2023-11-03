import styled from 'styled-components';

const Footer = () => {
  return <Test>Footer styled-font!</Test>;
};
export default Footer;

const Test = styled.div`
  ${(props) => props.theme.fonts.heading6}
`;
