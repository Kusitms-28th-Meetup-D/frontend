import styled from 'styled-components';
import { ProfileBoxProps, ProfileProps } from '../../interface/Contest';
import ProfileBoxMember from '../common/ProfileBoxMember';

import EmptySrc from '/assets/images/common/members.svg';
import { motion } from 'framer-motion';
import { TextAnimation } from '../../styles/animation';

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
      {cur == 0 ? (
        <>
          <TeamMembersTitle>팀원들</TeamMembersTitle>
          <EmptyMember
            initial="hidden"
            animate="visible"
            variants={TextAnimation}
          >
            <EmptyImg src={EmptySrc} />
            {
              '아직 합류한 팀원이 없어요.\n이 팀에 함께하는 첫 번째 팀원이 되시겠어요?'
            }
          </EmptyMember>
        </>
      ) : (
        <TeamMembersLayout>
          <TeamMembersTitle>
            팀원들
            <TeamMembersLeft>
              <span>{leftMember}</span>자리 남았어요!
            </TeamMembersLeft>
          </TeamMembersTitle>
          <TeamMembersLeftInfo>
            지금까지 <span>{cur! - 1}</span>명의 팀원이 합류했어요.
          </TeamMembersLeftInfo>
          <TeamMembersProfileContainer
            initial="hidden"
            animate="visible"
            variants={TextAnimation}
          >
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
      )}
    </>
  );
};
const EmptyMember = styled(motion.div)`
  width: 100%;
  height: 25rem;
  background-color: ${(props) => props.theme.colors.gray5};
  border: 1px solid ${(props) => props.theme.colors.gray20};
  border-radius: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  ${(props) => props.theme.fonts.subtitleL};
  color: ${(props) => props.theme.colors.gray90};

  white-space: break-spaces;
  text-align: center;
`;
const EmptyImg = styled.img`
  width: 6rem;
`;

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
const TeamMembersProfileContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.8rem;
`;

export default TeamMembers;
