import { styled } from 'styled-components';
import CompetitionBox from './CompetitionBox';
import { useCompetitionList } from '../../hooks/competition/useCompetitionList';

const CompetitionListBox = () => {
  const { competitionList } = useCompetitionList();

  return (
    <CompetitionListLayout>
      {competitionList?.data.map((competition) => (
        <CompetitionBox
          contestId={competition.contestId}
          title={competition.title}
          images={competition.images}
          teamNum={competition.teamNum}
          remainDay={competition.remainDay}
          company={competition.company}
        />
      ))}
    </CompetitionListLayout>
  );
};

export default CompetitionListBox;

const CompetitionListLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2.5rem;
  background: ${({ theme }) => theme.colors.gray5};
  padding: 5rem 6rem;
  border-radius: 20px;
`;
