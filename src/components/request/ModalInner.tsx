import styled from 'styled-components';

import joinSrc from '/assets/images/join/join-modal.svg';

const ModalInner = () => {
  const TEXT =
    '아직 자기소개 프로필이 비어있어요!\n프로필을 자세히 작성할수록, 좋은 팀원을 구할 확률이 높아져요.';
  return (
    <Container>
      <Img src={joinSrc} />
      <Title>
        <span>Wanteam</span>에 가입 완료!
      </Title>
      <Content>{TEXT}</Content>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  margin: 3rem;
`;
const Img = styled.img`
  width: 12rem;
  height: 10.2rem;
`;
const Title = styled.div`
  ${({ theme }) => theme.fonts.heading4};

  color: ${({ theme }) => theme.colors.gray90};
  span {
    color: ${({ theme }) => theme.colors.primary60};
  }

  text-align: center;
`;
const Content = styled.div`
  ${({ theme }) => theme.fonts.bodyL};

  color: ${({ theme }) => theme.colors.gray70};

  text-align: center;
  white-space: break-spaces;
`;
export default ModalInner;
