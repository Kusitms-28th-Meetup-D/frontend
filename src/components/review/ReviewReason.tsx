import { styled } from 'styled-components';
import { reviewCommentState } from '../../recoil/atom';
import { useRecoilState } from 'recoil';
const MAX_LENGTH = 140;
const ReviewReason = () => {
  const [reviewComment, setReviewComment] = useRecoilState(reviewCommentState);
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewComment(event.target.value);
  };
  return (
    <>
      <ReasonTitle>이 분을 팀원으로 추천하고 싶은 이유는요</ReasonTitle>
      <TextAreaBox>
        <LengthCount>
          {reviewComment.length}/{MAX_LENGTH}
        </LengthCount>
        <ReasonTextBox
          maxLength={MAX_LENGTH}
          placeholder="140자로 리뷰를 작성해주세요."
          onChange={handleChange}
        />
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReasonTextBox = styled.textarea`
  width: 60%;
  min-height: 150px;
  max-height: 300px;
  ${({ theme }) => theme.fonts.bodyXL};
  background: ${({ theme }) => theme.colors.gray5};
  color: ${(props) => props.theme.colors.gray90};
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  resize: none;
  padding: 2.5rem 4rem;
  border-radius: 1rem;
  position: relative;
`;
const LengthCount = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(calc(-50% + 32rem));
  bottom: 2rem;

  color: ${(props) => props.theme.colors.gray50};
  ${(props) => props.theme.fonts.buttonXXS};

  z-index: 20;
`;
