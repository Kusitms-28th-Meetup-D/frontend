import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProfileInfo, {
  ProfileInfoProps,
} from '../../components/profile/ProfileInfo';
import ProfileSubInfo from '../../components/profile/ProfileSubInfo';
import ProfileKeyword from '../../components/profile/ProfileKeyword';
import ProfileRecommendation from '../../components/profile/ProfileRecommendation';
export interface IKeyword {
  keywordType: number;
  count: number;
}
export interface IRecommendation {
  recommendation: string;
  category: string;
}
interface IReviewDatas {
  keywords: IKeyword[];
  personality: number[];
  recommendation: IRecommendation[];
}
const profileDatas: ProfileInfoProps = {
  name: '민혜린',
  part: '서비스 기획',
  imageUrl: 'https://cdn.onews.tv/news/photo/202306/169959_205933_5017.jpeg',
  region: '서울특별시',
  major: '언어학과/국어국문학과',
  introduce: '사슴을 좋아합니다. 밤비치고짱귀여워',
};

const reviewDatas: IReviewDatas = {
  keywords: [
    {
      keywordType: 0,
      count: 2,
    },
    {
      keywordType: 1,
      count: 6,
    },
    {
      keywordType: 2,
      count: 12,
    },
    {
      keywordType: 3,
      count: 3,
    },
    {
      keywordType: 4,
      count: 0,
    },
    {
      keywordType: 5,
      count: 0,
    },
    {
      keywordType: 6,
      count: 0,
    },
    {
      keywordType: 7,
      count: 0,
    },
    {
      keywordType: 8,
      count: 0,
    },
    {
      keywordType: 9,
      count: 12,
    },
  ],
  personality: [25, 0, 100, 50, 70, 56, 11],
  recommendation: [
    {
      recommendation:
        '어쩌구 저쩌구 칭찬의 말을 블라블라 쏼라쏼라 칭찬합니다 칭찬합니다 큐시즘의 민혜린을 칭찬합니다 글자 수 제한은 140자 넘 길어용 할 말이 없어용우아어암ㅁ아ㅓ래ㅑㅕㅐㅑ러ㅏㅣㅁ앎 칭찬합니다칭찬합니다칭찬합니다칭찬합니다칭찬합니다칭찬합니다칭찬합니다칭찬합니다다',
      category: '<과자 빨리 먹기> 공모전',
    },
    {
      recommendation:
        '에픽하이너무좋아윤하최고국힙꺼져에픽하이너무좋아윤하최고국힙꺼져에픽하이너무좋아윤하최고국힙꺼져에픽하이너무좋아윤하최고국힙꺼져에픽하이너무좋아윤하최고국힙꺼져에픽하이너무좋아윤하최고국힙꺼져에픽하이너무좋아윤하최고국힙꺼져에픽하이너무좋아윤하최고국힙꺼져에픽하이너무좋아윤하최고국힙꺼져에픽하이너무좋아윤하최고국힙꺼져',
      category: '<과자 빨리 먹기> 공모전',
    },
    {
      recommendation:
        '큐시즘의 민혜린을 칭찬합니다큐시즘의 민혜린을 칭찬합니다큐시즘의 민혜린을 칭찬합니다큐시즘의 민혜린을 칭찬합니다큐시즘의 민혜린을 칭찬합니다큐시즘의 민혜린을 칭찬합니다',

      category: '<과자 빨리 먹기> 공모전',
    },
    {
      recommendation: '이사람은 천재입니다. ',
      category: '<과자 빨리 먹기> 공모전',
    },
  ],
};
const Profile = () => {
  const { userId } = useParams();
  userId;
  return (
    <ProfileLayout>
      <ProfileInfo profileData={profileDatas} />
      <ProfileSubInfo />
      <ProfileKeyword
        keywordData={reviewDatas.keywords}
        name={profileDatas.name}
      />
      <ProfileRecommendation
        recommendationData={reviewDatas.recommendation}
        name={profileDatas.name}
      />
    </ProfileLayout>
  );
};
const ProfileLayout = styled.div`
  max-width: 122.4rem;
  margin: auto;
`;

export default Profile;
