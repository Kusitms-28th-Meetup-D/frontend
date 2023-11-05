import styled from 'styled-components';
import { IQuestion } from '../../pages/profile/Profile';
import ProfilePersonalityContent from './ProfilePersonalityContent';

export interface ICategory {
  title: string;
  category: {
    subtitle: string;
    leftValue: string;
    rightValue: string;
  }[];
}
const TEAM_CURTURE_CATEGORY: ICategory = {
  title: '팀 문화',
  category: [
    {
      subtitle: '피드백 스타일',
      leftValue: '솔직한 편',
      rightValue: '돌려 말하는 편',
    },
    {
      subtitle: '업무 스타일',
      leftValue: '업무에 집중',
      rightValue: '친목과 업무를 함께',
    },
    {
      subtitle: '에너지 방향',
      leftValue: '외향적',
      rightValue: '내향적',
    },
  ],
};
const WORK_METHOD_CATEGORY: ICategory = {
  title: '작업 방식',
  category: [
    {
      subtitle: '작업 스타일',
      leftValue: '신중하게 작업',
      rightValue: '속도감 있게 작업',
    },
    {
      subtitle: '결과와 과정',
      leftValue: '결과주의',
      rightValue: '과정주의',
    },
    {
      subtitle: '일과 삶의 균형',
      leftValue: '워커홀릭',
      rightValue: '워라밸 중시',
    },
  ],
};
const ProfilePersonality = ({
  teamCurturesData,
  workMethodsData,
  name,
}: {
  teamCurturesData: IQuestion[];
  workMethodsData: IQuestion[];
  name: string;
}) => {
  return (
    <ProfilePersonalityContainer>
      <ProfilePersonalityTitle>{name} 님의 성향</ProfilePersonalityTitle>
      <ProfilePersonalityDetail>
        스펙트럼 위의 별은 {name} 님이 받은 후기의 평균치를 의미해요.
      </ProfilePersonalityDetail>
      <ProfilePersonalityContentBox>
        <ProfilePersonalityContent
          datas={teamCurturesData}
          category={TEAM_CURTURE_CATEGORY}
        ></ProfilePersonalityContent>
        <ProfilePersonalityContent
          datas={workMethodsData}
          category={WORK_METHOD_CATEGORY}
        ></ProfilePersonalityContent>
      </ProfilePersonalityContentBox>
    </ProfilePersonalityContainer>
  );
};

const ProfilePersonalityContainer = styled.div``;
const ProfilePersonalityTitle = styled.div`
  ${(props) => props.theme.fonts.heading3};
  color: ${(props) => props.theme.colors.gray100};

  display: inline-block;

  margin: 8rem 0 2rem 0;
`;

const ProfilePersonalityDetail = styled.div`
  ${(props) => props.theme.fonts.bodyL};
  color: ${(props) => props.theme.colors.gray70};

  white-space: break-spaces;
  margin-bottom: 2rem;
`;

const ProfilePersonalityContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
`;
export default ProfilePersonality;

///
