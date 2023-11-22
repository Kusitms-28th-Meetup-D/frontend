import styled from 'styled-components';
import { keywordList } from '../../constants/KeywordList';
import { Keyword } from '../../interface/Profile';
import ProfileNotReviewed from './ProfileNotReviewed';
import { TextAnimation } from '../../styles/animation';
import { motion } from 'framer-motion';

const DETAIL =
  '키워드 옆의 레벨은 해당 키워드를 받은 횟수를 의미해요.\n키워드는 가장 많이 받은 순서대로 상위 5개까지만 노출돼요.';
const ProfileKeyword = ({
  keywords,
  name,
  isUserGetExternalReview,
}: {
  keywords?: Keyword[];
  name?: string;
  isUserGetExternalReview?: boolean;
}) => {
  return (
    <ProfileKeywordContainer>
      <ProfileKeywordTitle>{name} 님의 장점 키워드</ProfileKeywordTitle>
      <ProfileKeywordDetail>{DETAIL}</ProfileKeywordDetail>
      {isUserGetExternalReview ? (
        keywords?.map((data: Keyword, index: number) => {
          const [keywordIdx, count] = Object.values(data) as [number, number];
          return (
            <ProfileKeywordContent
              key={index}
              initial="hidden"
              animate="visible"
              variants={TextAnimation}
            >
              {keywordList[keywordIdx]} | Lv.{count}
            </ProfileKeywordContent>
          );
        })
      ) : (
        <ProfileNotReviewed />
      )}
    </ProfileKeywordContainer>
  );
};
const ProfileKeywordContainer = styled.div``;
const ProfileKeywordTitle = styled.div`
  ${(props) => props.theme.fonts.heading3};
  color: ${(props) => props.theme.colors.gray100};
  margin-top: 8rem;
`;
const ProfileKeywordDetail = styled.div`
  ${(props) => props.theme.fonts.bodyL};
  color: ${(props) => props.theme.colors.gray70};
  margin: 2rem 0 2rem 0;
  white-space: break-spaces;
`;
const ProfileKeywordContent = styled(motion.div)`
  ${(props) => props.theme.fonts.subtitleL};
  color: ${(props) => props.theme.colors.primary90};

  display: inline-block;
  border-radius: 1.2rem;
  border: 1px solid ${(props) => props.theme.colors.primary20};

  padding: 1.2rem;
  margin: 1.2rem 1.2rem 1.2rem 0;
`;
export default ProfileKeyword;
