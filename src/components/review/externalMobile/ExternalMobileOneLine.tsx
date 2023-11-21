import { useNavigate, useParams } from 'react-router-dom';
import useProfile from '../../../hooks/profile/useProfile';
import { styled } from 'styled-components';
import { useState } from 'react';

const ExternalMobileOneLine = () => {
  const { userId } = useParams();
  const { profileData } = useProfile(userId);
  const username = profileData?.data.data.username;
  const navigate = useNavigate();
  const [text, setText] = useState('');

  return (
    <>
      <Progress>
        <div></div>
      </Progress>

      <ExternalMobileOneLineContainer>
        <h1>{username} 님을 한 줄로 추천한다면? </h1>
        <p>Wanteam의 회원님들에게 {username} 님을 소개하고 추천해주세요!</p>

        <TextareaBox>
          <Textarea
            placeholder={'140자 이내로 작성해 주세요.'}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setText(e.target.value);
            }}
          >
            {text}
          </Textarea>
          <p>{text.length}/140자</p>
        </TextareaBox>

        <ButtonBox>
          <img
            src={'/assets/images/common/left_button.svg'}
            alt={'left_button'}
            onClick={() => navigate(-1)}
          />
          <img
            src={'/assets/images/common/right_button.svg'}
            alt={'right_button'}
            onClick={() =>
              navigate(`/review/external/mobile/${userId}/complete`)
            }
          />
        </ButtonBox>
      </ExternalMobileOneLineContainer>
    </>
  );
};

export default ExternalMobileOneLine;

const Progress = styled.div`
  width: 100%;
  height: 0.8rem;
  background: ${({ theme }) => theme.colors.primary20};

  div {
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary60};
  }
`;

const ExternalMobileOneLineContainer = styled.div`
  background: ${({ theme }) => theme.colors.gray5};
  width: 100%;
  height: 100vh;
  padding: 4rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    ${({ theme }) => theme.fonts.subtitleM};
    color: ${({ theme }) => theme.colors.gray90};
    margin-bottom: 0.5rem;
  }
  > p {
    ${({ theme }) => theme.fonts.bodyXXS};
    color: ${({ theme }) => theme.colors.gray70};
    margin-bottom: 5rem;
  }
`;

const TextareaBox = styled.div`
  width: 100%;
  position: relative;
  color: ${({ theme }) => theme.colors.gray70};

  > p {
    position: absolute;
    right: 1.8rem;
    bottom: 1.6rem;
  }
`;

const Textarea = styled.textarea`
  padding: 1.6rem 1.8rem;
  width: 100%;
  height: 12rem;
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.gray20};
  color: ${({ theme }) => theme.colors.gray90};
  background: transparent;
  resize: none;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: 2rem;
  padding: 0 2rem;

  img {
    width: 5.6rem;
    height: 5.6rem;
  }
`;
