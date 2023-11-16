import { styled } from 'styled-components';
import ProfileCreateBox from '../../components/profile/ProfileCreateBox';
import { profileCreateInfo } from '../../constants/Profile';
import BeforeNextButton from '../common/BeforeNextButton';
import { useEffect, useState } from 'react';
import OneButtonModal from '../common/OneButtonModal';
import { useNavigate } from 'react-router-dom';

const ProfileCreateBoxContainer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [profiles, setProfiles] = useState({
    internships: '',
    awards: '',
    tools: '',
    certificates: '',
  });
  const navigate = useNavigate();

  const handleProfilesData = (title: string, data: string) => {
    setProfiles((prev: any) => ({ ...prev, [title]: data }));
  };

  useEffect(() => {
    const allFieldsValid = Object.values(profiles).every(
      (value) => value.length >= 5,
    );
    setIsNextDisabled(!allFieldsValid);
  }, [profiles]);

  // const profileCreateMutation = useProfileCreate(profiles);
  const handleNextButtonClick = () => {
    // profileCreateMutation.mutate();
    setModalOpen(true);
  };

  return (
    <>
      <ProfileCreateBoxLayout>
        {profileCreateInfo.map((info) => (
          <ProfileCreateBox
            key={info.id}
            id={info.id}
            title={info.title}
            examples={info.examples}
            onUpdate={handleProfilesData}
          />
        ))}
      </ProfileCreateBoxLayout>
      <BeforeNextButton
        next={'다음'}
        route={'/'}
        isNextDisabled={isNextDisabled}
        onClick={handleNextButtonClick}
      />
      {modalOpen && (
        <OneButtonModal
          button={{
            text: '지금 둘러보기',
            onClickFunc: () => {
              setModalOpen(false);
              navigate('/list');
            },
          }}
          onCloseClickFunc={() => {
            setModalOpen(false);
          }}
          $isModalVisible={modalOpen}
        >
          <ModalImage
            src={'/assets/images/profile/profile_create_modal.svg'}
            alt="profile_create_modal"
          />
          <ModalTitle>똑똑한 프로필 완성!</ModalTitle>
          <ModalContent>
            <p>멋진 프로필이네요! 이제 상대방이 프로필을 확인할 수 있어요</p>
            <p>바로 공모전/대회에 참여하러 가볼까요?</p>
          </ModalContent>
        </OneButtonModal>
      )}
    </>
  );
};

export default ProfileCreateBoxContainer;

const ProfileCreateBoxLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.4rem;
  margin: 3.2rem 0;
`;

const ModalImage = styled.img`
  width: 16.9rem;
  height: 16.4rem;
`;

const ModalTitle = styled.div`
  ${({ theme }) => theme.fonts.heading2_1};
  color: ${({ theme }) => theme.colors.gray90};
  margin: 1.5rem 0;
`;

const ModalContent = styled.div`
  ${({ theme }) => theme.fonts.bodyXL};
  color: ${({ theme }) => theme.colors.gray70};
  text-align: center;
  margin-bottom: 3rem;
`;
