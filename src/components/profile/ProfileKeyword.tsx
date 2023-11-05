import styled from 'styled-components';
import { IKeyword } from '../../pages/profile/Profile';
const KEYWORDS = [
  '🔥계획 마스터',
  '불타는 열정왕',
  '전공스킬 넘사벽,',
  '💬소통의 귀재',
  '🧠논리의 왕',
  '😎분위기 메이커',
  '꽉찬 리더십',
  '경험가득 고인물',
  '올라운더',
  '빛의 작업속도',
];
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
      {/* {Object.entries(keywordData).map(([key, value], index) => (
        <ProfileKeywordContent key={index}>
          {`KEYWORDS[${key}] | Lv.${value}`}
        </ProfileKeywordContent>
      ))} */}
      {keywordData.map((data: any, index: number) => {
        const [keywordIdx, count] = Object.values(data) as [number, number];
        return (
          <ProfileKeywordContent key={index}>
            {KEYWORDS[keywordIdx]} | Lv.{count}
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

  margin-top: 2.5rem;

  white-space: break-spaces;
`;
const ProfileKeywordContent = styled.div`
  ${(props) => props.theme.fonts.subtitleL};
  color: ${(props) => props.theme.colors.primary90};

  display: inline-block;
  border-radius: 1.2rem;
  border: 1px solid ${(props) => props.theme.colors.primary20};

  padding: 1.2rem;
  margin-left: 1.2rem;
`;
export default ProfileKeyword;
