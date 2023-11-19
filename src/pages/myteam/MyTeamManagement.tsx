import styled from 'styled-components';
import ContestInfo from '../../components/contest/ContestInfo';
import { useEffect } from 'react';

import starSrc from '/assets/images/common/star.svg';
import { Headers } from '../../constants/Header';
import { useSetRecoilState } from 'recoil';
import { headerSelectedState } from '../../recoil/atom';
const MyTeamManagement = () => {
  const setHeaderSelected = useSetRecoilState(headerSelectedState);
  useEffect(() => setHeaderSelected(Headers.myTeam));
  return (
    <Managelayout>
      <CurrPath>{'내 팀 > 내가 오픈한 팀'}</CurrPath>
      <ContestInfo />
      <Subtitle>
        <StarImg src={starSrc} />
        합류한 팀원들<SubCurrPeople>총 8명</SubCurrPeople>
      </Subtitle>
    </Managelayout>
  );
};
const Managelayout = styled.div`
  max-width: 122.4rem;
  margin: auto;

  display: flex;
  flex-direction: column;
`;
const CurrPath = styled.div`
  ${(props) => props.theme.fonts.heading5};
  color: ${(props) => props.theme.colors.primary90};
`;

const Subtitle = styled.div`
  ${(props) => props.theme.fonts.heading4};
  color: ${(props) => props.theme.colors.primary90};

  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 1rem;
`;
const StarImg = styled.img`
  width: 2.8rem;
  height: 2.8rem;
`;
const SubCurrPeople = styled.div`
  ${(props) => props.theme.fonts.subtitleL};
  color: ${(props) => props.theme.colors.primary40};
`;
export default MyTeamManagement;
