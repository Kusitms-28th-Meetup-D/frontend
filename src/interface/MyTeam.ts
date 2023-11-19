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

//예진이가 사용한 오픈한 팀 api
export interface TeamData {
  teamId?: number;
  teamMemberSize?: number;
  applyMemberSize?: number;
  teamMemberInfos?: ProfileProps[];
  applyMemberInfos?: ProfileProps[]; // Apply Member 정보에 대한 타입이 없어서 any로 처리했습니다.
  contestTitle?: string;
  contestImage: string[];
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
