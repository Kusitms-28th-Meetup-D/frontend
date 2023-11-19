export interface IKeyword {
  keywordType: number;
  count: number;
}
export interface ITeamCulture {
  teamCultureType: number;
  percent: number;
}
// export interface IQuestion {
//   questionType: number;
//   percent: number;
// }
export interface IWorkMethod {
  workMethodType: number;
  percent: number;
}

export interface IReview {
  review: string;
  category: string;
}
export interface ProfileReview {
  keywords: IKeyword[];
  teamCultures: ITeamCulture[];
  workMethods: IWorkMethod[];
  review: IReview[];
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
  userId?: string;
}
export interface ProfileData {
  username: string;
  task: string[];
  location: string;
  major: string[];
  userId: number;
  selfIntroduction: string;
  profile_image: string;

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

//프로필 정보 조회 - 추천사 api
export interface Keyword {
  keywordType: number;
  count: number;
}

export interface TeamCulture {
  teamCultureType: number;
  percent: number;
}

export interface WorkMethod {
  workMethodType: number;
  percent: number;
}

export interface Comment {
  comments: string;
  contestName: string;
}
export interface RequestProfileReview {
  userId?: string;
}
export interface ProfileReviewData {
  userId: number;
  keywords: Keyword[];
  teamCultures: TeamCulture[];
  workMethods: WorkMethod[];
  comments: Comment[];
}

export interface ResponseProfileReview {
  status: number;
  message: string;
  data: ProfileReviewData;
}

//내 티켓 개수 확인 api
export interface RequestTicketNumber {
  // userId?: string;
}
export interface TicketNumberData {
  ticketCount: number;
}
export interface ResponseTicketNumber {
  status: number;
  message: string;
  data: TicketNumberData;
}

//상대에게 티켓을 사용했는지 여부 api
export interface RequestIsTicketUsed {
  targetUserId?: string;
}
export interface IsTicketUsedData {
  isUsed: boolean;
}
export interface ResponseIsTicketUsed {
  status: number;
  message: string;
  data: IsTicketUsedData;
}

//티켓 사용하기 api
export interface RequestUseTicket {
  purchaseUserId?: string;
}
export interface UseTicketData {
  remainTicket: number;
}
export interface ResponseUseTicket {
  status: number;
  message: string;
  data: UseTicketData;
}
//유저가 외부 추천사를 받았는지 여부
export interface RequestIsUserGetExternalReview {
  userId?: string;
}
export interface IsUserGetExternalReviewData {
  alreadyReviewed: boolean;
}
export interface ResponseIsUserGetExternalReview {
  status: number;
  message: string;
  data: IsUserGetExternalReviewData;
}
