import { ProfileInfoProps } from "../components/profile/ProfileInfo";
import { ICategory, IProfileSubInfoData, IReviewDatas } from "../interface/Profile";

export const profileDatas: ProfileInfoProps = {
  name: '민혜린',
  part: '서비스 기획',
  imageUrl: 'https://cdn.onews.tv/news/photo/202306/169959_205933_5017.jpeg',
  region: '서울특별시',
  major: '언어학과/국어국문학과',
  introduce: '사슴을 좋아합니다. 밤비치고짱귀여워',
};
export const ProfileSubInfoData: IProfileSubInfoData = {
  activitiesData: {
    title: '대외활동 및 인턴',
    contents: [
      '한국대학생IT경영학회 (23.08~): 기획 파트, 팀원 모집 플랫폼 "Wanteam." 기획',
      '캐캐오기업 (22.01~22.12): 제품 기획 부서, 초콜릿 신제품 맛보기 테스트',
      '코코넛기업 (21.06~21.09): 영업 부서, 코코넛 사세요 맛 좋은 코코넛 사세요',
    ],
  },
  awardsData: {
    title: '수상 경력',
    contents: [
      '초콜릿 맛있게 먹기 공모전 최우수상',
      '샘송 광고 기획 아이디어 공모전 장려상',
      '멍 때리기 대회 대상',
    ],
  },
  toolsData: {
    title: '사용 가능 툴',
    contents: [
      '노션: 휘황찬란하게 활용하지는 못하지만 적당히 쓸 줄은 알아요!',
      '지라: 인턴할 때 써봐서 어느 정도 활용 가능합니다.',
      '피그마: 간단한 와이어프레임 정도는 그릴 수 있어요! ',
    ],
  },
  licensesData: {
    title: '대외활동 및 인턴',
    contents: [
      '늦게 자기 자격증 1급',
      '해리 포터 덕후 자격증 마스터',
      '(G)-IDLE 팬클럽 ‘네버랜드’ 4기',
    ],
  },
};
export const reviewDatas: IReviewDatas = {
  keywords: [
    {
      keywordType: 0,
      count: 2,
    },
    {
      keywordType: 1,
      count: 6,
    },
    {
      keywordType: 2,
      count: 12,
    },
    {
      keywordType: 3,
      count: 3,
    },
    {
      keywordType: 4,
      count: 0,
    },
    {
      keywordType: 5,
      count: 0,
    },
    {
      keywordType: 6,
      count: 0,
    },
    {
      keywordType: 7,
      count: 0,
    },
    {
      keywordType: 8,
      count: 0,
    },
    {
      keywordType: 9,
      count: 12,
    },
  ],
  teamCultures: [
    {
      questionType: 0,
      percent: 0,
    },
    {
      questionType: 1,
      percent: 100,
    },
    {
      questionType: 2,
      percent: 50,
    },
  ],
  workMethods: [
    {
      questionType: 0,
      percent: 30,
    },
    {
      questionType: 1,
      percent: 60,
    },
    {
      questionType: 2,
      percent: 57,
    },
  ],
  recommendation: [
    {
      recommendation:
        '어쩌구 저쩌구 칭찬의 말을 블라블라 쏼라쏼라 칭찬합니다 칭찬합니다 큐시즘의 민혜린을 칭찬합니다 글자 수 제한은 140자 넘 길어용 할 말이 없어용우아어암ㅁ아ㅓ래ㅑㅕㅐㅑ러ㅏㅣㅁ앎 칭찬합니다칭찬합니다칭찬합니다칭찬합니다칭찬합니다칭찬합니다칭찬합니다칭찬합니다다',
      category: '<과자 빨리 먹기> 공모전',
    },
    {
      recommendation:
        '에픽하이너무좋아윤하최고국힙꺼져에픽하이너무좋아윤하최고국힙꺼져에픽하이너무좋아윤하최고국힙꺼져에픽하이너무좋아윤하최고국힙꺼져에픽하이너무좋아윤하최고국힙꺼져에픽하이너무좋아윤하최고국힙꺼져에픽하이너무좋아윤하최고국힙꺼져에픽하이너무좋아윤하최고국힙꺼져에픽하이너무좋아윤하최고국힙꺼져에픽하이너무좋아윤하최고국힙꺼져',
      category: '<과자 빨리 먹기> 공모전',
    },
    {
      recommendation:
        '큐시즘의 민혜린을 칭찬합니다큐시즘의 민혜린을 칭찬합니다큐시즘의 민혜린을 칭찬합니다큐시즘의 민혜린을 칭찬합니다큐시즘의 민혜린을 칭찬합니다큐시즘의 민혜린을 칭찬합니다',

      category: '<과자 빨리 먹기> 공모전',
    },
    {
      recommendation: '이사람은 천재입니다. ',
      category: '<과자 빨리 먹기> 공모전',
    },
  ],
};

export const TEAM_CURTURE_CATEGORY: ICategory = {
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
export const WORK_METHOD_CATEGORY: ICategory = {
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