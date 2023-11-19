import styled from 'styled-components';
import ProfileSubInfoContents from './ProfileSubInfoContent';

/*
const activitiesData: SubInfoContentsProps = {
  title: '대외활동 및 인턴',
  contents: [
    '한국대학생IT경영학회 (23.08~): 기획 파트, 팀원 모집 플랫폼 "Wanteam." 기획',
    '캐캐오기업 (22.01~22.12): 제품 기획 부서, 초콜릿 신제품 맛보기 테스트',
    '코코넛기업 (21.06~21.09): 영업 부서, 코코넛 사세요 맛 좋은 코코넛 사세요',
  ],
};
const awardsData: SubInfoContentsProps = {
  title: '수상 경력',
  contents: [
    '초콜릿 맛있게 먹기 공모전 최우수상',
    '샘송 광고 기획 아이디어 공모전 장려상',
    '멍 때리기 대회 대상',
  ],
};
const toolsData: SubInfoContentsProps = {
  title: '사용 가능 툴',
  contents: [
    '노션: 휘황찬란하게 활용하지는 못하지만 적당히 쓸 줄은 알아요!',
    '지라: 인턴할 때 써봐서 어느 정도 활용 가능합니다.',
    '피그마: 간단한 와이어프레임 정도는 그릴 수 있어요! ',
  ],
};
const licensesData: SubInfoContentsProps = {
  title: '대외활동 및 인턴',
  contents: [
    '늦게 자기 자격증 1급',
    '해리 포터 덕후 자격증 마스터',
    '(G)-IDLE 팬클럽 ‘네버랜드’ 4기',
  ],
};
*/

const ProfileSubInfo = ({
  internships,
  awards,
  tools,
  certificates,
}: {
  internships?: string[];
  awards?: string[];
  tools?: string[];
  certificates?: string[];
}) => {
  const titles1 = ['대외활동 및 인턴', '수상 경력'];
  const titles2 = ['사용 가능 툴', '보유 자격증'];
  return (
    <ProfileSubInfoContainer>
      <ProfileSubInfoBox>
        <ProfileSubInfoTitle>이력</ProfileSubInfoTitle>
        <ProfileSubInfoContents
          props1={internships}
          props2={awards}
          props3={tools}
          props4={certificates}
          titles={titles1}
          names={['internships', 'awards']}
        />
      </ProfileSubInfoBox>
      <ProfileSubInfoBox>
        <ProfileSubInfoTitle>스킬</ProfileSubInfoTitle>
        <ProfileSubInfoContents
          props1={internships}
          props2={awards}
          props3={tools}
          props4={certificates}
          titles={titles2}
          names={['tools', 'certificates']}
        />
      </ProfileSubInfoBox>
    </ProfileSubInfoContainer>
  );
};

const ProfileSubInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProfileSubInfoBox = styled.div``;

const ProfileSubInfoTitle = styled.div`
  ${(props) => props.theme.fonts.heading4};
  color: ${(props) => props.theme.colors.gray100};
  margin: 1.8rem 0;
`;

export default ProfileSubInfo;
