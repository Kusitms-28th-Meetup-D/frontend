import styled from 'styled-components';
import { useState } from 'react';
import { useProfileCreate } from '../../hooks/profile/useProfileCreate';

const ProfileSubInfo = ({
  internships,
  awards,
  tools,
  certificates,
}: {
  internships?: string[];
  awards?: string[];
  tools?: string[];
  certificates?: string[];
}) => {
  const TITLES = ['대외활동', '인턴', '사용 가능 툴', '보유 자격증'];
  const NAMES = ['internships', 'awards', 'tools', 'certificates'];

  const [isModifying, setIsModyfying] = useState(false);
  const [texts, setTexts] = useState({
    internships: internships?.join('\n'),
    awards: awards?.join('\n'),
    tools: tools?.join('\n'),
    certificates: certificates?.join('\n'),
  });

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTexts((prev: any) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const profileCreateMutation = useProfileCreate({
    internships: texts?.internships?.split('\n') as string[],
    awards: texts?.awards?.split('\n') as string[],
    tools: texts?.tools?.split('\n') as string[],
    certificates: texts?.certificates?.split('\n') as string[],
  });
  const handleClickModify = () => {
    setIsModyfying((curr) => !curr);
    if (isModifying) {
      profileCreateMutation.mutate();
    }
  };
  return (
    <ProfileSubInfoContainer>
      <ProfileSubInfoBox>
        <ProfileSubInfoTitle>이력</ProfileSubInfoTitle>
        <ProfileSubInfoContents>
          <ModifyProfile onClick={handleClickModify}>
            {isModifying && '저장'}
            {!isModifying && '수정'}
          </ModifyProfile>
          <ContentsSubTitle>{TITLES[0]}</ContentsSubTitle>
          <ContentsDetailBox>
            {isModifying ? (
              <>
                <LengthCount> {texts?.internships?.length}/150</LengthCount>
                <ModifyingArea
                  onChange={handleTextChange}
                  value={texts?.internships}
                  maxLength={150}
                  name={NAMES[0]}
                ></ModifyingArea>
              </>
            ) : (
              internships?.map((content: any, index: number) => (
                <ContentsDetail key={index}>{content}</ContentsDetail>
              ))
            )}
          </ContentsDetailBox>
          <ContentsSubTitle>{TITLES[1]}</ContentsSubTitle>
          <ContentsDetailBox>
            {isModifying ? (
              <>
                <LengthCount>{texts?.awards?.length}/150</LengthCount>
                <ModifyingArea
                  onChange={handleTextChange}
                  value={texts?.awards}
                  maxLength={150}
                  name={NAMES[1]}
                ></ModifyingArea>
              </>
            ) : (
              awards?.map((content: any, index: number) => (
                <ContentsDetail key={index}>{content}</ContentsDetail>
              ))
            )}
          </ContentsDetailBox>
        </ProfileSubInfoContents>
      </ProfileSubInfoBox>
      <ProfileSubInfoBox>
        <ProfileSubInfoTitle>스킬</ProfileSubInfoTitle>
        <ProfileSubInfoContents>
          {' '}
          <ModifyProfile onClick={handleClickModify}>
            {isModifying && '저장'}
            {!isModifying && '수정'}
          </ModifyProfile>
          <ContentsSubTitle>{TITLES[2]}</ContentsSubTitle>
          <ContentsDetailBox>
            {isModifying ? (
              <>
                <LengthCount> {texts?.tools?.length}/150</LengthCount>
                <ModifyingArea
                  onChange={handleTextChange}
                  value={texts?.tools}
                  maxLength={150}
                  name={NAMES[2]}
                ></ModifyingArea>
              </>
            ) : (
              tools?.map((content: any, index: number) => (
                <ContentsDetail key={index}>{content}</ContentsDetail>
              ))
            )}
          </ContentsDetailBox>
          <ContentsSubTitle>{TITLES[3]}</ContentsSubTitle>
          <ContentsDetailBox>
            {isModifying ? (
              <>
                <LengthCount> {texts?.certificates?.length}/150</LengthCount>
                <ModifyingArea
                  onChange={handleTextChange}
                  value={texts?.certificates}
                  maxLength={150}
                  name={NAMES[3]}
                ></ModifyingArea>
              </>
            ) : (
              certificates?.map((content: any, index: number) => (
                <ContentsDetail key={index}>{content}</ContentsDetail>
              ))
            )}
          </ContentsDetailBox>
        </ProfileSubInfoContents>
      </ProfileSubInfoBox>
    </ProfileSubInfoContainer>
  );
};

const ProfileSubInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProfileSubInfoBox = styled.div``;

const ProfileSubInfoTitle = styled.div`
  ${(props) => props.theme.fonts.heading4};
  color: ${(props) => props.theme.colors.gray100};
  margin: 1.8rem 0;
`;
const ProfileSubInfoContents = styled.div`
  position: relative;

  background-color: ${(props) => props.theme.colors.primary10};
  width: 60rem;
  /* height: 28.4rem; */

  border-radius: 1.2rem;
  padding: 1rem 3rem 4rem 3rem;
`;

//

const ContentsSubTitle = styled.div`
  ${(props) => props.theme.fonts.heading4};
  color: ${(props) => props.theme.colors.gray100};
  padding: 1rem 0;
`;
const ContentsDetailBox = styled.div`
  position: relative;
`;
const ContentsDetail = styled.div`
  ${(props) => props.theme.fonts.bodyM};
  color: ${(props) => props.theme.colors.gray90};
  margin-left: 2.2rem;
`;
const ModifyProfile = styled.div`
  position: absolute;
  top: 1rem;
  right: 2rem;

  ${(props) => props.theme.fonts.subtitleXL};
  color: ${(props) => props.theme.colors.primary60};
  text-decoration: underline;

  cursor: pointer;
`;
const ModifyingArea = styled.textarea`
  width: 100%;
  min-height: 15rem;

  border-radius: 0.8rem;
  border: 1px solid ${(props) => props.theme.colors.gray20};
  color: ${(props) => props.theme.colors.gray90};
  ${(props) => props.theme.fonts.bodyM};

  resize: none;
`;
const LengthCount = styled.div`
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;

  color: ${(props) => props.theme.colors.gray70};
  ${(props) => props.theme.fonts.bodyM};
`;

export default ProfileSubInfo;
