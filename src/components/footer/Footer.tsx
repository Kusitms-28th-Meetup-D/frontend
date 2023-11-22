import styled from 'styled-components';

const Footer = () => {
  return <Test></Test>;
};
export default Footer;

const Test = styled.div`
  margin-top: 10rem;
  background-color: ${(props) => props.theme.colors.primary60};
  height: 35rem;
`;
