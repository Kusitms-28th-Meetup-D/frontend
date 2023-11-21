import styled from 'styled-components';

import modalSrc from '/assets/images/request/request-kakaotalk-modal.png';

const ModalInner = () => {
  const TITLE = '‘리뷰 요청’ 카카오톡 예시';
  const SUBTITLE =
    '카카오톡으로 리뷰를 요청하면, 아래와 같은 메시지가 전송됩니다.';
  return (
    <Container>
      <Title>{TITLE}</Title>
      <Subtitle>{SUBTITLE}</Subtitle>
      <Img src={modalSrc} />
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
  ${({ theme }) => theme.fonts.heading2_1};

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
export default ModalInner;
