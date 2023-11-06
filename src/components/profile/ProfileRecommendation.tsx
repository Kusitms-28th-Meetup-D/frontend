import styled from 'styled-components';
import ProfileRecommendationContentsBox from './ProfileRecommendationContentsBox';
import { IRecommendation } from '../../interface/Profile';

const ProfileRecommendation = ({
  recommendationData,
  name,
}: {
  recommendationData: IRecommendation[];
  name: string;
}) => {
  const DETAIL_USE_TICKET = `티켓을 사용하셨군요. ${name} 님의 한 줄 추천사를 언제든지 열람하실 수 있습니다.`;
  return (
    <ProfileRecommendationContainer>
      <ProfileRecommendationTitle>
        {name} 님이 받은 한 줄 추천사
      </ProfileRecommendationTitle>
      <ProfileRecommendationDetailBox>
        <ProfileRecommendationDetail>
          {DETAIL_USE_TICKET}
        </ProfileRecommendationDetail>
        <ProfileRecommendationInfo>
          한 줄 추천사 수<Count>{recommendationData.length}개</Count>
          <Align>최신순↑</Align>
        </ProfileRecommendationInfo>
      </ProfileRecommendationDetailBox>
      <ProfileRecommendationContentsBox
        recommendationData={recommendationData}
      />
    </ProfileRecommendationContainer>
  );
};

const ProfileRecommendationContainer = styled.div``;
const ProfileRecommendationTitle = styled.div`
  ${(props) => props.theme.fonts.heading3};
  color: ${(props) => props.theme.colors.gray100};

  display: inline-block;

  margin-top: 8rem;
`;
const ProfileRecommendationDetailBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ProfileRecommendationDetail = styled.div`
  ${(props) => props.theme.fonts.bodyL};
  color: ${(props) => props.theme.colors.gray70};

  /* margin-bottom: 2.5rem; */

  white-space: break-spaces;
`;
const ProfileRecommendationInfo = styled.div`
  ${(props) => props.theme.fonts.bodyM};
  color: ${(props) => props.theme.colors.gray70};

  display: inline-block;
`;
const Count = styled.div`
  ${(props) => props.theme.fonts.heading3};
  color: ${(props) => props.theme.colors.primary60};
  display: inline-block;

  margin: 0 1rem;
`;

const Align = styled.div`
  ${(props) => props.theme.fonts.subtitleM};
  color: ${(props) => props.theme.colors.gray90};

  display: inline-block;
`;

export default ProfileRecommendation;
