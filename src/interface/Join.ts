export interface InputProps {
  label: string;
  placeholder: string;
  errorText: string;
  elemName: string;
}
export interface RequestJoin {
  name: string; //이름
  region: string; //활동지역
  major: string; //전공
  part: string; //희망직무
  introduce: string; //한줄소개
  email: string; //카카오이메일
}
