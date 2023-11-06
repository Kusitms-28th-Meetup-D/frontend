import styled from 'styled-components';

const RecruitTeamItem = ({ data }) => {
  return (
    <ItemLayout>
      <LeaderBox>
        <Role>팀장</Role>
      </LeaderBox>
      <MemberBox>
        <Role>팀원</Role>
        <TeamInfoBox>
          <TO>
            모집 현황 : {data.cur}/{data.max}
          </TO>
          <IntroduceTitle>팀장의 한 마디</IntroduceTitle>
          <IntroduceContent>{data.talk}</IntroduceContent>
          <GoTeamButton>팀 자세히 보러가기</GoTeamButton>
        </TeamInfoBox>
      </MemberBox>
    </ItemLayout>
  );
};
const ItemLayout = styled.div`
  display: flex;
  gap: 2.4rem;
`;
const Role = styled.div`
  position: absolute;
  left: -1px;
  top: -1.5rem;

  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary40};

  border-radius: 0.8rem;

  width: 4.1rem;
  height: 3rem;
  padding: 0.4rem 0.8rem;
`;
const LeaderBox = styled.div`
  position: relative;

  ${(props) => props.theme.fonts.subtitleS};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary10};

  border: 1px solid ${(props) => props.theme.colors.primary40};
  border-radius: 0.8rem;

  width: 17.1rem;
  /* height: 23rem; */
`;
const MemberBox = styled.div`
  position: relative;

  ${(props) => props.theme.fonts.subtitleS};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary10};

  border: 1px solid ${(props) => props.theme.colors.primary40};
  border-radius: 0.8rem;

  width: 100%;
  /* height: 23rem; */
`;
const TeamInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 25rem;

  padding: 2rem;
`;
const TO = styled.div`
  ${(props) => props.theme.fonts.subtitleXS};
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary40};

  width: 100%;
`;
const IntroduceTitle = styled.div`
  ${(props) => props.theme.fonts.subtitleS};
  color: ${(props) => props.theme.colors.gray90};
`;
const IntroduceContent = styled.div`
  ${(props) => props.theme.fonts.subtitleM};
  color: ${(props) => props.theme.colors.primary90};
  background-color: ${(props) => props.theme.colors.white};

  border: 1px solid ${(props) => props.theme.colors.primary40};
  border-radius: 0.8rem;

  width: 100%;
  padding: 3.5rem;

  text-align: center;
`;
const GoTeamButton = styled.button`
  ${(props) => props.theme.fonts.subtitleXS};
  color: rgba(255, 255, 255, 0.8);
  background-color: ${(props) => props.theme.colors.primary40};

  border: 1px solid ${(props) => props.theme.colors.primary40};
  border-radius: 0.8rem;

  width: 100%;
  padding: 0.5rem;
`;
export default RecruitTeamItem;
