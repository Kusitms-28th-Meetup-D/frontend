import { styled } from 'styled-components';
import SearchInput from './SearchInput';
import CompetitionButton from './CompetitionButton';
import { useState } from 'react';
import { searchButtonList } from '../../constants/competitionList';

const CompetitionSearch = () => {
  const [selectedButton, setSelectedButton] = useState('전체');

  const handleButtonClick = (text: string) => {
    setSelectedButton(text);
  };
  return (
    <CompetitionSearchBox>
      {/* <SearchBackgroundImg src="/assets/images//searchBox1.svg" /> */}
      <SearchInput />
      <CompetitionButtonLayout>
        {searchButtonList.map((text, index) => (
          <CompetitionButton
            key={index}
            text={text}
            selected={selectedButton === text}
            onClick={() => handleButtonClick(text)}
          />
        ))}
      </CompetitionButtonLayout>
      {/* <SearchBackgroundImg src="/assets/images/competition/searchBox2.svg" /> */}
    </CompetitionSearchBox>
  );
};

export default CompetitionSearch;

const CompetitionSearchBox = styled.div`
  background: ${({ theme }) => theme.colors.primary40};
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

// const SearchBackgroundImg = styled.img``;
