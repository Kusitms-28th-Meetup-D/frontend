import { styled } from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { MainPageContest } from '../../interface/Main';

const CompetitionBox = ({
  contestId,
  title,
  company,
  images,
  remainDay,
  teamNum,
}: MainPageContest) => {
  const navigate = useNavigate();

  return (
    <CompetitionBoxLayout onClick={() => navigate(`list/${contestId}`)}>
      <CompetitionTop>
        <CompetitionremainDay>D-{remainDay}</CompetitionremainDay>
        <CompetitionteamNum>모집 중인 팀 : {teamNum}팀</CompetitionteamNum>
      </CompetitionTop>
      <CompetitionImage src={images[0]} />
      <CompetitionTitle>{title}</CompetitionTitle>
      <Competitioncompany>{company}</Competitioncompany>
    </CompetitionBoxLayout>
  );
};

export default CompetitionBox;

const CompetitionBoxLayout = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 1.8rem;
  border: 2px solid ${({ theme }) => theme.colors.primary20};
  border-radius: 10.58px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;

  overflow: hidden;
`;

const CompetitionTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CompetitionremainDay = styled.div`
  ${({ theme }) => theme.fonts.subtitleS};
  color: ${({ theme }) => theme.colors.error90};
`;

const CompetitionteamNum = styled.div`
  ${({ theme }) => theme.fonts.subtitleS};
  color: ${({ theme }) => theme.colors.primary40};
`;

const CompetitionImage = styled.img`
  margin: 1.2rem 0;
  width: 16rem;
  margin: 1rem auto;
`;

const CompetitionTitle = styled.div`
  ${({ theme }) => theme.fonts.subtitleM};
  color: ${({ theme }) => theme.colors.gray70};
  text-align: center;
`;

const Competitioncompany = styled.div`
  ${({ theme }) => theme.fonts.bodyXXS};
  color: ${({ theme }) => theme.colors.gray50};
  text-align: center;
`;
