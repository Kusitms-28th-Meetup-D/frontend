import styled from 'styled-components';
import { ProfileBoxProps, ProfileProps } from '../../interface/Contest';
import ProfileBoxMember from '../common/ProfileBoxMember';

const TeamMembers = ({
  memberDatas,
  leftMember,
  cur,
  max,
}: {
  memberDatas?: ProfileProps[];
  leftMember?: number;
  cur?: number;
  max?: number;
}) => {
  return (
    <>
      <Hr />
      <TeamMembersLayout>
        <TeamMembersTitle>
          팀원들
          <TeamMembersLeft>
            <span>{leftMember}</span>자리 남았어요!
          </TeamMembersLeft>
        </TeamMembersTitle>
        <TeamMembersLeftInfo>
          지금까지 정원 <span>{max}</span>명 중 <span>{cur}</span>명의 팀원이
          합류했어요.
        </TeamMembersLeftInfo>
        <TeamMembersProfileContainer>
          {memberDatas?.map((memberData, index) => {
            const teamMemberDataProps: ProfileBoxProps = {
              hasProfileButton: true,
              isBgColorWhite: false,
              hasBorder: true,
              memberInfo: memberData,
              width: 20,
              height: 27.6,
            };
            return <ProfileBoxMember {...teamMemberDataProps} key={index} />;
          })}
        </TeamMembersProfileContainer>
      </TeamMembersLayout>
    </>
  );
};
const Hr = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid ${(props) => props.theme.colors.gray20};
`;
const TeamMembersLayout = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const TeamMembersTitle = styled.div`
  ${(props) => props.theme.fonts.heading3};
  color: ${(props) => props.theme.colors.gray100};

  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 1.6rem;
`;
const TeamMembersLeft = styled.div`
  ${(props) => props.theme.fonts.bodyM};
  color: ${(props) => props.theme.colors.gray100};

  border: 1px solid ${(props) => props.theme.colors.error20};
  border-radius: 0.8rem;
  padding: 0.4rem 1.2rem;
  span {
    ${(props) => props.theme.fonts.subtitleM};
    color: ${(props) => props.theme.colors.error90};
  }
`;
const TeamMembersLeftInfo = styled.div`
  ${(props) => props.theme.fonts.bodyXL};
  color: ${(props) => props.theme.colors.gray80};

  span {
    ${(props) => props.theme.fonts.subtitleXL};
    color: ${(props) => props.theme.colors.primary60};
  }
`;
const TeamMembersProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;
`;


export default TeamMembers;
