import styled from 'styled-components';

const ProfileSubInfoContents = ({
  props1,
  props2,
  titles,
}: {
  props1?: string[];
  props2?: string[];
  titles: string[];
}) => {
  return (
    <ContentsContainer>
      <ModifyProfile>수정</ModifyProfile>
      <ContentsSubTitle>{titles[0]}</ContentsSubTitle>
      {props1?.map((content: any, index: number) => (
        <ContentsDetail key={index}>{content}</ContentsDetail>
      ))}
      <ContentsSubTitle>{titles[1]}</ContentsSubTitle>
      {props2?.map((content: any, index: number) => (
        <ContentsDetail key={index}>{content}</ContentsDetail>
      ))}
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
export default ProfileSubInfoContents;
