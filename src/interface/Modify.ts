//계정 정보 수정하기 api
export interface RequestModifyProfile {
  username: string;
  location: number;
  major: string;
  task: string;
  selfIntroduce: string;
}
export interface ResponseModifyProfile {
  status: number;
  message: string;
  data: null;
}
