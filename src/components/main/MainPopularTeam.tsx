import { styled } from 'styled-components';
import PopularTeamBox from './PopularTeamBox';

const popularTeam = [
  {
    id: '1',
    title: '2021년도 제 1회 삼성 SDS 아이디어 공모전',
    name: '박형준',
    content: '봄감자가 맛있답니다.',
  },
  {
    id: '2',
    title: '2021년도 제 1회 삼성 SDS 아이디어 공모전',
    name: '박형준',
    content: '봄감자가 맛있답니다.',
  },
  {
    id: '3',
    title: '2021년도 제 1회 삼성 SDS 아이디어 공모전',
    name: '박형준',
    content: '봄감자가 맛있답니다.',
  },
  {
    id: '4',
    title: '2021년도 제 1회 삼성 SDS 아이디어 공모전',
    name: '박형준',
    content: '봄감자가 맛있답니다.',
  },
];

const MainPopularTeam = () => {
  return (
    <MainPopularTeamLayout>
      <MainPopularTeamBox>
        <MainPopularTeamContainer>
          <MainPopularTeamTop>
            <div>
              <img src={'/assets/images/main/popular_team_fire.svg'} />
              <h1>실시간으로 인기가 많은 팀에 지원해보세요.</h1>
            </div>
          </MainPopularTeamTop>

          <MainPopularTeamBottom>
            <PopularTeamListBox>
              {popularTeam.map((team) => (
                <PopularTeamBox {...team} />
              ))}
            </PopularTeamListBox>
          </MainPopularTeamBottom>
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

  background: rgba(205, 206, 250, 0.2);
  margin-left: 20rem;
  backdrop-filter: blur(8px);
  border-radius: 0 50px 50px 0;
  border: 1px solid #c5c6fa;
  border-left: none;
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

const MainPopularTeamTop = styled.div`
  display: flex;
  padding-left: 27rem;
`;

const MainPopularTeamBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 10rem;
  margin: 2rem 0 0 30rem;
`;

const MainPopularTeamBackground = styled.img`
  width: 157.4rem;
  height: 50.8rem;
  position: absolute;
  z-index: -1;
  top: 15rem;
  right: 0;
`;

const PopularTeamListBox = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: hidden;
  flex-shrink: 0;

  width: 78.8rem;
  height: 34.2rem;
`;
