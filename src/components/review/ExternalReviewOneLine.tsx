import { useState, useContext } from 'react';
import { styled } from 'styled-components';
import { ExternalReviewContext } from '../../pages/review/ExternalReview';

interface ExternalReviewOneLineProps {
  userName?: string;
}

const ExternalReviewOneLine = ({ userName }: ExternalReviewOneLineProps) => {
  const [text, setText] = useState('');
  const { review, setReview } = useContext(ExternalReviewContext);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    setReview({
      ...review,
      recommendationComment: e.target.value,
    });
  };

  return (
    <ExternalReviewContainer>
      <h1>{userName} 님을 한 줄로 추천한다면?</h1>
      <div>
        <textarea
          placeholder={'140자 이하로 리뷰를 작성해주세요.'}
          onChange={handleTextareaChange}
          maxLength={140}
        >
          {text}
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
    color: ${(props) => props.theme.colors.gray90};
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
