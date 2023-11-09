import { styled } from 'styled-components';
import { recruitingList } from '../../constants/competitionList';
import RecruitingBox from './RecruitingBox';
import Pagination from '../common/Pagination';

const CompetitionRecruiting = () => {
  return (
    <RecruitingLayout>
      <RecruitingTitle>지금 모집 중인 팀을 만나보세요.</RecruitingTitle>
      <RecruitingBoxLayout>
        {recruitingList.map((recruiting) => (
          <RecruitingBox key={recruiting.id} {...recruiting} />
        ))}
      </RecruitingBoxLayout>
      <Pagination totalPage={3} currentPage={1} setCurrentPage={() => {}} />
    </RecruitingLayout>
  );
};

export default CompetitionRecruiting;

const RecruitingLayout = styled.div`
  background: ${({ theme }) => theme.colors.gray5};
  border-radius: 0 0 30px 30px;
  padding: 3rem;
`;

const RecruitingTitle = styled.div`
  ${({ theme }) => theme.fonts.heading6};
  color: ${({ theme }) => theme.colors.gray90};
  margin-bottom: 3rem;
`;

const RecruitingBoxLayout = styled.div`
  display: flex;
  gap: 2.5rem;
  padding: 0 10rem;
`;
