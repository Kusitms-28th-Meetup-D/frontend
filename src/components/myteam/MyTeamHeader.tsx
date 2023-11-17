import { useRecoilState, useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import { selectedTeamAtom } from '../../recoil/myteam';
import { useNavigate } from 'react-router-dom';
import { loginInfoState } from '../../recoil/atom';

const MyTeamHeader = () => {
  const navigate = useNavigate();
  const loginInfo = useRecoilValue(loginInfoState);
  const [selectedTeam, setSelectedTeam] = useRecoilState(selectedTeamAtom);

  const handleCategoryClick = (id: number) => {
    setSelectedTeam(id);
    if (id === 0) {
      navigate(`/myteam/:${loginInfo.data?.userId}/open`);
    } else if (id === 1) {
      navigate(`/myteam/:${loginInfo.data?.userId}/apply`);
    } else if (id === 2) {
      navigate(`/myteam/:${loginInfo.data?.userId}/active`);
    } else if (id === 3) {
      navigate(`/myteam/:${loginInfo.data?.userId}/end`);
    }
  };

  return (
    <>
      <MyTeamTitle>내 팀</MyTeamTitle>
      <MyTeamCategories>
        {[0, 1, 2, 3].map((id) => (
          <MyTeamCategory
            key={id}
            $active={selectedTeam === id}
            onClick={() => handleCategoryClick(id)}
          >
            {['내가 오픈한 팀', '지원한 팀', '활동중인 팀', '활동했던 팀'][id]}
          </MyTeamCategory>
        ))}
      </MyTeamCategories>
    </>
  );
};

export default MyTeamHeader;

const MyTeamTitle = styled.div`
  ${({ theme }) => theme.fonts.heading2_1};
  color: ${({ theme }) => theme.colors.primary90};
  padding: 3rem 0 4rem 0;
`;

const MyTeamCategories = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MyTeamCategory = styled.div<{ $active: boolean }>`
  width: 25%;
  text-align: center;
  ${({ theme }) => theme.fonts.subtitleXXL};
  cursor: pointer;
  padding-bottom: 1.5rem;

  color: ${(props) =>
    props.$active ? props.theme.colors.primary60 : props.theme.colors.gray40};
  border-bottom: ${(props) =>
    props.$active
      ? `2px solid ${props.theme.colors.primary60}`
      : '2px solid transparent'};
`;
