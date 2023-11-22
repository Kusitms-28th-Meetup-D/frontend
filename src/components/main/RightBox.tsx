import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const RightBox = () => {
  const navigate = useNavigate();

  return (
    <RightBoxContainer>
      <div>
        <h1>공모전･대회 공고 확인하고</h1>
        <h1>원하는 팀원 찾으러 가기</h1>
      </div>
      <RightBoxBackground src={'/assets/images/main/main_rightbox.svg'} />
      <RightButton
        src={'/assets/images/main/right_button.svg'}
        onClick={() => {
          navigate('/list');
        }}
      />
    </RightBoxContainer>
  );
};

export default RightBox;

const RightBoxContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 24px;
  box-shadow: 0px 0px 10px rgba(88, 89, 117, 0.46);
  padding: 2.5rem 3.5rem 6rem 3.5rem;
  width: 40%;
  display: flex;
  gap: 2rem;
  background: ${({ theme }) => theme.colors.primary60};
  position: relative;

  h1 {
    ${({ theme }) => theme.fonts.heading4};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const RightBoxBackground = styled.img`
  position: absolute;
  width: 14.1rem;
  right: 3rem;
  bottom: 0;
`;

const RightButton = styled.img`
  position: absolute;
  width: 4.6rem;
  height: 4.6rem;

  right: 2rem;
  bottom: 2rem;
  cursor: pointer;
`;
