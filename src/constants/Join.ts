import { InputProps } from '../interface/Join';
export enum ERROR_MESSAGES {
  이름 = '최소 1자, 최대 5자로 입력해주세요',
  전공 = '최소 1자, 최대 20자로 입력해주세요',
  희망직무 = '최소 1자, 최대 10자로 입력해주세요',
  한줄소개 = '최소 10자 이상 입력해주세요',
}

export const REGIONS = [
  '선택해주세요',
  '서울특별시',
  '인천광역시',
  '대전광역시',
  '광주광역시',
  '대구광역시',
  '울산광역시',
  '부산광역시',
  '경기도',
  '강원도',
  '충청북도',
  '충청남도',
  '전라북도',
  '전라남도',
  '경상북도',
  '경상남도',
  '제주특별자치도',
];
export const INPUT_PROPS: InputProps[] = [
  {
    label: '이름',
    placeholder: '이름을 입력해주세요',
    errorText: ERROR_MESSAGES.이름,
    elemName: 'username',
  },
  {
    label: '전공',
    placeholder: '학과를 입력해주세요',
    errorText: ERROR_MESSAGES.전공,
    elemName: 'major',
  },
  {
    label: '희망 직무',
    placeholder: '희망 직무를 입력해주세요',
    errorText: ERROR_MESSAGES.희망직무,
    elemName: 'task',
  },
  {
    label: '한줄 소개',
    placeholder: '한줄 소개를 입력해주세요',
    errorText: ERROR_MESSAGES.한줄소개,
    elemName: 'selfIntroduce',
  },
];
