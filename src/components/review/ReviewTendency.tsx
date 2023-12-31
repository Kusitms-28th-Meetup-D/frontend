import { useRecoilValue } from 'recoil';
import { selectedNameAtom } from '../../recoil/review';
import { styled } from 'styled-components';
import TendencyBox from './TendencyBox';
import { question1, question2 } from '../../constants/review';

interface ReviewTendencyProps {
  userName?: string;
}

const ReviewTendency = ({ userName }: ReviewTendencyProps) => {
  const selectedName = useRecoilValue(selectedNameAtom);
  return (
    <>
      <TendencyTitle>
        {userName ? userName : selectedName} 님은 어떤 성향일까요?
      </TendencyTitle>
      <TendencyBoxLayout>
        <TendencyBox boxName="팀 문화" question={question1} arrIndex={0} />
        <TendencyBox boxName="작업 방식" question={question2} arrIndex={1} />
      </TendencyBoxLayout>
    </>
  );
};

export default ReviewTendency;

const TendencyTitle = styled.div`
  ${({ theme }) => theme.fonts.heading3};
  color: ${({ theme }) => theme.colors.gray90};
  margin-bottom: 1.4rem;
`;

const TendencyBoxLayout = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;
`;
