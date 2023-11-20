import { ICategory } from '../interface/Profile';

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
    title: '🏆 수상경력이 있다면 적어주세요',
    examples: [
      '9회 아모레퍼시픽 마케팅 공모전 장려상',
      '좋은 데이 대학생 마케팅 공모전 우수상',
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
