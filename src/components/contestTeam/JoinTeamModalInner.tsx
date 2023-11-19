import styled from 'styled-components';

import glassSrc from '/assets/images/common/glasses.svg';

const JoinTeamModalInner = () => {
  return (
    <Container>
      <Img src={glassSrc} />
      <Title>
        이 팀에 <span>합류</span>를 신청하시겠어요?
      </Title>
      <Content>최종 합류 여부는 팀장의 승인을 거쳐 결정됩니다.</Content>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  margin: 5rem 3rem;
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
export default JoinTeamModalInner;
