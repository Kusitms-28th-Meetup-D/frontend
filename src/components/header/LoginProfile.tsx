import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { kakaoInfoState } from '../../recoil/atom';
import { useState } from 'react';

import dropSrc from '/assets/images/header/dropdown-button.svg';

const LoginProfile = () => {
  const kakaoInfo = useRecoilValue(kakaoInfoState);
  const [isDrop, setIsDrop] = useState(false);
  const handleClick = () => {
    setIsDrop((curr) => !curr);
  };
  return (
    <ProfileContainer onClick={handleClick}>
      <ProfileImg src={kakaoInfo.image} />
      <ProfileName>{kakaoInfo.name}</ProfileName>
      {/* 실제이름으로 변경하기 */}
      <ProfileDropdown $isDrop={isDrop} src={dropSrc} />
      <Droppable $isDrop={isDrop}></Droppable>
    </ProfileContainer>
  );
};
const ProfileContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  color: ${(props) => props.theme.colors.primary90};
  ${(props) => props.theme.fonts.subtitleM};

  cursor: pointer;
`;
const ProfileImg = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  object-fit: cover;

  border: 3px solid ${(props) => props.theme.colors.primary60};
  border-radius: 1.8rem;
`;
const ProfileName = styled.div`
  color: ${(props) => props.theme.colors.primary90};
  ${(props) => props.theme.fonts.subtitleM};
`;
const ProfileDropdown = styled.img<{ $isDrop: boolean }>`
  width: 1rem;
  height: 0.5rem;
  object-fit: cover;

  transition: transform 0.5s ease;
  transform: ${({ $isDrop }) => ($isDrop ? 'rotate(180deg)' : 'rotate(0)')};
`;
const Droppable = styled.div<{ $isDrop: boolean }>`
  position: absolute;

  left: 0;
  top: 8.2rem;
  width: 20rem;
  height: ${(props) => (props.$isDrop ? '20rem' : 0)};
  transition: height 0.3s ease-in-out;
  background-color: wheat;
`;

export default LoginProfile;
