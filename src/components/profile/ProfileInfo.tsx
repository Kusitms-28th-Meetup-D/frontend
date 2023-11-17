import styled from 'styled-components';

const ProfileInfo = ({
  name,
  profile_image,
  task,
  location,
  major,
  selfIntroduction,
}: {
  name?: string;
  profile_image?: string;
  task?: string;
  location?: string;
  major?: string;
  selfIntroduction?: string;
}) => {
  return (
    <>
      <ProfileText>{name} 님의 프로필</ProfileText>
      <ProfileContainer>
        <ProfileImage src={profile_image} />
        <ProfileTextBox>
          <ProfileName>{name} </ProfileName>
          <ProfilePart>{task}</ProfilePart>
          <div>
            <ProfileType>활동 지역</ProfileType>
            <ProfileValue>{location}</ProfileValue>
          </div>
          <div>
            <ProfileType>전공</ProfileType>
            <ProfileValue>{major}</ProfileValue>
          </div>
          <div>
            <ProfileType>한 줄 소개</ProfileType>
            <ProfileValue>{selfIntroduction}</ProfileValue>
          </div>
        </ProfileTextBox>
      </ProfileContainer>
    </>
  );
};

const ProfileText = styled.div`
  ${(props) => props.theme.fonts.heading3};
  color: ${(props) => props.theme.colors.primary90};
  margin: 3rem 0;
`;
const ProfileContainer = styled.div`
  width: 100%;
  height: 29.6rem;
  background-color: ${(props) => props.theme.colors.primary10};
  border-radius: 1 as {
    profiledata: ProfileData;
    isloading: boolean;
  }

  display: flex;
  align-items: center;
`;
const ProfileImage = styled.img`
  width: 18.7rem;
  height: 18.7rem;
  border-radius: 9.35rem;
  object-fit: cover; //이미지 비율 유지
  margin: 5.4rem;
`;
const ProfileTextBox = styled.div``;
const ProfileName = styled.div`
  ${(props) => props.theme.fonts.heading4};
  color: ${(props) => props.theme.colors.gray100};
`;
const ProfilePart = styled.div`
  ${(props) => props.theme.fonts.subtitleL};
  color: ${(props) => props.theme.colors.gray100};

  margin-bottom: 2.5rem;
`;

const ProfileType = styled.div`
  ${(props) => props.theme.fonts.bodyL};
  color: ${(props) => props.theme.colors.gray100};

  display: inline-block;
  width: 7.2rem;
  margin-right: 2.4rem;
`;

const ProfileValue = styled.div`
  ${(props) => props.theme.fonts.subtitleL};
  color: ${(props) => props.theme.colors.gray100};

  display: inline-block;
`;
export default ProfileInfo;
