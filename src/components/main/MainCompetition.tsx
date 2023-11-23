import { styled } from 'styled-components';
import CompetitionBox from '../competitionList/CompetitionBox';
import { MainPageContest } from '../../interface/Main';

const MainCompetition = ({
  contestData,
}: {
  contestData?: MainPageContest[];
}) => {
  return (
    <MainCompetitionLayout>
      <MainCompetitionBox>
        <MainCompetitionContainer>
          <MainCompetitionTop>
            <div>
              <img src={'/assets/images/main/competition_fire.svg'} />
              <h1>지금 원팀에서 가장 치열한</h1>
              <h1>공모전, 대회를 모아봤어요</h1>
              <p>참여하고 싶은 공모전을 찾고 함께할 팀을 구해보세요.</p>
            </div>
            <CompetitionListBox>
              {contestData?.slice(0, 3).map((competition) => (
                <CompetitionBox key={competition.contestId} {...competition} />
              ))}
            </CompetitionListBox>
          </MainCompetitionTop>

          <MainCompetitionBottom>
            <CompetitionListBox>
              {contestData?.slice(3, 6).map((competition) => (
                <CompetitionBox key={competition.contestId} {...competition} />
              ))}
            </CompetitionListBox>
          </MainCompetitionBottom>
        </MainCompetitionContainer>
      </MainCompetitionBox>
      <MainCompeitionBackground
        src={'/assets/images/main/competition_background.svg'}
      />
    </MainCompetitionLayout>
  );
};

export default MainCompetition;

const MainCompetitionLayout = styled.div`
  position: relative;
  height: 90rem;
  overflow-x: hidden; //이거지롱
`;

const MainCompetitionBox = styled.div`
  position: relative;
  max-width: 122.4rem;
  margin: 0 auto;
`;

const MainCompetitionContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;

  background: rgba(205, 206, 250, 0.2);
  margin-left: 20rem;
  backdrop-filter: blur(8px);
  border-radius: 50px 0 0 50px;
  border: 1px solid #c5c6fa;
  border-right: none;
  padding: 4.5rem 8rem;

  > img {
    width: 4.2rem;
    height: 5.6rem;
    margin-bottom: 2rem;
  }
  h1 {
    ${({ theme }) => theme.fonts.heading2_1};
    color: ${({ theme }) => theme.colors.gray90};
    white-space: nowrap;
  }
  p {
    ${({ theme }) => theme.fonts.bodyL};
    color: ${({ theme }) => theme.colors.gray60};
    white-space: nowrap;
  }
  margin: 0 auto;
`;

const MainCompetitionTop = styled.div`
  display: flex;
  align-items: center;
  gap: 10rem;
`;

const MainCompetitionBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 10rem;
  margin: 2rem 0 0 30rem;
`;

const MainCompeitionBackground = styled.img`
  width: 34.7rem;
  height: 63rem;
  position: absolute;
  z-index: -1;
  top: 15rem;
  left: 0;
`;

const CompetitionListBox = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: hidden;
  flex-shrink: 0;

  width: 78.8rem;
  height: 34.2rem;
`;
