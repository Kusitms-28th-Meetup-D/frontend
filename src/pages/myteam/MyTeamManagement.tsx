import styled from 'styled-components';
import ContestInfo from '../../components/contest/ContestInfo';
import { useEffect } from 'react';

import starSrc from '/assets/images/common/star.svg';
import { Headers } from '../../constants/Header';
import { useSetRecoilState } from 'recoil';
import { headerSelectedState } from '../../recoil/atom';
import useMyOpenedTeamMemberInfo from '../../hooks/myTeam/useMyOpenedTeamMemberInfo';
import { MyOpenedTeamMemberInfoData } from '../../interface/MyTeam';
import ProfileBoxScroll from '../../components/myteam/management/ProfileBoxScroll';
import ApplyBoxScroll from '../../components/myteam/management/ApplyBoxScroll';
const DUMMY: MyOpenedTeamMemberInfoData = {
  teamId: 1,
  teamMemberSize: 0,
  applyMemberSize: 1,
  teamMemberInfos: [
    {
      teamMemberId: 4,
      teamMemberName: '팅커벨진우',
      teamMemberImage:
        'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
      teamMemberTask: ['밥머기'],
      teamMemberMajor: ['니알바냐?'],
    },
    {
      teamMemberId: 4,
      teamMemberName: '팅커벨진우',
      teamMemberImage:
        'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
      teamMemberTask: ['밥머기'],
      teamMemberMajor: ['니알바냐?'],
    },
    {
      teamMemberId: 4,
      teamMemberName: '팅커벨진우',
      teamMemberImage:
        'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
      teamMemberTask: ['밥머기'],
      teamMemberMajor: ['니알바냐?'],
    },
    {
      teamMemberId: 4,
      teamMemberName: '팅커벨진우',
      teamMemberImage:
        'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
      teamMemberTask: ['밥머기'],
      teamMemberMajor: ['니알바냐?'],
    },
    {
      teamMemberId: 4,
      teamMemberName: '팅커벨진우',
      teamMemberImage:
        'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
      teamMemberTask: ['밥머기'],
      teamMemberMajor: ['니알바냐?'],
    },
    {
      teamMemberId: 4,
      teamMemberName: '팅커벨진우',
      teamMemberImage:
        'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
      teamMemberTask: ['밥머기'],
      teamMemberMajor: ['니알바냐?'],
    },
    {
      teamMemberId: 4,
      teamMemberName: '팅커벨진우',
      teamMemberImage:
        'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
      teamMemberTask: ['밥머기'],
      teamMemberMajor: ['니알바냐?'],
    },
    {
      teamMemberId: 4,
      teamMemberName: '팅커벨진우',
      teamMemberImage:
        'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
      teamMemberTask: ['밥머기'],
      teamMemberMajor: ['니알바냐?'],
    },
    {
      teamMemberId: 4,
      teamMemberName: '팅커벨진우',
      teamMemberImage:
        'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
      teamMemberTask: ['밥머기'],
      teamMemberMajor: ['니알바냐?'],
    },
    {
      teamMemberId: 4,
      teamMemberName: '팅커벨진우',
      teamMemberImage:
        'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
      teamMemberTask: ['밥머기'],
      teamMemberMajor: ['니알바냐?'],
    },
    {
      teamMemberId: 4,
      teamMemberName: '팅커벨진우',
      teamMemberImage:
        'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
      teamMemberTask: ['밥머기'],
      teamMemberMajor: ['니알바냐?'],
    },
    {
      teamMemberId: 4,
      teamMemberName: '팅커벨진우',
      teamMemberImage:
        'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
      teamMemberTask: ['밥머기'],
      teamMemberMajor: ['니알바냐?'],
    },
    {
      teamMemberId: 4,
      teamMemberName: '팅커벨진우',
      teamMemberImage:
        'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
      teamMemberTask: ['밥머기'],
      teamMemberMajor: ['니알바냐?'],
    },
    {
      teamMemberId: 4,
      teamMemberName: '팅커벨진우',
      teamMemberImage:
        'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
      teamMemberTask: ['밥머기'],
      teamMemberMajor: ['니알바냐?'],
    },
  ],
  applyMemberInfos: [
    {
      teamMemberId: 7,
      teamMemberName: '다다다',
      teamMemberImage:
        'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
      teamMemberTask: [],
      teamMemberMajor: [],
    },
  ],
};
const MyTeamManagement = () => {
  const { myOpenedTeamMemberInfoData } = useMyOpenedTeamMemberInfo();
  console.log(myOpenedTeamMemberInfoData);
  const setHeaderSelected = useSetRecoilState(headerSelectedState);
  useEffect(() => setHeaderSelected(Headers.myTeam));
  return (
    <Managelayout>
      <CurrPath>{'내 팀 > 내가 오픈한 팀'}</CurrPath>
      <ContestInfo />
      {/* <Hr /> */}
      <SubtitleContainer>
        <Subtitle>
          <StarImg src={starSrc} />
          합류한 팀원들
          <SubCurrPeople>총 {DUMMY.teamMemberSize}명</SubCurrPeople>
        </Subtitle>
        <CancleRecruitment>모집 취소하기</CancleRecruitment>
      </SubtitleContainer>
      <ProfileBoxContainer>
        <ProfileBoxScroll teamMembersInfo={DUMMY.teamMemberInfos} />
      </ProfileBoxContainer>
      <Subtitle>
        <StarImg src={starSrc} />
        지원자<SubCurrPeople>총 {DUMMY.applyMemberSize}명</SubCurrPeople>
      </Subtitle>
      <ApplyBoxScroll teamMembersInfo={DUMMY.teamMemberInfos} />
    </Managelayout>
  );
};
const Managelayout = styled.div`
  max-width: 122.4rem;
  margin: auto;

  /* display: flex; */
`;
const CurrPath = styled.div`
  ${(props) => props.theme.fonts.heading5};
  color: ${(props) => props.theme.colors.primary90};
  margin: 3rem 0;
`;
const SubtitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Subtitle = styled.div`
  width: 100%;

  ${(props) => props.theme.fonts.heading4};
  color: ${(props) => props.theme.colors.primary90};

  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 1rem;
  margin: 5rem 0 2rem 0;
`;
const StarImg = styled.img`
  width: 2.8rem;
  height: 2.8rem;
`;
const SubCurrPeople = styled.div`
  ${(props) => props.theme.fonts.subtitleL};
  color: ${(props) => props.theme.colors.primary40};
`;
const CancleRecruitment = styled.div`
  white-space: nowrap;
  ${(props) => props.theme.fonts.bodyXL};
  color: ${(props) => props.theme.colors.primary90};
  text-decoration: underline;
  cursor: pointer;
`;
const ProfileBoxContainer = styled.div`
  border-radius: 0%.8rem;
  border: 1px solid ${(props) => props.theme.colors.gray10};
  background-color: ${(props) => props.theme.colors.primary10};

  padding: 1rem 2.4rem;
`;
const Hr = styled.div`
  width: 100%;
  height: 1px;

  border-top: 1px solid ${(props) => props.theme.colors.gray20};
`;
export default MyTeamManagement;
