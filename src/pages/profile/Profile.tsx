import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProfileInfo, {
  ProfileInfoProps,
} from '../../components/profile/ProfileInfo';
import ProfileSubInfo from '../../components/profile/ProfileSubInfo';

const profileDatas: ProfileInfoProps = {
  name: '민혜린',
  part: '서비스 기획',
  imageUrl: 'https://cdn.onews.tv/news/photo/202306/169959_205933_5017.jpeg',
  region: '서울특별시',
  major: '언어학과/국어국문학과',
  introduce: '사슴을 좋아합니다. 밤비치고짱귀여워',
};

const Profile = () => {
  const { userId } = useParams();
  userId;
  return (
    <ProfileLayout>
      <ProfileInfo profileData={profileDatas} />
      <ProfileSubInfo />
    </ProfileLayout>
  );
};
const ProfileLayout = styled.div`
  max-width: 122.4rem;
  margin: auto;
`;

export default Profile;
