import styled from 'styled-components';
import { keywordList } from '../../constants/KeywordList';
import { IKeyword } from '../../interface/Profile';

const DETAIL =
  '키워드 옆의 레벨은 해당 키워드를 받은 횟수를 의미해요.\n키워드는 가장 많이 받은 순서대로 상위 5개까지만 노출돼요.';
const ProfileKeyword = ({
  keywordData,
  name,
}: {
  keywordData: IKeyword[];
  name: string;
}) => {
  return (
    <ProfileKeywordContainer>
      <ProfileKeywordTitle>{name} 님의 장점 키워드</ProfileKeywordTitle>
      <ProfileKeywordDetail>{DETAIL}</ProfileKeywordDetail>

      {keywordData.map((data: any, index: number) => {
        const [keywordIdx, count] = Object.values(data) as [number, number];
        return (
          <ProfileKeywordContent key={index}>
            {keywordList[keywordIdx]} | Lv.{count}
          </ProfileKeywordContent>
        );
      })}
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

  margin: 3rem 0;

  white-space: break-spaces;
`;
const ProfileKeywordContent = styled.div`
  ${(props) => props.theme.fonts.subtitleL};
  color: ${(props) => props.theme.colors.primary90};

  display: inline-block;
  border-radius: 1.2rem;
  border: 1px solid ${(props) => props.theme.colors.primary20};

  padding: 1.2rem;
  margin: 1.2rem 1.2rem 1.2rem 0;
`;
export default ProfileKeyword;
