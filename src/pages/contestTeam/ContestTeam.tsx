import styled from 'styled-components';

const ContestTeam = () => {
  return (
    <TeamLayout>
      <TeamUndo>{' < 공모전으로 돌아가기'}</TeamUndo>
    </TeamLayout>
  );
};
const TeamLayout = styled.div`
  max-width: 122.4rem;
  margin: auto;

  display: flex;
  justify-content: space-between;
`;
const TeamUndo = styled.div`
  ${(props) => props.theme.fonts.bodyXXL};
  color: ${(props) => props.theme.colors.gray70};
`;
export default ContestTeam;
