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
  background-color: ${(props) => props.theme.colors.primary10};
  width: 60rem;
  /* height: 28.4rem; */

  border-radius: 1.2rem;
  padding: 3rem 3rem;
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

export default ProfileSubInfoContents;
