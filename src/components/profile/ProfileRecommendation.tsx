import styled from 'styled-components';
import ProfileRecommendationContentsBox from './ProfileRecommendationContentsBox';
import { Comment } from '../../interface/Profile';

const ProfileRecommendation = ({
  recommendationData,
  name,
  isLocked,
  setIsLackModalVisible,
  setIsUseModalVisible,
}: {
  recommendationData?: Comment[];
  name?: string;
  isLocked?: boolean;
  setIsLackModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUseModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const DETAIL_LOCKED_TICKET = isLocked
    ? `티켓을 사용하면 ${name} 님의 한 줄 추천사를 언제든지 열람하실 수 있습니다.`
    : `티켓을 사용하셨군요. ${name} 님의 한 줄 추천사를 언제든지 열람하실 수 있습니다.`;
  const LOCKED_TICKET_AMMOUNT = isLocked ? '?' : recommendationData?.length;
  return (
    <ProfileRecommendationContainer>
      <ProfileRecommendationTitle>
        {name} 님이 받은 한 줄 추천사
      </ProfileRecommendationTitle>
      <ProfileRecommendationDetailBox>
        <ProfileRecommendationDetail>
          {DETAIL_LOCKED_TICKET}
        </ProfileRecommendationDetail>
        <ProfileRecommendationInfo>
          한 줄 추천사 수<Count>{LOCKED_TICKET_AMMOUNT}개</Count>
          <Align>최신순↑</Align>
        </ProfileRecommendationInfo>
      </ProfileRecommendationDetailBox>
      <ProfileRecommendationContentsBox
        recommendationData={recommendationData}
        isLocked={isLocked}
        name={name}
        setIsLackModalVisible={setIsLackModalVisible}
        setIsUseModalVisible={setIsUseModalVisible}
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
