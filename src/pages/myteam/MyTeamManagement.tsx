import styled from 'styled-components';
import ContestInfo from '../../components/contest/ContestInfo';
import { useEffect, useState } from 'react';

import starSrc from '/assets/images/common/star.svg';
import { Headers } from '../../constants/Header';
import { useSetRecoilState } from 'recoil';
import { headerSelectedState } from '../../recoil/atom';
import useMyOpenedTeamMemberInfo from '../../hooks/myTeam/useMyOpenedTeamMemberInfo';
import ProfileBoxScroll from '../../components/myteam/management/ProfileBoxScroll';
import ApplyBoxScroll from '../../components/myteam/management/ApplyBoxScroll';
import CompleteRecruitModal from '../../components/myteam/management/CompleteRecruitModal';
import { useParams } from 'react-router-dom';
import CancleRecruitModal from '../../components/myteam/management/CancleRecruitModal';
// const DUMMY: MyOpenedTeamMemberInfoData = {
//   teamId: 1,
//   teamMemberSize: 0,
//   applyMemberSize: 1,
//   teamMemberInfos: [
//     {
//       teamMemberId: 4,
//       teamMemberName: '팅커벨진우1',
//       teamMemberImage:
//         'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
//       teamMemberTask: ['밥머기'],
//       teamMemberMajor: ['니알바냐?'],
//     },
//     {
//       teamMemberId: 4,
//       teamMemberName: '팅커벨진우2',
//       teamMemberImage:
//         'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
//       teamMemberTask: ['밥머기'],
//       teamMemberMajor: ['니알바냐?'],
//     },
//     {
//       teamMemberId: 4,
//       teamMemberName: '팅커벨진우3',
//       teamMemberImage:
//         'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
//       teamMemberTask: ['밥머기'],
//       teamMemberMajor: ['니알바냐?'],
//     },
//     {
//       teamMemberId: 4,
//       teamMemberName: '팅커벨진우4',
//       teamMemberImage:
//         'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
//       teamMemberTask: ['밥머기'],
//       teamMemberMajor: ['니알바냐?'],
//     },
//     {
//       teamMemberId: 4,
//       teamMemberName: '팅커벨진우5',
//       teamMemberImage:
//         'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
//       teamMemberTask: ['밥머기'],
//       teamMemberMajor: ['니알바냐?'],
//     },
//     {
//       teamMemberId: 4,
//       teamMemberName: '팅커벨진우6',
//       teamMemberImage:
//         'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
//       teamMemberTask: ['밥머기'],
//       teamMemberMajor: ['니알바냐?'],
//     },
//     {
//       teamMemberId: 4,
//       teamMemberName: '팅커벨진우7',
//       teamMemberImage:
//         'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
//       teamMemberTask: ['밥머기'],
//       teamMemberMajor: ['니알바냐?'],
//     },
//     {
//       teamMemberId: 4,
//       teamMemberName: '팅커벨진우8',
//       teamMemberImage:
//         'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
//       teamMemberTask: ['밥머기'],
//       teamMemberMajor: ['니알바냐?'],
//     },
//     {
//       teamMemberId: 4,
//       teamMemberName: '팅커벨진우9',
//       teamMemberImage:
//         'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
//       teamMemberTask: ['밥머기'],
//       teamMemberMajor: ['니알바냐?'],
//     },
//     {
//       teamMemberId: 4,
//       teamMemberName: '팅커벨진우10',
//       teamMemberImage:
//         'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
//       teamMemberTask: ['밥머기'],
//       teamMemberMajor: ['니알바냐?'],
//     },
//     {
//       teamMemberId: 4,
//       teamMemberName: '팅커벨진우11',
//       teamMemberImage:
//         'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
//       teamMemberTask: ['밥머기'],
//       teamMemberMajor: ['니알바냐?'],
//     },
//     {
//       teamMemberId: 4,
//       teamMemberName: '팅커벨진12우',
//       teamMemberImage:
//         'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
//       teamMemberTask: ['밥머기'],
//       teamMemberMajor: ['니알바냐?'],
//     },
//     {
//       teamMemberId: 4,
//       teamMemberName: '팅커벨13진우',
//       teamMemberImage:
//         'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
//       teamMemberTask: ['밥머기'],
//       teamMemberMajor: ['니알바냐?'],
//     },
//     {
//       teamMemberId: 4,
//       teamMemberName: '팅커벨진14우',
//       teamMemberImage:
//         'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
//       teamMemberTask: ['밥머기'],
//       teamMemberMajor: ['니알바냐?'],
//     },
//   ],
//   applyMemberInfos: [
//     {
//       teamMemberId: 7,
//       teamMemberName: '다다다',
//       teamMemberImage:
//         'http://k.kakaocdn.net/dn/1G9kp/btsAot8liOn/8CWudi3uy07rvFNUkk3ER0/img_640x640.jpg',
//       teamMemberTask: [],
//       teamMemberMajor: [],
//     },
//   ],
// };
const MyTeamManagement = () => {
  const { teamId } = useParams();
  const { myOpenedTeamMemberInfoData } = useMyOpenedTeamMemberInfo({
    teamId: teamId as string,
  });
  const [isCompleteRecruitModalVisible, setIsCompleteRecruitModalVisible] =
    useState(false);
  const [isCancleRecruitModalVisible, setIsCancleRecruitModalVisible] =
    useState(false);

  const setHeaderSelected = useSetRecoilState(headerSelectedState);
  useEffect(() => setHeaderSelected(Headers.myTeam));
  return (
    <Managelayout>
      <CompleteRecruitModal
        isModalVisible={isCompleteRecruitModalVisible}
        setIsModalVisible={setIsCompleteRecruitModalVisible}
        teamId={teamId}
      />
      <CancleRecruitModal
        isModalVisible={isCancleRecruitModalVisible}
        setIsModalVisible={setIsCancleRecruitModalVisible}
        teamId={teamId}
      />
      <CurrPath>{'내 팀 > 내가 오픈한 팀'}</CurrPath>
      <ContestInfo />
      <Hr />
      <SubtitleContainer>
        <Subtitle>
          <StarImg src={starSrc} />
          합류한 팀원들
          <SubCurrPeople>
            총 {myOpenedTeamMemberInfoData?.data.data.teamMemberSize}명
          </SubCurrPeople>
        </Subtitle>
        <CancleRecruitment onClick={() => setIsCancleRecruitModalVisible(true)}>
          모집 취소하기
        </CancleRecruitment>
      </SubtitleContainer>
      <ProfileBoxContainer>
        {myOpenedTeamMemberInfoData &&
          (myOpenedTeamMemberInfoData.data.data.teamMemberSize == 0 ? (
            <NoTeamMember>
              <img
                src={'/assets/images/myteam/team_member.svg'}
                alt={'team_member'}
              />
              합류한 팀원이 없습니다.
            </NoTeamMember>
          ) : (
            <ProfileBoxScroll
              teamMembersInfo={
                myOpenedTeamMemberInfoData?.data.data.teamMemberInfos
              }
            />
          ))}
      </ProfileBoxContainer>
      <Subtitle>
        <StarImg src={starSrc} />
        지원자
        <SubCurrPeople>
          총 {myOpenedTeamMemberInfoData?.data.data.teamApplySize}명
        </SubCurrPeople>
      </Subtitle>
      {myOpenedTeamMemberInfoData &&
        (myOpenedTeamMemberInfoData.data.data.teamApplySize == 0 ? (
          <ProfileBoxContainer>
            <NoTeamMember>
              {' '}
              <img
                src={'/assets/images/myteam/team_member.svg'}
                alt={'team_member'}
              />
              아직 지원자가 없어요
            </NoTeamMember>
          </ProfileBoxContainer>
        ) : (
          // <NoTeamMember>ss</NoTeamMember>

          <ApplyBoxScroll
            teamMembersInfo={
              myOpenedTeamMemberInfoData?.data.data.applyMemberInfos
            }
          />
        ))}

      <RecruitButton onClick={() => setIsCompleteRecruitModalVisible(true)}>
        팀원 모집 완료
      </RecruitButton>
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
const RecruitButton = styled.button`
  width: 23.2rem;
  height: 6.4rem;

  border-radius: 3.2rem;

  ${(props) => props.theme.fonts.buttonL};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary60};

  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 8rem;
`;
export default MyTeamManagement;

const NoTeamMember = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  gap: 1rem;

  ${({ theme }) => theme.fonts.subtitleL};
  color: ${({ theme }) => theme.colors.gray90};
`;
