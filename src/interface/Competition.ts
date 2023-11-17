export interface ResponseCompetitionList {
  status: number;
  message: string;
  data: CompetitionList[];
}

export interface CompetitionList {
  contestId?: string;
  title: string;
  company: string;
  types?: string[];
  images: string[];
  remainDay: number;
  teamNum: number;
}
