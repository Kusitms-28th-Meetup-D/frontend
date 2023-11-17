import styled from 'styled-components';

import { useParams } from 'react-router-dom';
import useContestInfo from '../../hooks/contest/useContestInfo';

const ContestInfo = () => {
  const { contestId } = useParams();
  const { contestInfoData } = useContestInfo(contestId as string);

  return (
    <ContestInfoLayout>
      <ContestInfoTitle>{contestInfoData?.data.data.title}</ContestInfoTitle>
      <ContestContainer>
        <ContestImg src={contestInfoData?.data.data.images[0]} />
        <ContestTextBox>
          <Dday>D-{contestInfoData?.data.data.contestId}</Dday>
          <Description>
            <span>모집 기간 : </span>
            {contestInfoData?.data.data.recruitDate}
          </Description>
          <Description>
            <span>분야 : </span>
            {contestInfoData?.data.data.types.map((type, index) => (
              <span key={index}>{type}, </span>
            ))}
          </Description>
          <Description>
            <span>주제 : </span>
            {contestInfoData?.data.data.subject}
          </Description>
          <Description>
            <span>지원 자격 : </span>
            {contestInfoData?.data.data.qualification}
          </Description>
          <Description>
            <span>전체 일정 : </span>
            {contestInfoData?.data.data.fullSchedule}
          </Description>
          <Description>
            <span>시상 내역 : </span>
            {contestInfoData?.data.data.price}
          </Description>
        </ContestTextBox>
      </ContestContainer>
    </ContestInfoLayout>
  );
};
const ContestInfoLayout = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 122.4rem;
  margin: auto;
`;
const ContestInfoTitle = styled.div`
  ${(props) => props.theme.fonts.heading2_1};
  color: ${(props) => props.theme.colors.gray90};

  margin-top: 3rem;
`;
const ContestContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
`;
const ContestImg = styled.img`
  width: 36.8rem;
  height: 45.4rem;
  border-radius: 1.2rem;
`;

const ContestTextBox = styled.div`
  ${(props) => props.theme.fonts.subtitleM};
  background-color: ${(props) => props.theme.colors.gray5};

  border: 1px solid ${(props) => props.theme.colors.primary20};
  border-radius: 1.2rem;

  height: 45.4rem;
  width: 100%;
  /* display: flex; */

  padding: 1.9rem 3.6rem;

  white-space: break-spaces;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.gray20};
    border-radius: 6px;
  }
`;
const Dday = styled.div`
  ${(props) => props.theme.fonts.heading5};
  color: ${(props) => props.theme.colors.error90};

  margin-bottom: 2rem;
`;
const Description = styled.div`
  ${(props) => props.theme.fonts.bodyM};
  color: ${(props) => props.theme.colors.gray90};

  > span:first-child {
    ${(props) => props.theme.fonts.subtitleM};
  }

  margin-bottom: 2rem;
`;
export default ContestInfo;
