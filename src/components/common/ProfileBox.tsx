import styled from 'styled-components';
import { ProfileBoxProps } from '../../interface/Contest';


const ProfileBox: React.FC<ProfileBoxProps> = ({
  hasProfileButton,
  bgColor,
  memberInfo,
}) => {
  return (
    <Container $bgColor={bgColor}>
      <MemberImg src={memberInfo.teamMemberImage} />
      <Name>{memberInfo.teamMemberName}</Name>
      <Hr />
      <Part>{memberInfo.teamMemberTask[0]}</Part>
      {hasProfileButton ? (
        <ViewProfileButton>프로필 보기</ViewProfileButton>
      ) : (
        <Part>{memberInfo.teamMemberMajor[0]}</Part>
      )}
    </Container>
  );
};
const Container = styled.div<{ $bgColor: string }>`
  width: 16.6rem;
  height: 22.4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 0.3rem; */

  border: 1px solid ${(props) => props.theme.colors.gray20};
  border-radius: 0.8rem;
  background-color: ${(props) => props.$bgColor};

  padding: 2rem 3rem 2rem 3rem;
`;
const MemberImg = styled.img`
  width: 7.8rem;
  height: 7.8rem;

  border: 1px solid ${(props) => props.theme.colors.primary20};
  border-radius: 4rem;

  object-fit: cover;
`;
const Name = styled.div`
  ${(props) => props.theme.fonts.heading5};
  color: ${(props) => props.theme.colors.gray90};
  margin: 0.8rem 0;
`;
const Hr = styled.div`
  width: 100%;
  height: 1px;

  border-top: 1px solid ${(props) => props.theme.colors.primary60};
  border-color: ${(props) => props.theme.colors.primary60};

  margin-bottom: 0.5rem;
`;
const Part = styled.div`
  ${(props) => props.theme.fonts.bodyXS};
  color: ${(props) => props.theme.colors.gray70};

  text-align: center;

  white-space: nowrap;
`;
const ViewProfileButton = styled.div`
  width: 12rem;
  height: 3.6rem;

  border-radius: 1.8rem;
  ${(props) => props.theme.fonts.subtitleXS};
  color: ${(props) => props.theme.colors.primary60};

  display: flex;
  justify-content: center;
  align-items: center;
`;
export default ProfileBox;
