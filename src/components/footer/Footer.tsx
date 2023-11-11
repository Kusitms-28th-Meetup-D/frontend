import styled from 'styled-components';

const Footer = () => {
  return <Test>이거 프리텐다드맞아d안녕하세요!A</Test>;
};
export default Footer;

const Test = styled.div`
  ${(props) => props.theme.fonts.heading5}
`;
