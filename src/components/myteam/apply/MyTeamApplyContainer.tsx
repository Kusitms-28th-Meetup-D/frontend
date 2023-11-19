import styled from 'styled-components';
import { AppliedTeamData } from '../../../interface/MyTeam';

const MyTeamApplyContainer: React.FC<AppliedTeamData> = (props) => {
  props;
  return (
    <Layout>
      <TitleBox>
        <Title></Title>
        {/* <ContestImg src={props?.contestImage[0]} /> */}
      </TitleBox>
    </Layout>
  );
};
const Layout = styled.div`
  width: 100%;
  height: 35.3rem;
  background-color: ${(props) => props.theme.colors.primary10};
`;
const TitleBox = styled.div``;
const Title = styled.div`
  ${(props) => props.theme.fonts.subtitleS};
  color: ${(props) => props.theme.colors.gray90};
  width: 100%;
  height: 35.3rem;
`;
// const ContestImg = styled.img`
//   width: 16.9rem;
//   height: 23.1rem;
// `;
export default MyTeamApplyContainer;
