import { styled } from 'styled-components';

const ReviewReason = () => {
  return (
    <>
      <ReasonTitle>이 분을 팀원으로 추천하고 싶은 이유는요</ReasonTitle>
      <TextAreaBox>
        <ReasonTextBox placeholder="140자로 추천사를 작성해주세요." />
      </TextAreaBox>
    </>
  );
};

export default ReviewReason;

const ReasonTitle = styled.div`
  ${({ theme }) => theme.fonts.subtitleXXL};
  color: ${({ theme }) => theme.colors.gray90};
  text-align: center;
  margin: 5rem 0 3rem 0;
`;

const TextAreaBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReasonTextBox = styled.textarea`
  width: 60%;
  min-height: 150px;
  max-height: 300px;
  ${({ theme }) => theme.fonts.bodyXXL};
  background: ${({ theme }) => theme.colors.gray5};
  color: ${(props) => props.theme.colors.gray90};
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  resize: none;
  padding: 2.5rem 4rem;
  border-radius: 1rem;
  position: relative;
`;
