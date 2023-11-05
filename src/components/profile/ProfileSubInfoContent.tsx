import styled from 'styled-components';
import { SubInfoContentsProps } from './ProfileSubInfo';

const ProfileSubInfoContents = ({
  props1,
  props2,
}: {
  props1: SubInfoContentsProps;
  props2: SubInfoContentsProps;
}) => {
  return (
    <ContentsContainer>
      <ContentsSubTitle>{props1.title}</ContentsSubTitle>
      {props1.contents.map((content, index) => (
        <ContentsDetail key={index}>{content}</ContentsDetail>
      ))}
      <ContentsSubTitle>{props2.title}</ContentsSubTitle>
      {props2.contents.map((content, index) => (
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
  padding: 2rem 3rem;
`;

const ContentsSubTitle = styled.div`
  ${(props) => props.theme.fonts.heading4};
  color: ${(props) => props.theme.colors.gray100};
  padding: 2rem 0 1rem 0;
`;
const ContentsDetail = styled.div`
  ${(props) => props.theme.fonts.bodyM};
  color: ${(props) => props.theme.colors.gray90};
  margin-left: 2.2rem;
`;

export default ProfileSubInfoContents;
