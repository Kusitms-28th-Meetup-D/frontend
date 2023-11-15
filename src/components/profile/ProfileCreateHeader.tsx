import { styled } from 'styled-components';

const ProfileCreateHeader = () => {
  return (
    <ProfileContainer>
      <h1>프로필로 똑똑함을 뽐내주세요!</h1>
      <p>회원님의 프로필에 표시될 정보예요! </p>
      <p>자세히 작성할수록 더 많은 팀원들이 함께하고 싶어할 거예요.</p>
      <p>
        프로필은 가급적 앞서 선택하신 희망직무와 관련 있는 내용들로 적어주세요.
      </p>
    </ProfileContainer>
  );
};

export default ProfileCreateHeader;

const ProfileContainer = styled.div`
  padding: 5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray20};

  h1 {
    ${({ theme }) => theme.fonts.heading2_1};
    color: ${({ theme }) => theme.colors.gray90};
    margin-bottom: 1rem;
  }
  p {
    ${({ theme }) => theme.fonts.bodyM};
    color: ${({ theme }) => theme.colors.gray80};
  }
`;
