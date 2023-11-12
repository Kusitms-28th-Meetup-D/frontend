export interface InputProps {
  label: string;
  placeholder: string;
  errorText: string;
  elemName: string;
}
export interface RequestJoin {
  username: string; //이름
  location: string; //활동지역
  major: string; //전공
  task: string; //희망직무
  selfIntroduce: string; //한줄소개
}
export type InputDataArray = [boolean, boolean, boolean, boolean, boolean];
