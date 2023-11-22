import { styled } from 'styled-components';
import HeroBox from './HeroBox';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useReviewUsers } from '../../hooks/review/useReviewUsers';
import { userReviewResponse } from '../../interface/Review';
import { reviewMemberIndexState, reviewState } from '../../recoil/atom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const ReviewHero = () => {
  const [selectedHero, setSelectedHero] = useState('');
  const { teamId } = useParams();
  const { reviewUsers } = useReviewUsers(Number(teamId));
  console.log(reviewUsers?.data.userReviewResponseDtoList);

  const reviewRecoilData = useRecoilValue(reviewState);
  const setReviewMemberIndex = useSetRecoilState(reviewMemberIndexState);

  const handleSelect = (hero: userReviewResponse, index: number) => {
    setReviewMemberIndex(index);
    setSelectedHero(hero.teamMemberName);
    console.log('hero:', index, reviewRecoilData);
  };
  return (
    <>
      <HeroTitle>리뷰를 남길 주인공은?</HeroTitle>
      <HeroLayout>
        {reviewUsers &&
          reviewUsers?.data.userReviewResponseDtoList.map((hero, index) => (
            <HeroBox
              key={index}
              hero={hero}
              selected={selectedHero === hero.teamMemberName}
              onSelect={() => handleSelect(hero, index)}
            />
          ))}
      </HeroLayout>
    </>
  );
};

export default ReviewHero;

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
