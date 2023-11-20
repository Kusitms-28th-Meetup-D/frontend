import styled from 'styled-components';
import ProfilePersonalityContent from './ProfilePersonalityContent';
import { TeamCulture, WorkMethod } from '../../interface/Profile';
import {
  TEAM_CURTURE_CATEGORY,
  WORK_METHOD_CATEGORY,
} from '../../constants/Profile';
import ProfileNotReviewed from './ProfileNotReviewed';

const ProfilePersonality = ({
  teamCurturesData,
  workMethodsData,
  name,
  isUserGetExternalReview,
}: {
  teamCurturesData?: TeamCulture[];
  workMethodsData?: WorkMethod[];
  name?: string;
  isUserGetExternalReview?: boolean;
}) => {
  return (
    <ProfilePersonalityContainer>
      <ProfilePersonalityTitle>{name} 님의 성향</ProfilePersonalityTitle>
      <ProfilePersonalityDetail>
        스펙트럼 위의 별은 {name} 님이 받은 후기의 평균치를 의미해요.
      </ProfilePersonalityDetail>
      {isUserGetExternalReview ? (
        <ProfilePersonalityContentBox>
          <ProfilePersonalityContent
            datas={teamCurturesData}
            category={TEAM_CURTURE_CATEGORY}
          ></ProfilePersonalityContent>
          <ProfilePersonalityContent
            datas={workMethodsData}
            category={WORK_METHOD_CATEGORY}
          ></ProfilePersonalityContent>
        </ProfilePersonalityContentBox>
      ) : (
        <ProfileNotReviewed />
      )}
    </ProfilePersonalityContainer>
  );
};

const ProfilePersonalityContainer = styled.div``;
const ProfilePersonalityTitle = styled.div`
  ${(props) => props.theme.fonts.heading3};
  color: ${(props) => props.theme.colors.gray100};

  display: inline-block;

  margin: 8rem 0 2rem 0;
`;

const ProfilePersonalityDetail = styled.div`
  ${(props) => props.theme.fonts.bodyL};
  color: ${(props) => props.theme.colors.gray70};

  white-space: break-spaces;
  margin-bottom: 2rem;
`;

const ProfilePersonalityContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
`;
export default ProfilePersonality;

///
