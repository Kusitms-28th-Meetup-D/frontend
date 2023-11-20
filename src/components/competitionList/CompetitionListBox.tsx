import { styled } from 'styled-components';
import CompetitionBox from './CompetitionBox';
import { useRecoilValue } from 'recoil';
import { contestTypeAtom, searchTextAtom } from '../../recoil/competition';
import { useCompetitionList } from '../../hooks/competition/useCompetitionList';
import { useCompetitionSearch } from '../../hooks/competition/useCompeitionSearch';

const CompetitionListBox = () => {
  const contestType = useRecoilValue(contestTypeAtom);
  const searchText = useRecoilValue(searchTextAtom);

  const { competitionList } = useCompetitionList({ contestType: contestType });
  const { competitionSearch } = useCompetitionSearch({
    searchText: searchText,
  });

  return (
    <CompetitionListLayout>
      {searchText.length === 0 ? (
        <>
          {competitionList?.data.map((competition) => (
            <CompetitionBox
              key={competition.contestId}
              contestId={competition.contestId}
              title={competition.title}
              images={competition.images}
              teamNum={competition.teamNum}
              remainDay={competition.remainDay}
              company={competition.company}
            />
          ))}
        </>
      ) : (
        <>
          {competitionSearch?.data.map((competition) => (
            <CompetitionBox
              contestId={competition.contestId}
              title={competition.title}
              images={competition.images}
              teamNum={competition.teamNum}
              remainDay={competition.remainDay}
              company={competition.company}
            />
          ))}
        </>
      )}
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
