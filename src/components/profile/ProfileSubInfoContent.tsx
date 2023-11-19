import styled from 'styled-components';
import { useState } from 'react';
import { useProfileCreate } from '../../hooks/profile/useProfileCreate';
const ProfileSubInfoContents = ({
  props1,
  props2,
  props3,
  props4,
  titles,
  names,
}: {
  props1?: string[];
  props2?: string[];
  props3?: string[];
  props4?: string[];
  titles: string[];
  names: string[];
}) => {
  const props1ToString = props1?.join('\n');
  const props2ToString = props2?.join('\n');

  const [isModifying, setIsModyfying] = useState(false);
  const [text1, setText1] = useState(props1ToString);
  const [text2, setText2] = useState(props2ToString);
  const [profiles, setProfiles] = useState({
    internships: props1 as string[],
    awards: props2 as string[],
    tools: props3 as string[],
    certificates: props4 as string[],
  });

  const handleText1Change = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText1(event.target.value);
    setProfiles((prev: any) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleText2Change = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText2(event.target.value);
    setProfiles((prev: any) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const profileCreateMutation = useProfileCreate(profiles);
  const handleClickModify = () => {
    setIsModyfying((curr) => !curr);
    if (isModifying) {
      console.log(profiles);
      // profileCreateMutation.mutate();
    }
  };
  return (
    <ContentsContainer>
      <ModifyProfile onClick={handleClickModify}>
        {isModifying && '저장'}
        {!isModifying && '수정'}
      </ModifyProfile>
      <ContentsSubTitle>{titles[0]}</ContentsSubTitle>
      <ContentsDetailBox>
        {isModifying ? (
          <>
            <LengthCount> {text1?.length}/150</LengthCount>
            <ModifyingArea
              onChange={handleText1Change}
              value={text1}
              maxLength={150}
              name={names[0]}
            ></ModifyingArea>
          </>
        ) : (
          props1?.map((content: any, index: number) => (
            <ContentsDetail key={index}>{content}</ContentsDetail>
          ))
        )}
      </ContentsDetailBox>
      <ContentsSubTitle>{titles[1]}</ContentsSubTitle>
      <ContentsDetailBox>
        {isModifying ? (
          <>
            <LengthCount> {text2?.length}/150</LengthCount>
            <ModifyingArea
              onChange={handleText2Change}
              value={text2}
              maxLength={150}
              name={names[1]}
            ></ModifyingArea>
          </>
        ) : (
          props2?.map((content: any, index: number) => (
            <ContentsDetail key={index}>{content}</ContentsDetail>
          ))
        )}
      </ContentsDetailBox>
    </ContentsContainer>
  );
};

const ContentsContainer = styled.div`
  position: relative;

  background-color: ${(props) => props.theme.colors.primary10};
  width: 60rem;
  /* height: 28.4rem; */

  border-radius: 1.2rem;
  padding: 1rem 3rem 4rem 3rem;
`;

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
export default ProfileSubInfoContents;
