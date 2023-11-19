import styled from 'styled-components';

import warnSrc from '/assets/images/common/warning.svg';

const JoinTeamRefusedModalInner = () => {
  const TITLE = '같은 공모전에 이미 지원한 팀이 있어요';
  const SUBTITLE = '한 공모전 당 하나의 팀에만 지원할 수 있어요.';
  return (
    <Container>
      <Title>{TITLE}</Title>
      <Subtitle>{SUBTITLE}</Subtitle>
      <Img src={warnSrc} />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  margin: 2rem 3rem;
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.heading3};

  color: ${({ theme }) => theme.colors.gray90};
  text-align: center;
`;
const Subtitle = styled.div`
  ${({ theme }) => theme.fonts.bodyXL};
  color: ${({ theme }) => theme.colors.gray90};

  text-align: center;
  white-space: break-spaces;
`;
const Img = styled.img`
  width: 28.2rem;
  height: 35.9rem;

  /* border: 1px solid white; */
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.46); /* 섀도우 설정 */
`;
export default JoinTeamRefusedModalInner;
