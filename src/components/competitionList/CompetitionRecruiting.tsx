import { styled } from 'styled-components';
import Pagination from '../common/Pagination';
import { useRecruitingTeam } from '../../hooks/competition/useRecruitingTeam';
import RecruitingBox from './RecruitingBox';
import { useState } from 'react';
import { TextAnimation } from '../../styles/animation';
import { motion } from 'framer-motion';

const CompetitionRecruiting = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { recruitingTeam } = useRecruitingTeam(currentPage, 5);
  const endPage = recruitingTeam?.data.pageResponseDTO.endPage;

  return (
    <RecruitingLayout>
      <RecruitingTitle>지금 모집 중인 팀을 만나보세요.</RecruitingTitle>
      <RecruitingBoxLayout
        initial="hidden"
        animate="visible"
        variants={TextAnimation}
      >
        {recruitingTeam?.data.recruitingTeams.map((recruitingTeam) => (
          <RecruitingBox
            key={recruitingTeam.contestId}
            recruitingTeam={recruitingTeam}
          />
        ))}
      </RecruitingBoxLayout>
      <Pagination
        totalPage={endPage ? endPage : 1}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
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

const RecruitingBoxLayout = styled(motion.div)`
  display: flex;
  gap: 2.5rem;
  padding: 0 10rem;
  width: 100%;

  // 이거
  min-height: 28rem;
`;
