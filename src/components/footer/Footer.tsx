import styled from 'styled-components';

const Footer = () => {
  return <Test>제발 반영돼라 제발!A</Test>;
};
export default Footer;

const Test = styled.div`
  ${(props) => props.theme.fonts.heading5}
`;
