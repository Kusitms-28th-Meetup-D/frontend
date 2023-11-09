import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import postJoin from '../../apis/join/postJoin';
import { useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { headerSelectedState } from '../../recoil/atom';
import { Headers } from '../../constants/Header';

import bgSrc from '/assets/images/join/join-bg.png';
import starSrc from '/assets/images/common/star.svg';
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
  useEffect(() => setHeaderSelected(Headers.login));

  return (
    <JoinLayout>
      <JoinContainer>
        <TitleBox>
          <TitleStarImg src={starSrc} />
          <TitleText>똑똑한 회원님의 정보를 알려주세요!</TitleText>
        </TitleBox>
        <Input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="이름"
        />
        <StartButton>원팀 시작하기 →</StartButton>
      </JoinContainer>
      {/* <FormContainer action="#" onSubmit={handleSubmit}>
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
      </FormContainer> */}
    </JoinLayout>
  );
};

export default Join;

const JoinLayout = styled.div`
  width: 100%;
  height: 100%;
  background: url(${bgSrc}) left top no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto;
`;
const JoinContainer = styled.div`
  width: 78rem;
  height: 70rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid #3b3ef1;
  border-radius: 2.4rem;

  background-color: rgba(239, 239, 253, 0.2);

  backdrop-filter: blur(12px);
`;
const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TitleStarImg = styled.img`
  width: 3rem;
  height: 3rem;
  margin-right: 1.2rem;
`;
const TitleText = styled.div`
  ${(props) => props.theme.fonts.heading4};
  color: ${(props) => props.theme.colors.gray90};
`;
const Input = styled.input``;
// const Submit = styled.input``;
const StartButton = styled.button`
  width: 25.5rem;
  height: 6.4rem;

  border-radius: 3.2rem;
  border: 1px solid ${(props) => props.theme.colors.primary20};
  background-color: ${(props) => props.theme.colors.primary60};

  ${(props) => props.theme.fonts.buttonL};
  color: ${(props) => props.theme.colors.white};
`;
