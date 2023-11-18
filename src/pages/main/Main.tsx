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

const Main = () => {
  const setHeaderSelected = useSetRecoilState(headerSelectedState);
  useEffect(() => setHeaderSelected(Headers.none));

  return (
    <>
      <MainLayout>
        <MainBox />
        <MainDescription />
      </MainLayout>
      <MainCompetition />
      <MainPopularTeam />
      <MainQuestions />
    </>
  );
};
export default Main;

const MainLayout = styled.div`
  margin: 0 auto;

  @media ${({ theme }) => theme.devices.mobile} {
  }
  @media ${({ theme }) => theme.devices.tablet} {
  }
  @media ${({ theme }) => theme.devices.desktop} {
    max-width: 122.4rem;
  }
`;
