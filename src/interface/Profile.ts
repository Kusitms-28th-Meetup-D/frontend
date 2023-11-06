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
