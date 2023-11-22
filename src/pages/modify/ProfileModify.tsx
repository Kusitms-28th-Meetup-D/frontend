import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { headerSelectedState, loginInfoState } from '../../recoil/atom';
import { Headers } from '../../constants/Header';

import bgSrc from '/assets/images/join/join-bg.png';
import starSrc from '/assets/images/common/star.svg';
import { INPUT_PROPS, REGIONS } from '../../constants/Join';
import { InputDataArray } from '../../interface/Join';

import useProfile from '../../hooks/profile/useProfile';
import TextInput from '../../components/modify/TextInput';
import SelectInput from '../../components/modify/SelectInput';
import TextAreaInput from '../../components/modify/TextAreaInput';
import { RequestModifyProfile } from '../../interface/Modify';
import { useModifyProfile } from '../../hooks/modify/useModifyProfile';
import { TextAnimation } from '../../styles/animation';
import { motion } from 'framer-motion';

const ProfileModify = () => {
  const loginInfo = useRecoilValue(loginInfoState);
  const { profileData, isLoading } = useProfile(
    loginInfo.data?.userId as string | undefined,
  );

  const [inputValue, setInputValue] = useState({
    username: profileData?.data.data.username,
    location: REGIONS.indexOf(profileData?.data.data.location as string),
    major: profileData?.data.data.major[0],
    task: profileData?.data.data.task[0],
    selfIntroduce: profileData?.data.data.selfIntroduction,
  });

  // useProfile 로딩이 끝났을 때
  useEffect(() => {
    if (!isLoading && profileData) {
      setInputValue({
        username: profileData?.data.data.username,
        location: REGIONS.indexOf(profileData?.data.data.location as string),
        major: profileData?.data.data.major[0],
        task: profileData?.data.data.task[0],
        selfIntroduce: profileData?.data.data.selfIntroduction,
      });
    }
  }, [isLoading, profileData]);

  const [buttonActiveCount, setButtonActiveCount] = useState<InputDataArray>([
    true,
    true,
    true,
    true,
    true,
  ]);
  const handleModiftProfile = useModifyProfile(
    inputValue as RequestModifyProfile,
    loginInfo.data?.userId as unknown as string,
  );
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ ...inputValue });
    handleModiftProfile.mutate();
  };

  const handleChange = (event: any) => {
    setInputValue((prev: any) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const isAcvivateButton = (buttonActiveArr: InputDataArray) => {
    if (buttonActiveArr.every((value) => value === true)) return true;
    else return false;
  };

  const setHeaderSelected = useSetRecoilState(headerSelectedState);
  useEffect(() => setHeaderSelected(Headers.login));

  return (
    <JoinLayout>
      <JoinFormContainer
        action="#"
        onSubmit={handleSubmit}
        initial="hidden"
        animate="visible"
        variants={TextAnimation}
      >
        <TitleBox>
          <TitleStarImg src={starSrc} />
          <TitleText>계정 정보를 수정해주세요</TitleText>
        </TitleBox>
        <TextInput
          buttonActiveSetFunc={setButtonActiveCount}
          onChangeFunc={handleChange}
          inputProps={INPUT_PROPS[0]}
          index={0}
          value={inputValue?.username}
        />
        <SelectInput
          buttonActiveSetFunc={setButtonActiveCount}
          onChangeFunc={handleChange}
          index={1}
          value={inputValue?.location}
        />
        <TextInput
          buttonActiveSetFunc={setButtonActiveCount}
          onChangeFunc={handleChange}
          inputProps={INPUT_PROPS[1]}
          index={2}
          value={inputValue?.major}
        />
        <TextInput
          buttonActiveSetFunc={setButtonActiveCount}
          onChangeFunc={handleChange}
          inputProps={INPUT_PROPS[2]}
          index={3}
          value={inputValue?.task}
        />
        <TextAreaInput
          buttonActiveSetFunc={setButtonActiveCount}
          onChangeFunc={handleChange}
          inputProps={INPUT_PROPS[3]}
          index={4}
          value={inputValue?.selfIntroduce}
        />

        <StartButton
          type="submit"
          $isActive={isAcvivateButton(buttonActiveCount)}
        >
          저장하기
        </StartButton>
      </JoinFormContainer>
    </JoinLayout>
  );
};

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
const JoinFormContainer = styled(motion.form)`
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
export default ProfileModify;
