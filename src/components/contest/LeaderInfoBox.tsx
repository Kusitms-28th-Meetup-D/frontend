import styled from 'styled-components';

const LeaderInfoBox = ({ infoData }: { infoData: any }) => {
  return (
    <Container>
      <LeaderImg src={infoData.image} />{' '}
      <hr style={{ width: '100%', margin: '1rem 0', borderColor: '#898BF8' }} />
      <Name>{infoData.name}</Name>
      <Part>{infoData.part}</Part>
      <Part>{infoData.major}</Part>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  padding: 3rem 4.5rem 2rem 4.5rem;

  color: ${(props) => props.theme.colors.primary40};
`;
const LeaderImg = styled.img`
  width: 8rem;
  height: 8rem;

  border: 1px solid ${(props) => props.theme.colors.primary20};
  border-radius: 4rem;

  object-fit: cover;
`;
const Name = styled.div`
  ${(props) => props.theme.fonts.heading5};
  color: ${(props) => props.theme.colors.gray90};
  /* margin: 1rem 0; */
`;
const Part = styled.div`
  ${(props) => props.theme.fonts.bodyS};
  color: ${(props) => props.theme.colors.gray70};
`;
export default LeaderInfoBox;
