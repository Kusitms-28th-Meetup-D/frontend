import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { headerSelectedState, kakaoAccessTokenState } from '../../recoil/atom';
import { Headers } from '../../constants/Header';

import bgSrc from '/assets/images/join/join-bg.png';
import starSrc from '/assets/images/common/star.svg';
import TextInput from '../../components/join/TextInput';
import { INPUT_PROPS } from '../../constants/Join';
import SelectInput from '../../components/join/SelectInput';
import TextAreaInput from '../../components/join/TextAreaInput';
import { InputDataArray, RequestJoin } from '../../interface/Join';
import postJoin from '../../apis/join/postJoin';
import { useNavigate } from 'react-router-dom';
import useLoginWithKakaoToken from '../../hooks/useLoginWithKakaoToken';
import JoinCompleteModal from '../../components/join/JoinCompleteModal';

const Join = () => {
  //navigate의 state로 온 토큰을 받기 위함
  //이게 아니고, 스토리지에서 꺼내서 확인하는 로직이 되어야 할듯
  const navigate = useNavigate();
  const kakaoAccessToken = useRecoilValue(kakaoAccessTokenState);
  const { handleLogin } = useLoginWithKakaoToken();
  const [inputValue, setInputValue] = useState<RequestJoin>({
    username: '민정리',
    location: '서울특별시',
    major: '미디어뭐더라',
    task: 'IT/희망직종',
    selfIntroduce: '감자맛있단다',
    kakaoAccessToken: 'noToken',
  });
  const [buttonActiveCount, setButtonActiveCount] = useState<InputDataArray>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ ...inputValue, kakaoAccessToken: kakaoAccessToken });
    try {
      const responseJoin = await postJoin({
        ...inputValue,
        kakaoAccessToken: kakaoAccessToken as string,
      });
      console.log('responseJoin 결과 성공:', responseJoin);

      // 바로 즉시 로그인
      handleLogin(kakaoAccessToken);

      navigate('/');
    } catch (error) {
      console.log('responseJoin 실패:', error);
    }
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
      return newObj;
    });
  };
  const isAcvivateButton = (buttonActiveArr: InputDataArray) => {
    if (buttonActiveArr.every((value) => value === true)) return true;
    else return false;
  };
  const setHeaderSelected = useSetRecoilState(headerSelectedState);
  useEffect(() => setHeaderSelected(Headers.login));

  return (
    <JoinLayout>
      <JoinCompleteModal />

      <JoinFormContainer action="#" onSubmit={handleSubmit}>
        <TitleBox>
          <TitleStarImg src={starSrc} />
          <TitleText>똑똑한 회원님의 정보를 알려주세요!</TitleText>
        </TitleBox>
        <TextInput
          buttonActiveSetFunc={setButtonActiveCount}
          onChangeFunc={handleChange}
          inputProps={INPUT_PROPS[0]}
          index={0}
        />
        <SelectInput
          buttonActiveSetFunc={setButtonActiveCount}
          onChangeFunc={handleChange}
          index={1}
        />
        <TextInput
          buttonActiveSetFunc={setButtonActiveCount}
          onChangeFunc={handleChange}
          inputProps={INPUT_PROPS[1]}
          index={2}
        />
        <TextInput
          buttonActiveSetFunc={setButtonActiveCount}
          onChangeFunc={handleChange}
          inputProps={INPUT_PROPS[2]}
          index={3}
        />
        <TextAreaInput
          buttonActiveSetFunc={setButtonActiveCount}
          onChangeFunc={handleChange}
          inputProps={INPUT_PROPS[3]}
          index={4}
        />

        <StartButton
          type="submit"
          $isActive={isAcvivateButton(buttonActiveCount)}
        >
          원팀 시작하기 →
        </StartButton>
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
const StartButton = styled.button<{ $isActive: boolean }>`
  width: 25.5rem;
  height: 6.4rem;

  border-radius: 3.2rem;
  border: 1px solid
    ${(props) =>
      props.$isActive
        ? props.theme.colors.primary20
        : props.theme.colors.gray50};

  background-color: ${(props) =>
    props.$isActive ? props.theme.colors.primary60 : props.theme.colors.gray10};

  ${(props) => props.theme.fonts.buttonL};
  color: ${(props) =>
    props.$isActive ? props.theme.colors.white : props.theme.colors.gray40};

  cursor: ${(props) => (props.$isActive ? 'pointer' : 'default')};
`;
