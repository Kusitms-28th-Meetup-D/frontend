import { styled } from 'styled-components';
import { Headers } from '../../constants/Header';
import { headerSelectedState } from '../../recoil/atom';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import MainBox from '../../components/main/MainBox';
import MainDescription from '../../components/main/MainDescription';
import MainCompetition from '../../components/main/MainCompetition';
import MainPopularTeam from '../../components/main/MainPopularTeam';
import MainQuestions from '../../components/main/MainQuestions';
import MainSwiper from '../../components/main/MainSwiper';
import useMainPageInfo from '../../hooks/main/useMainPageInfo';

const Main = () => {
  const setHeaderSelected = useSetRecoilState(headerSelectedState);
  useEffect(() => setHeaderSelected(Headers.none));

  const { mainPageInfoData } = useMainPageInfo();
  console.log(mainPageInfoData);
  return (
    <>
      <MainSwiper />
      <MainLayout>
        <MainBox />
        <MainDescription />
      </MainLayout>
      <MainCompetition
        contestData={mainPageInfoData?.data.data.recommendationContests}
      />
      <MainPopularTeam
        teamData={mainPageInfoData?.data.data.recommendationTeams}
      />
      <MainQuestions />
    </>
  );
};
export default Main;

const MainLayout = styled.div`
  margin: 0 auto;
  max-width: 122.4rem;
`;
