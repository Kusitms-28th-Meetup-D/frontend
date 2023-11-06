import styled from 'styled-components';

const MemberInfoBox = ({ infoData }: { infoData: any }) => {
  return (
    <Container>
      <MemberImg src={infoData.image} /> <Name>{infoData.name}</Name>
      <Part>{infoData.part}</Part>
      <Part>{infoData.major}</Part>
    </Container>
  );
};
const Container = styled.div`
  max-width: 13.9rem;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  border: 1px solid ${(props) => props.theme.colors.gray20};
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.colors.primary20};

  padding: 2rem 3rem 2rem 3rem;
`;
const MemberImg = styled.img`
  width: 8rem;
  height: 8rem;

  border: 1px solid ${(props) => props.theme.colors.primary20};
  border-radius: 4rem;

  object-fit: cover;
`;
const Name = styled.div`
  ${(props) => props.theme.fonts.subtitleS};
  color: ${(props) => props.theme.colors.gray90};
  /* margin: 1rem 0; */
`;
const Part = styled.div`
  ${(props) => props.theme.fonts.bodyXS};
  color: ${(props) => props.theme.colors.gray70};

  text-align: center;

  white-space: nowrap;
`;
export default MemberInfoBox;
