import { ICategory } from '../interface/Profile';

export const TEAM_CURTURE_CATEGORY: ICategory = {
  title: '팀 문화',
  category: [
    {
      subtitle: '소통 스타일',
      leftValue: '주도적',
      rightValue: '협조적',
    },
    {
      subtitle: '팀 내 역할',
      leftValue: '리더형',
      rightValue: '팔로워형',
    },
    {
      subtitle: '에너지 방향',
      leftValue: '외향적',
      rightValue: '내향적',
    },
  ],
};
export const WORK_METHOD_CATEGORY: ICategory = {
  title: '업무 방식',
  category: [
    {
      subtitle: '작업 스타일',
      leftValue: '한 번에 몰입',
      rightValue: '미리미리',
    },
    {
      subtitle: '업무 시 관점',
      leftValue: '큰 그림',
      rightValue: '꼼꼼함',
    },
    {
      subtitle: '문제 해결 방식',
      leftValue: '유연한 도전',
      rightValue: '원칙과 경험',
    },
  ],
};

export const profileCreateInfo = [
  {
    id: 0,
    title: '🔎 희망 직무와 관련있는 활동 경험을 적어주세요',
    examples: [
      '삼양식품 마케팅 서포터즈 (6개월)',
      '타임스퀘어 트렌드 마케터 15기 (1년)',
    ],
  },
  {
    id: 1,
    title: '🧑 인턴 등 실무 경험이 있으시다면 적어주세요',
    examples: [
      '카카오페이 마케팅 인턴 (3개월)',
      '현대자동차 전략 RA (3개월)',
    ],
  },
  {
    id: 2,
    title: '🛠️ 어떤 협업, 작업 툴을 사용하실 수 있나요?',
    examples: [
      '포토샵: (중) 사진 보정 및 포스터 작업 가능',
      '프리미어프로: (상) 쇼츠 영상 광고 작업 가능',
      '피그마: (중) 무리 없이 협업 가능',
    ],
  },
  {
    id: 3,
    title: '🪪 가지고 계신 자격증이 있다면 알려주세요',
    examples: [
      '온라인마케팅 실무전문가 자격증',
      '검색광고 마케터 자격증',
      '컴퓨터 활용능력 자격증',
    ],
  },
];
