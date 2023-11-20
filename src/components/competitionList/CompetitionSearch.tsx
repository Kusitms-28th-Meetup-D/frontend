import { styled } from 'styled-components';
import SearchInput from './SearchInput';
import CompetitionButton from './CompetitionButton';
import { searchButtonList } from '../../constants/competitionList';
import { useRecoilState } from 'recoil';
import { contestTypeAtom } from '../../recoil/competition';

const CompetitionSearch = () => {
  const [contestType, setContestType] = useRecoilState(contestTypeAtom);

  const handleButtonClick = (index: number) => {
    setContestType(index);
  };
  return (
    <CompetitionSearchBox>
      <SearchInput />
      <CompetitionButtonLayout>
        {searchButtonList.map((text, index) => (
          <CompetitionButton
            key={index}
            text={text}
            selected={contestType === index}
            onClick={() => handleButtonClick(index)}
          />
        ))}
      </CompetitionButtonLayout>
    </CompetitionSearchBox>
  );
};

export default CompetitionSearch;

const CompetitionSearchBox = styled.div`
  background-image: url('/assets/images/competition/competition_search_background.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  padding: 3.5rem 2rem;
  border-radius: 1.2rem;
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const CompetitionButtonLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;
