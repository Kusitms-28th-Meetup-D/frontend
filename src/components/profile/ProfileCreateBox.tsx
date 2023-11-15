import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

interface ProfileCreateBoxProps {
  title: string;
  example1: string;
  example2: string;
  example3?: string;
}

const ProfileCreateBox = ({
  title,
  example1,
  example2,
  example3,
}: ProfileCreateBoxProps) => {
  const [text, setText] = useState('');
  const [showError, setShowError] = useState(false);

  const placeholderText = example3
    ? `ex)\n • ${example1}\n • ${example2}\n • ${example3}`
    : `ex)\n • ${example1}\n • ${example2}`;

  useEffect(() => {
    setShowError(text.length < 5);
  }, [text]);

  return (
    <ProfileCreateTopContainer>
      <ProfileCreateTopBox>{title}</ProfileCreateTopBox>
      <ProfileCreateBottomBox
        placeholder={placeholderText}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {showError && (
        <ErrorMessage>
          최소 5자 이상 작성해주세요. 없다고 적어주셔도 좋아요!
        </ErrorMessage>
      )}
      <Count>{text.length}/150자</Count>
    </ProfileCreateTopContainer>
  );
};

export default ProfileCreateBox;

const ProfileCreateTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ProfileCreateTopBox = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  border-radius: 10px 10px 0 0;
  background: ${({ theme }) => theme.colors.primary90};
  padding: 1.2rem 2rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.subtitleXL};
`;

const ProfileCreateBottomBox = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  border-radius: 0 0 10px 10px;
  background: ${({ theme }) => theme.colors.gray5};
  padding: 2rem 2.4rem;
  min-height: 25rem;
  resize: none;

  color: ${({ theme }) => theme.colors.gray90};
  ${({ theme }) => theme.fonts.bodyL};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray40};
  }
`;

const ErrorMessage = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2.4rem;
  ${({ theme }) => theme.fonts.bodyS};
  color: ${({ theme }) => theme.colors.error60};
`;

const Count = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2.4rem;
  ${({ theme }) => theme.fonts.bodyS};
  color: ${({ theme }) => theme.colors.gray60};
`;
