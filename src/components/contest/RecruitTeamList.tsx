import styled from 'styled-components';
import RecruitTeamItem from './RecruitTeamItem';
import { useNavigate, useParams } from 'react-router-dom';
import useContestTeamList from '../../hooks/contest/useContestTeamList';
import { useSetRecoilState } from 'recoil';
import { loginModalState } from '../../recoil/atom';
import MyTeamEmpty from '../myteam/MyTeamEmpty';

const RecruitTeamList = ({ isLogin }: { isLogin: boolean }) => {
  const { contestId } = useParams();
  const setLoginModal = useSetRecoilState(loginModalState);
  const navigate = useNavigate();
  const handleBtnClicked = () => {
    if (isLogin) {
      navigate(`/myteam/create/${contestId}`);
    } else {
      setLoginModal(true);
    }
  };

  const { contestTeamListData } = useContestTeamList(contestId as string);
  console.log(contestTeamListData?.data.data);
  return (
    <RecruitTeamListLayout>
      <RecruitTeamListTopContainer>
        <RecruitTeamListTitle>모집 중인 팀</RecruitTeamListTitle>
        <RecruitTeamButton onClick={handleBtnClicked}>
          +팀 오픈하러 가기
        </RecruitTeamButton>
      </RecruitTeamListTopContainer>
      {contestTeamListData && contestTeamListData?.data.data.length == 0 ? (
        <MyTeamEmpty text="아직 모집중인 팀이 없어요" />
      ) : null}
      <RecruitTeamContainer>
        {contestTeamListData?.data.data.map((data, index) => {
          return <RecruitTeamItem teamData={data} key={index} />;
        })}
      </RecruitTeamContainer>
    </RecruitTeamListLayout>
  );
};

const RecruitTeamListLayout = styled.div`
  margin-left: 3rem;
`;
const RecruitTeamListTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0 4.5rem 0;
`;

const RecruitTeamListTitle = styled.div`
  ${(props) => props.theme.fonts.heading3};
  color: ${(props) => props.theme.colors.gray100};
`;
const RecruitTeamButton = styled.button`
  ${(props) => props.theme.fonts.buttonL};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary60};

  display: inline-block;

  width: 20.8rem;
  height: 6.4rem;
  border-radius: 3.2rem;
`;
const RecruitTeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
export default RecruitTeamList;
