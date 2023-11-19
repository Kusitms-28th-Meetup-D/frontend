import styled from 'styled-components';

import quoteOpenSrc from '/assets/images/profile/quotes_open.svg';
import quoteCloseSrc from '/assets/images/profile/quotes_close.svg';
import { Comment } from '../../interface/Profile';
import ProfileLocked from './ProfileLocked';

const ProfileReviewContentsBox = ({
  reviewData,
  isLocked,
  name,
  setIsLackModalVisible,
  setIsUseModalVisible,
}: {
  reviewData?: Comment[];
  isLocked?: boolean;
  name?: string;
  setIsLackModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUseModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Container $isLocked={isLocked}>
      {isLocked ? (
        <ProfileLocked
          name={name}
          setIsLackModalVisible={setIsLackModalVisible}
          setIsUseModalVisible={setIsUseModalVisible}
        />
      ) : null}
      {reviewData?.map((data, index) => {
        return (
          <ContentBox key={index}>
            <QuoteBox>
              <QuoteImg src={quoteOpenSrc} />
              <QuoteImg src={quoteCloseSrc} />
            </QuoteBox>
            <Text> {data.comments}</Text>
            <Category>{data.contestName}</Category>
          </ContentBox>
        );
      })}
    </Container>
  );
};
const Container = styled.div<{ $isLocked?: boolean }>`
  position: relative;

  ${(props) => props.theme.fonts.bodyL};
  background-color: ${(props) => props.theme.colors.gray5};
  border-radius: 1.2rem;
  border: 1px solid ${(props) => props.theme.colors.primary20};

  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 3rem;

  /* ${(props) => (props.$isLocked ? '100px' : null)}; */
  height: 40rem;
  overflow: hidden;
`;
const ContentBox = styled.div`
  border-radius: 1.2rem;
  border: 1px solid ${(props) => props.theme.colors.primary40};
  padding: 3rem;
`;
const QuoteBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const QuoteImg = styled.img`
  width: 3rem;
`;
const Text = styled.div`
  ${(props) => props.theme.fonts.bodyXL};

  padding: 0 4rem;
`;
const Category = styled.div`
  ${(props) => props.theme.fonts.bodyM};
  color: ${(props) => props.theme.colors.gray60};
  text-align: right;

  padding-right: 4rem;
`;

export default ProfileReviewContentsBox;
