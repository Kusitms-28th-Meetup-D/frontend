import styled from 'styled-components';
import { CONTEST_DATA } from '../../constants/Contest';
import getContestInfo from '../../apis/contest/getContestInfo';
import { useEffect } from 'react';
import { ResponseContestInfo } from '../../interface/Contest';
import { AxiosResponse } from 'axios';

const ContestInfo = () => {
  const fetchContestInfo = async () => {
    try {
      const responseContestInfo: AxiosResponse<ResponseContestInfo> =
        await getContestInfo({
          contestId: '6540d2d1c4c5fca30ca61e23',
        });
      console.log('responseContestInfo Complete', responseContestInfo);
    } catch (error) {
      console.log('responseContestInfo Error', error);
    }
  };
  useEffect(() => {
    fetchContestInfo();
  }, []);
  return (
    <ContestInfoLayout>
      <ContestInfoTitle>{CONTEST_DATA.title}</ContestInfoTitle>
      <ContestContainer>
        <ContestImg src={CONTEST_DATA.images[0]} />
        <ContestTextBox>
          <Dday>D-{CONTEST_DATA.remainDay}</Dday>
          {CONTEST_DATA.data}
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
export default ContestInfo;
