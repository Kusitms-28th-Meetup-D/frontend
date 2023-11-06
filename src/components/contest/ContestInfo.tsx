import styled from 'styled-components';
import { CONTEST_DATA } from '../../constants/Contest';

const ContestInfo = () => {
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

  overflow: scroll;
`;
const Dday = styled.div`
  ${(props) => props.theme.fonts.heading5};
  color: ${(props) => props.theme.colors.error90};

  margin-bottom: 2rem;
`;
export default ContestInfo;
