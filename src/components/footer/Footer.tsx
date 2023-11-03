import styled from 'styled-components';

const Footer = () => {
  return <Test>이거 프리텐다드맞아? 앓앓앍만밝붹뷁쫧   i am asdwq asdxwqeZQA</Test>;
};
export default Footer;

const Test = styled.div`
  ${(props) => props.theme.fonts.heading6}
`;
