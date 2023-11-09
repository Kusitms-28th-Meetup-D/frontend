import { styled } from 'styled-components';
import CompetitionBox from './CompetitionBox';
import { competitionList } from '../../constants/competitionList';

const CompetitionListBox = () => {
  return (
    <CompetitionListLayout>
      {competitionList.map((competition) => (
        <CompetitionBox
          key={competition.contestId}
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