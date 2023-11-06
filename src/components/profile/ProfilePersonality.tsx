import styled from 'styled-components';
import ProfilePersonalityContent from './ProfilePersonalityContent';
import { IQuestion } from '../../interface/Profile';
import { TEAM_CURTURE_CATEGORY, WORK_METHOD_CATEGORY } from '../../constants/Profile';



const ProfilePersonality = ({
  teamCurturesData,
  workMethodsData,
  name,
}: {
  teamCurturesData: IQuestion[];
  workMethodsData: IQuestion[];
  name: string;
}) => {
  return (
    <ProfilePersonalityContainer>
      <ProfilePersonalityTitle>{name} 님의 성향</ProfilePersonalityTitle>
      <ProfilePersonalityDetail>
        스펙트럼 위의 별은 {name} 님이 받은 후기의 평균치를 의미해요.
      </ProfilePersonalityDetail>
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
