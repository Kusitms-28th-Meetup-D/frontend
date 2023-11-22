import styled from 'styled-components';

import memberSrc from '/assets/images/common/members.svg';
const MyTeamEmpty = ({ text }: { text: string }) => {
  return (
    <Layout>
      <Inner>
        <Img src={memberSrc} />
        {text}
      </Inner>
    </Layout>
  );
};
const Layout = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary20};

  padding: 6rem 7rem;
`;
const Inner = styled.div`
  width: 107.8rem;
  height: 38.8rem;
  background-color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.fonts.subtitleL};
  border: 1px solid ${(props) => props.theme.colors.gray10};
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 6rem 7rem;
`;
const Img = styled.img`
  width: 6rem;
`;
export default MyTeamEmpty;
