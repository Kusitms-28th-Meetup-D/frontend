import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import postJoin from '../../apis/join/postJoin';
import { useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { headerSelectedState } from '../../recoil/atom';
import { Headers } from '../../constants/Header';

import bgSrc from '/assets/images/join/join-bg.png';
import starSrc from '/assets/images/common/star.svg';
import TextInput from '../../components/join/TextInput';
import { INPUT_PROPS } from '../../constants/Join';
import SelectInput from '../../components/join/SelectInput';
import TextAreaInput from '../../components/join/TextAreaInput';
import { RequestJoin } from '../../interface/Join';

const Join = () => {
  //navigate의 state로 온 토큰을 받기 위함
  //이게 아니고, 스토리지에서 꺼내서 확인하는 로직이 되어야 할듯

  //const location = useLocation();
  //const kakaoAccessToken = location.state.kakaoAccessToken;
  const [inputValue, setInputValue] = useState<RequestJoin>({
    name: '민정리',
    region: '서울특별시',
    major: '미디어뭐더라',
    part: 'IT/희망직종',
    introduce: '감자맛있단다',
    email: 'minjeong@legend.gosu',
  });
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(inputValue);
    // console.log(kakaoAccessToken);
    // try {
    //   const responseJoin = await postJoin(kakaoAccessToken, inputValue);
    //   console.log('responseJoin 결과:', responseJoin);
    // } catch (error) {
    //   console.log('responseJoin 실패:', error);
    // }
  };
  const handleChange = (
    // event: React.FormEvent<
    //   HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    // >,
    event: any,
  ) => {
    setInputValue((curr) => {
      const newObj: RequestJoin = { ...curr };
      const keyName = event.target.name as keyof RequestJoin;
      newObj[keyName] = event.target.value;
      console.log(newObj);
      return newObj;
    });
  };

  const setHeaderSelected = useSetRecoilState(headerSelectedState);
  useEffect(() => setHeaderSelected(Headers.login));

  return (
    <JoinLayout>
      <JoinFormContainer action="#" onSubmit={handleSubmit}>
        <TitleBox>
          <TitleStarImg src={starSrc} />
          <TitleText>똑똑한 회원님의 정보를 알려주세요!</TitleText>
        </TitleBox>
        <TextInput onChangeFunc={handleChange} inputProps={INPUT_PROPS[0]} />
        <SelectInput onChangeFunc={handleChange} />
        <TextInput onChangeFunc={handleChange} inputProps={INPUT_PROPS[1]} />
        <TextInput onChangeFunc={handleChange} inputProps={INPUT_PROPS[2]} />
        <TextAreaInput
          onChangeFunc={handleChange}
          inputProps={INPUT_PROPS[3]}
        />

        <StartButton type="submit">원팀 시작하기 →</StartButton>
      </JoinFormContainer>
    </JoinLayout>
  );
};

export default Join;

const JoinLayout = styled.div`
  width: 100%;
  height: 100%; //수정 필요
  background: url(${bgSrc}) left top no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto;
`;
const JoinFormContainer = styled.form`
  width: 78rem;
  /* height: 70rem; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;

  border: 1px solid #3b3ef1;
  border-radius: 2.4rem;

  background-color: rgba(239, 239, 253, 0.2);
  backdrop-filter: blur(12px);

  padding: 3.3rem 6.6rem;
  margin: 4rem 0;
`;
const TitleBox = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: left; */
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
const StartButton = styled.button`
  width: 25.5rem;
  height: 6.4rem;

  border-radius: 3.2rem;
  border: 1px solid ${(props) => props.theme.colors.primary20};
  background-color: ${(props) => props.theme.colors.primary60};

  ${(props) => props.theme.fonts.buttonL};
  color: ${(props) => props.theme.colors.white};
`;
