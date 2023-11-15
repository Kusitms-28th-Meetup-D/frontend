import { styled } from 'styled-components';
import HeroBox from './HeroBox';
import { heroList } from '../../constants/recommendation';
import { useState } from 'react';

const RecommendationHero = () => {
  const [selectedHero, setSelectedHero] = useState('');

  return (
    <>
      <HeroTitle>추천사를 남길 주인공은?</HeroTitle>
      <HeroLayout>
        {heroList.map((hero) => (
          <HeroBox
            key={hero.name}
            name={hero.name}
            src={hero.src}
            selected={selectedHero === hero.name}
            onSelect={() => setSelectedHero(hero.name)}
          />
        ))}
      </HeroLayout>
    </>
  );
};

export default RecommendationHero;

const HeroTitle = styled.div`
  ${({ theme }) => theme.fonts.heading3};
  text-align: center;
  margin: 4rem 0 5rem 0;
`;

const HeroLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 0 15rem;
`;
