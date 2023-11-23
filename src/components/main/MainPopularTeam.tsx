import { styled } from 'styled-components';
import PopularTeamBox from './PopularTeamBox';
import { MainPageTeam } from '../../interface/Main';

const MainPopularTeam = ({ teamData }: { teamData?: MainPageTeam[] }) => {
  return (
    <MainPopularTeamLayout>
      <MainPopularTeamBox>
        <MainPopularTeamContainer>
          <img src={'/assets/images/main/popular_team_fire.svg'} />
          <h1>실시간으로 인기가 많은 팀에 지원해보세요.</h1>

          <PopularTeamListBox>
            {teamData?.map((team, index) => (
              <PopularTeamBox key={index} index={index} {...team} />
            ))}
          </PopularTeamListBox>
        </MainPopularTeamContainer>
      </MainPopularTeamBox>
      <MainPopularTeamBackground
        src={'/assets/images/main/popular_team_background.svg'}
      />
    </MainPopularTeamLayout>
  );
};

export default MainPopularTeam;

const MainPopularTeamLayout = styled.div`
  position: relative;
  height: 90rem;
`;

const MainPopularTeamBox = styled.div`
  position: relative;
  max-width: 122.4rem;
  margin: 0 auto;
`;

const MainPopularTeamContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  padding: 7rem 0 7rem 40rem;

  background: rgba(205, 206, 250, 0.2);
  margin-left: 20rem;
  backdrop-filter: blur(8px);
  border-radius: 0 50px 50px 0;
  border: 1px solid #c5c6fa;
  border-left: none;

  > img {
    width: 4.2rem;
    height: 5.6rem;
    margin-bottom: 1rem;
  }
  > h1 {
    ${({ theme }) => theme.fonts.heading2_1};
    color: ${({ theme }) => theme.colors.gray90};
    white-space: nowrap;
    margin-bottom: 8rem;
  }
`;

const PopularTeamListBox = styled.div`
  position: relative;

  display: flex;
  gap: 4rem;
`;

const MainPopularTeamBackground = styled.img`
  width: 157.4rem;
  height: 50.8rem;
  position: absolute;
  z-index: -1;
  top: 15rem;
  right: 0;
`;
