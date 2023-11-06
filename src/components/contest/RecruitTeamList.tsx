import styled from 'styled-components';
import { TEAMS_DATA } from '../../constants/Contest';
import RecruitTeamItem from './RecruitTeamItem';

const RecruitTeamList = () => {
  return (
    <RecruitTeamListLayout>
      <RecruitTeamListTopContainer>
        <RecruitTeamListTitle>모집 중인 팀</RecruitTeamListTitle>
        <RecruitTeamButton>+팀 오픈하러 가기</RecruitTeamButton>
      </RecruitTeamListTopContainer>{' '}
      <RecruitTeamContainer>
        {TEAMS_DATA.map((data, index) => {
          return <RecruitTeamItem data={data} key={index} />;
        })}
      </RecruitTeamContainer>
    </RecruitTeamListLayout>
  );
};

const RecruitTeamListLayout = styled.div`
  margin-left: 3rem;
`;
const RecruitTeamListTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0 4.5rem 0;
`;

const RecruitTeamListTitle = styled.div`
  ${(props) => props.theme.fonts.heading3};
  color: ${(props) => props.theme.colors.gray100};
`;
const RecruitTeamButton = styled.button`
  ${(props) => props.theme.fonts.buttonL};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary60};

  display: inline-block;

  width: 20.8rem;
  height: 6.4rem;
  border-radius: 3.2rem;
`;
const RecruitTeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
export default RecruitTeamList;
