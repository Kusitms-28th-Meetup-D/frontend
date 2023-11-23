/// 메인 정보 가져오기 api
export interface RequestMainPageInfo {
  // teamId?: string;
}
export interface MainPageInfoData {
  recommendationContests: MainPageContest[];
  recommendationTeams: MainPageTeam[];
}
export interface MainPageContest {
  contestId: string;
  title: string;
  company: string;
  images: string[];
  remainDay: number;
  teamNum: number;
}

export interface MainPageTeam {
  contestId: string;
  contesttitle: string;
  teamId: number;
  teamLeaderId: number;
  teamLeaderName: string;
  teamLeaderImage: string;
  teamLeaderMessage: string;
}
export interface ResponseMainPageInfo {
  status: number;
  message: string;
  data: MainPageInfoData;
}
