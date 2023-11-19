import { useState } from 'react';
import { styled } from 'styled-components';

interface ExternalReviewOneLineProps {
  userName?: string;
}

const ExternalReviewOneLine = ({ userName }: ExternalReviewOneLineProps) => {
  const [review, setReview] = useState('');

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  return (
    <ExternalReviewContainer>
      <h1>{userName}님을 한 줄로 추천한다면?</h1>
      <div>
        <textarea
          placeholder={'140자 이하로 추천사를 작성해주세요.'}
          onChange={handleTextareaChange}
        >
          {review}
        </textarea>
        <p>{review.length}/140자</p>
      </div>
    </ExternalReviewContainer>
  );
};

export default ExternalReviewOneLine;

const ExternalReviewContainer = styled.div`
  h1 {
    ${({ theme }) => theme.fonts.heading3};
    color: ${({ theme }) => theme.colors.gray90};
    margin-bottom: 1.4rem;
  }
  div {
    position: relative;
  }
  textarea {
    background: ${({ theme }) => theme.colors.gray5};
    border: 1px solid ${({ theme }) => theme.colors.gray20};
    ${({ theme }) => theme.fonts.bodyXL};
    color: ${({ theme }) => theme.colors.gray70};
    border-radius: 1rem;
    resize: none;
    width: 100%;
    height: 20rem;
    padding: 2.5rem 3.5rem;
  }
  p {
    ${({ theme }) => theme.fonts.bodyM};
    color: ${({ theme }) => theme.colors.gray70};

    position: absolute;
    right: 3.5rem;
    bottom: 2.5rem;
  }
`;
