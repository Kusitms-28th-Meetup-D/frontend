import { useRecoilValue } from 'recoil';
import { selectedNameAtom } from '../../recoil/recommendation';
import { styled } from 'styled-components';
import TendencyBox from './TendencyBox';
import { question1, question2 } from '../../constants/recommendation';

const RecommendationTendency = () => {
  const selectedName = useRecoilValue(selectedNameAtom);

  return (
    <>
      <TendencyTitle>{selectedName} 님은 어떤 성향일까요?</TendencyTitle>
      <TendencyBoxLayout>
        <TendencyBox boxName="팀 문화" question={question1} />
        <TendencyBox boxName="작업 방식" question={question2} />
      </TendencyBoxLayout>
    </>
  );
};

export default RecommendationTendency;

const TendencyTitle = styled.div`
  ${({ theme }) => theme.fonts.heading3};
  color: ${({ theme }) => theme.colors.gray90};
  margin-bottom: 1.4rem;
`;

const TendencyBoxLayout = styled.div`
  display: flex;
  gap: 2rem;
`;
