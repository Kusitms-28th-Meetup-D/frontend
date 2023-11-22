import styled from 'styled-components';
import ProfileReviewContentsBox from './ProfileReviewContentsBox';
import { Comment } from '../../interface/Profile';
import ProfileNotReviewed from './ProfileNotReviewed';

const ProfileReview = ({
  reviewData,
  name,
  isLocked,
  setIsLackModalVisible,
  setIsUseModalVisible,
  isUserGetExternalReview,
}: {
  reviewData?: Comment[];
  name?: string;
  isLocked?: boolean;
  setIsLackModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUseModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isUserGetExternalReview?: boolean;
}) => {
  const DETAIL_LOCKED_TICKET = isLocked
    ? `티켓을 사용하면 ${name} 님의 한 줄 추천사를 언제든지 열람하실 수 있습니다.`
    : `티켓을 사용하셨군요. ${name} 님의 한 줄 추천사를 언제든지 열람하실 수 있습니다.`;
  const LOCKED_TICKET_AMMOUNT = isLocked ? '?' : reviewData?.length;
  return (
    <ProfileReviewContainer>
      <ProfileReviewTitle>{name} 님이 받은 한 줄 추천사</ProfileReviewTitle>
      {isUserGetExternalReview ? (
        <>
          <ProfileReviewDetailBox>
            <ProfileReviewDetail>{DETAIL_LOCKED_TICKET}</ProfileReviewDetail>
            <ProfileReviewInfo>
              한 줄 추천사 수<Count>{LOCKED_TICKET_AMMOUNT}개</Count>
              <Align>ㆍ최신순</Align>
            </ProfileReviewInfo>
          </ProfileReviewDetailBox>
          <ProfileReviewContentsBox
            reviewData={reviewData}
            isLocked={isLocked}
            name={name}
            setIsLackModalVisible={setIsLackModalVisible}
            setIsUseModalVisible={setIsUseModalVisible}
          />{' '}
        </>
      ) : (
        <ProfileNotReviewed />
      )}
    </ProfileReviewContainer>
  );
};

const ProfileReviewContainer = styled.div``;
const ProfileReviewTitle = styled.div`
  ${(props) => props.theme.fonts.heading3};
  color: ${(props) => props.theme.colors.gray100};

  display: inline-block;

  margin-top: 8rem;
`;
const ProfileReviewDetailBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ProfileReviewDetail = styled.div`
  ${(props) => props.theme.fonts.bodyL};
  color: ${(props) => props.theme.colors.gray70};

  /* margin-bottom: 2.5rem; */

  white-space: break-spaces;
`;
const ProfileReviewInfo = styled.div`
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

export default ProfileReview;
