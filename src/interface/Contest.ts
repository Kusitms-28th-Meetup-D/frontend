export interface ResopnseContestInfo {
  status: number;
  message: string;
  data: {
    contestId: string;
    title: string;
    images: string[];
    description: string;
    recruitDate: string;
    types: string[];
    subject: string;
    qualification: string;
    fullSchedule: string;
    price: string;
  };
}