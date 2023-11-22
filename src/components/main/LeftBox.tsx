import { styled } from 'styled-components';

const LeftBoxContent = [
  { id: 0, title: '모집 중인 팀', content: '136개' },
  { id: 1, title: '등록된 리뷰', content: '5,640개' },
  { id: 2, title: '모집된 팀원 만족도', content: '92%' },
];

const LeftBox = () => {
  return (
    <LeftBoxContainer>
      {LeftBoxContent.map((content) => (
        <LeftBoxValue key={content.id}>
          <h3>{content.title}</h3>
          <p>{content.content}</p>
        </LeftBoxValue>
      ))}
    </LeftBoxContainer>
  );
};

export default LeftBox;

const LeftBoxContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 24px;
  box-shadow: 0px 0px 10px rgba(88, 89, 117, 0.46);
  padding: 2rem 8rem;
  width: 60%;
  display: flex;
  text-align: center;
  justify-content: space-between;

  &:hover {
    transition: 0.5s;
    transform: translateY(-0.5rem);
  }
`;

const LeftBoxValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    ${({ theme }) => theme.fonts.bodyM};
    color: ${({ theme }) => theme.colors.gray90};
  }
  p {
    ${({ theme }) => theme.fonts.heading2};
    color: ${({ theme }) => theme.colors.primary60};
  }
`;
