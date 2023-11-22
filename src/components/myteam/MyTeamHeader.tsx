import { useRecoilValue } from 'recoil';
import { styled } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginInfoState } from '../../recoil/atom';

const MyTeamHeader = () => {
  const navigate = useNavigate();
  const loginInfo = useRecoilValue(loginInfoState);
  const location = useLocation();
  const pathSegments = location.pathname.split('/');
  const action = pathSegments[3];

  const handleCategoryClick = (id: number) => {
    if (id === 0) {
      navigate(`/myteam/${loginInfo.data?.userId}/open`);
    } else if (id === 1) {
      navigate(`/myteam/${loginInfo.data?.userId}/apply`);
    } else if (id === 2) {
      navigate(`/myteam/${loginInfo.data?.userId}/active`);
    } else if (id === 3) {
      navigate(`/myteam/${loginInfo.data?.userId}/end`);
    }
  };

  return (
    <>
      <MyTeamTitle>내 팀</MyTeamTitle>
      <MyTeamCategories>
        <MyTeamCategory
          $active={action === 'open'}
          onClick={() => handleCategoryClick(0)}
        >
          내가 오픈한 팀
        </MyTeamCategory>
        <MyTeamCategory
          $active={action === 'apply'}
          onClick={() => handleCategoryClick(1)}
        >
          지원한 팀
        </MyTeamCategory>
        <MyTeamCategory
          $active={action === 'active'}
          onClick={() => handleCategoryClick(2)}
        >
          활동중인 팀
        </MyTeamCategory>
        <MyTeamCategory
          $active={action === 'end'}
          onClick={() => handleCategoryClick(3)}
        >
          활동했던 팀
        </MyTeamCategory>
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
