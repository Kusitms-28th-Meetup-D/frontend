import { styled } from 'styled-components';
import LeftBox from './LeftBox';
import RightBox from './RightBox';

const MainBox = () => {
  return (
    <MainBoxContainer>
      <LeftBox />
      <RightBox />
    </MainBoxContainer>
  );
};

export default MainBox;

const MainBoxContainer = styled.div`
  display: flex;
  gap: 2rem;
  transform: translateY(-50%);
  z-index: 1;
`;
