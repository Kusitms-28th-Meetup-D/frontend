export interface IKeyword {
  keywordType: number;
  count: number;
}
export interface IQuestion {
  questionType: number;
  percent: number;
}

export interface IRecommendation {
  recommendation: string;
  category: string;
}
export interface IReviewDatas {
  keywords: IKeyword[];
  teamCultures: IQuestion[];
  workMethods: IQuestion[];
  recommendation: IRecommendation[];
}

export interface ProfileInfoProps {
  name: string;
  part: string;
  imageUrl: string;
  region: string;
  major: string;
  introduce: string;
}
export interface ICategory {
  title: string;
  category: {
    subtitle: string;
    leftValue: string;
    rightValue: string;
  }[];
}

export interface SubInfoContentsProps {
  title: string;
  contents: string[];
}
export interface IProfileSubInfoData {
  activitiesData: SubInfoContentsProps;
  awardsData: SubInfoContentsProps;
  toolsData: SubInfoContentsProps;
  licensesData: SubInfoContentsProps;
}

export interface ProfileCraete {
  internships: string[];
  awards: string[];
  tools: string[];
  certificates: string[];
}
// 프로필 정보 조회 api
export interface RequestProfile {
  userId: string;
}
export interface ProfileData {
  userId: number;
  profile_image: string;
  username: string;
  task: string[];
  location: string;
  major: string[];
  selfIntroduction: string;
  internships: string[];
  awards: string[];
  tools: string[];
  certificates: string[];
}
export interface ResponseProfile {
  status: number;
  message: string;
  data: ProfileData;
}
