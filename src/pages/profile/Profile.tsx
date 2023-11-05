import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProfileInfo, {
  ProfileInfoProps,
} from '../../components/profile/ProfileInfo';
import ProfileSubInfo from '../../components/profile/ProfileSubInfo';
import ProfileKeyward from '../../components/profile/ProfileKeyward';

const profileDatas: ProfileInfoProps = {
  name: '민혜린',
  part: '서비스 기획',
  imageUrl: 'https://cdn.onews.tv/news/photo/202306/169959_205933_5017.jpeg',
  region: '서울특별시',
  major: '언어학과/국어국문학과',
  introduce: '사슴을 좋아합니다. 밤비치고짱귀여워',
};
const KEYWARDS = [
  '🔥계획 마스터',
  '불타는 열정왕',
  '전공스킬 넘사벽,',
  '💬소통의 귀재',
  '🧠논리의 왕',
  '😎분위기 메이커',
  '꽉찬 리더십',
  '경험가득 고인물',
  '올라운더',
  '빛의 작업속도',
];
const reviewDatas = {
  keywards: [{ '0': 1 }, { '3': 4 }, { '4': 3 }, { '5': 3 }],
  personality: [25, 0, 100, 50, 70, 56, 11],
  recommendation: [
    '어쩌구 저쩌구 칭찬의 말을 블라블라 쏼라쏼라 칭찬합니다 칭찬합니다 큐시즘의 민혜린을 칭찬합니다 글자 수 제한은 140자 넘 길어용 할 말이 없어용우아어암ㅁ아ㅓ래ㅑㅕㅐㅑ러ㅏㅣㅁ앎 칭찬합니다칭찬합니다칭찬합니다칭찬합니다칭찬합니다칭찬합니다칭찬합니다칭찬합니다다',
    '에픽하이너무좋아윤하최고국힙꺼져에픽하이너무좋아윤하최고국힙꺼져에픽하이너무좋아윤하최고국힙꺼져에픽하이너무좋아윤하최고국힙꺼져에픽하이너무좋아윤하최고국힙꺼져에픽하이너무좋아윤하최고국힙꺼져에픽하이너무좋아윤하최고국힙꺼져에픽하이너무좋아윤하최고국힙꺼져에픽하이너무좋아윤하최고국힙꺼져에픽하이너무좋아윤하최고국힙꺼져',
    '큐시즘의 민혜린을 칭찬합니다큐시즘의 민혜린을 칭찬합니다큐시즘의 민혜린을 칭찬합니다큐시즘의 민혜린을 칭찬합니다큐시즘의 민혜린을 칭찬합니다큐시즘의 민혜린을 칭찬합니다',
    '이사람은 천재입니다. ',
  ],
};
const Profile = () => {
  const { userId } = useParams();
  userId;
  return (
    <ProfileLayout>
      <ProfileInfo profileData={profileDatas} />
      <ProfileSubInfo />
      <ProfileKeyward keywardData={reviewDatas.keywards} name={profileDatas.name}/>
    </ProfileLayout>
  );
};
const ProfileLayout = styled.div`
  max-width: 122.4rem;
  margin: auto;
`;

export default Profile;
