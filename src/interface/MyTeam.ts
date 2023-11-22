import { ProfileProps } from './Contest';

// 내가 지원한 팀 조회하기 api
export interface RequestAppliedTeam {
  // contestId: string;
}

export interface RequestTeamOpen {
  contestId?: string;
  max: number;
  location: number;
  endDate: string;
  leaderMessage: string;
  notice: string;
  chatLink: string;
}

export interface AppliedTeamData {
  contestId: string;
  contestTitle: string;
  contestImage: string[];
  leaderInfo: ProfileProps;
  teamId: number;
  status: string;
  leaderMessage: string;
  max: number;
  cur: number;
  location: string;
  endDate: string;
}

export interface ResponseAppliedTeam {
  status: number;
  message: string;
  data: AppliedTeamData[];
}

export interface TeamData {
  teamId?: number;
  teamMemberSize?: number;
  applyMemberSize?: number;
  teamMemberInfos?: ProfileProps[];
  applyMemberInfos?: ProfileProps[];
  contestTitle?: string;
  contestImage: string[];
  contestId?: string;
}

export interface ResponseOpenedTeam {
  status: number;
  message: string;
  data: TeamData[];
}

export interface RequestActiveTeam {
  // contestId: string;
}
export interface ActiveTeamData {
  contestId: string;
  contestTitle: string;
  contestImage: string[];
  leaderInfo: ProfileProps;
  leaderMessage: string;
  memberSize: number;
  location: string;
  endDate: string;
  notice: string;
  teamMemberInfos: ProfileProps[];
  chatLink: string;
}
export interface ResponseActiveTeam {
  status: number;
  message: string;
  data: ActiveTeamData[];
}

export interface EndTeamData {
  contestId: string;
  contestTitle: string;
  endDate: string;
  memberSize: number;
  leaderInfo: ProfileProps;
  teamMemeberInfos: ProfileProps[];
  possibleWriteReviews: boolean;
}

export interface ResponseEndTeam {
  status: number;
  message: string;
  data: EndTeamData[];
}

export interface PageResponseDTO {
  startPage: number;
  endPage: number;
  currentPage: number;
  totalCount: number;
}

export interface RecruitingTeamData {
  contestId: string;
  contesttitle: string;
  teamLeaderId: number;
  teamLeaderName: string;
  teamLeaderImage: string;
  teamLeaderMessage: string;
  teamId: string;
}

export interface RecruitingTeam {
  pageResponseDTO: PageResponseDTO;
  recruitingTeams: RecruitingTeamData[];
}

export interface ResponseRecruitingTeam {
  status: number;
  message: string;
  data: RecruitingTeam;
}

//내가 오픈한 팀 상세 조회 api

export interface RequestMyOpenedTeamMemberInfo {
  teamId: string;
}
export interface MyOpenedTeamMemberInfoData {
  teamId: number;
  teamMemberSize: number;
  teamApplySize: number;
  teamMemberInfos: ProfileProps[];
  applyMemberInfos: ProfileProps[];
}
export interface ResponseMyOpenedTeamMemberInfo {
  status: number;
  message: string;
  data: MyOpenedTeamMemberInfoData;
}

//팀 멤버 상태 변경  api

export interface RequestChangeMemberState {
  teamId: string;
  memberId: string;
  role: string;
}
export interface ResponseChangeMemberState {
  status: number;
  message: string;
  data: null;
}

//팀 삭제 api
export interface RequestDeleteTeam {
  teamId: string;
}
export interface ResponseDeleteTeam {
  status: number;
  message: string;
  data: null;
}

//팀 모집 완료  api
export interface RequestRecruitComplete {
  teamId: string;
}
export interface ResponseRecruitComplete {
  status: number;
  message: string;
  data: null;
}
