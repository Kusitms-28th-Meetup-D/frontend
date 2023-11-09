import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import postJoin from '../../apis/join/postJoin';
import { useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { headerSelectedState } from '../../recoil/atom';
import { Headers } from '../../constants/Header';
const REGIONS = [
  '무관',
  '서울',
  '부산',
  '대구',
  '인천',
  '광주',
  '대전',
  '울산',
  '세종',
  '경기',
  '충북',
  '충남',
  '전북',
  '전남',
  '경북',
  '경남',
  '제주',
  '강원',
];
export interface IJoin {
  name: string;
  email: string;
  birth: string;
  gender: string;
  region: string;
  major: string;
  job: string;
}
const Join = () => {
  //navigate의 state로 온 토큰을 받기 위함

  const location = useLocation();
  const kakaoAccessToken = location.state.kakaoAccessToken;
  const [inputValue, setInputValue] = useState<IJoin>({
    name: 'jinwoo',
    email: 'jinyoung@babo.kr',
    birth: 'YYYY-MM-DD',
    gender: 'xe',
    region: 'ex',
    major: 'ex',
    job: 'xex',
  });
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(kakaoAccessToken);
    try {
      const responseJoin = await postJoin(kakaoAccessToken, inputValue);
      console.log('responseJoin 결과:', responseJoin);
    } catch (error) {
      console.log('responseJoin 실패:', error);
    }
  };
  const handleChange = (event: any) => {
    setInputValue((curr) => {
      const newObj: IJoin = { ...curr };
      const keyName = event.target.name as keyof IJoin;
      newObj[keyName] = event.target.value;
      // console.log(newObj);

      return newObj;
    });
  };

  const setHeaderSelected = useSetRecoilState(headerSelectedState);
  useEffect(() => setHeaderSelected(Headers.none));

  return (
    <JoinLayout>
      <FormContainer action="#" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="이름"
        />
        <Input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="이메일"
        />
        <Input
          type="date"
          name="birth"
          onChange={handleChange}
          placeholder="생년월일"
        />
        <label>
          <Input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
          />{' '}
          남성
        </label>
        <label>
          <Input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
          />{' '}
          여성
        </label>
        <label htmlFor="region">지역</label>
        <select name="region" id="region" onChange={handleChange}>
          {REGIONS.map((each, idx) => (
            <option key={idx} value={each}>
              {each}
            </option>
          ))}
        </select>
        <Input
          type="text"
          name="major"
          onChange={handleChange}
          placeholder="전공"
        />{' '}
        <Input
          type="text"
          name="job"
          onChange={handleChange}
          placeholder="직무"
        />
        <Submit type="submit" />
      </FormContainer>
    </JoinLayout>
  );
};

export default Join;

const JoinLayout = styled.div``;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input``;
const Submit = styled.input``;
